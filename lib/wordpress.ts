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
  categoryGroup?: 'powder' | 'puree' | 'dried' | 'frozen' | string;
  processingMethod?: string;
  specs: string;
  application: string;
  moisture?: string;
  mesh?: string;
  brix?: string;
  shelfLife?: string;
  packaging?: string;
  storage?: string;
  moq?: string;
  grade?: string;
  specCode?: string;
  pdfUrl?: string;
  image?: string;
  content?: string;
  isFeatured?: boolean;
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
  storage?: string;
  storage_condition?: string;
  moq?: string;
  grade?: string;
  spec_code?: string;
  pdf_tds?: string | { url?: string; title?: string };
  category?: string;
  category_group?: string;
  processing_method?: string;
  is_featured?: boolean | string | number;
  featured?: boolean | string | number;
  image?: string | { url?: string; source_url?: string };
  product_image?: string | { url?: string; source_url?: string };
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
    categoryGroup: 'powder',
    processingMethod: 'Bột sấy nghiền',
    name: 'Bột Thanh Long Đỏ',
    specs: 'Độ ẩm ≤ 5% | 80-100 mesh | 100% tự nhiên không chất bảo quản',
    application:
      'Bánh kẹo, Đồ uống dinh dưỡng, Sữa chua, Tạo màu tự nhiên Clean-label',
    moisture: '≤ 5.0%',
    mesh: '80 - 100 mesh',
    brix: 'Tự nhiên từ quả',
    shelfLife: '12 tháng tính từ ngày sản xuất',
    packaging: '10g - 5000g/bịch hoặc theo yêu cầu khách hàng',
    storage: 'Nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp',
    moq: '100 kg (thử nghiệm) / 500 kg (sản xuất)',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-DFP-01',
    isFeatured: true,
  },
  {
    id: 'passion-fruit-powder',
    slug: 'passion-fruit-powder',
    category: 'Bột sấy phun',
    categoryGroup: 'powder',
    processingMethod: 'Bột sấy phun',
    name: 'Bột Chanh Dây Hòa Tan',
    specs: 'Độ tan > 95% | Vị chua thanh tự nhiên | Giàu Vitamin C',
    application: 'Trà trái cây, si-rô pha chế, nhân bánh ngọt, kem cao cấp',
    moisture: '≤ 4.5%',
    mesh: '100 mesh',
    brix: 'Chuẩn hóa theo yêu cầu',
    shelfLife: '12 tháng tính từ ngày sản xuất',
    packaging: '10g - 5000g/bịch hoặc theo yêu cầu khách hàng',
    storage: 'Nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp',
    moq: '100 kg',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-PFP-02',
    isFeatured: true,
  },
  {
    id: 'banana-powder',
    slug: 'banana-powder',
    category: 'Bột sấy phun',
    categoryGroup: 'powder',
    processingMethod: 'Bột sấy phun',
    name: 'Bột Chuối Sấy Phun',
    specs: 'Màu vàng kem | Hương thơm đậm đà | Dồi dào chất xơ & Kali',
    application: 'Ngũ cốc ăn sáng, thức ăn dặm trẻ em, sinh tố protein, bánh quy',
    moisture: '≤ 5.0%',
    mesh: '80 mesh',
    brix: 'Tự nhiên',
    shelfLife: '12 tháng tính từ ngày sản xuất',
    packaging: '10g - 5000g/bịch hoặc theo yêu cầu khách hàng',
    storage: 'Nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp',
    moq: '200 kg',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-BNP-01',
    isFeatured: false,
  },
  {
    id: 'freeze-dried-mango',
    slug: 'freeze-dried-mango',
    category: 'Trái cây sấy',
    categoryGroup: 'dried',
    processingMethod: 'Sấy thăng hoa',
    name: 'Xoài Sấy Thăng Hoa',
    specs:
      'Độ ẩm ≤ 3% | Cắt lát 5-7mm | Giữ nguyên 98% vi chất & màu vàng tươi',
    application: 'Ngũ cốc ăn sáng, Socola bọc trái cây, Snack cao cấp',
    moisture: '≤ 3.0%',
    mesh: 'Cắt lát 5-7mm hoặc dạng hạt 3-5mm',
    brix: '14 - 16 Brix tự nhiên',
    shelfLife: '12 tháng tính từ ngày sản xuất',
    packaging: '400g',
    storage: 'Nơi khô ráo, thoáng mát và đóng kín sau khi dùng',
    moq: '200 kg',
    grade: 'PREMIUM EXPORT',
    specCode: 'SPEC-AGRI-FDM-02',
    isFeatured: true,
  },
  {
    id: 'freeze-dried-jackfruit',
    slug: 'freeze-dried-jackfruit',
    category: 'Trái cây sấy',
    categoryGroup: 'dried',
    processingMethod: 'Sấy thăng hoa',
    name: 'Mít Sấy Thăng Hoa',
    specs: 'Vàng óng tự nhiên | Giòn xốp thơm lừng | Không chiên dầu, không đường',
    application: 'Snack văn phòng lành mạnh, granola, topping kem & trà hoa quả',
    moisture: '≤ 4.0%',
    mesh: 'Nguyên múi hoặc nửa múi',
    brix: 'Tự nhiên từ quả',
    shelfLife: '12 tháng tính từ ngày sản xuất',
    packaging: '400g',
    storage: 'Nơi khô ráo thoáng mát, đóng kín miệng túi sau khi dùng',
    moq: '200 kg',
    grade: 'PREMIUM EXPORT',
    specCode: 'SPEC-AGRI-FDJ-01',
    isFeatured: true,
  },
  {
    id: 'frozen-mango',
    slug: 'frozen-mango',
    category: 'Trái cây đông lạnh',
    categoryGroup: 'frozen',
    processingMethod: 'Cấp đông IQF',
    name: 'Xoài Cấp Đông IQF',
    specs:
      'Cấp đông nhanh IQF (-35°C) | 100% tự nhiên | Cắt hạt lựu 15x15mm hoặc nửa quả',
    application: 'Sinh tố, Topping trà trái cây, Kem xoài, Mứt F&B',
    moisture: 'Dạng đông rời IQF',
    mesh: 'Cắt hạt lựu 10-15mm / Má xoài',
    brix: '13 - 15 Brix',
    shelfLife: '24 tháng kể từ ngày sản xuất',
    packaging: '1kg/bịch, 5kg/bịch, 10kg/bịch hoặc theo yêu cầu của khách hàng',
    storage: '18 °C',
    moq: '500 kg',
    grade: 'IQF EXPORT GRADE',
    specCode: 'SPEC-AGRI-FROZEN-01',
    isFeatured: true,
  },
  {
    id: 'frozen-dragon-fruit',
    slug: 'frozen-dragon-fruit',
    category: 'Trái cây đông lạnh',
    categoryGroup: 'frozen',
    processingMethod: 'Cấp đông IQF',
    name: 'Thanh Long Đỏ Cấp Đông IQF',
    specs: 'Đông rời từng hạt IQF | Ruột đỏ thắm 100% tự nhiên | Cắt hạt 10x10mm',
    application: 'Trà hoa quả thương mại, smoothie bowl, sữa chua công nghiệp',
    moisture: 'Dạng đông rời IQF',
    mesh: 'Hạt lựu đều đặn 10x10mm',
    brix: '10 - 12 Brix',
    shelfLife: '24 tháng kể từ ngày sản xuất',
    packaging: '1kg/bịch, 5kg/bịch, 10kg/bịch hoặc theo yêu cầu khách hàng',
    storage: '18 °C',
    moq: '500 kg',
    grade: 'IQF EXPORT GRADE',
    specCode: 'SPEC-AGRI-FROZEN-02',
    isFeatured: false,
  },
  {
    id: 'passion-fruit-puree',
    slug: 'passion-fruit-puree',
    category: 'Nước cốt',
    categoryGroup: 'puree',
    processingMethod: 'Nước cốt nguyên chất',
    name: 'Nước Cốt Chanh Dây Không Hạt',
    specs: 'Brix 14-16% | Tiệt trùng Aseptic | 100% nguyên chất đậm đặc',
    application: 'Sản xuất nước giải khát, Sữa chua uống, Kem que, Mứt sốt F&B',
    moisture: 'Dạng lỏng sánh mịn (Puree)',
    mesh: 'Lọc qua lưới 0.5mm không còn hạt',
    brix: '14 - 16%',
    shelfLife: '12 - 24 tháng',
    packaging:
      '1kg/bịch, 5kg/bịch, 10kg/bịch, đóng chai hoặc PET hoặc theo yêu cầu của khách hàng',
    storage: '18°C',
    moq: '1 phuy (200kg) hoặc 1 pallet',
    grade: 'ASEPTIC INDUSTRIAL',
    specCode: 'SPEC-AGRI-PFP-03',
    isFeatured: true,
  },
];

export const FALLBACK_PRODUCTS_EN: Product[] = [
  {
    id: 'dragon-fruit-powder',
    slug: 'dragon-fruit-powder',
    category: 'Milled Fruit Powder',
    categoryGroup: 'powder',
    processingMethod: 'Milled Powder',
    name: 'Red Dragon Fruit Powder (Milled)',
    specs: 'Moisture ≤ 5% | 80-100 mesh | 100% natural, clean-label',
    application:
      'Confectionery, nutrition beverages, yogurt, clean-label natural coloring',
    moisture: '≤ 5.0%',
    mesh: '80 - 100 mesh',
    brix: 'Natural fruit sugar',
    shelfLife: '12 months from manufacturing date',
    packaging: '10g - 5000g/bag or custom requested',
    storage: 'Store in cool, dry place, avoid direct sunlight',
    moq: '100 kg (trial) / 500 kg (commercial)',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-DFP-01',
    isFeatured: true,
  },
  {
    id: 'passion-fruit-powder',
    slug: 'passion-fruit-powder',
    category: 'Spray-Dried Powder',
    categoryGroup: 'powder',
    processingMethod: 'Spray-Dried Powder',
    name: 'Instant Passion Fruit Powder',
    specs: 'Solubility > 95% | Natural refreshing tartness | Rich in Vitamin C',
    application: 'Fruit teas, beverage syrups, bakery fillings, gourmet ice cream',
    moisture: '≤ 4.5%',
    mesh: '100 mesh',
    brix: 'Standardized upon request',
    shelfLife: '12 months from manufacturing date',
    packaging: '10g - 5000g/bag or custom requested',
    storage: 'Store in cool, dry place, avoid direct sunlight',
    moq: '100 kg',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-PFP-02',
    isFeatured: true,
  },
  {
    id: 'banana-powder',
    slug: 'banana-powder',
    category: 'Spray-Dried Powder',
    categoryGroup: 'powder',
    processingMethod: 'Spray-Dried Powder',
    name: 'Spray-Dried Banana Powder',
    specs: 'Creamy yellow | Rich natural aroma | High dietary fiber & Potassium',
    application: 'Breakfast cereals, baby food, protein smoothies, biscuits',
    moisture: '≤ 5.0%',
    mesh: '80 mesh',
    brix: 'Natural',
    shelfLife: '12 months from manufacturing date',
    packaging: '10g - 5000g/bag or custom requested',
    storage: 'Store in cool, dry place, avoid direct sunlight',
    moq: '200 kg',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-BNP-01',
    isFeatured: false,
  },
  {
    id: 'freeze-dried-mango',
    slug: 'freeze-dried-mango',
    category: 'Freeze-Dried Fruit',
    categoryGroup: 'dried',
    processingMethod: 'Freeze-Dried',
    name: 'Freeze-Dried Mango Slices',
    specs: 'Moisture ≤ 3% | 5-7mm cut slices | Crisp texture & authentic taste',
    application: 'Granola cereal, chocolate enrobing, gourmet fruit snacks',
    moisture: '≤ 3.0%',
    mesh: '5-7mm slices or 3-5mm granules',
    brix: '14 - 16 Brix natural',
    shelfLife: '12 months from manufacturing date',
    packaging: '400g',
    storage: 'Store in a cool, dry place and seal tightly after use',
    moq: '200 kg',
    grade: 'PREMIUM EXPORT',
    specCode: 'SPEC-AGRI-FDM-02',
    isFeatured: true,
  },
  {
    id: 'freeze-dried-jackfruit',
    slug: 'freeze-dried-jackfruit',
    category: 'Freeze-Dried Fruit',
    categoryGroup: 'dried',
    processingMethod: 'Freeze-Dried',
    name: 'Freeze-Dried Jackfruit Pieces',
    specs: 'Natural golden aroma | Crisp texture | Zero added oil, zero sugar',
    application: 'Office healthy snacking, premium tea blends, artisanal bakery',
    moisture: '≤ 4.0%',
    mesh: 'Whole / Half pods',
    brix: 'Natural fruit sugar',
    shelfLife: '12 months from manufacturing date',
    packaging: '400g',
    storage: 'Store in cool dry place, seal tightly',
    moq: '200 kg',
    grade: 'PREMIUM EXPORT',
    specCode: 'SPEC-AGRI-FDJ-01',
    isFeatured: true,
  },
  {
    id: 'frozen-mango',
    slug: 'frozen-mango',
    category: 'Frozen Fruit (IQF)',
    categoryGroup: 'frozen',
    processingMethod: 'IQF Frozen Fruit',
    name: 'IQF Frozen Mango Chunks',
    specs:
      'Individually Quick Frozen (-35°C) | Natural sweet aroma | 15x15mm diced',
    application:
      'Smoothie purees, beverage toppings, fruit bowls, industrial confectionery',
    moisture: 'Frozen fruit chunks',
    mesh: '10-15mm diced / whole cheeks',
    brix: '13 - 15° Brix',
    shelfLife: '24 months from manufacturing date',
    packaging: '1kg/bag, 5kg/bag, 10kg/bag or custom requested',
    storage: '18 °C',
    moq: '500 kg',
    grade: 'IQF EXPORT GRADE',
    specCode: 'SPEC-AGRI-FROZEN-01',
    isFeatured: true,
  },
  {
    id: 'frozen-dragon-fruit',
    slug: 'frozen-dragon-fruit',
    category: 'Frozen Fruit (IQF)',
    categoryGroup: 'frozen',
    processingMethod: 'IQF Frozen Fruit',
    name: 'IQF Frozen Red Dragon Fruit Dices',
    specs: 'Individually Quick Frozen | 100% natural red flesh | 10x10mm uniform dices',
    application: 'Commercial fruit tea, smoothie packs, sorbet, dairy yogurt base',
    moisture: 'Frozen fruit dices',
    mesh: '10x10mm uniform diced',
    brix: '10 - 12° Brix',
    shelfLife: '24 months from manufacturing date',
    packaging: '1kg/bag, 5kg/bag, 10kg/bag or custom requested',
    storage: '18 °C',
    moq: '500 kg',
    grade: 'IQF EXPORT GRADE',
    specCode: 'SPEC-AGRI-FROZEN-02',
    isFeatured: false,
  },
  {
    id: 'passion-fruit-puree',
    slug: 'passion-fruit-puree',
    category: 'Puree & Juice',
    categoryGroup: 'puree',
    processingMethod: 'Puree & Juice',
    name: 'Seedless Passion Fruit Puree (Concentrate)',
    specs: 'Brix 14-16% | Pasteurised aseptic | 100% pure concentrate',
    application:
      'Juice manufacturing, beverage syrups, drinking yogurt, ice cream',
    moisture: 'Smooth liquid puree',
    mesh: 'Filtered through 0.5mm mesh seedless',
    brix: '14 - 16%',
    shelfLife: '12 - 24 months',
    packaging: '1kg/bag, 5kg/bag, 10kg/bag, bottled or PET or custom requested',
    storage: '18°C',
    moq: '1 drum (200kg) or 1 pallet',
    grade: 'ASEPTIC INDUSTRIAL',
    specCode: 'SPEC-AGRI-PFP-03',
    isFeatured: true,
  },
];

export const FALLBACK_PRODUCTS_ZH: Product[] = [
  {
    id: 'dragon-fruit-powder',
    slug: 'dragon-fruit-powder',
    category: '低温研磨果粉',
    categoryGroup: 'powder',
    processingMethod: '低温研磨果粉',
    name: '红心火龙果原粉 (低温研磨)',
    specs: '含水率 ≤ 5% | 80-100目 | 100%纯天然清洁标签',
    application: '烘焙糖果、功能饮料、风味酸奶、天然健康护色',
    moisture: '≤ 5.0%',
    mesh: '80 - 100 目',
    brix: '纯天然果糖',
    shelfLife: '自生产之日起12个月',
    packaging: '10g - 5000g/袋或按客户要求定制',
    storage: '阴凉干燥处存放，避免阳光直射',
    moq: '100 kg (中试打样) / 500 kg (商业量产)',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-DFP-01',
    isFeatured: true,
  },
  {
    id: 'passion-fruit-powder',
    slug: 'passion-fruit-powder',
    category: '喷雾干燥果粉',
    categoryGroup: 'powder',
    processingMethod: '喷雾干燥果粉',
    name: '速溶百香果粉 (喷雾干燥)',
    specs: '溶解度 > 95% | 天然纯正清爽酸甜 | 富含维C与矿物质',
    application: '调饮果茶、风味糖浆、西点烘焙夹心、高端冰淇淋',
    moisture: '≤ 4.5%',
    mesh: '100 目',
    brix: '可按需标准化调配',
    shelfLife: '自生产之日起12个月',
    packaging: '10g - 5000g/袋或按客户要求定制',
    storage: '阴凉干燥处存放，避免阳光直射',
    moq: '100 kg',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-PFP-02',
    isFeatured: true,
  },
  {
    id: 'banana-powder',
    slug: 'banana-powder',
    category: '喷雾干燥果粉',
    categoryGroup: 'powder',
    processingMethod: '喷雾干燥果粉',
    name: '喷雾干燥香蕉粉',
    specs: '奶黄原色 | 浓郁香蕉天然风味 | 富含膳食纤维与钾元素',
    application: '早餐饮食麦片、婴幼儿辅食、蛋白营养粉、饼干点心',
    moisture: '≤ 5.0%',
    mesh: '80 目',
    brix: '天然',
    shelfLife: '自生产之日起12个月',
    packaging: '10g - 5000g/袋或按客户要求定制',
    storage: '阴凉干燥处存放，避免阳光直射',
    moq: '200 kg',
    grade: 'INDUSTRIAL F&B',
    specCode: 'SPEC-AGRI-BNP-01',
    isFeatured: false,
  },
  {
    id: 'freeze-dried-mango',
    slug: 'freeze-dried-mango',
    category: '冻干精品果干',
    categoryGroup: 'dried',
    processingMethod: '冻干果品',
    name: '冻干芒果脆片 (Freeze-Dried Mango)',
    specs: '含水率 ≤ 3% | 5-7mm原切片 | 98%锁鲜保形保风味',
    application: '早餐谷物燕麦、巧克力果脆涂层、高档轻食果干',
    moisture: '≤ 3.0%',
    mesh: '5-7mm 原切片或 3-5mm 颗粒',
    brix: '14 - 16 Brix 天然果糖',
    shelfLife: '自生产之日起12个月',
    packaging: '400g',
    storage: '置于阴凉干燥处，使用后密封保存',
    moq: '200 kg',
    grade: 'PREMIUM EXPORT',
    specCode: 'SPEC-AGRI-FDM-02',
    isFeatured: true,
  },
  {
    id: 'freeze-dried-jackfruit',
    slug: 'freeze-dried-jackfruit',
    category: '冻干精品果干',
    categoryGroup: 'dried',
    processingMethod: '冻干果品',
    name: '冻干菠萝蜜脆片 (FD Jackfruit)',
    specs: '自然金黄亮泽 | 浓郁原果香气 | 非油炸、零添加糖',
    application: '低卡健康零食、轻食燕麦杯、高端花果茶拼配',
    moisture: '≤ 4.0%',
    mesh: '整瓣 / 半瓣',
    brix: '纯天然原糖',
    shelfLife: '自生产之日起12个月',
    packaging: '400g',
    storage: '置于阴凉干燥处，使用后密封保存',
    moq: '200 kg',
    grade: 'PREMIUM EXPORT',
    specCode: 'SPEC-AGRI-FDJ-01',
    isFeatured: true,
  },
  {
    id: 'frozen-mango',
    slug: 'frozen-mango',
    category: '冷冻水果 (IQF)',
    categoryGroup: 'frozen',
    processingMethod: '冷冻水果 (IQF)',
    name: 'IQF 单体速冻芒果丁',
    specs: '单体速冻 (-35°C) | 保留热带原果纯甜风味 | 15x15mm 规则丁块',
    application: '现制茶饮鲜果顶料、冰沙泥原浆、水果酸奶捞、烘焙果酱',
    moisture: '冷冻原果丁',
    mesh: '10-15mm 丁块 / 半果瓣',
    brix: '13 - 15° Brix',
    shelfLife: '自生产之日起24个月',
    packaging: '1kg/袋、5kg/袋、10kg/袋或按客户要求定制',
    storage: '18 °C',
    moq: '500 kg',
    grade: 'IQF EXPORT GRADE',
    specCode: 'SPEC-AGRI-FROZEN-01',
    isFeatured: true,
  },
  {
    id: 'frozen-dragon-fruit',
    slug: 'frozen-dragon-fruit',
    category: '冷冻水果 (IQF)',
    categoryGroup: 'frozen',
    processingMethod: '冷冻水果 (IQF)',
    name: 'IQF 单体速冻红心火龙果丁',
    specs: '单体速冻锁鲜 | 100% 天然艳丽红心果肉 | 10x10mm 均一立方丁',
    application: '特调果茶调色调味、鲜榨果昔、冰淇淋雪葩原料',
    moisture: '冷冻原果粒',
    mesh: '10x10mm 规则立方体',
    brix: '10 - 12° Brix',
    shelfLife: '自生产之日起24个月',
    packaging: '1kg/袋、5kg/袋、10kg/袋或按客户要求定制',
    storage: '18 °C',
    moq: '500 kg',
    grade: 'IQF EXPORT GRADE',
    specCode: 'SPEC-AGRI-FROZEN-02',
    isFeatured: false,
  },
  {
    id: 'passion-fruit-puree',
    slug: 'passion-fruit-puree',
    category: '果浆与原汁',
    categoryGroup: 'puree',
    processingMethod: '果浆与原汁',
    name: '无籽浓缩百香果原浆 (Puree)',
    specs: '糖度 14-16 Brix | 高温瞬时巴氏杀菌 | 无菌灌装',
    application: '果汁原浆、调配饮品、特调风味糖浆、高端冰淇淋',
    moisture: '浓稠原果浆 (Puree)',
    mesh: '0.5mm 超细不锈钢筛网过滤无籽',
    brix: '14 - 16%',
    shelfLife: '12 - 24 个月',
    packaging: '1kg/袋、5kg/袋、10kg/袋，瓶装或PET装或按客户要求定制',
    storage: '18°C',
    moq: '1 桶 (200kg) 或 1 托盘',
    grade: 'ASEPTIC INDUSTRIAL',
    specCode: 'SPEC-AGRI-PFP-03',
    isFeatured: true,
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
  const envUrl =
    process.env.WORDPRESS_API_URL || 'http://agrihub-cms.local/wp-json/wp/v2';
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
export function mapWordPressPostToProduct(
  post: WordPressPost,
  lang: Locale = 'vi',
): Product {
  const acf = post.acf || {};

  // Lấy ảnh đại diện: ưu tiên trường ACF image/product_image, sau đó đến featured media của WordPress
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  let imageUrl: string | undefined = featuredMedia;

  if (typeof acf.image === 'string' && acf.image.trim()) {
    imageUrl = acf.image;
  } else if (
    acf.image &&
    typeof acf.image === 'object' &&
    'url' in acf.image &&
    typeof acf.image.url === 'string'
  ) {
    imageUrl = acf.image.url;
  } else if (
    typeof acf.product_image === 'string' &&
    acf.product_image.trim()
  ) {
    imageUrl = acf.product_image;
  } else if (
    acf.product_image &&
    typeof acf.product_image === 'object' &&
    'url' in acf.product_image &&
    typeof acf.product_image.url === 'string'
  ) {
    imageUrl = acf.product_image.url;
  }

  // Lấy trạng thái sản phẩm nổi bật
  const isFeatured =
    acf.is_featured === true ||
    acf.is_featured === '1' ||
    acf.is_featured === 1 ||
    acf.featured === true ||
    acf.featured === '1' ||
    acf.featured === 1;

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
  } else if (
    acf.pdf_tds &&
    typeof acf.pdf_tds === 'object' &&
    'url' in acf.pdf_tds
  ) {
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

  // Lấy nhóm sản phẩm (Filter Trang chủ): powder | puree | dried | frozen
  let categoryGroup = '';
  if (typeof acf.category_group === 'string') {
    categoryGroup = acf.category_group.trim().toLowerCase();
  } else if (
    acf.category_group &&
    typeof acf.category_group === 'object' &&
    'value' in acf.category_group
  ) {
    categoryGroup = String((acf.category_group as { value: string }).value).trim().toLowerCase();
  }

  if (!categoryGroup) {
    const combined = `${name} ${categoryName}`.toLowerCase();
    if (
      combined.includes('đông lạnh') ||
      combined.includes('frozen') ||
      combined.includes('iqf') ||
      combined.includes('冷冻')
    ) {
      categoryGroup = 'frozen';
    } else if (
      combined.includes('bột') ||
      combined.includes('powder') ||
      combined.includes('phun') ||
      combined.includes('nghiền') ||
      combined.includes('spray') ||
      combined.includes('milled') ||
      combined.includes('粉')
    ) {
      categoryGroup = 'powder';
    } else if (
      combined.includes('cốt') ||
      combined.includes('pure') ||
      combined.includes('juice') ||
      combined.includes('nước') ||
      combined.includes('原浆') ||
      combined.includes('原汁')
    ) {
      categoryGroup = 'puree';
    } else {
      categoryGroup = 'dried';
    }
  }

  // Lấy công nghệ chế biến / nhãn hiển thị trên Card (ví dụ: Bột sấy phun, Bột sấy nghiền, Trái cây sấy...)
  let processingMethod = '';
  if (typeof acf.processing_method === 'string') {
    processingMethod = acf.processing_method.trim();
  } else if (
    acf.processing_method &&
    typeof acf.processing_method === 'object' &&
    'label' in acf.processing_method
  ) {
    processingMethod = String((acf.processing_method as { label: string }).label).trim();
  } else if (
    acf.processing_method &&
    typeof acf.processing_method === 'object' &&
    'value' in acf.processing_method
  ) {
    processingMethod = String((acf.processing_method as { value: string }).value).trim();
  }

  if (!processingMethod) {
    if (categoryName && categoryName !== defaultCategory) {
      processingMethod = categoryName;
    } else if (categoryGroup === 'powder') {
      const lower = name.toLowerCase();
      processingMethod =
        lower.includes('nghiền') || lower.includes('milled')
          ? 'Bột sấy nghiền'
          : 'Bột sấy phun';
    } else if (categoryGroup === 'puree') {
      processingMethod = 'Nước cốt';
    } else if (categoryGroup === 'frozen') {
      processingMethod = 'Trái cây đông lạnh';
    } else {
      processingMethod = 'Trái cây sấy';
    }
  }

  return {
    id: post.id,
    slug: post.slug,
    name,
    category: categoryName,
    categoryGroup,
    processingMethod,
    specs: specs || defaultSpecs,
    application: application || defaultApp,
    moisture: acf.moisture,
    mesh: acf.mesh || acf.mesh_size,
    brix: acf.brix,
    shelfLife: acf.shelf_life || acf.shelflife,
    packaging: acf.packaging,
    storage: acf.storage || acf.storage_condition,
    moq: acf.moq,
    grade: acf.grade || 'INDUSTRIAL F&B',
    specCode: acf.spec_code || `SPEC-AGRI-${post.slug.toUpperCase()}`,
    pdfUrl,
    image: imageUrl,
    isFeatured,
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
async function fetchFromEndpoints(
  pathSuffix: string,
): Promise<Response | null> {
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
        `\x1b[32m✔ [WordPress API]\x1b[0m Kết nối thành công tới: ${getApiBaseUrl()} (Phản hồi: ${Array.isArray(data) ? data.length : 0} bài)`,
      );
    }
    if (!Array.isArray(data) || data.length === 0) {
      return getFallbackProducts(lang);
    }

    const mapped = data.map((post: WordPressPost) =>
      mapWordPressPostToProduct(post, lang),
    );
    const validProducts = mapped.filter((p) => p.slug !== 'hello-world');
    return validProducts.length > 0 ? validProducts : getFallbackProducts(lang);
  } catch {
    return getFallbackProducts(lang);
  }
}

/**
 * Lấy danh sách sản phẩm nổi bật để hiển thị trên trang chủ
 * @param lang Ngôn ngữ hiển thị
 * @param limit Giới hạn số lượng (mặc định từ 6 đến 8 sản phẩm)
 */
export async function getFeaturedProducts(
  lang: Locale = 'vi',
  limit: number = 8,
): Promise<Product[]> {
  const all = await getProducts(lang);
  const featured = all.filter((p) => p.isFeatured);
  // Nếu có sản phẩm được tích chọn nổi bật (is_featured = true), lấy từ 6 đến tối đa limit (8 sản phẩm)
  if (featured.length > 0) {
    return featured.slice(0, limit);
  }
  // Nếu chưa có sản phẩm nào được đánh dấu nổi bật trên WordPress,
  // mặc định lấy 6 sản phẩm đầu tiên để trang chủ luôn có dữ liệu đầy đủ
  return all.slice(0, Math.min(all.length, 6));
}

/**
 * Lấy chi tiết một sản phẩm theo slug
 */
export async function getProductBySlug(
  slug: string,
  lang: Locale = 'vi',
): Promise<Product | null> {
  try {
    const res = await fetchFromEndpoints(
      `?_embed&slug=${encodeURIComponent(slug)}`,
    );

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
  date: string; // ISO 8601
  image: string | null;
  category: string; // "Tin tức" | "Sự kiện" | "Thông báo" | "News" | "Events" | "新闻" etc.
  categories?: string[];
  categorySlugs?: string[];
  isEvent?: boolean;
  isFeatured?: boolean;
  tags: string[];
  // ACF fields
  eventDate?: string; // acf.event_date
  eventLocation?: string; // acf.event_location
  externalUrl?: string; // acf.external_url
}

function mapWordPressPostToNewsEvent(
  post: WordPressPost,
  lang: string,
): NewsEvent {
  const acf = (post.acf || {}) as Record<string, string | undefined>;
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null;

  const rawTerms = post._embedded?.['wp:term']?.[0] || [];
  const categoryNames = rawTerms.map((t: { name: string }) => t.name || '');
  const categorySlugs = rawTerms.map((t: { slug: string }) => (t.slug || '').toLowerCase());

  const rawTags = post._embedded?.['wp:term']?.[1] || [];
  const tags = rawTags.map((t: { name: string }) => t.name || '');
  const tagSlugs = rawTags.map((t: { slug: string }) => (t.slug || '').toLowerCase());

  const titleLower = (post.title?.rendered || '').toLowerCase();
  const slugLower = (post.slug || '').toLowerCase();

  // 1. Nhận diện Sự Kiện (Event):
  // Hỗ trợ cả trường hợp người dùng gán danh mục cha "Sự Kiện" (slug su-kien)
  // hoặc danh mục con "— Nổi Bật" (slug noi-bat-su-kien), hoặc gắn tag sự kiện, hoặc tiêu đề có chữ sự kiện
  const isEvent =
    categorySlugs.some(
      (s) =>
        s === 'su-kien' ||
        s === 'noi-bat-su-kien' ||
        s.includes('su-kien') ||
        s.includes('event') ||
        s.includes('trien-lam'),
    ) ||
    categoryNames.some((n) => {
      const lower = n.toLowerCase();
      return (
        lower.includes('sự kiện') ||
        lower.includes('su kien') ||
        lower.includes('event') ||
        lower.includes('triển lãm') ||
        lower.includes('hội chợ') ||
        lower.includes('活动')
      );
    }) ||
    tagSlugs.some((s) => s.includes('su-kien') || s.includes('event') || s.includes('trien-lam')) ||
    tags.some((t) => {
      const lower = t.toLowerCase();
      return (
        lower.includes('sự kiện') ||
        lower.includes('event') ||
        lower.includes('triển lãm') ||
        lower.includes('hội chợ')
      );
    }) ||
    slugLower.includes('su-kien') ||
    slugLower.includes('trien-lam') ||
    titleLower.includes('su kien') ||
    titleLower.includes('sự kiện') ||
    Boolean(acf.event_date);

  // 2. Nhận diện Nổi Bật (Featured):
  // Bất kỳ danh mục nào là "Nổi Bật", slug "noi-bat-su-kien", "noi-bat", tag nổi bật, v.v.
  const isFeatured =
    categorySlugs.some(
      (s) =>
        s === 'noi-bat' ||
        s === 'noi-bat-su-kien' ||
        s === 'noi-bat-tin-tuc' ||
        s.includes('noi-bat') ||
        s.includes('featured'),
    ) ||
    categoryNames.some((n) => {
      const lower = n.toLowerCase();
      return (
        lower.includes('nổi bật') ||
        lower.includes('noi bat') ||
        lower.includes('featured') ||
        lower.includes('精选')
      );
    }) ||
    tagSlugs.some((s) => s.includes('noi-bat') || s.includes('featured')) ||
    tags.some((t) => {
      const lower = t.toLowerCase();
      return lower.includes('nổi bật') || lower.includes('featured');
    }) ||
    slugLower.includes('noi-bat') ||
    titleLower.includes('noi bat') ||
    titleLower.includes('nổi bật');

  // 3. Chuẩn hóa tên nhãn danh mục (Category Badge):
  // Nếu là sự kiện, hiển thị badge là "Sự kiện" thay vì nhãn chung chung "Nổi Bật"
  // Nếu là tin tức, hiển thị badge là "Tin tức"
  let displayCategory = '';
  if (isEvent) {
    const eventTerm = categoryNames.find((n) => {
      const lower = n.toLowerCase();
      return (
        lower.includes('sự kiện') ||
        lower.includes('event') ||
        lower.includes('triển lãm') ||
        lower.includes('活动')
      );
    });
    displayCategory =
      eventTerm || (lang === 'en' ? 'Events' : lang === 'zh' ? '活动' : 'Sự kiện');
  } else {
    const newsTerm = categoryNames.find((n) => {
      const lower = n.toLowerCase();
      return (
        (lower.includes('tin') && !lower.includes('nổi bật')) ||
        lower.includes('news') ||
        lower.includes('thông báo') ||
        lower.includes('announcement') ||
        lower.includes('新闻') ||
        lower.includes('公告')
      );
    });
    displayCategory =
      newsTerm ||
      (categoryNames.length > 0 && !categoryNames[0].toLowerCase().includes('nổi bật')
        ? categoryNames[0]
        : lang === 'en'
          ? 'News'
          : lang === 'zh'
            ? '新闻'
            : 'Tin tức');
  }

  return {
    id: post.id,
    slug: post.slug,
    lang,
    title: post.title?.rendered ?? '',
    excerpt: post.excerpt?.rendered?.replace(/<[^>]*>/g, '').trim() ?? '',
    content: post.content?.rendered ?? '',
    date: (post.date as string) ?? '',
    image,
    category: displayCategory,
    categories: categoryNames,
    categorySlugs,
    isEvent,
    isFeatured,
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
    tags: ['triển lãm', 'foodexpo', 'xuất khẩu', 'nổi bật'],
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
  {
    id: 1004,
    slug: 'agrihub-trien-lam-thaifex-anuga-asia-2025',
    lang: 'vi',
    title: 'Agrihub tham gia Triển lãm Quốc tế THAIFEX - Anuga Asia 2025',
    excerpt:
      'Agrihub xúc tiến thương mại nông sản chế biến sâu, kết nối chuỗi cung ứng bột trái cây và trái cây sấy thăng hoa tới các đối tác F&B toàn cầu tại Bangkok.',
    content:
      '<p>Agrihub Vietnam vinh dự góp mặt tại <strong>THAIFEX - Anuga Asia 2025</strong>, hội chợ thương mại thực phẩm và đồ uống quy mô hàng đầu châu Á tổ chức tại Bangkok, Thái Lan từ ngày 27 đến 31 tháng 5 năm 2025.</p><h2>Kết nối giao thương quốc tế</h2><p>Tại triển lãm lần này, Agrihub giới thiệu các giải pháp nguyên liệu OEM/ODM chuẩn công nghiệp cho các dòng bột hòa tan, sinh tố trái cây cô đặc và trái cây sấy thăng hoa ăn liền không phụ gia.</p><p>Sự kiện là cầu nối giúp Agrihub mở rộng hợp tác với các tập đoàn F&B đa quốc gia từ Nhật Bản, Hàn Quốc, châu Âu và Bắc Mỹ.</p>',
    date: '2025-05-10T00:00:00',
    image: null,
    category: 'Sự kiện',
    tags: ['triển lãm', 'thaifex', 'hội chợ quốc tế', 'nổi bật'],
    eventDate: '27/05/2025 – 31/05/2025',
    eventLocation: 'IMPACT Muang Thong Thani, Bangkok, Thái Lan',
  },
  {
    id: 1005,
    slug: 'agrihub-ket-noi-giao-thuong-gulfood-dubai-2026',
    lang: 'vi',
    title: 'Agrihub xúc tiến thương mại tại Triển lãm Gulfood Dubai 2026',
    excerpt:
      'Giới thiệu các dòng sản phẩm đạt chuẩn quốc tế Halal và ISO 22000, mở rộng hợp tác xuất khẩu nông sản chế biến sang thị trường Trung Đông và Bắc Phi.',
    content:
      '<p>Agrihub Vietnam tiếp tục hành trình vươn tầm thế giới tại <strong>Gulfood Dubai 2026</strong> – triển lãm thường niên lớn nhất thế giới về thực phẩm và đồ uống diễn ra tại Dubai World Trade Centre (DWTC).</p><h2>Giải pháp nông sản nhiệt đới đạt chuẩn Halal</h2><p>Với lợi thế vùng nguyên liệu nhiệt đới trù phú cùng công nghệ chế biến sấy phun và cấp đông vô trùng đạt chứng nhận Halal, Agrihub mang đến các giải pháp nguyên liệu cốt lõi đáp ứng các tiêu chuẩn khắt khe nhất của thị trường Trung Đông (GCC).</p><p>Kính mời quý đối tác ghé thăm gian hàng hoặc liên hệ đặt lịch tư vấn trực tiếp.</p>',
    date: '2026-01-15T00:00:00',
    image: null,
    category: 'Sự kiện',
    tags: ['triển lãm', 'gulfood', 'trung đông', 'halal', 'nổi bật'],
    eventDate: '17/02/2026 – 21/02/2026',
    eventLocation: 'Dubai World Trade Centre (DWTC), UAE',
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
      "<p>Agrihub Vietnam confirms its participation in <strong>Vietnam Foodexpo 2025</strong> – Southeast Asia's premier food and beverage exhibition, running from November 19 to 22, 2025 at the <strong>Saigon Exhibition and Convention Center (SECC)</strong>, Ho Chi Minh City.</p><h2>Products on Display</h2><p>Our booth will feature key export ingredients: Red Dragon Fruit Powder, Freeze-Dried Mango Slices, Seedless Passion Fruit Puree, and other internationally certified processed ingredients.</p><p>This is a prime opportunity for importers, F&B manufacturers, and distribution partners to meet our technical and commercial team, collect samples, and discuss partnership terms in person.</p><p>Please contact us in advance to schedule a private booth meeting.</p>",
    date: '2025-11-01T00:00:00',
    image: null,
    category: 'Events',
    tags: ['trade show', 'foodexpo', 'export', 'featured'],
    eventDate: '2025-11-19',
    eventLocation: 'SECC, Ho Chi Minh City',
  },
  {
    id: 1002,
    slug: 'agrihub-exports-fruit-powder-to-middle-east',
    lang: 'en',
    title: 'Agrihub Expands Fruit Powder Exports to the Middle East',
    excerpt:
      "The first commercial shipments of Agrihub's Dragon Fruit Powder and Mango Powder have been successfully delivered to UAE partners, establishing a reliable supply chain for functional food manufacturers in the region.",
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
    title:
      'Agrihub Achieves Halal Certification – Opening Muslim-Market Export Channels',
    excerpt:
      'Agrihub Vietnam has received Halal certification for its fruit powder and puree product lines, opening access to 57 OIC member countries with a combined Muslim consumer base of over 1.8 billion people.',
    content:
      '<p>Agrihub Vietnam officially announces the successful completion of inspection and the award of <strong>Halal Certification</strong> for its full range of processed ingredient products, including spray-dried fruit powders, freeze-dried fruit powders, and aseptic packaged fruit purees.</p><h2>Strategic Significance</h2><p>This certification not only confirms that our products meet Islamic dietary standards but is also a mandatory requirement for accessing markets in the Middle East, North Africa, and Southeast Asia (Malaysia, Indonesia).</p><p>In conjunction with the Halal certification, our entire factory processing workflow has been re-inspected to ensure zero cross-contamination with prohibited ingredients.</p><p>Contact us now to receive a copy of the Halal certificate and full technical documentation to support your import process.</p>',
    date: '2025-09-20T00:00:00',
    image: null,
    category: 'Announcement',
    tags: ['halal', 'certification', 'export', 'middle east'],
  },
  {
    id: 1004,
    slug: 'agrihub-thaifex-anuga-asia-2025',
    lang: 'en',
    title: 'Agrihub Vietnam at THAIFEX - Anuga Asia 2025 Trade Fair',
    excerpt:
      'Showcasing tropical spray-dried fruit powders, freeze-dried fruits, and aseptic purees to international F&B manufacturers and buyers in Bangkok.',
    content:
      '<p>Agrihub Vietnam is proud to exhibit at <strong>THAIFEX - Anuga Asia 2025</strong>, Asia’s premier food and beverage trade exhibition held in Bangkok, Thailand from May 27 to 31, 2025.</p><h2>Global Trade Partnerships</h2><p>Agrihub presents industrial OEM/ODM ingredient solutions for instant fruit powders, concentrated purees, and clean-label freeze-dried fruits without artificial additives.</p><p>We warmly invite international importers and processors to meet our export team at our exhibition stand.</p>',
    date: '2025-05-10T00:00:00',
    image: null,
    category: 'Events',
    tags: ['trade show', 'thaifex', 'export', 'featured'],
    eventDate: 'May 27–31, 2025',
    eventLocation: 'IMPACT Muang Thong Thani, Bangkok, Thailand',
  },
  {
    id: 1005,
    slug: 'agrihub-gulfood-dubai-2026',
    lang: 'en',
    title: 'Agrihub Connects with Global Buyers at Gulfood Dubai 2026',
    excerpt:
      'Expanding halal-certified fruit powders and freeze-dried ingredients across Middle Eastern and North African food industry networks.',
    content:
      '<p>Agrihub Vietnam joins the world’s leading F&B trade gathering at <strong>Gulfood Dubai 2026</strong> at the Dubai World Trade Centre (DWTC).</p><h2>Halal-Certified Tropical Solutions</h2><p>Featuring certified spray-dried passion fruit, freeze-dried mango, and red dragon fruit powder, Agrihub delivers premium raw materials complying with strict Gulf region import standards.</p>',
    date: '2026-01-15T00:00:00',
    image: null,
    category: 'Events',
    tags: ['trade show', 'gulfood', 'export', 'halal', 'featured'],
    eventDate: 'Feb 17–21, 2026',
    eventLocation: 'Dubai World Trade Centre (DWTC), UAE',
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
    tags: ['展会', '食品博览会', '出口', '精选'],
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
  {
    id: 1004,
    slug: 'agrihub-thaifex-anuga-asia-2025',
    lang: 'zh',
    title: 'Agrihub参展2025泰国亚洲世界食品博览会（THAIFEX - Anuga Asia）',
    excerpt:
      'Agrihub携出口级热带果粉、冻干水果及无菌原浆亮相，拓展全球食品饮料供应链。',
    content:
      '<p>Agrihub Vietnam参展亚洲知名食品饮料贸易盛会 <strong>THAIFEX - Anuga Asia 2025</strong>（泰国曼谷）。</p><h2>全球贸易对接</h2><p>Agrihub在展会中提供符合工业标准的定制OEM/ODM原料解决方案，欢迎全球采购商与我们深入洽谈合作。</p>',
    date: '2025-05-10T00:00:00',
    image: null,
    category: '活动',
    tags: ['展会', 'thaifex', '出口', '精选'],
    eventDate: '2025年5月27日-31日',
    eventLocation: '泰国曼谷 IMPACT 展览中心',
  },
  {
    id: 1005,
    slug: 'agrihub-gulfood-dubai-2026',
    lang: 'zh',
    title: 'Agrihub亮相迪拜海湾食品展（Gulfood Dubai 2026）',
    excerpt:
      '展示全线符合清真（Halal）标准的深加工果粉与原浆原料，深耕中东及北非高品质市场。',
    content:
      '<p>Agrihub Vietnam亮相迪拜世界贸易中心举办的 <strong>Gulfood Dubai 2026</strong> 国际食品展，展示优质热带果粉与原浆。</p>',
    date: '2026-01-15T00:00:00',
    image: null,
    category: '活动',
    tags: ['展会', 'gulfood', '清真', '出口', '精选'],
    eventDate: '2026年2月17日-21日',
    eventLocation: '阿联酋迪拜世界贸易中心（DWTC）',
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

async function fetchNewsFromEndpoints(
  pathSuffix: string,
): Promise<Response | null> {
  const now = Date.now();
  if (
    isNewsHostOffline &&
    now - lastNewsHostCheckTime < OFFLINE_RETRY_INTERVAL_MS
  ) {
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

    const mapped = data.map((post: WordPressPost) =>
      mapWordPressPostToNewsEvent(post, lang),
    );
    const valid = mapped.filter((n) => n.slug !== 'hello-world');
    return valid.length > 0 ? valid : getFallbackNews(lang);
  } catch {
    return getFallbackNews(lang);
  }
}

/**
 * Lấy chi tiết bài viết tin tức/sự kiện theo slug
 */
export async function getNewsEventBySlug(
  slug: string,
  lang: string = 'vi',
): Promise<NewsEvent | null> {
  try {
    const res = await fetchNewsFromEndpoints(
      `?_embed&slug=${encodeURIComponent(slug)}`,
    );

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

/**
 * Lấy danh sách sự kiện nổi bật từ WordPress hoặc dữ liệu chuẩn bị sẵn
 */
export async function getFeaturedEvents(
  lang: string = 'vi',
  limit: number = 3,
): Promise<NewsEvent[]> {
  try {
    const allNews = await getNewsEvents(lang);
    const fallbackList = getFallbackNews(lang).filter(
      (item) =>
        item.isEvent ||
        (item.category || '').toLowerCase().includes('kiện') ||
        (item.category || '').toLowerCase().includes('event') ||
        (item.category || '').toLowerCase().includes('活动') ||
        Boolean(item.eventDate),
    );

    if (!allNews || allNews.length === 0) {
      return fallbackList.slice(0, limit);
    }

    // Lọc sự kiện từ danh sách bài viết
    const events = allNews.filter((item) => {
      if (item.isEvent) return true;
      const catLower = (item.category || '').toLowerCase();
      const slugs = item.categorySlugs || [];
      const names = item.categories || [];
      const tags = (item.tags || []).map((t) => t.toLowerCase());
      return (
        slugs.some((s) => s.includes('su-kien') || s.includes('event') || s.includes('trien-lam')) ||
        names.some((n) => n.toLowerCase().includes('sự kiện') || n.toLowerCase().includes('event')) ||
        catLower.includes('kiện') ||
        catLower.includes('event') ||
        catLower.includes('活动') ||
        catLower.includes('triển lãm') ||
        Boolean(item.eventDate) ||
        tags.some(
          (t) =>
            t.includes('sự kiện') ||
            t.includes('event') ||
            t.includes('triển lãm') ||
            t.includes('hội chợ') ||
            t.includes('foodexpo') ||
            t.includes('thaifex') ||
            t.includes('gulfood') ||
            t.includes('展会'),
        )
      );
    });

    if (events.length > 0) {
      // Ưu tiên bài gắn mác nổi bật nếu có
      const featured = events.filter((item) => {
        if (item.isFeatured) return true;
        const catLower = (item.category || '').toLowerCase();
        const slugs = item.categorySlugs || [];
        const names = item.categories || [];
        const tags = (item.tags || []).map((t) => t.toLowerCase());
        return (
          slugs.some((s) => s.includes('noi-bat') || s.includes('featured')) ||
          names.some((n) => n.toLowerCase().includes('nổi bật') || n.toLowerCase().includes('featured')) ||
          catLower.includes('nổi bật') ||
          catLower.includes('featured') ||
          tags.some((t) => t.includes('nổi bật') || t.includes('featured'))
        );
      });

      const chosen = featured.length > 0 ? featured : events;
      if (chosen.length >= limit) {
        return chosen.slice(0, limit);
      }
      const chosenSlugs = new Set(chosen.map((e) => e.slug));
      const needed = fallbackList.filter((f) => !chosenSlugs.has(f.slug));
      return [...chosen, ...needed].slice(0, limit);
    }

    return fallbackList.slice(0, limit);
  } catch {
    const fallbackList = getFallbackNews(lang).filter(
      (item) =>
        item.isEvent ||
        (item.category || '').toLowerCase().includes('kiện') ||
        (item.category || '').toLowerCase().includes('event') ||
        (item.category || '').toLowerCase().includes('活动') ||
        Boolean(item.eventDate),
    );
    return fallbackList.slice(0, limit);
  }
}

/**
 * Lấy danh sách tin tức nổi bật từ WordPress (category/tag: noi-bat / featured)
 * Tách biệt với sự kiện để tránh trùng lặp hiển thị trên trang chủ
 */
export async function getFeaturedNews(
  lang: string = 'vi',
  limit: number = 3,
): Promise<NewsEvent[]> {
  try {
    const allNews = await getNewsEvents(lang);
    const fallbackNewsOnly = getFallbackNews(lang).filter(
      (item) =>
        !item.isEvent &&
        !(item.category || '').toLowerCase().includes('kiện') &&
        !(item.category || '').toLowerCase().includes('event') &&
        !(item.category || '').toLowerCase().includes('活动'),
    );

    if (!allNews || allNews.length === 0) {
      return (fallbackNewsOnly.length > 0 ? fallbackNewsOnly : getFallbackNews(lang)).slice(0, limit);
    }

    // Tách riêng tin tức không phải sự kiện (loại trừ tất cả sự kiện)
    const newsOnly = allNews.filter((item) => {
      if (item.isEvent) return false;
      const slugs = item.categorySlugs || [];
      const names = item.categories || [];
      const catLower = (item.category || '').toLowerCase();
      const isAnEvent =
        slugs.some((s) => s.includes('su-kien') || s.includes('event') || s.includes('trien-lam')) ||
        names.some((n) => n.toLowerCase().includes('sự kiện') || n.toLowerCase().includes('event')) ||
        catLower.includes('kiện') ||
        catLower.includes('event') ||
        catLower.includes('活动') ||
        Boolean(item.eventDate);

      return !isAnEvent;
    });

    const targetPool = newsOnly.length > 0 ? newsOnly : allNews;

    // Lọc bài viết có category hoặc tag chứa từ khóa nổi bật / featured
    const featured = targetPool.filter((item) => {
      if (item.isFeatured) return true;
      const catLower = (item.category || '').toLowerCase();
      const slugs = item.categorySlugs || [];
      const names = item.categories || [];
      const tags = (item.tags || []).map((t) => t.toLowerCase());
      return (
        slugs.some((s) => s.includes('noi-bat') || s.includes('featured')) ||
        names.some((n) => n.toLowerCase().includes('nổi bật') || n.toLowerCase().includes('featured')) ||
        catLower.includes('nổi bật') ||
        catLower.includes('featured') ||
        tags.some((t) => t.includes('nổi bật') || t.includes('featured'))
      );
    });

    const chosen = featured.length > 0 ? featured : targetPool;
    if (chosen.length >= limit) {
      return chosen.slice(0, limit);
    }
    const chosenSlugs = new Set(chosen.map((e) => e.slug));
    const needed = fallbackNewsOnly.filter((f) => !chosenSlugs.has(f.slug));
    return [...chosen, ...needed].slice(0, limit);
  } catch {
    const fallbackNewsOnly = getFallbackNews(lang).filter(
      (item) =>
        !item.isEvent &&
        !(item.category || '').toLowerCase().includes('kiện') &&
        !(item.category || '').toLowerCase().includes('event') &&
        !(item.category || '').toLowerCase().includes('活动'),
    );
    return (fallbackNewsOnly.length > 0 ? fallbackNewsOnly : getFallbackNews(lang)).slice(0, limit);
  }
}
