/**
 * Agrihub Vietnam - WordPress REST API Client
 * Kết nối Headless WordPress với Next.js 14 App Router
 */

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

/**
 * Dữ liệu dự phòng (Fallback) khi WordPress local chưa khởi động
 * Đảm bảo website luôn hoạt động ổn định và không bị gián đoạn.
 */
export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 'dragon-fruit-powder',
    slug: 'dragon-fruit-powder',
    category: 'Bột trái cây',
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
    category: 'Nước cốt & Puree',
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
export function mapWordPressPostToProduct(post: WordPressPost): Product {
  const acf = post.acf || {};

  // Lấy ảnh đại diện
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  // Lấy danh mục từ taxonomy hoặc trường ACF
  let categoryName = 'Nguyên liệu nông sản';
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
  const name = cleanHtmlEntities(rawTitle);

  const rawSpecs = acf.specs || post.excerpt?.rendered || '';
  const specs = cleanHtmlEntities(rawSpecs);

  const rawApplication = acf.application || acf.applications || '';
  const application = cleanHtmlEntities(rawApplication);

  return {
    id: post.id,
    slug: post.slug,
    name,
    category: categoryName,
    specs: specs || 'Tiêu chuẩn xuất khẩu B2B',
    application: application || 'Ứng dụng trong sản xuất thực phẩm & đồ uống',
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
export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetchFromEndpoints('?_embed&per_page=100');

    if (!res) {
      return FALLBACK_PRODUCTS;
    }

    const data = await res.json();
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `\x1b[32m✔ [WordPress API]\x1b[0m Kết nối thành công tới: ${getApiBaseUrl()} (Phản hồi: ${Array.isArray(data) ? data.length : 0} bài)`
      );
    }
    if (!Array.isArray(data) || data.length === 0) {
      return FALLBACK_PRODUCTS;
    }

    const mapped = data.map((post: WordPressPost) => mapWordPressPostToProduct(post));
    const validProducts = mapped.filter((p) => p.slug !== 'hello-world');
    return validProducts.length > 0 ? validProducts : FALLBACK_PRODUCTS;
  } catch {
    return FALLBACK_PRODUCTS;
  }
}

/**
 * Lấy chi tiết một sản phẩm theo slug
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const res = await fetchFromEndpoints(`?_embed&slug=${encodeURIComponent(slug)}`);

    if (res) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return mapWordPressPostToProduct(data[0]);
      }
    }
  } catch {
    // Không làm gián đoạn
  }

  // Tìm trong fallback nếu không có trên WordPress hoặc chưa kết nối
  const fallback = FALLBACK_PRODUCTS.find((p) => p.slug === slug);
  return fallback || null;
}

/**
 * Lấy toàn bộ slug sản phẩm để generateStaticParams / Sitemap
 */
export async function getAllProductSlugs(): Promise<string[]> {
  const products = await getProducts();
  return products.map((p) => p.slug);
}
