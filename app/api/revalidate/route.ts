import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');

    // Expected secret token from environment or fallback for verification
    const expectedSecret = process.env.REVALIDATION_SECRET || 'agrihub_revalidate_secret_2026';

    if (secret !== expectedSecret) {
      return NextResponse.json({ message: 'Invalid secret token' }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const tag = body?.tag || searchParams.get('tag');
    const path = body?.path || searchParams.get('path');

    if (tag) {
      revalidateTag(tag, 'max');
      return NextResponse.json({ revalidated: true, tag, now: Date.now() });
    }

    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path, now: Date.now() });
    }

    // Default: purge products and news tags
    revalidateTag('products', 'max');
    revalidateTag('news', 'max');
    revalidateTag('wordpress', 'max');

    return NextResponse.json({
      revalidated: true,
      tags: ['products', 'news', 'wordpress'],
      now: Date.now(),
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error revalidating';
    return NextResponse.json({ message }, { status: 500 });
  }
}
