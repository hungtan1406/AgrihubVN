import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot anti-spam check for bots
    if (body.website && String(body.website).trim() !== '') {
      return NextResponse.json({ success: true, botFiltered: true });
    }

    const {
      name,
      company,
      email,
      phone,
      purpose,
      purposeLabel,
      category,
      categoryLabel,
      details,
      lang,
    } = body;

    // Validate required fields
    if (!name || !company || !email || !phone) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ các thông tin bắt buộc (*)' },
        { status: 400 }
      );
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email không đúng định dạng' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn('GOOGLE_SHEETS_WEBHOOK_URL is not set in environment variables.');
      // Return mock response in development to not block UI testing if not yet configured
      return NextResponse.json({
        success: true,
        mock: true,
        message: 'Mock submission: GOOGLE_SHEETS_WEBHOOK_URL chưa được cấu hình trong file .env.local',
      });
    }

    // Send payload to Google Apps Script Web App
    const payload = {
      timestamp: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
      name: String(name).trim(),
      company: String(company).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      purpose: String(purposeLabel || purpose || '').trim(),
      category: String(categoryLabel || category || '').trim(),
      details: String(details || '').trim(),
      lang: String(lang || 'vi').trim(),
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Google Apps Script error:', response.status, errText);
      return NextResponse.json(
        { error: 'Không thể kết nối đến máy chủ Google Sheets. Vui lòng thử lại sau.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling quote form submission:', error);
    return NextResponse.json(
      { error: 'Đã xảy ra lỗi máy chủ. Vui lòng thử lại.' },
      { status: 500 }
    );
  }
}
