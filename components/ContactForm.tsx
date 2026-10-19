'use client';

import React, { useState } from 'react';
import { Dictionary } from '@/lib/i18n';
import Button from './Button';

interface ContactFormProps {
  dict: Dictionary;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream-100 border border-primary-leaf/30 p-6 sm:p-8 rounded-2xl text-center space-y-3">
        <div className="text-primary-leaf text-2xl sm:text-3xl font-black">✓ Đã tiếp nhận yêu cầu</div>
        <p className="text-xs sm:text-sm text-slate-700">
          Cảm ơn quý đối tác đã liên hệ. Đội ngũ kinh doanh B2B của Agrihub sẽ liên hệ qua email/điện thoại trong vòng 24 giờ làm việc.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="pill" size="sm">
          Gửi yêu cầu khác
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            Họ và tên người liên hệ *
          </label>
          <input
            type="text"
            required
            placeholder="Nguyễn Văn A"
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            Tên doanh nghiệp / Nhà máy *
          </label>
          <input
            type="text"
            required
            placeholder="Công ty TNHH Sản xuất Thực phẩm ABC"
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            Email doanh nghiệp *
          </label>
          <input
            type="email"
            required
            placeholder="purchasing@company.com"
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            Số điện thoại / WhatsApp / WeChat *
          </label>
          <input
            type="tel"
            required
            placeholder="+84 90 123 4567"
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            Mục đích liên hệ chính *
          </label>
          <select
            required
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
          >
            <option value="quote">Báo giá nguyên liệu số lượng lớn</option>
            <option value="sample">Đăng ký nhận mẫu thử phòng Lab</option>
            <option value="oem">Gia công OEM / Đặt công thức riêng</option>
            <option value="export">Thương mại xuất khẩu quốc tế</option>
            <option value="distributor">Đăng ký Đại lý / Phân phối sỉ nội địa</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-primary-850 mb-1">
            Nhóm nguyên liệu quan tâm
          </label>
          <select
            className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
          >
            <option value="fruit-powder">Bột trái cây (Fruit Powders)</option>
            <option value="dried-fruits">Trái cây sấy (Dried Fruits)</option>
            <option value="puree">Nước cốt & Puree (Fruit Purees)</option>
            <option value="multiple">Nhiều nhóm nguyên liệu</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-primary-850 mb-1">
          Chi tiết yêu cầu kỹ thuật, sản lượng dự kiến hoặc địa điểm giao hàng
        </label>
        <textarea
          rows={4}
          placeholder="Ví dụ: Cần 500kg bột thanh long đỏ mesh 100, giao hàng tại Cảng Cát Lái hoặc KCN Tân Bình..."
          className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
        ></textarea>
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" fullWidth className="font-extrabold tracking-wide min-h-[48px]">
          <span>{dict.pages.contact.primaryCta}</span>
          <span className="ml-1">&rarr;</span>
        </Button>
      </div>
    </form>
  );
}
