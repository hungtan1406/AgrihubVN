import { Locale } from './types';

export interface ProductNameAcfFields {
  english_name?: unknown;
  name_en?: unknown;
  title_en?: unknown;
  chinese_name?: unknown;
  name_zh?: unknown;
  title_zh?: unknown;
  [key: string]: unknown;
}

export function hasVietnameseChars(str: string): boolean {
  return /[\u00C0-\u1EF9]/i.test(str);
}

function stripVietnameseDiacritics(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

function toTitleCaseAscii(str: string): string {
  return stripVietnameseDiacritics(str)
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Từ điển nguyên liệu nông sản Việt Nam chuẩn thương mại B2B (Xếp từ cụm dài -> ngắn)
 */
const INGREDIENT_DICTIONARY: Array<{
  vi: string;
  en: string;
  zh: string;
}> = [
  // Trái cây nhiệt đới & đặc sản
  { vi: 'thanh long ruột đỏ', en: 'Red Dragon Fruit', zh: '红心火龙果' },
  { vi: 'thanh long đỏ', en: 'Red Dragon Fruit', zh: '红心火龙果' },
  { vi: 'thanh long trắng', en: 'White Dragon Fruit', zh: '白心火龙果' },
  { vi: 'thanh long', en: 'Dragon Fruit', zh: '火龙果' },
  { vi: 'chanh dây', en: 'Passion Fruit', zh: '百香果' },
  { vi: 'chanh leo', en: 'Passion Fruit', zh: '百香果' },
  { vi: 'ổi hồng', en: 'Pink Guava', zh: '红心番石榴' },
  { vi: 'ổi trắng', en: 'White Guava', zh: '白心番石榴' },
  { vi: 'ổi', en: 'Guava', zh: '番石榴' },
  { vi: 'dưa lưới', en: 'Cantaloupe', zh: '哈密瓜' },
  { vi: 'dưa hoàng kim', en: 'Golden Melon', zh: '黄金瓜' },
  { vi: 'dưa gang', en: 'Muskmelon', zh: '甜瓜' },
  { vi: 'dưa hấu', en: 'Watermelon', zh: '西瓜' },
  { vi: 'chuối xanh', en: 'Green Banana', zh: '青香蕉' },
  { vi: 'chuối chín', en: 'Ripe Banana', zh: '熟香蕉' },
  { vi: 'chuối', en: 'Banana', zh: '香蕉' },
  { vi: 'mãng cầu xiêm', en: 'Soursop', zh: '刺果番荔枝' },
  { vi: 'mãng cầu na', en: 'Custard Apple', zh: '释迦果' },
  { vi: 'mãng cầu', en: 'Soursop', zh: '刺果番荔枝' },
  { vi: 'sầu riêng', en: 'Durian', zh: '榴莲' },
  { vi: 'măng cụt', en: 'Mangosteen', zh: '山竹' },
  { vi: 'chôm chôm', en: 'Rambutan', zh: '红毛丹' },
  { vi: 'vú sữa', en: 'Star Apple', zh: '牛奶果' },
  { vi: 'dâu tây', en: 'Strawberry', zh: '草莓' },
  { vi: 'dâu tằm', en: 'Mulberry', zh: '桑葚' },
  { vi: 'việt quất', en: 'Blueberry', zh: '蓝莓' },
  { vi: 'phúc bồn tử', en: 'Raspberry', zh: '覆盆子' },
  { vi: 'mâm xôi', en: 'Raspberry', zh: '树莓' },
  { vi: 'cam sành', en: 'King Orange', zh: '甜橙' },
  { vi: 'cam vàng', en: 'Navel Orange', zh: '脐橙' },
  { vi: 'chanh không hạt', en: 'Seedless Lime', zh: '无籽青柠' },
  { vi: 'chanh xanh', en: 'Green Lime', zh: '青柠' },
  { vi: 'chanh vàng', en: 'Lemon', zh: '柠檬' },
  { vi: 'bưởi da xanh', en: 'Pink Pomelo', zh: '青皮红心柚' },
  { vi: 'bưởi', en: 'Pomelo', zh: '柚子' },
  { vi: 'nước dừa', en: 'Coconut Water', zh: '椰子水' },
  { vi: 'cốt dừa', en: 'Coconut Milk', zh: '椰浆' },
  { vi: 'cơm dừa', en: 'Coconut Meat', zh: '椰肉' },
  { vi: 'xoài cát', en: 'Hoa Loc Mango', zh: '越南甜芒' },
  { vi: 'xoài xanh', en: 'Green Mango', zh: '青芒' },
  { vi: 'xoài', en: 'Mango', zh: '芒果' },
  { vi: 'khóm', en: 'Pineapple', zh: '凤梨' },
  { vi: 'thơm', en: 'Pineapple', zh: '凤梨' },
  { vi: 'dứa', en: 'Pineapple', zh: '菠萝' },
  { vi: 'dừa', en: 'Coconut', zh: '椰子' },
  { vi: 'vải thiều', en: 'Lychee', zh: '荔枝' },
  { vi: 'vải', en: 'Lychee', zh: '荔枝' },
  { vi: 'nhãn', en: 'Longan', zh: '龙眼' },
  { vi: 'mít', en: 'Jackfruit', zh: '菠萝蜜' },
  { vi: 'đu đủ', en: 'Papaya', zh: '木瓜' },
  { vi: 'tắc', en: 'Calamansi', zh: '金桔' },
  { vi: 'quất', en: 'Calamansi', zh: '金桔' },
  { vi: 'cam', en: 'Orange', zh: '甜橙' },
  { vi: 'quýt', en: 'Mandarin', zh: '柑橘' },
  { vi: 'chanh', en: 'Lime', zh: '青柠' },
  { vi: 'bơ', en: 'Avocado', zh: '牛油果' },
  { vi: 'lựu', en: 'Pomegranate', zh: '石榴' },
  { vi: 'đào', en: 'Peach', zh: '水蜜桃' },
  { vi: 'táo', en: 'Apple', zh: '苹果' },
  { vi: 'lê', en: 'Pear', zh: '梨' },
  { vi: 'nho', en: 'Grape', zh: '葡萄' },
  { vi: 'mận', en: 'Plum', zh: '李子' },
  { vi: 'mơ', en: 'Apricot', zh: '杏子' },
  { vi: 'me', en: 'Tamarind', zh: '罗望子' },
  { vi: 'khế', en: 'Starfruit', zh: '杨桃' },
  { vi: 'cóc', en: 'Ambarella', zh: '莎梨' },
  { vi: 'hồng xiêm', en: 'Sapodilla', zh: '人心果' },
  { vi: 'sapoche', en: 'Sapodilla', zh: '人心果' },
  { vi: 'sơ ri', en: 'Acerola Cherry', zh: '针叶樱桃' },
  { vi: 'gấc', en: 'Gac Fruit', zh: '木鳖果' },

  // Rau củ, nấm, đậu, ngũ cốc & gia vị
  { vi: 'khoai tây tím', en: 'Purple Potato', zh: '紫马铃薯' },
  { vi: 'khoai lang tím', en: 'Purple Sweet Potato', zh: '紫薯' },
  { vi: 'khoai lang vàng', en: 'Golden Sweet Potato', zh: '黄心红薯' },
  { vi: 'khoai lang', en: 'Sweet Potato', zh: '红薯' },
  { vi: 'khoai tây', en: 'Potato', zh: '马铃薯' },
  { vi: 'khoai môn', en: 'Taro', zh: '香芋' },
  { vi: 'nấm hương', en: 'Shiitake Mushroom', zh: '香菇' },
  { vi: 'nấm đông cô', en: 'Shiitake Mushroom', zh: '香菇' },
  { vi: 'nấm linh chi', en: 'Reishi Mushroom', zh: '灵芝' },
  { vi: 'nấm bào ngư', en: 'Oyster Mushroom', zh: '平菇' },
  { vi: 'đậu xanh', en: 'Mung Bean', zh: '绿豆' },
  { vi: 'đậu đỏ', en: 'Red Bean', zh: '红豆' },
  { vi: 'đậu đen', en: 'Black Bean', zh: '黑豆' },
  { vi: 'đậu nành', en: 'Soybean', zh: '大豆' },
  { vi: 'hạt sen', en: 'Lotus Seed', zh: '莲子' },
  { vi: 'củ sen', en: 'Lotus Root', zh: '莲藕' },
  { vi: 'củ dền', en: 'Beetroot', zh: '甜菜根' },
  { vi: 'cà rốt', en: 'Carrot', zh: '胡萝卜' },
  { vi: 'bí đỏ', en: 'Pumpkin', zh: '南瓜' },
  { vi: 'bí ngô', en: 'Pumpkin', zh: '南瓜' },
  { vi: 'cà chua', en: 'Tomato', zh: '番茄' },
  { vi: 'cần tây', en: 'Celery', zh: '芹菜' },
  { vi: 'rau má', en: 'Centella', zh: '积雪草' },
  { vi: 'cải bó xôi', en: 'Spinach', zh: '菠菜' },
  { vi: 'cải xoăn', en: 'Kale', zh: '羽衣甘蓝' },
  { vi: 'chùm ngây', en: 'Moringa', zh: '辣木叶' },
  { vi: 'diếp cá', en: 'Houttuynia', zh: '鱼腥草' },
  { vi: 'tía tô', en: 'Perilla', zh: '紫苏' },
  { vi: 'lá dứa', en: 'Pandan Leaf', zh: '斑兰叶' },
  { vi: 'hoa đậu biếc', en: 'Butterfly Pea Flower', zh: '蝶豆花' },
  { vi: 'trà xanh', en: 'Green Tea', zh: '绿茶' },
  { vi: 'cà phê', en: 'Coffee', zh: '咖啡' },
  { vi: 'ca cao', en: 'Cocoa', zh: '可可' },
  { vi: 'cacao', en: 'Cocoa', zh: '可可' },
  { vi: 'tỏi đen', en: 'Black Garlic', zh: '黑蒜' },
  { vi: 'tỏi', en: 'Garlic', zh: '大蒜' },
  { vi: 'gừng', en: 'Ginger', zh: '生姜' },
  { vi: 'nghệ', en: 'Turmeric', zh: '姜黄' },
  { vi: 'quế', en: 'Cinnamon', zh: '肉桂' },
  { vi: 'hồi', en: 'Star Anise', zh: '八角' },
  { vi: 'sả', en: 'Lemongrass', zh: '香茅' },
  { vi: 'hành tím', en: 'Shallot', zh: '红葱头' },
  { vi: 'hành tây', en: 'Onion', zh: '洋葱' },
  { vi: 'hành', en: 'Onion', zh: '洋葱' },
  { vi: 'tiêu đen', en: 'Black Pepper', zh: '黑胡椒' },
  { vi: 'tiêu trắng', en: 'White Pepper', zh: '白胡椒' },
  { vi: 'ớt', en: 'Chili', zh: '辣椒' },
  { vi: 'bắp', en: 'Sweet Corn', zh: '甜玉米' },
  { vi: 'ngô', en: 'Sweet Corn', zh: '甜玉米' },
  { vi: 'mè đen', en: 'Black Sesame', zh: '黑芝麻' },
  { vi: 'gạo lứt', en: 'Brown Rice', zh: '糙米' },
];

/**
 * Bản dịch chuẩn xác theo Slug cho các sản phẩm đặc thù trên hệ thống
 */
const SLUG_TRANSLATIONS: Record<string, { en: string; zh: string }> = {
  'san-pham': {
    en: 'Freeze-Dried Dragon Fruit (Export Grade)',
    zh: '冻干火龙果脆片 (出口级)',
  },
  'thanh-long-do': {
    en: 'Freeze-Dried Red Dragon Fruit',
    zh: '冻干红心火龙果脆片',
  },
  'dragon-fruit-powder': {
    en: 'Red Dragon Fruit Powder (Milled)',
    zh: '红心火龙果原粉 (低温研磨)',
  },
  'passion-fruit-powder': {
    en: 'Instant Passion Fruit Powder',
    zh: '速溶百香果粉 (喷雾干燥)',
  },
  'banana-powder': {
    en: 'Spray-Dried Banana Powder',
    zh: '喷雾干燥香蕉粉',
  },
  'freeze-dried-mango': {
    en: 'Freeze-Dried Mango Slices',
    zh: '冻干芒果脆片',
  },
  'freeze-dried-jackfruit': {
    en: 'Freeze-Dried Jackfruit',
    zh: '冻干菠萝蜜脆片',
  },
  'frozen-mango': {
    en: 'IQF Frozen Mango Chunks',
    zh: 'IQF 单体速冻芒果丁',
  },
  'frozen-dragon-fruit': {
    en: 'IQF Frozen Red Dragon Fruit Dices',
    zh: 'IQF 单体速冻红心火龙果丁',
  },
  'passion-fruit-puree': {
    en: 'Seedless Passion Fruit Puree',
    zh: '无籽百香果原浆',
  },
  'bot-oi-say-phun': {
    en: 'Spray-Dried Guava Powder',
    zh: '喷雾干燥番石榴粉',
  },
  'bot-oi-say-nghien': {
    en: 'Dried and Milled Guava Powder',
    zh: '烘干研磨番石榴粉',
  },
  'puree-oi': {
    en: 'Guava Purée',
    zh: '番石榴原果浆',
  },
  'oi-co-dac': {
    en: 'Guava Concentrate',
    zh: '番石榴浓缩汁/浆',
  },
  'bot-oi-hong': {
    en: 'Pink Guava Powder',
    zh: '红心番石榴粉',
  },
  'bot-dua-luoi': {
    en: 'Cantaloupe Powder',
    zh: '哈密瓜粉',
  },
  'bot-chiet-xuat-xoai': {
    en: 'Mango Extract Powder',
    zh: '芒果提取物粉',
  },
  'bot-chiet-xuat-thanh-long-do': {
    en: 'Red Dragon Fruit Extract Powder',
    zh: '红心火龙果提取物粉',
  },
  'bot-chiet-xuat-dua': {
    en: 'Pineapple Extract Powder',
    zh: '菠萝提取物粉',
  },
  'bot-vai': {
    en: 'Lychee Powder',
    zh: '荔枝粉',
  },
  'bot-xoai': {
    en: 'Mango Powder',
    zh: '芒果粉',
  },
  'bot-toi': {
    en: 'Garlic Powder',
    zh: '大蒜粉',
  },
  'bot-nam-huong': {
    en: 'Shiitake Mushroom Powder',
    zh: '香菇粉',
  },
  'bot-khoai-tay-tim': {
    en: 'Purple Potato Powder',
    zh: '紫马铃薯粉',
  },
  'bot-dau-xanh': {
    en: 'Mung Bean Powder',
    zh: '绿豆粉',
  },
  'bot-chuoi-xanh': {
    en: 'Green Banana Powder',
    zh: '青香蕉粉',
  },
  'nuoc-ep-xoai-co-dac': {
    en: 'Mango Juice Concentrate',
    zh: '浓缩芒果汁',
  },
  'nuoc-ep-vai-co-dac-dong-lanh': {
    en: 'Frozen Lychee Juice Concentrate',
    zh: '冷冻浓缩荔枝汁',
  },
  'nuoc-ep-tac-co-dac': {
    en: 'Calamansi Juice Concentrate',
    zh: '浓缩金桔汁',
  },
  'nuoc-ep-oi-hong-co-dac': {
    en: 'Pink Guava Juice Concentrate',
    zh: '浓缩红心番石榴汁',
  },
  'nuoc-dua-co-dac': {
    en: 'Coconut Water Concentrate',
    zh: '浓缩椰子水',
  },
  'chanh-day-co-dac': {
    en: 'Passion Fruit Concentrate',
    zh: '浓缩百香果浆',
  },
  'bot-gung': {
    en: 'Ginger Powder',
    zh: '生姜粉',
  },
  'bot-chanh-day': {
    en: 'Passion Fruit Powder',
    zh: '百香果粉',
  },
};

interface PatternRule {
  test: (norm: string) => RegExpMatchArray | null;
  formatEn: (ingEn: string) => string;
  formatZh: (ingZh: string) => string;
}

const COMPOSITIONAL_PATTERNS: PatternRule[] = [
  // Nước dừa cô đặc (trường hợp riêng trước khi tách "nước")
  {
    test: (s) => s.match(/^(nước dừa)\s+cô đặc\s+đông lạnh$/),
    formatEn: () => 'Frozen Coconut Water Concentrate',
    formatZh: () => '冷冻浓缩椰子水',
  },
  {
    test: (s) => s.match(/^(nước dừa)\s+cô đặc$/),
    formatEn: () => 'Coconut Water Concentrate',
    formatZh: () => '浓缩椰子水',
  },
  // Bột chiết xuất ...
  {
    test: (s) => s.match(/^bột chiết xuất\s+(.+?)(?:\s+sấy phun)?$/),
    formatEn: (ing) => `${ing} Extract Powder`,
    formatZh: (ing) => `${ing}提取物粉`,
  },
  {
    test: (s) => s.match(/^chiết xuất\s+(.+)$/),
    formatEn: (ing) => `${ing} Extract`,
    formatZh: (ing) => `${ing}提取物`,
  },
  // Nước ép ... cô đặc đông lạnh / cô đặc
  {
    test: (s) => s.match(/^nước ép\s+(.+?)\s+cô đặc\s+(?:cấp đông iqf|đông lạnh iqf|đông lạnh|cấp đông)$/),
    formatEn: (ing) => `Frozen ${ing} Juice Concentrate`,
    formatZh: (ing) => `冷冻浓缩${ing}汁`,
  },
  {
    test: (s) => s.match(/^nước ép\s+(.+?)\s+cô đặc$/),
    formatEn: (ing) => `${ing} Juice Concentrate`,
    formatZh: (ing) => `浓缩${ing}汁`,
  },
  {
    test: (s) => s.match(/^nước ép\s+(.+)$/),
    formatEn: (ing) => `${ing} Juice`,
    formatZh: (ing) => `${ing}汁`,
  },
  // Nước cốt / Puree ...
  {
    test: (s) => s.match(/^(?:nước cốt|puree|purée)\s+(.+?)\s+không hạt$/),
    formatEn: (ing) => `Seedless ${ing} Puree`,
    formatZh: (ing) => `无籽${ing}原浆`,
  },
  {
    test: (s) => s.match(/^(?:nước cốt|puree|purée)\s+(.+?)\s+cô đặc$/),
    formatEn: (ing) => `${ing} Puree Concentrate`,
    formatZh: (ing) => `浓缩${ing}果浆`,
  },
  {
    test: (s) => s.match(/^(?:nước cốt|puree|purée)\s+(.+?)\s+(?:đông lạnh|cấp đông|cấp đông iqf)$/),
    formatEn: (ing) => `Frozen ${ing} Puree`,
    formatZh: (ing) => `冷冻${ing}原浆`,
  },
  {
    test: (s) => s.match(/^(?:nước cốt|puree|purée)\s+(.+)$/),
    formatEn: (ing) => `${ing} Puree`,
    formatZh: (ing) => `${ing}原浆`,
  },
  // ... cô đặc
  {
    test: (s) => s.match(/^(.+?)\s+cô đặc\s+(?:đông lạnh|cấp đông)$/),
    formatEn: (ing) => `Frozen ${ing} Concentrate`,
    formatZh: (ing) => `冷冻浓缩${ing}浆`,
  },
  {
    test: (s) => s.match(/^(.+?)\s+cô đặc$/),
    formatEn: (ing) => `${ing} Concentrate`,
    formatZh: (ing) => `浓缩${ing}浆`,
  },
  // Bột ... + công nghệ sấy
  {
    test: (s) => s.match(/^bột\s+(.+?)\s+sấy phun$/),
    formatEn: (ing) => `Spray-Dried ${ing} Powder`,
    formatZh: (ing) => `喷雾干燥${ing}粉`,
  },
  {
    test: (s) => s.match(/^bột\s+(.+?)\s+sấy nghiền$/),
    formatEn: (ing) => `Dried and Milled ${ing} Powder`,
    formatZh: (ing) => `低温研磨${ing}粉`,
  },
  {
    test: (s) => s.match(/^bột\s+(.+?)\s+sấy thăng hoa$/),
    formatEn: (ing) => `Freeze-Dried ${ing} Powder`,
    formatZh: (ing) => `冻干${ing}粉`,
  },
  {
    test: (s) => s.match(/^bột\s+(.+?)\s+sấy lạnh$/),
    formatEn: (ing) => `Cold-Dried ${ing} Powder`,
    formatZh: (ing) => `冷风干燥${ing}粉`,
  },
  {
    test: (s) => s.match(/^bột\s+(.+?)\s+hòa tan$/),
    formatEn: (ing) => `Instant ${ing} Powder`,
    formatZh: (ing) => `速溶${ing}粉`,
  },
  {
    test: (s) => s.match(/^bột\s+(.+)$/),
    formatEn: (ing) => `${ing} Powder`,
    formatZh: (ing) => `${ing}粉`,
  },
  // Trái cây sấy / cấp đông
  {
    test: (s) => s.match(/^(.+?)\s+sấy thăng hoa$/),
    formatEn: (ing) => `Freeze-Dried ${ing}`,
    formatZh: (ing) => `冻干${ing}`,
  },
  {
    test: (s) => s.match(/^(.+?)\s+sấy dẻo$/),
    formatEn: (ing) => `Soft-Dried ${ing}`,
    formatZh: (ing) => `软烤${ing}干`,
  },
  {
    test: (s) => s.match(/^(.+?)\s+sấy lạnh$/),
    formatEn: (ing) => `Cold-Dried ${ing}`,
    formatZh: (ing) => `冷风干燥${ing}干`,
  },
  {
    test: (s) => s.match(/^(.+?)\s+sấy giòn$/),
    formatEn: (ing) => `Crispy Dried ${ing}`,
    formatZh: (ing) => `香脆${ing}干`,
  },
  {
    test: (s) => s.match(/^(.+?)\s+(?:sấy khô|sấy)$/),
    formatEn: (ing) => `Dried ${ing}`,
    formatZh: (ing) => `${ing}干`,
  },
  {
    test: (s) => s.match(/^(.+?)\s+(?:cấp đông iqf|đông lạnh iqf|iqf)$/),
    formatEn: (ing) => `IQF Frozen ${ing}`,
    formatZh: (ing) => `IQF速冻${ing}`,
  },
  {
    test: (s) => s.match(/^(.+?)\s+(?:đông lạnh|cấp đông)$/),
    formatEn: (ing) => `Frozen ${ing}`,
    formatZh: (ing) => `冷冻${ing}`,
  },
];

function matchIngredient(rawCore: string): { en: string; zh: string } | null {
  const cleaned = rawCore
    .replace(/\bagrihub\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

  for (const item of INGREDIENT_DICTIONARY) {
    if (cleaned === item.vi) {
      return { en: item.en, zh: item.zh };
    }
  }

  for (const item of INGREDIENT_DICTIONARY) {
    if (cleaned.includes(item.vi)) {
      return { en: item.en, zh: item.zh };
    }
  }

  return null;
}

function translateByComposition(
  viName: string,
  targetLang: 'en' | 'zh',
): string | null {
  const norm = viName
    .normalize('NFC')
    .replace(/\bagrihub\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

  if (!norm) return null;

  for (const rule of COMPOSITIONAL_PATTERNS) {
    const m = rule.test(norm);
    if (m) {
      const core = m[1] || '';
      const matched = matchIngredient(core);
      if (matched) {
        return targetLang === 'en'
          ? rule.formatEn(matched.en)
          : rule.formatZh(matched.zh);
      }
      // Nếu nguyên liệu mới lạ chưa có trong từ điển, vẫn dịch đúng cấu trúc quy cách cho tiếng Anh
      if (targetLang === 'en' && core) {
        return rule.formatEn(toTitleCaseAscii(core));
      }
    }
  }

  const direct = matchIngredient(norm);
  if (direct) {
    return targetLang === 'en' ? direct.en : direct.zh;
  }

  return null;
}

function pickCleanString(val: unknown): string {
  if (typeof val === 'string') {
    return val.replace(/<[^>]*>/g, '').trim();
  }
  return '';
}

/**
 * Chuyển đổi tên sản phẩm sang ngôn ngữ đích (vi | en | zh):
 * 1. Ưu tiên trường ACF nhập thủ công từ WordPress (english_name / name_en / chinese_name / name_zh)
 * 2. Ánh xạ chính xác theo phân tích cấu trúc tên Tiếng Việt & bảng chuẩn hóa Slug B2B
 * 3. Fallback an toàn không để lọt tiếng Việt có dấu hoặc slug in hoa thô
 */
export function localizeProductName(params: {
  viName: string;
  slug?: string;
  lang: Locale;
  acf?: ProductNameAcfFields;
  categoryGroup?: string;
}): string {
  const { viName, slug = '', lang, acf, categoryGroup } = params;
  const trimmedVi = (viName || '').trim();

  if (lang === 'vi') {
    return trimmedVi || slug.replace(/-/g, ' ');
  }

  // 1. Ưu tiên dữ liệu ACF từ WordPress nếu quản trị viên có nhập
  if (lang === 'en' && acf) {
    const manualEn =
      pickCleanString(acf.english_name) ||
      pickCleanString(acf.name_en) ||
      pickCleanString(acf.title_en);
    if (manualEn) return manualEn;
  }

  if (lang === 'zh' && acf) {
    const manualZh =
      pickCleanString(acf.chinese_name) ||
      pickCleanString(acf.name_zh) ||
      pickCleanString(acf.title_zh);
    if (manualZh) return manualZh;
  }

  // Trường hợp đặc biệt slug thanh-long-do là puree trên CMS cũ
  const normalizedSlug = slug.trim().toLowerCase();
  if (normalizedSlug === 'thanh-long-do' && categoryGroup === 'puree') {
    return lang === 'en'
      ? 'Red Dragon Fruit Puree (Concentrate)'
      : '红心火龙果原浆 (无菌包装)';
  }

  // 2. Phân tích cấu trúc trực tiếp từ tên Tiếng Việt (bám sát khi admin đổi tên trên WordPress)
  if (trimmedVi) {
    // Nếu tên vốn đã là tiếng Trung khi ở trang zh
    if (lang === 'zh' && /[\u4e00-\u9fff]/.test(trimmedVi) && !hasVietnameseChars(trimmedVi)) {
      return trimmedVi;
    }

    const composed = translateByComposition(trimmedVi, lang);
    if (composed) {
      // Nếu có bản dịch tinh chỉnh đặc thù theo slug và tên gốc chưa bị sửa sang loại khác, ưu tiên độ trau chuốt
      const slugEntry = SLUG_TRANSLATIONS[normalizedSlug];
      if (slugEntry && ['dragon-fruit-powder', 'passion-fruit-powder', 'freeze-dried-mango', 'freeze-dried-jackfruit', 'frozen-mango', 'frozen-dragon-fruit', 'passion-fruit-puree', 'bot-oi-say-phun', 'bot-oi-say-nghien', 'puree-oi', 'oi-co-dac', 'thanh-long-do', 'san-pham'].includes(normalizedSlug)) {
        return slugEntry[lang];
      }
      return composed;
    }
  }

  // 3. Tra bảng Slug chuẩn hóa
  if (normalizedSlug && SLUG_TRANSLATIONS[normalizedSlug]) {
    return SLUG_TRANSLATIONS[normalizedSlug][lang];
  }

  // 4. Nếu chuỗi đầu vào vốn đã là tiếng Anh sạch (không dấu tiếng Việt, không phải dạng slug gạch ngang)
  if (lang === 'en' && trimmedVi && !hasVietnameseChars(trimmedVi) && !trimmedVi.includes('-')) {
    return trimmedVi;
  }

  // 5. Fallback cuối cùng: chuyển sang Title Case không dấu (tránh in hoa toàn bộ kiểu BOT CHANH DAY)
  return toTitleCaseAscii(trimmedVi || normalizedSlug.replace(/-/g, ' '));
}
