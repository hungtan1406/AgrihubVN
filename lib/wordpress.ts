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
