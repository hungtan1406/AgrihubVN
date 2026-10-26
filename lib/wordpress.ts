/**
 * Agrihub Vietnam - WordPress REST API Client
 * Kết nối Headless WordPress với Next.js 14 App Router
 */

import { Locale } from './i18n/types';



export interface Product {
  id: string | number;
  slug: string;
  name: string;
  category: string;
  specs: string;
  application: string;
  moisture?: string;
  mesh?: string;
  brix?: string;
  shelfLife?: string;
  packaging?: string;
  moq?: string;
  grade?: string;
  specCode?: string;
  pdfUrl?: string;
  image?: string;
  content?: string;
}

export interface WordPressACF {
  specs?: string;
  application?: string;
  applications?: string;
  moisture?: string;
  mesh?: string;
  mesh_size?: string;
  brix?: string;
  shelf_life?: string;
  shelflife?: string;
  packaging?: string;
  moq?: string;
  grade?: string;
  spec_code?: string;
  pdf_tds?: string | { url?: string; title?: string };
  category?: string;
  [key: string]: unknown;
}

export interface WordPressPost {
  id: number;
  slug: string;
  title?: { rendered: string };
  content?: { rendered: string };
  excerpt?: { rendered: string };
  acf?: WordPressACF;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url?: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
  [key: string]: unknown;
}

export const FALLBACK_PRODUCTS_VI: Product[] = [
  {
    id: 'dragon-fruit-powder',
    slug: 'dragon-fruit-powder',
    category: 'Bột sấy nghiền',
    name: 'Bột Thanh Long Đỏ (Red Dragon Fruit Powder)',
    specs: 'Độ ẩm ≤ 5% | 80-100 mesh | 100% tự nhiên',
    application: 'Bánh kẹo, Đồ uống, Sữa chua, Tạo màu tự nhiên Clean-label',
    moisture: '≤ 5.0%',
    mesh: '80 - 100 mesh',
    brix: 'Tự nhiên từ quả',
    shelfLife: '24 tháng',
    packaging: 'Túi nhôm tiệt trùng 5kg x 4 / thùng carton 20kg',
    moq: '100 kg (thử nghiệm) / 500 kg (sản xuất)',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-DFP-01',
  },
  {
    id: 'freeze-dried-mango',
    slug: 'freeze-dried-mango',
    category: 'Trái cây sấy',
    name: 'Xoài Sấy Thăng Hoa (Freeze-Dried Mango)',
    specs: 'Độ ẩm ≤ 4% | Cắt lát 5-7mm | Giữ nguyên hình thái & vị',
    application: 'Ngũ cốc ăn sáng, Socola bọc trái cây, Snack cao cấp',
    moisture: '≤ 4.0%',
    mesh: 'Cắt lát 5-7mm hoặc dạng hạt 3-5mm',
    brix: '14 - 16 Brix tự nhiên',
    shelfLife: '18 tháng',
    packaging: 'Thùng carton 10kg có lót túi nhôm khí trơ',
    moq: '200 kg',
    grade: 'PREMIUM EXPORT',
    specCode: 'SPEC-AGRI-FDM-02',
  },
  {
    id: 'passion-fruit-puree',
    slug: 'passion-fruit-puree',
    category: 'Nước cốt & Pure',
    name: 'Nước Cốt Chanh Dây Không Hạt (Passion Fruit Puree)',
    specs: 'Brix 14-16% | Thanh trùng | Đóng phuy vô trùng 200L',
    application: 'Sản xuất nước ép, Nước giải khát, Si-rô, Kem',
    moisture: 'Dạng lỏng sệt (Puree)',
    mesh: 'Lọc qua sàng 0.5mm không còn hạt',
    brix: '14 - 16%',
    shelfLife: '24 tháng (ở -18°C)',
    packaging: 'Túi vô trùng Aseptic trong phuy sắt 200L / Thùng 20kg',
    moq: '1 phuy (200kg) hoặc 1 pallet',
    grade: 'ASEPTIC INDUSTRIAL',
    specCode: 'SPEC-AGRI-PFP-03',
  },
];

export const FALLBACK_PRODUCTS_EN: Product[] = [
  {
    id: 'dragon-fruit-powder',
    slug: 'dragon-fruit-powder',
    category: 'Milled Fruit Powder',
    name: 'Red Dragon Fruit Powder (Milled)',
    specs: 'Moisture ≤ 5% | 80-100 mesh | 100% natural, clean-label',
    application: 'Confectionery, nutrition beverages, yogurt, clean-label natural coloring',
    moisture: '≤ 5.0%',
    mesh: '80 - 100 mesh',
    brix: 'Natural fruit sugar',
    shelfLife: '24 months',
    packaging: 'Sterile aluminum bags 5kg x 4 / 20kg export carton',
    moq: '100 kg (trial) / 500 kg (commercial)',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-DFP-01',
  },
  {
    id: 'freeze-dried-mango',
    slug: 'freeze-dried-mango',
    category: 'Freeze-Dried Fruit',
    name: 'Freeze-Dried Mango Slices',
    specs: 'Moisture ≤ 4% | 5-7mm cut slices | Crisp texture & authentic taste',
    application: 'Granola cereal, chocolate enrobing, gourmet fruit snacks',
    moisture: '≤ 4.0%',
    mesh: '5-7mm slices or 3-5mm granules',
    brix: '14 - 16 Brix natural',
    shelfLife: '18 months',
    packaging: '10kg export carton with inert nitrogen barrier liner',
    moq: '200 kg',
    grade: 'PREMIUM EXPORT',
    specCode: 'SPEC-AGRI-FDM-02',
  },
  {
    id: 'passion-fruit-puree',
    slug: 'passion-fruit-puree',
    category: 'Puree & Concentrate',
    name: 'Seedless Passion Fruit Puree (Concentrate)',
    specs: 'Brix 14-16% | Pasteurised | Aseptic 200L steel drum',
    application: 'Juice manufacturing, beverage syrups, ice cream',
    moisture: 'Smooth liquid puree',
    mesh: 'Filtered through 0.5mm mesh seedless',
    brix: '14 - 16%',
    shelfLife: '24 months (at -18°C)',
    packaging: 'Aseptic bag in 200L steel drum / 20kg bag-in-box',
    moq: '1 drum (200kg) or 1 pallet',
    grade: 'ASEPTIC INDUSTRIAL',
    specCode: 'SPEC-AGRI-PFP-03',
  },
];

export const FALLBACK_PRODUCTS_ZH: Product[] = [
  {
    id: 'dragon-fruit-powder',
    slug: 'dragon-fruit-powder',
    category: '低温研磨果粉',
    name: '红心火龙果原粉 (低温研磨)',
    specs: '含水率 ≤ 5% | 80-100目 | 100%纯天然清洁标签',
    application: '烘焙糖果、功能饮料、风味酸奶、天然健康护色',
    moisture: '≤ 5.0%',
    mesh: '80 - 100 目',
    brix: '纯天然果糖',
    shelfLife: '24 个月',
    packaging: '无菌铝箔袋 5kg x 4 / 20kg 出口瓦楞纸箱',
    moq: '100 kg (中试打样) / 500 kg (商业量产)',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-DFP-01',
  },
  {
    id: 'freeze-dried-mango',
    slug: 'freeze-dried-mango',
    category: '冻干精品果干',
    name: '冻干芒果脆片 (Freeze-Dried Mango)',
    specs: '含水率 ≤ 4% | 5-7mm原切片 | 98%锁鲜保形保风味',
    application: '早餐谷物燕麦、巧克力果脆涂层、高档轻食果干',
    moisture: '≤ 4.0%',
    mesh: '5-7mm 原切片或 3-5mm 颗粒',
    brix: '14 - 16 Brix 天然果糖',
    shelfLife: '18 个月',
    packaging: '10kg 瓦楞纸箱内置充氮隔氧铝箔袋',
    moq: '200 kg',
    grade: 'PREMIUM EXPORT',
    specCode: 'SPEC-AGRI-FDM-02',
  },
  {
    id: 'passion-fruit-puree',
    slug: 'passion-fruit-puree',
    category: '果浆与原汁',
    name: '无籽浓缩百香果原浆 (Puree)',
    specs: '糖度 14-16 Brix | 高温瞬时巴氏杀菌 | 200L 无菌大桶',
    application: '果汁原浆、调配饮品、特调风味糖浆、高端冰淇淋',
    moisture: '浓稠原果浆 (Puree)',
    mesh: '0.5mm 超细不锈钢筛网过滤无籽',
    brix: '14 - 16%',
    shelfLife: '24 个月 (-18°C 恒温冷冻)',
    packaging: '200L 钢桶内置无菌 Aseptic 袋 / 20kg 箱中袋',
    moq: '1 桶 (200kg) 或 1 托盘',
    grade: 'ASEPTIC INDUSTRIAL',
    specCode: 'SPEC-AGRI-PFP-03',
  },
];

export const FALLBACK_PRODUCTS = FALLBACK_PRODUCTS_VI;

export function getFallbackProducts(lang: Locale = 'vi'): Product[] {
  if (lang === 'en') return FALLBACK_PRODUCTS_EN;
  if (lang === 'zh') return FALLBACK_PRODUCTS_ZH;
  return FALLBACK_PRODUCTS_VI;
}

// Quản lý trạng thái kết nối máy chủ để tránh nghẽn DNS khi offline
let isHostOffline = false;
let lastHostCheckTime = 0;
const OFFLINE_RETRY_INTERVAL_MS = 8000;

/**
 * Xử lý URL API WordPress
 */
function getApiBaseUrl(): string {
  const envUrl = process.env.WORDPRESS_API_URL || 'http://agrihub-cms.local/wp-json/wp/v2';
  return envUrl.replace(/\/+$/, '');
}

/**
 * Hàm giải mã ký tự HTML entities cơ bản từ tiêu đề WordPress
 */
function cleanHtmlEntities(text: string): string {
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
}

/**
 * Chuyển đổi dữ liệu WordPress Post sang cấu trúc Product của Agrihub
 */
export function mapWordPressPostToProduct(post: WordPressPost, lang: Locale = 'vi'): Product {
  const acf = post.acf || {};

  // Lấy ảnh đại diện
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  // Lấy danh mục từ taxonomy hoặc trường ACF
  let defaultCategory = 'Nguyên liệu nông sản';
  let defaultSpecs = 'Tiêu chuẩn xuất khẩu B2B';
  let defaultApp = 'Ứng dụng trong sản xuất thực phẩm & đồ uống';

  if (lang === 'en') {
    defaultCategory = 'Processed Agricultural Ingredients';
    defaultSpecs = 'Export B2B Standard Specification';
    defaultApp = 'Food & Beverage industrial manufacturing';
  } else if (lang === 'zh') {
    defaultCategory = '深加工特色农产品原料';
    defaultSpecs = '国际出口 B2B 工业级技术标准';
    defaultApp = '食品与饮料工业制造应用';
  }

  let categoryName = defaultCategory;
  if (typeof acf.category === 'string' && acf.category.trim()) {
    categoryName = acf.category;
  } else if (post._embedded?.['wp:term']?.[0]?.[0]?.name) {
    categoryName = post._embedded['wp:term'][0][0].name;
  }

  // Lấy link PDF TDS
  let pdfUrl: string | undefined;
  if (typeof acf.pdf_tds === 'string') {
    pdfUrl = acf.pdf_tds;
  } else if (acf.pdf_tds && typeof acf.pdf_tds === 'object' && 'url' in acf.pdf_tds) {
    pdfUrl = acf.pdf_tds.url;
  }

  const rawTitle = post.title?.rendered || post.slug;
  let name = cleanHtmlEntities(rawTitle);

  // Auto-translate test post titles when switching language
  if (lang === 'en') {
    if (post.slug === 'san-pham' || /thanh long/i.test(name)) {
      name = 'Freeze-Dried Dragon Fruit (Export Grade)';
      categoryName = 'Freeze-Dried Fruit';
      defaultSpecs = 'Moisture ≤ 4% | 5-7mm slices | 100% natural, clean-label';
      defaultApp = 'Bakery, confectionery, breakfast cereals, healthy snacks';
    }
  } else if (lang === 'zh') {
    if (post.slug === 'san-pham' || /thanh long/i.test(name)) {
      name = '冻干火龙果脆片 (出口级)';
      categoryName = '精品冻干果品';
      defaultSpecs = '水分 ≤ 4% | 5-7mm 原切片 | 100% 纯天然清洁标签';
      defaultApp = '烘焙西点、糖果巧克力、燕麦代餐、健康果脆';
    }
  }

  const rawSpecs = acf.specs || post.excerpt?.rendered || '';
  const specs = cleanHtmlEntities(rawSpecs);

  const rawApplication = acf.application || acf.applications || '';
  const application = cleanHtmlEntities(rawApplication);

  return {
    id: post.id,
    slug: post.slug,
    name,
    category: categoryName,
    specs: specs || defaultSpecs,
    application: application || defaultApp,
    moisture: acf.moisture,
    mesh: acf.mesh || acf.mesh_size,
    brix: acf.brix,
    shelfLife: acf.shelf_life || acf.shelflife,
    packaging: acf.packaging,
    moq: acf.moq,
    grade: acf.grade || 'INDUSTRIAL F&B',
    specCode: acf.spec_code || `SPEC-AGRI-${post.slug.toUpperCase()}`,
    pdfUrl,
    image: featuredMedia,
    content: post.content?.rendered,
  };
}

/**
 * Tùy chọn Fetch:
 * Ở môi trường DEV (npm run dev): cache = 'no-store' để cập nhật NGAY LẬP TỨC khi sửa trên WordPress local.
 * Ở môi trường PROD: revalidate 60 giây để đạt tốc độ tĩnh tối đa.
 */
function getFetchOptions(): RequestInit {
  const isDev = process.env.NODE_ENV === 'development';
  const baseOptions: RequestInit = isDev
    ? { cache: 'no-store' }
    : { next: { revalidate: 60 } };

  // Đặt timeout 1.8 giây để tránh nghẽn khi WordPress local chưa bật
  return {
    ...baseOptions,
    signal: AbortSignal.timeout(1800),
  };
}

/**
 * Gọi API WordPress với cơ chế tự động thử nhiều endpoint (products, product, posts)
 */
async function fetchFromEndpoints(pathSuffix: string): Promise<Response | null> {
  const now = Date.now();
  if (isHostOffline && now - lastHostCheckTime < OFFLINE_RETRY_INTERVAL_MS) {
    return null;
  }

  const baseUrl = getApiBaseUrl();
  const endpoints = ['products', 'product', 'posts'];

  for (const ep of endpoints) {
    try {
      const url = `${baseUrl}/${ep}${pathSuffix}`;
      const res = await fetch(url, getFetchOptions());
      if (res.ok) {
        isHostOffline = false;
        return res;
      }
    } catch {
      // Bỏ qua lỗi 404 hoặc mạng cho endpoint hiện tại
    }
  }

  // Đánh dấu host đang tạm thời offline để không làm chậm các tiến trình khác
  isHostOffline = true;
  lastHostCheckTime = Date.now();
  return null;
}

/**
 * Lấy toàn bộ danh sách sản phẩm từ WordPress
 */
export async function getProducts(lang: Locale = 'vi'): Promise<Product[]> {
  try {
    const res = await fetchFromEndpoints('?_embed&per_page=100');

    if (!res) {
      return getFallbackProducts(lang);
    }

    const data = await res.json();
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `\x1b[32m✔ [WordPress API]\x1b[0m Kết nối thành công tới: ${getApiBaseUrl()} (Phản hồi: ${Array.isArray(data) ? data.length : 0} bài)`
      );
    }
    if (!Array.isArray(data) || data.length === 0) {
      return getFallbackProducts(lang);
    }

    const mapped = data.map((post: WordPressPost) => mapWordPressPostToProduct(post, lang));
    const validProducts = mapped.filter((p) => p.slug !== 'hello-world');
    return validProducts.length > 0 ? validProducts : getFallbackProducts(lang);
  } catch {
    return getFallbackProducts(lang);
  }
}

/**
 * Lấy chi tiết một sản phẩm theo slug
 */
export async function getProductBySlug(slug: string, lang: Locale = 'vi'): Promise<Product | null> {
  try {
    const res = await fetchFromEndpoints(`?_embed&slug=${encodeURIComponent(slug)}`);

    if (res) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return mapWordPressPostToProduct(data[0], lang);
      }
    }
  } catch {
    // Không làm gián đoạn
  }

  // Tìm trong fallback nếu không có trên WordPress hoặc chưa kết nối
  const fallback = getFallbackProducts(lang).find((p) => p.slug === slug);
  return fallback || null;
}

/**
 * Lấy toàn bộ slug sản phẩm để generateStaticParams / Sitemap
 */
export async function getAllProductSlugs(): Promise<string[]> {
  const products = await getProducts();
  return products.map((p) => p.slug);
}

// ─────────────────────────────────────────────────────────────────────────────
// NEWS & EVENTS
// ─────────────────────────────────────────────────────────────────────────────

export interface NewsEvent {
  id: number;
  slug: string;
  lang: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;          // ISO 8601
  image: string | null;
  category: string;      // "Tin tức" | "Sự kiện" | "Thông báo" | "News" | "Events" | "新闻" etc.
  tags: string[];
  // ACF fields
  eventDate?: string;       // acf.event_date
  eventLocation?: string;   // acf.event_location
  externalUrl?: string;     // acf.external_url
}

function mapWordPressPostToNewsEvent(post: WordPressPost, lang: string): NewsEvent {
  const acf = (post.acf || {}) as Record<string, string | undefined>;
  const image =
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null;
  const rawCategory =
    post._embedded?.['wp:term']?.[0]?.[0]?.name ?? '';
  const tags =
    (post._embedded?.['wp:term']?.[1] ?? []).map((t: { name: string }) => t.name);

  return {
    id: post.id,
    slug: post.slug,
    lang,
    title: post.title?.rendered ?? '',
    excerpt: post.excerpt?.rendered?.replace(/<[^>]*>/g, '').trim() ?? '',
    content: post.content?.rendered ?? '',
    date: (post.date as string) ?? '',
    image,
    category: rawCategory,
    tags,
    eventDate: acf.event_date || undefined,
    eventLocation: acf.event_location || undefined,
    externalUrl: acf.external_url || undefined,
  };
}

// ── Fallback data ─────────────────────────────────────────────────────────────

export const FALLBACK_NEWS_VI: NewsEvent[] = [
  {
    id: 1001,
    slug: 'agrihub-tham-gia-vietnam-foodexpo-2025',
    lang: 'vi',
    title: 'Agrihub Vietnam tham gia Vietnam Foodexpo 2025 tại SECC',
    excerpt:
      'Agrihub Vietnam sẽ có mặt tại Vietnam Foodexpo 2025 (19–22/11/2025) tại SECC TP. HCM với gian hàng trưng bày bột trái cây, trái cây sấy thăng hoa và nước cốt xuất khẩu.',
    content:
      '<p>Agrihub Vietnam xác nhận tham gia <strong>Vietnam Foodexpo 2025</strong> – triển lãm thực phẩm và đồ uống hàng đầu Đông Nam Á, diễn ra từ ngày 19 đến 22 tháng 11 năm 2025 tại <strong>Trung tâm Hội chợ và Triển lãm Sài Gòn (SECC)</strong>, TP. Hồ Chí Minh.</p><h2>Sản phẩm trưng bày</h2><p>Gian hàng Agrihub sẽ giới thiệu các nguyên liệu xuất khẩu chủ lực: bột thanh long đỏ, xoài sấy thăng hoa, nước cốt chanh dây vô trùng và nhiều sản phẩm chế biến khác đạt chuẩn quốc tế.</p><p>Đây là cơ hội để các nhà nhập khẩu, nhà máy F&B và đối tác phân phối gặp gỡ trực tiếp đội ngũ kỹ thuật và thương mại của chúng tôi, nhận mẫu thử và thảo luận về điều kiện hợp tác.</p><p>Vui lòng liên hệ trước để đặt lịch hẹn riêng tại gian hàng.</p>',
    date: '2025-11-01T00:00:00',
    image: null,
    category: 'Sự kiện',
    tags: ['triển lãm', 'foodexpo', 'xuất khẩu'],
    eventDate: '2025-11-19',
    eventLocation: 'SECC, TP. Hồ Chí Minh',
  },
  {
    id: 1002,
    slug: 'agrihub-xuat-khau-bot-trai-cay-sang-trung-dong',
    lang: 'vi',
    title: 'Agrihub mở rộng xuất khẩu bột trái cây sang thị trường Trung Đông',
    excerpt:
      'Lô hàng bột thanh long và bột xoài đầu tiên từ Agrihub đã được giao thành công đến UAE, mở ra chuỗi cung ứng ổn định cho các nhà sản xuất thực phẩm chức năng tại khu vực Trung Đông.',
    content:
      '<p>Agrihub Vietnam vừa hoàn thành lô giao hàng đầu tiên gồm <strong>bột thanh long đỏ sấy phun</strong> và <strong>bột xoài sấy lạnh</strong> đến các đối tác tại UAE, đánh dấu bước tiến quan trọng trong chiến lược mở rộng thị trường Trung Đông.</p><h2>Tiêu chuẩn đặc biệt cho thị trường Halal</h2><p>Toàn bộ lô hàng xuất khẩu đáp ứng tiêu chuẩn Halal, không chất phụ gia, không gluten và đạt chứng nhận vệ sinh an toàn thực phẩm theo quy định nhập khẩu của UAE.</p><p>Mỗi lô đều kèm theo Chứng nhận Phân tích (COA) đầy đủ với kết quả kiểm nghiệm vi sinh, kim loại nặng và dư lượng thuốc bảo vệ thực vật từ phòng lab độc lập.</p><p>Chúng tôi đang tiếp nhận yêu cầu mẫu thử từ các nhà nhập khẩu và nhà máy tại Saudi Arabia, Qatar và Ai Cập. Liên hệ bộ phận xuất khẩu để được hỗ trợ.</p>',
    date: '2025-10-15T00:00:00',
    image: null,
    category: 'Tin tức',
    tags: ['xuất khẩu', 'trung đông', 'uae', 'halal'],
  },
  {
    id: 1003,
    slug: 'chung-nhan-halal-mo-rong-thi-truong-xuat-khau',
    lang: 'vi',
    title: 'Agrihub đạt chứng nhận Halal – Mở rộng thị trường xuất khẩu Muslim',
    excerpt:
      'Agrihub Vietnam vừa nhận chứng nhận Halal cho dòng sản phẩm bột trái cây và nước cốt, mở ra cơ hội thâm nhập sâu vào 57 quốc gia thành viên OIC với tổng dân số hơn 1,8 tỷ người tiêu dùng.',
    content:
      '<p>Agrihub Vietnam chính thức thông báo đã hoàn thành quá trình kiểm tra và đạt <strong>Chứng nhận Halal</strong> cho toàn bộ dòng sản phẩm nguyên liệu chế biến, bao gồm bột trái cây sấy phun, bột trái cây sấy lạnh và nước cốt nguyên chất đóng gói vô trùng.</p><h2>Ý nghĩa chiến lược</h2><p>Chứng nhận này không chỉ xác nhận sản phẩm đáp ứng tiêu chuẩn thực phẩm Hồi giáo mà còn là yêu cầu bắt buộc để tiếp cận các thị trường tại Trung Đông, Bắc Phi và Đông Nam Á (Malaysia, Indonesia).</p><p>Kèm theo chứng nhận Halal, toàn bộ quy trình chế biến tại nhà máy đã được kiểm định lại, bảo đảm không có sự lây nhiễm chéo với các thành phần không được phép.</p><p>Liên hệ ngay để nhận bản sao chứng nhận Halal và bộ hồ sơ kỹ thuật đầy đủ phục vụ quy trình nhập khẩu của quý đối tác.</p>',
    date: '2025-09-20T00:00:00',
    image: null,
    category: 'Thông báo',
    tags: ['halal', 'chứng nhận', 'xuất khẩu', 'trung đông'],
  },
];

export const FALLBACK_NEWS_EN: NewsEvent[] = [
  {
    id: 1001,
    slug: 'agrihub-at-vietnam-foodexpo-2025',
    lang: 'en',
    title: 'Agrihub Vietnam at Vietnam Foodexpo 2025 – SECC, Ho Chi Minh City',
    excerpt:
      'Agrihub Vietnam will exhibit at Vietnam Foodexpo 2025 (Nov 19–22, 2025) at SECC, Ho Chi Minh City, showcasing export-grade fruit powders, freeze-dried fruits, and aseptic purees.',
    content:
      '<p>Agrihub Vietnam confirms its participation in <strong>Vietnam Foodexpo 2025</strong> – Southeast Asia\'s premier food and beverage exhibition, running from November 19 to 22, 2025 at the <strong>Saigon Exhibition and Convention Center (SECC)</strong>, Ho Chi Minh City.</p><h2>Products on Display</h2><p>Our booth will feature key export ingredients: Red Dragon Fruit Powder, Freeze-Dried Mango Slices, Seedless Passion Fruit Puree, and other internationally certified processed ingredients.</p><p>This is a prime opportunity for importers, F&B manufacturers, and distribution partners to meet our technical and commercial team, collect samples, and discuss partnership terms in person.</p><p>Please contact us in advance to schedule a private booth meeting.</p>',
    date: '2025-11-01T00:00:00',
    image: null,
    category: 'Events',
    tags: ['trade show', 'foodexpo', 'export'],
    eventDate: '2025-11-19',
    eventLocation: 'SECC, Ho Chi Minh City',
  },
  {
    id: 1002,
    slug: 'agrihub-exports-fruit-powder-to-middle-east',
    lang: 'en',
    title: 'Agrihub Expands Fruit Powder Exports to the Middle East',
    excerpt:
      'The first commercial shipments of Agrihub\'s Dragon Fruit Powder and Mango Powder have been successfully delivered to UAE partners, establishing a reliable supply chain for functional food manufacturers in the region.',
    content:
      '<p>Agrihub Vietnam has completed its first commercial export shipment of <strong>Spray-Dried Red Dragon Fruit Powder</strong> and <strong>Freeze-Dried Mango Powder</strong> to partners in the UAE, marking a significant milestone in our Middle East market expansion strategy.</p><h2>Halal-Compliant Standards</h2><p>All export batches meet Halal standards, are free from additives and gluten, and comply with UAE food import regulations.</p><p>Each shipment is accompanied by a full Certificate of Analysis (COA) with results for microbiological testing, heavy metals, and pesticide residues from an independent laboratory.</p><p>We are now accepting sample requests from importers and manufacturers in Saudi Arabia, Qatar, and Egypt. Contact our export desk for assistance.</p>',
    date: '2025-10-15T00:00:00',
    image: null,
    category: 'News',
    tags: ['export', 'middle east', 'uae', 'halal'],
  },
  {
    id: 1003,
    slug: 'halal-certification-expands-export-markets',
    lang: 'en',
    title: 'Agrihub Achieves Halal Certification – Opening Muslim-Market Export Channels',
    excerpt:
      'Agrihub Vietnam has received Halal certification for its fruit powder and puree product lines, opening access to 57 OIC member countries with a combined Muslim consumer base of over 1.8 billion people.',
    content:
      '<p>Agrihub Vietnam officially announces the successful completion of inspection and the award of <strong>Halal Certification</strong> for its full range of processed ingredient products, including spray-dried fruit powders, freeze-dried fruit powders, and aseptic packaged fruit purees.</p><h2>Strategic Significance</h2><p>This certification not only confirms that our products meet Islamic dietary standards but is also a mandatory requirement for accessing markets in the Middle East, North Africa, and Southeast Asia (Malaysia, Indonesia).</p><p>In conjunction with the Halal certification, our entire factory processing workflow has been re-inspected to ensure zero cross-contamination with prohibited ingredients.</p><p>Contact us now to receive a copy of the Halal certificate and full technical documentation to support your import process.</p>',
    date: '2025-09-20T00:00:00',
    image: null,
    category: 'Announcement',
    tags: ['halal', 'certification', 'export', 'middle east'],
  },
];

export const FALLBACK_NEWS_ZH: NewsEvent[] = [
  {
    id: 1001,
    slug: 'agrihub-canjia-vietnam-foodexpo-2025',
    lang: 'zh',
    title: 'Agrihub越南参展Vietnam Foodexpo 2025 – 胡志明市SECC',
    excerpt:
      'Agrihub Vietnam将参加2025年越南食品博览会（2025年11月19-22日），在胡志明市SECC展示出口级果粉、冻干果干及无菌果浆等拳头产品。',
    content:
      '<p>Agrihub Vietnam正式确认参加<strong>Vietnam Foodexpo 2025</strong> —— 东南亚顶级食品饮料展览会，展期为2025年11月19日至22日，举办地点为<strong>西贡展览和会议中心（SECC）</strong>，胡志明市。</p><h2>展出产品</h2><p>Agrihub展台将重点展示以下核心出口原料：红心火龙果原粉、冻干芒果脆片、无籽百香果原浆及其他通过国际认证的深加工产品。</p><p>这是进口商、食品饮料工厂及渠道分销伙伴与我们技术和商务团队面对面交流、领取样品、洽谈合作条款的绝佳机会。</p><p>请提前联系我们，以便安排展台专属会议时间。</p>',
    date: '2025-11-01T00:00:00',
    image: null,
    category: '活动',
    tags: ['展会', '食品博览会', '出口'],
    eventDate: '2025-11-19',
    eventLocation: '胡志明市SECC',
  },
  {
    id: 1002,
    slug: 'agrihub-chukou-guofen-dao-zhongdong',
    lang: 'zh',
    title: 'Agrihub扩大果粉出口至中东市场',
    excerpt:
      'Agrihub的首批红心火龙果粉和芒果粉商业货物已成功交付至阿联酋合作伙伴，为中东地区功能食品制造商建立了稳定的供应链。',
    content:
      '<p>Agrihub Vietnam已完成首批<strong>喷雾干燥红心火龙果原粉</strong>和<strong>冻干芒果粉</strong>出口至阿联酋合作伙伴的商业交货，标志着我们在中东市场扩张战略中迈出了重要一步。</p><h2>符合清真标准</h2><p>所有出口批次均符合清真标准，不含添加剂和麸质，并符合阿联酋食品进口法规。</p><p>每批货物均附有完整的分析证书（COA），包含来自独立实验室的微生物检测、重金属和农药残留检测结果。</p><p>我们现正接受来自沙特阿拉伯、卡塔尔和埃及的进口商和制造商的样品请求。请联系我们的出口部门获取协助。</p>',
    date: '2025-10-15T00:00:00',
    image: null,
    category: '新闻',
    tags: ['出口', '中东', '阿联酋', '清真'],
  },
  {
    id: 1003,
    slug: 'qingzhen-renzheng-kuozhan-chukou-shichang',
    lang: 'zh',
    title: 'Agrihub获得清真认证 – 开拓穆斯林市场出口渠道',
    excerpt:
      'Agrihub Vietnam的果粉和果浆产品线已获得清真认证，开放进入57个伊斯兰合作组织成员国市场，覆盖逾18亿穆斯林消费者。',
    content:
      '<p>Agrihub Vietnam正式宣布，已成功完成检验审核并获得全线深加工原料产品的<strong>清真认证（Halal Certification）</strong>，涵盖喷雾干燥果粉、冻干果粉及无菌包装果浆原汁。</p><h2>战略意义</h2><p>该认证不仅证实我们的产品符合伊斯兰饮食标准，也是进入中东、北非及东南亚（马来西亚、印度尼西亚）市场的强制性要求。</p><p>配合清真认证的获取，我们工厂的全部生产流程已重新接受审查，确保与禁用成分零交叉污染。</p><p>立即联系我们，获取清真证书副本及完整技术文件，以支持贵方的进口流程。</p>',
    date: '2025-09-20T00:00:00',
    image: null,
    category: '公告',
    tags: ['清真', '认证', '出口', '中东'],
  },
];

function getFallbackNews(lang: string): NewsEvent[] {
  if (lang === 'en') return FALLBACK_NEWS_EN;
  if (lang === 'zh') return FALLBACK_NEWS_ZH;
  return FALLBACK_NEWS_VI;
}

// Manage news host offline state separately to avoid interfering with products
let isNewsHostOffline = false;
let lastNewsHostCheckTime = 0;

async function fetchNewsFromEndpoints(pathSuffix: string): Promise<Response | null> {
  const now = Date.now();
  if (isNewsHostOffline && now - lastNewsHostCheckTime < OFFLINE_RETRY_INTERVAL_MS) {
    return null;
  }

  const baseUrl = getApiBaseUrl();
  const endpoints = ['news_events', 'news_event', 'posts'];

  for (const ep of endpoints) {
    try {
      const url = `${baseUrl}/${ep}${pathSuffix}`;
      const res = await fetch(url, getFetchOptions());
      if (res.ok) {
        isNewsHostOffline = false;
        return res;
      }
    } catch {
      // Skip network errors and try next endpoint
    }
  }

  isNewsHostOffline = true;
  lastNewsHostCheckTime = Date.now();
  return null;
}

/**
 * Lấy toàn bộ danh sách bài viết tin tức & sự kiện từ WordPress
 */
export async function getNewsEvents(lang: string = 'vi'): Promise<NewsEvent[]> {
  try {
    const res = await fetchNewsFromEndpoints('?_embed&per_page=50');

    if (!res) {
      return getFallbackNews(lang);
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return getFallbackNews(lang);
    }

    const mapped = data.map((post: WordPressPost) => mapWordPressPostToNewsEvent(post, lang));
    const valid = mapped.filter((n) => n.slug !== 'hello-world');
    return valid.length > 0 ? valid : getFallbackNews(lang);
  } catch {
    return getFallbackNews(lang);
  }
}

/**
 * Lấy chi tiết bài viết tin tức/sự kiện theo slug
 */
export async function getNewsEventBySlug(slug: string, lang: string = 'vi'): Promise<NewsEvent | null> {
  try {
    const res = await fetchNewsFromEndpoints(`?_embed&slug=${encodeURIComponent(slug)}`);

    if (res) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return mapWordPressPostToNewsEvent(data[0], lang);
      }
    }
  } catch {
    // Fallthrough to local lookup
  }

  const fallback = getFallbackNews(lang).find((n) => n.slug === slug);
  return fallback || null;
}

/**
 * Lấy toàn bộ slug tin tức/sự kiện để generateStaticParams / Sitemap
 */
export async function getAllNewsEventSlugs(): Promise<string[]> {
  const [vi, en, zh] = await Promise.all([
    getNewsEvents('vi'),
    getNewsEvents('en'),
    getNewsEvents('zh'),
  ]);
  const allSlugs = [...vi, ...en, ...zh].map((n) => n.slug);
  const unique = Array.from(new Set(allSlugs));
  return unique;
}
