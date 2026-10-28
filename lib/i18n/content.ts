import { Locale } from './types';

export interface ProductIngredient {
  id: string;
  category: 'powder' | 'puree' | 'dried' | 'frozen';
  categoryName: string;
  badgeColor: string;
  name: string;
  specs: string;
  moisture: string;
  mesh: string;
  brix: string;
  shelfLife: string;
  packaging: string;
  storage?: string;
  applications: string;
  image?: string;
}

export function getIngredients(lang: Locale): ProductIngredient[] {
  if (lang === 'en') {
    return [
      {
        id: 'dragon-fruit-powder',
        category: 'powder',
        categoryName: 'Milled Powder',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
        name: 'Red Dragon Fruit Powder (Milled)',
        specs: 'Moisture ≤ 5% | 80-100 mesh | 100% natural, clean-label',
        moisture: '≤ 5.0%',
        mesh: '80 - 100 mesh',
        brix: 'Natural fruit sugar',
        shelfLife: '12 months from manufacturing date',
        packaging: '10g - 5000g/bag or custom requested',
        storage: 'Store in a cool, dry place, avoid direct sunlight',
        applications:
          'Confectionery, nutrition beverages, yogurt, clean-label natural coloring.',
      },
      {
        id: 'passion-fruit-powder',
        category: 'powder',
        categoryName: 'Spray-Dried Powder',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
        name: 'Instant Passion Fruit Powder (Spray-Dried)',
        specs:
          'Solubility > 95% | Natural refreshing tartness | Rich in Vitamin C',
        moisture: '≤ 4.5%',
        mesh: '100 mesh',
        brix: 'Standardized upon request',
        shelfLife: '12 months from manufacturing date',
        packaging: '10g - 5000g/bag or custom requested',
        storage: 'Store in a cool, dry place, avoid direct sunlight',
        applications:
          'Fruit teas, beverage syrups, bakery fillings, gourmet ice cream.',
      },
      {
        id: 'banana-powder',
        category: 'powder',
        categoryName: 'Spray-Dried Powder',
        badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        name: 'Spray-Dried Banana Powder',
        specs:
          'Creamy yellow | Rich natural aroma | High dietary fiber & Potassium',
        moisture: '≤ 5.0%',
        mesh: '80 mesh',
        brix: 'Natural',
        shelfLife: '12 months from manufacturing date',
        packaging: '10g - 5000g/bag or custom requested',
        storage: 'Store in a cool, dry place, avoid direct sunlight',
        applications:
          'Breakfast cereals, baby food, protein smoothies, biscuits.',
      },
      {
        id: 'freeze-dried-mango',
        category: 'dried',
        categoryName: 'Freeze-Dried',
        badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
        name: 'Freeze-Dried Mango Slices',
        specs:
          'Moisture ≤ 3% | 5-7mm cut slices | Crisp texture, 98% nutrient retention',
        moisture: '≤ 3.0%',
        mesh: 'Slices / Diced / Granules',
        brix: 'Rich natural',
        shelfLife: '12 months from manufacturing date',
        packaging: '400g',
        storage: 'Store in a cool, dry place and seal tightly after use',
        applications:
          'Granola mixes, chocolate-enrobed fruit, gourmet dried fruit snacks.',
      },
      {
        id: 'freeze-dried-jackfruit',
        category: 'dried',
        categoryName: 'Freeze-Dried',
        badgeColor: 'bg-lime-100 text-lime-800 border-lime-200',
        name: 'Freeze-Dried Jackfruit',
        specs:
          'Golden amber | Authentic tropical aroma | Zero oil frying, zero added sugar',
        moisture: '≤ 4.0%',
        mesh: 'Whole / Half pods',
        brix: 'Natural',
        shelfLife: '12 months from manufacturing date',
        packaging: '400g',
        storage: 'Store in a cool, dry place and seal tightly after use',
        applications:
          'Healthy office snacks, fruit tea blends, gourmet bakery toppings.',
      },
      {
        id: 'frozen-mango',
        category: 'frozen',
        categoryName: 'Frozen Fruit (IQF)',
        badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
        name: 'IQF Frozen Mango Chunks',
        specs:
          'Individually Quick Frozen (-35°C) | 100% natural tropical aroma | 15x15mm diced / chunks',
        moisture: 'Frozen fruit chunks',
        mesh: '10-15mm diced / whole cheeks',
        brix: '13 - 15° Brix',
        shelfLife: '24 months from manufacturing date',
        packaging: '1kg/bag, 5kg/bag, 10kg/bag or custom requested',
        storage: '18 °C',
        applications:
          'Smoothie purees, beverage toppings, fruit bowls, industrial confectionery jams.',
      },
      {
        id: 'frozen-dragon-fruit',
        category: 'frozen',
        categoryName: 'Frozen Fruit (IQF)',
        badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
        name: 'IQF Frozen Red Dragon Fruit Dices',
        specs:
          'Individually Quick Frozen | 100% natural red flesh | 10x10mm uniform dices',
        moisture: 'Frozen fruit dices',
        mesh: '10x10mm uniform diced',
        brix: '10 - 12° Brix',
        shelfLife: '24 months from manufacturing date',
        packaging: '1kg/bag, 5kg/bag, 10kg/bag or custom requested',
        storage: '18 °C',
        applications:
          'Commercial fruit tea, smoothie packs, sorbet, dairy yogurt base.',
      },
      {
        id: 'passion-fruit-puree',
        category: 'puree',
        categoryName: 'Puree & Juice',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
        name: 'Seedless Passion Fruit Puree (Concentrate)',
        specs:
          'Brix 14-16% | Aseptic sterile processing | 100% pure concentrate',
        moisture: 'Smooth liquid puree',
        mesh: 'Filtered through 0.5mm mesh',
        brix: '14 - 16° Brix',
        shelfLife: '12 - 24 months',
        packaging:
          '1kg/bag, 5kg/bag, 10kg/bag, bottled or PET or custom requested',
        storage: '18°C',
        applications:
          'Beverage manufacturing, drinking yogurt, ice cream popsicles, F&B jams.',
      },
    ];
  }

  if (lang === 'zh') {
    return [
      {
        id: 'dragon-fruit-powder',
        category: 'powder',
        categoryName: '研磨果粉',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
        name: '红心火龙果粉（研磨粉）',
        specs: '水分 ≤ 5% | 80-100目 | 100%天然无防腐剂',
        moisture: '≤ 5.0%',
        mesh: '80 - 100 目',
        brix: '天然原果糖度',
        shelfLife: '自生产之日起12个月',
        packaging: '10g - 5000g/袋或按客户要求定制',
        storage: '阴凉干燥处存放，避免阳光直射',
        applications: '糖果烘焙、营养冲饮、酸奶乳品、清洁标签天然着色。',
      },
      {
        id: 'passion-fruit-powder',
        category: 'powder',
        categoryName: '喷雾干燥粉',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
        name: '速溶百香果粉（喷雾干燥）',
        specs: '溶解度 > 95% | 天然纯正清爽酸甜 | 富含维C与矿物质',
        moisture: '≤ 4.5%',
        mesh: '100 目',
        brix: '可按需标准化调配',
        shelfLife: '自生产之日起12个月',
        packaging: '10g - 5000g/袋或按客户要求定制',
        storage: '阴凉干燥处存放，避免阳光直射',
        applications: '调饮果茶、风味糖浆、西点烘焙夹心、高端冰淇淋。',
      },
      {
        id: 'banana-powder',
        category: 'powder',
        categoryName: '喷雾干燥粉',
        badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        name: '喷雾干燥香蕉粉',
        specs: '奶黄原色 | 浓郁香蕉天然风味 | 富含膳食纤维与钾元素',
        moisture: '≤ 5.0%',
        mesh: '80 目',
        brix: '天然',
        shelfLife: '自生产之日起12个月',
        packaging: '10g - 5000g/袋或按客户要求定制',
        storage: '阴凉干燥处存放，避免阳光直射',
        applications: '早餐饮食麦片、婴幼儿辅食、蛋白营养粉、饼干点心。',
      },
      {
        id: 'freeze-dried-mango',
        category: 'dried',
        categoryName: '冻干果品',
        badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
        name: '冻干芒果脆片（FD Mango）',
        specs: '水分 ≤ 3% | 5-7mm切片 | 口感酥脆，保留98%天然营养与金黄原色',
        moisture: '≤ 3.0%',
        mesh: '切片 / 丁块 / 颗粒碎',
        brix: '浓郁天然甜香',
        shelfLife: '自生产之日起12个月',
        packaging: '400g',
        storage: '置于阴凉干燥处，使用后密封保存',
        applications: '低卡格兰诺拉麦片、巧克力裹果干、高档休闲零食。',
      },
      {
        id: 'freeze-dried-jackfruit',
        category: 'dried',
        categoryName: '冻干果品',
        badgeColor: 'bg-lime-100 text-lime-800 border-lime-200',
        name: '冻干菠萝蜜瓣（FD Jackfruit）',
        specs: '自然金黄亮泽 | 保留浓郁原果香气 | 非油炸、零添加糖',
        moisture: '≤ 4.0%',
        mesh: '整瓣 / 半瓣',
        brix: '自然原味',
        shelfLife: '自生产之日起12个月',
        packaging: '400g',
        storage: '置于阴凉干燥处，使用后密封保存',
        applications: '健康轻食零食、花果茶原料、高端西点装饰。',
      },
      {
        id: 'frozen-mango',
        category: 'frozen',
        categoryName: '冷冻水果 (IQF)',
        badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
        name: 'IQF 单体速冻芒果丁',
        specs: 'IQF 单体速冻 (-35°C) | 保留热带原果纯甜风味 | 15x15mm 规则丁块',
        moisture: '冷冻原果丁',
        mesh: '10-15mm 丁块 / 半果瓣',
        brix: '13 - 15° Brix',
        shelfLife: '自生产之日起24个月',
        packaging: '1kg/袋、5kg/袋、10kg/袋或按客户要求定制',
        storage: '18 °C',
        applications: '现制茶饮鲜果顶料、冰沙泥原浆、水果酸奶捞、烘焙果酱。',
      },
      {
        id: 'frozen-dragon-fruit',
        category: 'frozen',
        categoryName: '冷冻水果 (IQF)',
        badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
        name: 'IQF 单体速冻红心火龙果丁',
        specs: '单体速冻锁鲜 | 100% 天然艳丽红心果肉 | 10x10mm 均一立方丁',
        moisture: '冷冻原果粒',
        mesh: '10x10mm 规则立方体',
        brix: '10 - 12° Brix',
        shelfLife: '自生产之日起24个月',
        packaging: '1kg/袋、5kg/袋、10kg/袋或按客户要求定制',
        storage: '18 °C',
        applications: '特调果茶调色调味、鲜榨果昔、冰淇淋雪葩原料。',
      },
      {
        id: 'passion-fruit-puree',
        category: 'puree',
        categoryName: '果浆浓缩汁',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
        name: '无籽百香果原浆（浓缩果汁）',
        specs: '糖度 14-16° Brix | 无菌无防腐剂灌装 | 100%浓郁纯浆',
        moisture: '细腻浓郁流体',
        mesh: '过 0.5mm 滤网去籽',
        brix: '14 - 16° Brix',
        shelfLife: '12 - 24 个月',
        packaging: '1kg/袋、5kg/袋、10kg/袋，瓶装或PET装或按客户要求定制',
        storage: '18°C',
        applications: '果汁饮料加工、风味酸奶、雪糕冰品、餐饮调味果酱。',
      },
    ];
  }

  // Default: Vietnamese
  return [
    {
      id: 'dragon-fruit-powder',
      category: 'powder',
      categoryName: 'Bột sấy nghiền',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      name: 'Bột Thanh Long Đỏ',
      specs: 'Độ ẩm ≤ 5% | 80-100 mesh | 100% tự nhiên không chất bảo quản',
      moisture: '≤ 5.0%',
      mesh: '80 - 100 mesh',
      brix: 'Tự nhiên từ quả',
      shelfLife: '12 tháng tính từ ngày sản xuất',
      packaging: '10g - 5000g/bịch hoặc theo yêu cầu khách hàng',
      storage: 'Nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp',
      applications:
        'Bánh kẹo, đồ uống dinh dưỡng, sữa chua, tạo màu tự nhiên Clean-label.',
    },
    {
      id: 'passion-fruit-powder',
      category: 'powder',
      categoryName: 'Bột sấy phun',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      name: 'Bột Chanh Dây Hòa Tan',
      specs:
        'Độ tan > 95% | Vị chua thanh tự nhiên | Giàu Vitamin C & khoáng chất',
      moisture: '≤ 4.5%',
      mesh: '100 mesh',
      brix: 'Chuẩn hóa theo yêu cầu',
      shelfLife: '12 tháng tính từ ngày sản xuất',
      packaging: '10g - 5000g/bịch hoặc theo yêu cầu khách hàng',
      storage: 'Nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp',
      applications: 'Trà trái cây, si-rô pha chế, nhân bánh ngọt, kem cao cấp.',
    },
    {
      id: 'banana-powder',
      category: 'powder',
      categoryName: 'Bột sấy phun',
      badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      name: 'Bột Chuối Sấy Phun',
      specs: 'Màu vàng kem | Hương thơm đậm đà | Dồi dào chất xơ & Kali',
      moisture: '≤ 5.0%',
      mesh: '80 mesh',
      brix: 'Tự nhiên',
      shelfLife: '12 tháng tính từ ngày sản xuất',
      packaging: '10g - 5000g/bịch hoặc theo yêu cầu khách hàng',
      storage: 'Nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp',
      applications:
        'Ngũ cốc ăn sáng, thức ăn dặm trẻ em, sinh tố protein, bánh quy.',
    },
    {
      id: 'freeze-dried-mango',
      category: 'dried',
      categoryName: 'Trái cây sấy',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
      name: 'Xoài Sấy Thăng Hoa',
      specs:
        'Độ ẩm ≤ 3% | Cắt lát 5-7mm | Giòn xốp, giữ nguyên 98% vi chất & màu vàng tươi',
      moisture: '≤ 3.0%',
      mesh: 'Lát cắt / Hạt lựu / Dạng mảnh vụn',
      brix: 'Đậm đà tự nhiên',
      shelfLife: '12 tháng tính từ ngày sản xuất',
      packaging: '400g',
      storage: 'Nơi khô ráo, thoáng mát và đóng kín sau khi dùng',
      applications:
        'Ngũ cốc Granola, socola bọc trái cây, snack trái cây sấy thượng hạng.',
    },
    {
      id: 'freeze-dried-jackfruit',
      category: 'dried',
      categoryName: 'Trái cây sấy',
      badgeColor: 'bg-lime-100 text-lime-800 border-lime-200',
      name: 'Mít Sấy Thăng Hoa',
      specs:
        'Màu vàng nghệ óng ả | Hương thơm nguyên bản | Không dầu chiên, không đường',
      moisture: '≤ 4.0%',
      mesh: 'Múi nguyên / Nửa múi',
      brix: 'Tự nhiên',
      shelfLife: '12 tháng tính từ ngày sản xuất',
      packaging: '400g',
      storage: 'Nơi khô ráo, thoáng mát và đóng kín sau khi dùng',
      applications:
        'Snack dinh dưỡng văn phòng, trà hoa quả sấy, nguyên liệu làm bánh cao cấp.',
    },
    {
      id: 'frozen-mango',
      category: 'frozen',
      categoryName: 'Trái cây đông lạnh',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      name: 'Xoài Cấp Đông IQF',
      specs:
        'Cấp đông nhanh IQF (-35°C) | 100% xoài ngọt tự nhiên | Cắt hạt lựu 15x15mm hoặc nửa quả',
      moisture: 'Dạng quả đông rời IQF',
      mesh: 'Cắt hạt lựu 10-15mm / Má xoài',
      brix: '13 - 15° Brix',
      shelfLife: '24 tháng kể từ ngày sản xuất',
      packaging:
        '1kg/bịch, 5kg/bịch, 10kg/bịch hoặc theo yêu cầu của khách hàng',
      storage: '18 °C',
      applications:
        'Làm sinh tố, topping trà trái cây, nguyên liệu kem bơ xoài, mứt F&B.',
    },
    {
      id: 'frozen-dragon-fruit',
      category: 'frozen',
      categoryName: 'Trái cây đông lạnh',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      name: 'Thanh Long Đỏ Cấp Đông IQF',
      specs:
        'Cấp đông IQF giữ màu đỏ thẫm tự nhiên | Cắt khối hạt lựu 10x10mm đều đặn',
      moisture: 'Dạng hạt đông rời IQF',
      mesh: 'Cắt hạt lựu 10x10mm',
      brix: '10 - 12° Brix',
      shelfLife: '24 tháng kể từ ngày sản xuất',
      packaging:
        '1kg/bịch, 5kg/bịch, 10kg/bịch hoặc theo yêu cầu của khách hàng',
      storage: '18 °C',
      applications:
        'Pha chế thức uống, sinh tố detox, sữa chua trái cây, làm thạch cao cấp.',
    },
    {
      id: 'passion-fruit-puree',
      category: 'puree',
      categoryName: 'Nước cốt',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      name: 'Nước Cốt Chanh Dây Không Hạt',
      specs:
        'Brix 14-16% | Công nghệ tiệt trùng Aseptic | 100% nguyên chất đậm đặc',
      moisture: 'Dạng lỏng sánh mịn',
      mesh: 'Lọc qua lưới 0.5mm',
      brix: '14 - 16° Brix',
      shelfLife: '12 - 24 tháng',
      packaging:
        '1kg/bịch, 5kg/bịch, 10kg/bịch, đóng chai hoặc PET hoặc theo yêu cầu của khách hàng',
      storage: '18°C',
      applications:
        'Sản xuất nước giải khát, sữa chua uống, kem que, mứt sốt F&B.',
    },
  ];
}

export function getFormTranslations(lang: Locale) {
  if (lang === 'en') {
    return {
      nameLabel: 'Contact Full Name *',
      namePlaceholder: 'e.g. John Smith',
      companyLabel: 'Company / Organization Name *',
      companyPlaceholder: 'e.g. Global Foods & Beverages Ltd.',
      emailLabel: 'Business Email *',
      emailPlaceholder: 'purchasing@company.com',
      phoneLabel: 'Phone / WhatsApp / WeChat *',
      phonePlaceholder: '+1 555 123 4567',
      purposeLabel: 'Primary Purpose of Inquiry *',
      purposeQuote: 'Bulk Industrial Ingredients Quotation (FCL / Pallets)',
      purposeSample: 'Request Free Lab Sample Kit (R&D Testing)',
      purposeOem: 'Custom Formulation & OEM/ODM Processing',
      purposeExport: 'International Export Procurement (Incoterms 2020)',
      purposeDistributor: 'Domestic Wholesale & Regional Distribution',
      categoryLabel: 'Interested Ingredient Category',
      catPowder: 'Fruit Powders',
      catDried: 'Freeze-Dried & Dehydrated Fruits',
      catFrozen: 'IQF Frozen Fruits',
      catPuree: 'Purees & Concentrates',
      catMultiple: 'Multiple Product Categories',
      detailsLabel:
        'Technical Specifications, Estimated Volume, or Delivery Port',
      detailsPlaceholder:
        'e.g. Inquiring for 500kg Red Dragon Fruit Powder 100-mesh delivered to Jebel Ali port, or requesting 200g Passion Fruit powder sample...',
      submitBtn: 'Submit B2B Inquiry → Response within 24 Hours',
      successTitle: '✓ Inquiry Received Successfully',
      successDesc:
        'Thank you for contacting Agrihub. Our B2B commercial export desk will reach out via Email / WhatsApp within 24 business hours.',
      anotherBtn: 'Submit Another Inquiry',
    };
  }

  if (lang === 'zh') {
    return {
      nameLabel: '联系人姓名 *',
      namePlaceholder: '例如：张经理 / 李总监',
      companyLabel: '企业 / 工厂名称 *',
      companyPlaceholder: '例如：某某食品工业制造有限公司',
      emailLabel: '企业商务邮箱 *',
      emailPlaceholder: 'purchasing@company.com',
      phoneLabel: '联系电话 / WhatsApp / 微信 *',
      phonePlaceholder: '+86 138 0000 0000',
      purposeLabel: '主要业务咨询目的 *',
      purposeQuote: '工业原料大宗采购报价（货柜/托盘）',
      purposeSample: '申请研发实验室免费样品包（Sample Kit）',
      purposeOem: 'OEM/ODM 定制代工与专属配方合作',
      purposeExport: '国际大宗出口贸易履约（遵循 Incoterms 2020）',
      purposeDistributor: '国内区域渠道与一级批发代理合作',
      categoryLabel: '意向采购原料品类',
      catPowder: '果粉系列 (Fruit Powders)',
      catDried: '冻干及烘干果品 (Dried Fruits)',
      catFrozen: '冷冻水果 (IQF Frozen)',
      catPuree: '果浆与浓缩原汁 (Purees & Juices)',
      catMultiple: '多种综合原料需求',
      detailsLabel: '具体技术规格要求、预估采购量或交货港口',
      detailsPlaceholder:
        '例如：咨询500kg红心火龙果粉（100目）CIF指定港口到岸价，或需要200g速溶百香果粉样品供实验室检测...',
      submitBtn: '提交商务咨询 → 24小时内专人答复',
      successTitle: '✓ 已成功接收您的商务咨询',
      successDesc:
        '感谢您的垂询！Agrihub 出口与商务团队将在24个工作小时内通过邮件或微信与您取得联系。',
      anotherBtn: '提交其他咨询',
    };
  }

  return {
    nameLabel: 'Họ và tên người liên hệ *',
    namePlaceholder: 'Nguyễn Văn A',
    companyLabel: 'Tên công ty / Doanh nghiệp *',
    companyPlaceholder: 'Công ty TNHH Thực phẩm...',
    emailLabel: 'Email doanh nghiệp *',
    emailPlaceholder: 'purchasing@company.com',
    phoneLabel: 'Số điện thoại / WhatsApp / WeChat *',
    phonePlaceholder: '+84 90 123 4567',
    purposeLabel: 'Mục đích liên hệ chính *',
    purposeQuote: 'Báo giá nguyên liệu công nghiệp (Sản lượng lớn)',
    purposeSample: 'Đăng ký nhận mẫu thử phòng Lab (Free Sample Kit)',
    purposeOem: 'Gia công OEM / Đặt hàng theo công thức riêng',
    purposeExport: 'Thương mại xuất khẩu quốc tế (Incoterms 2020)',
    purposeDistributor: 'Đăng ký Đại lý / Phân phối sỉ nội địa',
    categoryLabel: 'Nhóm nguyên liệu quan tâm',
    catPowder: 'Bột trái cây (Fruit Powders)',
    catDried: 'Trái cây sấy (Freeze-Dried Fruits)',
    catFrozen: 'Trái cây đông lạnh (Frozen IQF)',
    catPuree: 'Nước cốt & Puree (Fruit Concentrates)',
    catMultiple: 'Nhiều nhóm nguyên liệu',
    detailsLabel:
      'Chi tiết yêu cầu kỹ thuật, sản lượng dự kiến hoặc địa điểm giao hàng',
    detailsPlaceholder:
      'Ví dụ: Cần 500kg bột thanh long đỏ mesh 100 giao cảng Cát Lái hoặc cần mẫu thử 200g bột chanh dây test phòng Lab...',
    submitBtn: 'Gửi yêu cầu B2B → Cam kết phản hồi trong 24 giờ',
    successTitle: '✓ Đã tiếp nhận yêu cầu',
    successDesc:
      'Cảm ơn quý đối tác. Chuyên viên thương mại B2B của Agrihub sẽ liên hệ qua Email / WhatsApp trong vòng 24 giờ làm việc.',
    anotherBtn: 'Gửi yêu cầu khác',
  };
}

export function getHomePageUi(lang: Locale) {
  if (lang === 'en') {
    return {
      heroTagline: 'From Vietnamese Farms\nTo Global Markets',
      heroTrust: {
        exp: '10+ Years Export Experience',
        certs: 'HACCP • FSSC 22000 • ISO',
        markets: 'Global Export Markets',
      },
      about: {
        tag: 'Vietnamese Tropical Fruits',
        natural: '100% Natural',
        fruitList:
          'Mango, Red Dragon Fruit, Passion Fruit, Banana, Jackfruit...',
        qualityStat: 'Lab Verified Quality',
        originStat: 'Traceable Origin',
        title: 'ABOUT US',
        desc: 'Backed by over a decade of industry leadership, Agrihub supplies standardized, export-certified tropical fruit powders, freeze-dried fruits, and purees to food and beverage manufacturers worldwide. We partner directly with certified GAP cooperatives across Vietnam, applying modern drying and aseptic technologies to ensure steady batch-to-batch quality and complete compliance with international trade standards.',
        quoteBtn: 'Request Quote & Free Samples',
        moreBtn: 'Explore Agrihub Profile',
      },
      audience: [
        {
          code: 'F&B',
          title: 'Food & Beverage Processors',
          desc: 'High-volume consistency, uniform moisture and fine mesh sizes, standardized sensory parameters for automated manufacturing.',
          btn: 'View Specs & Lab Samples',
        },
        {
          code: 'EXP',
          title: 'Global Commodity Importers',
          desc: 'Dependable container-scale shipments, rigorous export documentation (CO, Phytosanitary, Halal, ISO), decade-long international trade track record.',
          btn: 'Export Dossier & Logistics',
        },
        {
          code: 'OEM',
          title: 'Private Label & OEM Brands',
          desc: 'Custom R&D formulations, tailor-made mesh/brix parameters, and industrial private labeling built for commercial scalability.',
          btn: 'OEM Process Workflow',
        },
        {
          code: 'DIST',
          title: 'Domestic Wholesale Distributors',
          desc: 'Direct factory pricing, reliable inventory buffer in central warehouses, and dedicated regional distributor support policies.',
          btn: 'Distribution Policy',
        },
      ],
      tds: {
        specLabel: 'Specifications:',
        appLabel: 'Applications:',
        packagingLabel: 'Packaging:',
        shelfLifeLabel: 'Shelf Life:',
        storageLabel: 'Storage:',
        storageTempLabel: 'Storage Temperature:',
        packagingValue: '10g - 5000g/bag or custom requested',
        shelfLifeValue: '12 months from manufacturing date',
        storageValue: 'Store in cool, dry place, avoid direct sunlight',
        driedPackagingValue: '400g',
        driedStorageValue:
          'Store in a cool, dry place and seal tightly after use',
        pureePackagingValue:
          '1kg/bag, 5kg/bag, 10kg/bag, bottled or PET or custom requested',
        pureeStorageValue: '18°C',
        frozenPackagingValue: '1kg/bag, 5kg/bag, 10kg/bag or custom requested',
        frozenShelfLifeValue: '24 months from manufacturing date',
        frozenStorageValue: '18 °C',
        viewBtn: 'View TDS Spec',
        sampleBtn: 'Request Sample',
        modalTitle: 'Technical Data Sheet (TDS)',
        moisture: 'Moisture Content:',
        mesh: 'Mesh / Granulation:',
        brix: 'Soluble Solids (Brix):',
        shelfLife: 'Shelf Life:',
        packaging: 'Packaging Standards:',
        applications: 'Commercial Applications:',
        notice:
          '[Note: All technical specifications can be customized according to client formulations and plant machinery]',
        close: 'Close',
        quote: 'Request Quote & Sample Kit',
      },
      oem: {
        pillars: [
          {
            title: 'STANDARD GROWING AREAS',
            image: '/images/services/vung-trong.png',
            alt: 'Standard Growing Areas',
          },
          {
            title: 'FACTORY RAW MATERIAL PROCESSING',
            image: '/images/services/nha-may.png',
            alt: 'Factory Raw Material Processing',
          },
          {
            title: 'FINISHED PRODUCTS BY AGRIHUB',
            image: '/images/services/thanh-pham.png',
            alt: 'Finished Products by Agrihub',
          },
        ],
        steps: [
          {
            step: '01',
            title: 'Requirement Intake',
            desc: 'Analyze target moisture, brix, granulation mesh, and packaging requirements. Execute confidentiality agreement (NDA).',
          },
          {
            step: '02',
            title: 'R&D Formulation',
            desc: 'Conduct pilot trials in our dedicated R&D lab and dispatch sample kits with Certificate of Analysis (COA) for client testing.',
          },
          {
            step: '03',
            title: 'Pilot Batch Run',
            desc: 'Run industrial-scale test batches to evaluate product sensory consistency, reconstitution rates, and shelf-life stability.',
          },
          {
            step: '04',
            title: 'Mass Manufacturing',
            desc: 'Execute automated closed-loop production under strict food safety and microbiological monitoring.',
          },
          {
            step: '05',
            title: 'Private Label & Export',
            desc: 'Apply custom client branding, batch lot labeling, and complete export customs dossier handover.',
          },
        ],
        ctaTitle:
          'Have a proprietary formula or specialized ingredient specifications?',
        ctaDesc:
          'Agrihub supports partners from initial lab validation through multi-container export shipments.',
        ctaBtn: 'Request OEM Quote & Consultation',
      },
      supply: {
        stat1: 'Years of Export',
        stat2: 'Processing Facility Area',
        stat3: 'Metric Tons / Year',
        stat4: 'Partner Orchard Cooperatives',
        card1Title: 'Sustainably Sourced Vietnamese Orchards',
        card1Desc:
          'Direct partnerships with agricultural cooperatives across prime tropical fruit regions in Vietnam (Mekong Delta, Central Highlands, Binh Thuan). Fresh harvests with strict soil, water, and residue controls.',
        card1Notice:
          '[Verified GAP-certified cooperatives and seasonal harvest records available upon request]',
        card2Title: 'Industrial Dehydration & Infrastructure',
        card2Desc:
          'Industrial freeze-drying chambers, convective heat dehydration, and ultra-fine milling lines. Humidity- and climate-controlled storage maintaining year-round consistent ingredient quality.',
        card2Notice:
          '[Automated processing lines and cold storage facility photos available in Company Profile]',
      },
      quality: {
        cards: [
          {
            code: 'HACCP',
            title: 'Hazard Analysis & Critical Control Points',
            desc: 'Systematic preventive approach to food safety biological, chemical, and physical hazards.',
            badge: 'AUDITED & CERTIFIED',
            logo: '/images/certifications/haccp.png',
          },
          {
            code: 'FSSC 22000',
            title: 'Food Safety System Certification',
            desc: 'GFSI-recognized global standard ensuring complete integrity across processing operations.',
            badge: 'GFSI BENCHMARKED',
            logo: '/images/certifications/fssc-22000.png',
          },
          {
            code: 'ISO 22000',
            title: 'Food Safety Management Systems',
            desc: 'International management standard covering end-to-end supply chain controls.',
            badge: 'GLOBALLY ACCREDITED',
            logo: '/images/certifications/iso-22000.png',
          },
        ],
        coaTitle:
          'Mandatory Certificate of Analysis (COA) dispatched with every shipment:',
        coaPhysical: 'Physical & Chemical:',
        coaPhysicalDesc:
          'Moisture, total ash, brix, heavy metals (Pb, As, Cd).',
        coaMicro: 'Microbiological:',
        coaMicroDesc: 'E.coli, Coliforms, Salmonella, Yeasts and Molds.',
        coaResidue: 'Residue Safety:',
        coaResidueDesc:
          'Guaranteed pesticide residues well below international maximum residue limits (MRLs).',
      },
      global: {
        marketsTitle: 'Proven Global Export Destinations',
        uae: 'United Arab Emirates',
        uaeNote: 'Middle East Hub',
        bulgaria: 'Bulgaria',
        bulgariaNote: 'Eastern European Gateway',
        china: 'China',
        chinaNote: 'High-Volume Raw Material Market',
        cambodia: 'Cambodia',
        cambodiaNote: 'Southeast Asian Trading Partner',
        showsTitle: 'International Trade Expos & Industry Fairs',
        tagMiddleEast: 'Middle East',
        tagEastEurope: 'Eastern Europe',
        tagIntl: 'International',
        tagAfrica: 'Africa',
      },
    };
  }

  if (lang === 'zh') {
    return {
      heroTagline: '源自越南农场\n服务全球市场',
      heroTrust: {
        exp: '10+ 年出海履约经验',
        certs: 'HACCP • FSSC 22000 • ISO',
        markets: '全球主流出口市场',
      },
      about: {
        tag: '越南核心热带水果',
        natural: '100% 天然纯正',
        fruitList: '芒果、红心火龙果、百香果、香蕉、菠萝蜜...',
        qualityStat: '实验室质检合格',
        originStat: '全程可追溯',
        title: '关于我们',
        desc: '凭借十余年深耕热带农产品深加工领域的丰富经验，Agrihub 常年为全球食品与饮料工业制造客户提供高规格、符合国际标准的优质果粉、冻干果脆及高浓度果浆原汁。我们与越南湄公河三角洲及西原高原等核心水果产区的 GAP 认证示范基地深度绑定，融合先进冷冻干燥与无菌灌装工艺，确保批次理化指标稳定均一，全面满足国际严苛出口标准。',
        quoteBtn: '获取报价与样品',
        moreBtn: '了解更多企业背景',
      },
      audience: [
        {
          code: 'F&B',
          title: '食品与饮料制造工厂',
          desc: '常年充足货源保障，含水率与目数高度均一，色泽与风味完全标准化，完美适配自动化工业流水线。',
          btn: '查看规格书与样品',
        },
        {
          code: 'EXP',
          title: '大宗国际进出口商',
          desc: '整柜大宗稳定交付，全套出口通关单证（CO、植检证、Halal、ISO），深耕中东、东欧及亚洲市场十余年。',
          btn: '出口资质与履约',
        },
        {
          code: 'OEM',
          title: '自有品牌与 OEM 客户',
          desc: '按需定向配方研发，专属微调目数/糖度等关键参数，支持工业级与零售级私标包装量产。',
          btn: 'OEM 代工合作流程',
        },
        {
          code: 'DIST',
          title: '区域渠道与一级批发商',
          desc: '工厂源头一级批发让利，中心仓常年安全现货储备，严格规范的区域渠道与代理商保护机制。',
          btn: '分销与经销政策',
        },
      ],
      tds: {
        specLabel: '技术特性：',
        appLabel: '应用领域：',
        packagingLabel: '包装规格:',
        shelfLifeLabel: '保质期:',
        storageLabel: '储存条件:',
        storageTempLabel: '储存温度:',
        packagingValue: '10g - 5000g/袋或按客户要求定制',
        shelfLifeValue: '自生产之日起12个月',
        storageValue: '阴凉干燥处存放，避免阳光直射',
        driedPackagingValue: '400g',
        driedStorageValue: '置于阴凉干燥处，使用后密封保存',
        pureePackagingValue:
          '1kg/袋、5kg/袋、10kg/袋，瓶装或PET装或按客户要求定制',
        pureeStorageValue: '18°C',
        frozenPackagingValue: '1kg/袋、5kg/袋、10kg/袋或按客户要求定制',
        frozenShelfLifeValue: '自生产之日起24个月',
        frozenStorageValue: '18 °C',
        viewBtn: '查看 TDS 参数',
        sampleBtn: '索取样品',
        modalTitle: '产品技术参数表 (TDS)',
        moisture: '水分含量 (Moisture):',
        mesh: '细度目数 (Mesh):',
        brix: '糖度 (Brix):',
        shelfLife: '保质期:',
        packaging: '包装规格:',
        applications: '工业应用:',
        notice: '[注：所有技术参数均可根据客户专属工艺配方与进料设备灵活定制]',
        close: '关闭',
        quote: '获取报价与样品',
      },
      oem: {
        pillars: [
          {
            title: '标准化种植基地',
            image: '/images/services/vung-trong.png',
            alt: '标准化种植基地',
          },
          {
            title: '工厂原料精细加工',
            image: '/images/services/nha-may.png',
            alt: '工厂原料精细加工',
          },
          {
            title: 'AGRIHUB 供应终端成品',
            image: '/images/services/thanh-pham.png',
            alt: 'AGRIHUB 供应终端成品',
          },
        ],
        steps: [
          {
            step: '01',
            title: '需求沟通',
            desc: '深入沟通含水率、糖度、目数要求及产线设备规格，签署保密协议（NDA）。',
          },
          {
            step: '02',
            title: '配方研发与打样',
            desc: '实验室小试复配调样，寄送免费样品包及第三方分析报告（COA）供客户测试。',
          },
          {
            step: '03',
            title: '中试放大验证',
            desc: '在工业化生产线上运行小批量中试，全方位评估成品风味、溶解度与理化稳定性。',
          },
          {
            step: '04',
            title: '大规模量产',
            desc: '全封闭洁净车间规模化量产，严格把关微生物、农残及重金属各项检测指标。',
          },
          {
            step: '05',
            title: '私标包装与出厂',
            desc: '定制客户专属品牌包装，喷涂批次追溯码，完成出厂检验并交付全套关务单证。',
          },
        ],
        ctaTitle: '拥有独家配方或需要定制特殊规格农产原料？',
        ctaDesc:
          'Agrihub 提供从初期实验室小试到整柜大宗出口的全周期技术与产能支持。',
        ctaBtn: '获取 OEM 咨询与报价',
      },
      supply: {
        stat1: '年出口经验',
        stat2: '生产基地面积',
        stat3: '年综合产能',
        stat4: '示范合作种植园',
        card1Title: '源自越南核心热带水果示范基地',
        card1Desc:
          '与湄公河三角洲、西原高原及平顺等核心产区优质农业合作社深度绑定，严把采收时令，严格管控土壤、水质与农药残留。',
        card1Notice: '[GAP 认证合作基地及采收档案随时备索]',
        card2Title: '先进深加工工艺与完备仓储基建',
        card2Desc:
          '配备工业级冷冻干燥机组（FD）、对流烘干设备及超细气流粉碎生产线，配备恒温恒湿大型仓储库，确保全年品质均一如一。',
        card2Notice: '[全套现代化加工车间与冷库图纸见企业资质册]',
      },
      quality: {
        cards: [
          {
            code: 'HACCP',
            title: '危害分析与关键控制点体系',
            desc: '严格管控加工全流程微生物、物理及化学危害，逐批监测保障品质。',
            badge: '严苛审核',
            logo: '/images/certifications/haccp.png',
          },
          {
            code: 'FSSC 22000',
            title: '全球食品安全体系认证',
            desc: 'GFSI 认可的国际权威体系，符合全球大型跨国食品企业的供货标准。',
            badge: 'GFSI 认可',
            logo: '/images/certifications/fssc-22000.png',
          },
          {
            code: 'ISO 22000',
            title: '食品安全管理体系',
            desc: '国际标准化组织权威标准，覆盖从原料进厂到成品出厂的全过程把控。',
            badge: '体系认证',
            logo: '/images/certifications/iso-22000.png',
          },
        ],
        coaTitle: '每批次出运货物均附带权威质检检测报告（COA）：',
        coaPhysical: '理化指标：',
        coaPhysicalDesc: '水分、总灰分、糖度、重金属（铅、砷、镉）。',
        coaMicro: '微生物学：',
        coaMicroDesc: '大肠杆菌、大肠菌群、沙门氏菌、酵母菌与霉菌。',
        coaResidue: '农残与安全性：',
        coaResidueDesc: '严苛把关，确保各项农药残留指标均优于国际安全限值。',
      },
      global: {
        marketsTitle: '主要出口市场与成功履约国家',
        uae: '阿拉伯联合酋长国',
        uaeNote: '中东枢纽市场',
        bulgaria: '保加利亚',
        bulgariaNote: '东欧门户市场',
        china: '中国',
        chinaNote: '大宗食品工业原料核心市场',
        cambodia: '柬埔寨',
        cambodiaNote: '东南亚近邻贸易伙伴',
        showsTitle: '常年参展的国际顶级食品展会',
        tagMiddleEast: '中东',
        tagEastEurope: '东欧',
        tagIntl: '国际',
        tagAfrica: '非洲',
      },
    };
  }

  // Default: Vietnamese
  return {
    heroTagline: 'TỪ NÔNG TRẠI VIỆT NAM\nĐẾN THỊ TRƯỜNG THẾ GIỚI',
    heroTrust: {
      exp: '10+ năm kinh nghiệm xuất khẩu',
      certs: 'HACCP • FSSC 22000 • ISO',
      markets: 'Thị trường toàn cầu',
    },
    about: {
      tag: 'Vietnamese Tropical Fruits',
      natural: '100% Tự Nhiên',
      fruitList: 'Xoài cát, Thanh long đỏ, Chanh dây, Chuối, Mít...',
      qualityStat: 'Chất lượng kiểm định',
      originStat: 'Truy xuất nguồn gốc',
      title: 'VỀ CHÚNG TÔI',
      desc: 'Hơn 10 năm kinh nghiệm chuyên cung cấp các giải pháp nguyên liệu nông sản chất lượng cao, chúng tôi không ngừng nuôi dưỡng mạng lưới đối tác toàn cầu và thúc đẩy văn hóa cải tiến liên tục trong mọi hoạt động. Sở hữu đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi tự tin là giải pháp kết nối toàn diện – mang đến cho Quý khách hàng các sản phẩm chất lượng cao, chuỗi cung ứng tối ưu cùng cơ hội mở rộng thị trường quốc tế nhanh chóng và hiệu quả.',
      quoteBtn: 'Xin báo giá & Nhận mẫu thử',
      moreBtn: 'Xem thêm về Agrihub',
    },
    audience: [
      {
        code: 'F&B',
        title: 'Nhà máy sản xuất F&B',
        desc: 'Nguyên liệu ổn định, độ mịn & độ ẩm đồng nhất, màu sắc và dinh dưỡng chuẩn hóa cho dây chuyền công nghiệp.',
        btn: 'Xem Spec & Mẫu Lab',
      },
      {
        code: 'EXP',
        title: 'Nhà Nhập Khẩu Quốc Tế',
        desc: 'Nguồn hàng tin cậy, đầy đủ hồ sơ xuất khẩu (CO-CQ, Phyto), giàu kinh nghiệm giao thương Trung Đông, châu Phi, Nga, châu Á.',
        btn: 'Hồ sơ xuất khẩu',
      },
      {
        code: 'OEM',
        title: 'Thương Hiệu Cần OEM',
        desc: 'Gia công theo công thức độc quyền, tùy chỉnh thông số kỹ thuật (độ ẩm, độ mịn, brix) và đóng gói thành phẩm nhãn riêng.',
        btn: 'Quy trình OEM',
      },
      {
        code: 'DIST',
        title: 'Đại Lý Phân Phối Nội Địa',
        desc: 'Sản phẩm chất lượng cao, giá sỉ cạnh tranh từ nhà máy, nguồn hàng sẵn kho và chính sách bảo vệ đại lý.',
        btn: 'Chính sách Đại lý',
      },
    ],
    tds: {
      specLabel: 'Đặc tính:',
      appLabel: 'Ứng dụng:',
      packagingLabel: 'Quy cách đóng gói:',
      shelfLifeLabel: 'Hạn sử dụng:',
      storageLabel: 'Bảo quản:',
      storageTempLabel: 'Nhiệt độ bảo quản:',
      packagingValue: '10g - 5000g/bịch hoặc theo yêu cầu khách hàng',
      shelfLifeValue: '12 tháng tính từ ngày sản xuất',
      storageValue: 'Nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp',
      driedPackagingValue: '400g',
      driedStorageValue: 'Nơi khô ráo, thoáng mát và đóng kín sau khi dùng',
      pureePackagingValue:
        '1kg/bịch, 5kg/bịch, 10kg/bịch, đóng chai hoặc PET hoặc theo yêu cầu của khách hàng',
      pureeStorageValue: '18°C',
      frozenPackagingValue:
        '1kg/bịch, 5kg/bịch, 10kg/bịch hoặc theo yêu cầu của khách hàng',
      frozenShelfLifeValue: '24 tháng kể từ ngày sản xuất',
      frozenStorageValue: '18 °C',
      viewBtn: 'Xem bảng TDS',
      sampleBtn: 'Xin mẫu test',
      modalTitle: 'Technical Data Sheet (TDS)',
      moisture: 'Độ ẩm (Moisture):',
      mesh: 'Độ mịn (Mesh):',
      brix: 'Độ ngọt (Brix):',
      shelfLife: 'Hạn sử dụng:',
      packaging: 'Quy cách đóng gói:',
      applications: 'Ứng dụng sản xuất:',
      notice:
        '[Lưu ý: Mọi thông số kỹ thuật có thể tùy chỉnh theo công thức và dây chuyền của khách hàng]',
      close: 'Đóng',
      quote: 'Yêu cầu Báo giá & Mẫu thử',
    },
    oem: {
      pillars: [
        {
          title: 'VÙNG TRỒNG ĐẠT CHUẨN',
          image: '/images/services/vung-trong.png',
          alt: 'Vùng trồng đạt chuẩn',
        },
        {
          title: 'GIA CÔNG NGUYÊN LIỆU NHÀ MÁY',
          image: '/images/services/nha-may.png',
          alt: 'Gia công nguyên liệu nhà máy',
        },
        {
          title: 'THÀNH PHẨM AGRIHUB CUNG CẤP',
          image: '/images/services/thanh-pham.png',
          alt: 'Thành phẩm Agrihub cung cấp',
        },
      ],
      steps: [
        {
          step: '01',
          title: 'Tiếp nhận đề bài',
          desc: 'Phân tích yêu cầu về độ ẩm, brix, độ mịn mesh và thiết bị nạp liệu. Ký thỏa thuận bảo mật NDA.',
        },
        {
          step: '02',
          title: 'R&D & Mẫu Lab',
          desc: 'Thử nghiệm công thức tại phòng Lab và gửi mẫu thử miễn phí kèm phiếu kiểm nghiệm (COA) để kiểm tra.',
        },
        {
          step: '03',
          title: 'Sản xuất Pilot',
          desc: 'Chạy thử nghiệm mẻ nhỏ trên dây chuyền công nghiệp để đánh giá độ ổn định và cảm quan thành phẩm.',
        },
        {
          step: '04',
          title: 'Sản xuất hàng loạt',
          desc: 'Vận hành sản xuất theo quy trình khép kín, kiểm nghiệm vi sinh và kim loại nặng nghiêm ngặt.',
        },
        {
          step: '05',
          title: 'Đóng gói Private Label',
          desc: 'Đóng gói bao bì thương hiệu riêng, dán nhãn thông tin kỹ thuật và bàn giao đầy đủ chứng từ xuất xưởng.',
        },
      ],
      ctaTitle:
        'Bạn có công thức riêng hoặc muốn tùy chỉnh quy cách nguyên liệu?',
      ctaDesc:
        'Agrihub hỗ trợ từ giai đoạn mẫu thử nghiệm nhỏ đến sản xuất quy mô container.',
      ctaBtn: 'Yêu cầu tư vấn & Báo giá OEM',
    },
    supply: {
      stat1: 'Năm xuất khẩu',
      stat2: 'Diện tích nhà xưởng',
      stat3: 'Sản lượng tấn/năm',
      stat4: 'Vùng trồng liên kết',
      card1Title: 'Vùng nguyên liệu nông sản Việt Nam',
      card1Desc:
        'Agrihub liên kết chặt chẽ với các vùng chuyên canh nông sản trù phú (ĐBSCL, Tây Nguyên, Bình Thuận...). Trái cây tươi được thu hoạch đúng vụ, kiểm soát chặt chẽ dư lượng thuốc BVTV từ nguồn đất và nguồn nước.',
      card1Notice:
        '[CẦN BỔ SUNG: Bản đồ vùng trồng liên kết cụ thể & ảnh chụp mùa vụ]',
      card2Title: 'Công nghệ sấy & Cơ sở hạ tầng',
      card2Desc:
        'Hệ thống máy sấy thăng hoa (Freeze-drying), sấy nhiệt đối lưu và máy nghiền bột công nghiệp khép kín. Kho bảo quản kiểm soát độ ẩm và nhiệt độ nghiêm ngặt giúp bảo đảm chất lượng nguyên liệu quanh năm.',
      card2Notice:
        '[CẦN BỔ SUNG: Ảnh chụp dây chuyền máy móc & hệ thống kho bảo quản]',
    },
    quality: {
      cards: [
        {
          code: 'HACCP',
          title: 'Kiểm soát điểm tới hạn',
          desc: 'Phòng ngừa và kiểm soát triệt để các mối nguy sinh học, hóa học và vật lý trên từng mẻ nguyên liệu.',
          badge: 'ĐÃ CHỨNG NHẬN',
          logo: '/images/certifications/haccp.png',
        },
        {
          code: 'FSSC 22000',
          title: 'An toàn thực phẩm toàn cầu',
          desc: 'Chứng nhận tiêu chuẩn quốc tế được GFSI công nhận, đáp ứng tiêu chí khắt khe của các tập đoàn F&B.',
          badge: 'CHUẨN GFSI',
          logo: '/images/certifications/fssc-22000.png',
        },
        {
          code: 'ISO 22000',
          title: 'Quản lý an toàn thực phẩm',
          desc: 'Kiểm soát rủi ro an toàn thực phẩm toàn diện xuyên suốt chuỗi chế biến, sấy nghiền và đóng gói.',
          badge: 'QUỐC TẾ CÔNG NHẬN',
          logo: '/images/certifications/iso-22000.png',
        },
      ],
      coaTitle:
        'Cam kết cung cấp COA (Certificate of Analysis) đi kèm từng lô hàng:',
      coaPhysical: 'Vật lý & Hóa học:',
      coaPhysicalDesc: 'Độ ẩm, tro tổng số, brix, kim loại nặng (Pb, As, Cd).',
      coaMicro: 'Vi sinh vật:',
      coaMicroDesc: 'E.coli, Coliforms, Salmonella, Nấm men và nấm mốc.',
      coaResidue: 'Dư lượng:',
      coaResidueDesc:
        'Đảm bảo không dư lượng hóa chất BVTV ngoài ngưỡng cho phép.',
    },
    global: {
      marketsTitle: 'Thị trường xuất khẩu đã giao thương thành công',
      uae: 'UAE',
      uaeNote: 'Các Tiểu Vương Quốc Ả Rập Thống Nhất',
      bulgaria: 'Bulgaria',
      bulgariaNote: 'Cửa ngõ thị trường Đông Âu',
      china: 'Trung Quốc',
      chinaNote: 'Thị trường nguyên liệu quy mô lớn',
      cambodia: 'Campuchia',
      cambodiaNote: 'Đối tác thương mại Đông Nam Á',
      showsTitle: 'Hội chợ & Triển lãm quốc tế đã tham gia',
      tagMiddleEast: 'Trung Đông',
      tagEastEurope: 'Đông Âu',
      tagIntl: 'Quốc tế',
      tagAfrica: 'Châu Phi',
    },
  };
}

export function getFooterTranslations(lang: Locale) {
  if (lang === 'en') {
    return {
      experience: '• 10+ years exporting processed agricultural ingredients',
      markets: '• Global export destinations: UAE, Bulgaria, Cambodia, China',
      itemPowder: 'Fruit Powders',
      itemDried: 'Freeze-Dried Fruits',
      itemPuree: 'Fruit Purees & Concentrates',
      itemOem: 'OEM/ODM & Custom Formulations',
      quoteCta: 'Request B2B Quotation',
      lblHeadquarters: 'Headquarters:',
      lblFactory: 'Processing Plant:',
      lblEmail: 'Email:',
      lblHotline: 'Direct Hotline:',
    };
  }

  if (lang === 'zh') {
    return {
      experience: '• 10余年深加工农产原料全球出口经验',
      markets: '• 核心履约市场：阿联酋、保加利亚、柬埔寨、中国',
      itemPowder: '果粉系列 (Fruit Powders)',
      itemDried: '冻干果品 (Freeze-Dried)',
      itemPuree: '果浆浓缩汁 (Fruit Purees)',
      itemOem: 'OEM/ODM 代工与配方研发',
      quoteCta: '获取 B2B 报价',
      lblHeadquarters: '总部地址：',
      lblFactory: '加工工厂：',
      lblEmail: '商务邮箱：',
      lblHotline: '直通热线：',
    };
  }

  return {
    experience: '• Hơn 10 năm kinh nghiệm xuất khẩu nông sản chế biến',
    markets: '• Giao thương: UAE, Bulgaria, Campuchia, Trung Quốc',
    itemPowder: 'Bột trái cây (Fruit Powders)',
    itemDried: 'Trái cây sấy thăng hoa (Freeze-Dried)',
    itemPuree: 'Nước cốt & Puree (Fruit Concentrates)',
    itemOem: 'Gia công OEM/ODM & R&D công thức',
    quoteCta: 'Gửi yêu cầu báo giá B2B',
    lblHeadquarters: 'Trụ sở:',
    lblFactory: 'Nhà máy:',
    lblEmail: 'Email:',
    lblHotline: 'Hotline B2B:',
  };
}

export const PARTNER_LOGOS = [
  { name: 'Cata', logo: '/images/partners/partner1.jpg' },
  { name: 'COMET', logo: '/images/partners/partner2.jpg' },
  { name: 'ecoco', logo: '/images/partners/partner3.jpg' },
  { name: 'WACACO', logo: '/images/partners/partner4.jpg' },
  { name: 'ZOJIRUSHI', logo: '/images/partners/partner5.jpg' },
];

export function getAboutUsContent(lang: Locale) {
  if (lang === 'en') {
    return {
      badge: 'About Us',
      visionTitle: 'Vision: "From Vietnamese Farms To Global Markets"',
      visionDesc:
        'Vietnam is blessed with rich tropical soil, yielding fruits with distinctive aromas and vibrant colors rare in the world. With over a decade of specialized experience in agricultural processing, Agrihub was established with the mission to elevate indigenous crops through modern dehydration and extraction technologies, seamlessly integrating high-grade Vietnamese ingredients into global food and beverage supply chains.',
      pillars: [
        {
          title: 'Verified Quality',
          desc: 'Driven by rigorous technical data, not vague assertions. Every specification on moisture, mesh granulation, and microbiology is verified through accredited testing.',
        },
        {
          title: 'Growing Value Together',
          desc: 'True to our core ethos, we foster long-term partnerships with orchard farming cooperatives and stand as an unwavering supplier to industrial processors.',
        },
        {
          title: 'Global Standards',
          desc: 'Strict compliance with Incoterms 2020 trade protocols and complete export customs documentation, guaranteeing seamless clearance at destination ports.',
        },
      ],
      notes: [
        'Company founding milestones and corporate development journey',
        'Executive leadership and dedicated food science R&D engineers',
        'On-site facility photography and processing infrastructure',
      ],
      // Section: Global Network
      networkBadge: 'Strategic Partners',
      networkTitle: 'Global Strategic Network',
      networkSubtitle:
        'Backed by robust processing capacity and time-tested credibility, AGRIHUB is proud to serve as a strategic supplier to leading enterprises across key markets including the US, Australia, France, South Korea, and various nations across Europe and Asia.',
      partners: PARTNER_LOGOS,
      // Section: Why Choose Us
      whyChooseBadge: 'Value Proposition',
      whyChooseTitle: 'Why Choose AGRIHUB?',
      whyChooseSubtitle:
        'Partnering with AGRIHUB, clients secure optimal agricultural ingredient solutions across quality, cost efficiency, and on-time delivery, reinforced by dedicated technical advisory from our seasoned industry specialists.',
      whyChoosePillars: [
        {
          icon: '🥇',
          title: 'Uncompromised Quality',
          desc: 'Strict QA/QC protocols compliant with BRC, HACCP, and ISO standards. 100% natural, backed by transparent COAs and batch-by-batch microbiological testing.',
        },
        {
          icon: '💰',
          title: 'Competitive Value',
          desc: 'Direct-from-source pricing leveraging partner GAP cooperatives and modern processing facilities, eliminating redundant commercial intermediaries.',
        },
        {
          icon: '⏱️',
          title: 'On-Time Reliability',
          desc: 'Substantial strategic warehouse buffers ensuring steady container-scale supply year-round, backed by streamlined international export customs clearance.',
        },
        {
          icon: '🧑‍🔬',
          title: 'Dedicated Technical Advisory',
          desc: 'Experienced food scientists and export engineers working closely with your team to customize technical parameters (moisture, mesh, brix) to fit your manufacturing line.',
        },
      ],
      // Closing Motto Banner
      closingBadge: 'VISION & COMMITMENT',
      closingMotto:
        'AGRIHUB – Elevating Vietnamese Agriculture, Growing Sustainable Value Together',
      closingCtaPrimary: 'Submit Commercial Inquiry',
      closingCtaSecondary: 'Explore Products',
    };
  }

  if (lang === 'zh') {
    return {
      badge: '关于我们',
      visionTitle: '愿景：“源自越南农场，服务全球市场”',
      visionDesc:
        '越南得天独厚的热带自然气候与沃土，孕育了色泽鲜艳、风味浓郁的热带特色水果。凭借十余年深耕农产精深加工的行业底蕴，Agrihub 致力于通过先进冷冻干燥与现代萃取技术提升本土农产品附加值，将高品质越南源头原料稳步融入全球大型食品与饮料制造集团的供应链体系。',
      pillars: [
        {
          title: '品质源于实证',
          desc: '以清晰严谨的理化检测数据说话。关于水分、目数及微生物安全等每一项指标，均由第三方权威检测报告（COA）严格佐证。',
        },
        {
          title: '携手持续共赢',
          desc: '秉承“Growing Value Together”理念，我们长期反哺源头合作果农，同时作为全球食品工业制造客户值得托付的常年稳定供应链伙伴。',
        },
        {
          title: '国际贸易合规',
          desc: '严格遵守 Incoterms 2020 国际贸易术语，出具全套原产地证明与合规植检单证，确保买方口岸通关顺畅高效。',
        },
      ],
      notes: [
        '企业创立发展沿革与核心里程碑',
        '核心管理团队与资深食品科学 R&D 研发工程师',
        '生产加工车间与企业实景概览',
      ],
      // Section: Global Network
      networkBadge: '全球合作',
      networkTitle: '全球战略合作网络',
      networkSubtitle:
        '凭借雄厚的供应实力与历经考验的商业信誉，AGRIHUB 荣幸成为美国、澳大利亚、法国、韩国以及欧亚多个重点市场众多知名企业的战略合作伙伴。',
      partners: PARTNER_LOGOS,
      // Section: Why Choose Us
      whyChooseBadge: '核心优势',
      whyChooseTitle: '为什么选择 AGRIHUB？',
      whyChooseSubtitle:
        '携手 AGRIHUB，贵方不仅能获得在品质、价格与交付周期上最具优势的深加工原料解决方案，更能得到我们资深专家团队全方位的技术咨询与研发支持。',
      whyChoosePillars: [
        {
          icon: '🥇',
          title: '严苛卓越品质',
          desc: '遵循 BRC、HACCP 及 ISO 国际权威标准。100% 天然无添加，每批次出运货物均附带第三方权威检测报告（COA）。',
        },
        {
          icon: '💰',
          title: '最具竞争力的源头价格',
          desc: '直连 GAP 合作果园与现代化精深加工工厂，杜绝多层商业中间环节，为大宗采购客户提供第一手出厂阶梯报价。',
        },
        {
          icon: '⏱️',
          title: '交付周期稳定可靠',
          desc: '中心仓常年安全现货储备，保障旺季集装箱规模大单持续稳定供应，全套国际海关与植检手续高效通关。',
        },
        {
          icon: '🧑‍🔬',
          title: '专家团队深度伴随',
          desc: '资深食品科学工程师与外贸专家一对一深度支持，依据客户工厂产线设备与配方需求，灵活定制专属水分、细度及糖度指标。',
        },
      ],
      // Closing Motto Banner
      closingBadge: '愿景与承诺',
      closingMotto: 'AGRIHUB —— 提升越南农产价值，携手共筑可持续发展',
      closingCtaPrimary: '立即提交商务合作',
      closingCtaSecondary: '浏览产品系列',
    };
  }

  return {
    badge: 'Về Chúng Tôi',
    visionTitle: 'Tầm nhìn từ nông trại Việt Nam đến thị trường thế giới',
    visionDesc:
      'Việt Nam sở hữu thổ nhưỡng nhiệt đới trù phú với các loại trái cây có hương vị và màu sắc đặc trưng hiếm nơi nào có được. Với hơn 10 năm kinh nghiệm trong ngành chế biến nông sản, Agrihub ra đời với sứ mệnh nâng tầm giá trị nông sản bản địa bằng công nghệ sấy và chiết xuất hiện đại, đưa nguyên liệu chất lượng cao của Việt Nam vào chuỗi cung ứng của các tập đoàn sản xuất thực phẩm và đồ uống quốc tế.',
    pillars: [
      {
        title: 'Chất lượng chuẩn BRC',
        desc: 'Hệ thống quản lý chất lượng được vận hành, duy trì và cải tiến liên tục theo tiêu chuẩn quốc tế BRC.',
      },
      {
        title: '100% Tự nhiên & Khép kín',
        desc: 'Quy trình chế biến từ nguyên liệu thô đến thành phẩm đảm bảo khép kín hoàn toàn. Chúng tôi cam kết không sử dụng hóa chất hay phụ gia thực phẩm, giữ trọn hương vị tươi mới và giá trị dinh dưỡng của sản phẩm.',
      },
      {
        title: 'Minh bạch & An toàn',
        desc: 'Toàn bộ nguồn nguyên liệu đầu vào đều có chứng nhận xuất xứ rõ ràng và đáp ứng đầy đủ các tiêu chuẩn an toàn thực phẩm nghiêm ngặt.',
      },
      {
        title: 'Đội ngũ chuyên môn cao',
        desc: 'Sở hữu nhân sự giàu kinh nghiệm, am hiểu sâu sắc về tiêu chuẩn kỹ thuật, an toàn vệ sinh thực phẩm và xu hướng thị trường quốc tế.',
      },
    ],
    notes: [
      'Mốc năm thành lập chính xác của công ty',
      'Cơ cấu ban lãnh đạo và đội ngũ kỹ thuật R&D',
      'Hình ảnh thực tế văn phòng làm việc và nhà máy',
    ],
    // Section: Global Network
    networkBadge: 'Đối Tác Chiến Lược',
    networkTitle: 'Mạng Lưới Toàn Cầu',
    networkSubtitle:
      'Nhờ năng lực cung ứng vững chắc và uy tín đã được khẳng định qua thời gian, AGRIHUB tự hào là đối tác chiến lược của nhiều doanh nghiệp lớn tại các thị trường trọng điểm như Mỹ, Úc, Pháp, Hàn Quốc, cùng nhiều quốc gia thuộc khu vực Châu Âu và Châu Á.',
    partners: PARTNER_LOGOS,
    // Section: Why Choose Us
    whyChooseBadge: 'Giá Trị Khác Biệt',
    whyChooseTitle: 'Tại Sao Chọn AGRIHUB?',
    whyChooseSubtitle:
      'Đến với AGRIHUB, Quý đối tác không chỉ tìm thấy giải pháp nguyên liệu tối ưu về chất lượng - giá thành - tiến độ, mà còn nhận được sự đồng hành tư vấn chuyên sâu từ đội ngũ chuyên gia của chúng tôi.',
    whyChoosePillars: [
      {
        icon: '🥇',
        title: 'Chất Lượng Tối Ưu',
        desc: 'Quy trình kiểm soát nghiêm ngặt theo chuẩn BRC, HACCP, ISO. 100% tự nhiên, minh bạch COA và kiểm nghiệm vi sinh trên từng lô hàng xuất khẩu.',
      },
      {
        icon: '💰',
        title: 'Giá Thành Cạnh Tranh',
        desc: 'Lợi thế cung ứng trực tiếp từ nông trại liên kết và nhà máy chế biến quy mô lớn, cắt giảm tối đa các khâu trung gian thương mại.',
      },
      {
        icon: '⏱️',
        title: 'Tiến Độ Đảm Bảo',
        desc: 'Hệ thống kho đệm sẵn sàng đáp ứng đơn hàng quy mô container, năng lực cung ứng ổn định quanh năm và thủ tục hải quan xuất khẩu nhanh chóng.',
      },
      {
        icon: '🧑‍🔬',
        title: 'Tư Vấn Chuyên Sâu',
        desc: 'Đội ngũ chuyên gia kỹ thuật và R&D đồng hành tư vấn, hỗ trợ nghiên cứu tùy chỉnh thông số kỹ thuật (độ ẩm, độ mịn, độ ngọt) theo đúng dây chuyền của đối tác.',
      },
    ],
    // Closing Motto Banner
    closingBadge: 'ĐỒNG HÀNH PHÁT TRIỂN BỀN VỮNG',
    closingMotto:
      'AGRIHUB – Nâng Tầm Nông Sản Việt, Đồng Hành Cùng Phát Triển Bền Vững',
    closingCtaPrimary: 'Gửi yêu cầu B2B ngay',
    closingCtaSecondary: 'Xem danh mục sản phẩm',
  };
}

export function getDistributionPartnersContent(lang: Locale) {
  if (lang === 'en') {
    return {
      badge: 'Distribution Partnership',
      benefits: [
        {
          icon: '🏷️',
          title: 'Direct Factory Wholesale Pricing',
          desc: 'Tiered wholesale discounts linked to volume, cutting out unnecessary commercial intermediaries.',
        },
        {
          icon: '📦',
          title: 'Year-Round Inventory Reliability',
          desc: 'Substantial strategic buffer stock in central warehouses, preventing supply chain disruptions during peak seasons.',
        },
        {
          icon: '📑',
          title: 'Comprehensive Compliance & COA',
          desc: 'Full product quality declarations and microbiological COA dossiers to support distributors bidding for major accounts.',
        },
        {
          icon: '🎁',
          title: 'Free Sample Kits & Technical Support',
          desc: 'Supplying comprehensive sample kits, Technical Data Sheets (TDS), and application formulation consulting.',
        },
      ],
      policyTitle: 'Dealer Qualification & Onboarding Process',
      policyDesc:
        'Agrihub welcomes food ingredient distributors, bakery/beverage supply houses, and regional wholesalers worldwide.',
      notes: [
        'Minimum Order Quantity (MOQ) tiers for primary and secondary regional dealers',
        'Credit terms and domestic/cross-border logistical freight allowances',
        'Protected regional distribution territory exclusivity policies',
      ],
    };
  }

  if (lang === 'zh') {
    return {
      badge: '分销与渠道合作',
      benefits: [
        {
          icon: '🏷️',
          title: '工厂直发批发底价',
          desc: '阶梯式大宗采购折扣机制，去除一切冗余贸易中间商，让利渠道伙伴。',
        },
        {
          icon: '📦',
          title: '全年现货稳定供应',
          desc: '中心大型恒温库储备充足源头现货，彻底规避旺季断货与原料价格剧烈波动风险。',
        },
        {
          icon: '📑',
          title: '全套资质与检测报告 (COA)',
          desc: '提供全套合规质检报告、企业标准资质文件，全力协助代理商入驻终端大型工业客户。',
        },
        {
          icon: '🎁',
          title: '免费样品包与技术支持',
          desc: '提供专属样品套盒（Sample Kit）、多语种技术规格书（TDS）及资深食品工程师应用指导。',
        },
      ],
      policyTitle: '代理商准入准则与申请流程',
      policyDesc:
        'Agrihub 诚邀海内外食品配料批发商、烘焙茶饮供应链企业及各区域一级代理商携手合作。',
      notes: [
        '一级与二级代理商对应单批最低订货量（MOQ）标准',
        '信用账期支持政策与区域干线物流补贴支持',
        '严格规范的区域排他性分销保护机制',
      ],
    };
  }

  return {
    badge: 'Hợp Tác Phân Phối',
    benefits: [
      {
        icon: '🏷️',
        title: 'Bảng giá sỉ trực tiếp từ nhà máy',
        desc: 'Mức chiết khấu hấp dẫn theo bậc thang doanh số, không qua trung gian thương mại.',
      },
      {
        icon: '📦',
        title: 'Nguồn hàng ổn định quanh năm',
        desc: 'Dự trữ nguyên liệu và thành phẩm lớn tại kho, đảm bảo không đứt gãy nguồn cung vào mùa cao điểm.',
      },
      {
        icon: '📑',
        title: 'Hồ sơ pháp lý & COA đầy đủ',
        desc: 'Cung cấp toàn bộ giấy tờ công bố chất lượng, kiểm nghiệm vi sinh hỗ trợ đại lý chào bán cho khách hàng lớn.',
      },
      {
        icon: '🎁',
        title: 'Hỗ trợ mẫu thử & Tài liệu marketing',
        desc: 'Cung cấp bộ kit mẫu thử (sample kit), tài liệu kỹ thuật (TDS) và tư vấn kỹ thuật ứng dụng.',
      },
    ],
    policyTitle: 'Điều kiện & Quy trình đăng ký đại lý',
    policyDesc:
      'Agrihub chào đón các công ty thương mại thực phẩm, đơn vị cung ứng nguyên liệu làm bánh/pha chế và nhà phân phối sỉ trên toàn quốc.',
    notes: [
      'Mức nhập đơn hàng tối thiểu (MOQ) cho đại lý cấp 1 và cấp 2',
      'Chính sách công nợ và hỗ trợ vận chuyển nội địa',
      'Quy định bảo vệ khu vực độc quyền phân phối',
    ],
  };
}

export function getOemContent(lang: Locale) {
  if (lang === 'en') {
    return {
      badge: 'OEM / ODM Services',
      processTitle: 'Standardized 5-Step OEM / ODM Workflow',
      cap1Title: 'Formulation & Technical Customization Capabilities',
      cap1Items: [
        'Adjust granulation mesh from 60 to 120 mesh matching automated feeding hoppers.',
        'Advanced freeze-drying preserving vibrant natural pigment and 98% nutrients.',
        'Preservative-free aseptic extraction and sterilization for concentrated purees.',
        'Spray-drying, cryogenic cold milling, and tailor-made functional blending.',
      ],
      cap2Title: 'Confidentiality & Quality Assurance',
      cap2Items: [
        'Mutual Non-Disclosure Agreement (NDA) executed prior to formula discussions.',
        'Automated manufacturing adhering strictly to international food hygiene codes.',
        'Dispatched with batch-level Certificate of Analysis (COA) prior to dispatch.',
        'Flexible MOQ tiers tailored for commercial scale-up.',
      ],
      bannerTitle: 'Launching a New OEM / R&D Ingredient Initiative?',
      bannerDesc:
        'Submit your technical parameters to receive expert feedback within 24 business hours.',
    };
  }

  if (lang === 'zh') {
    return {
      badge: '代工定制服务',
      processTitle: '标准 5 步 OEM / ODM 定制合作流程',
      cap1Title: '专属配方研发与工艺技术定制能力',
      cap1Items: [
        '细度目数按需调配（60至120目），精准适配各类自动化工业投料设备。',
        '先进冻干真空脱水技术（FD），最大限度保留原果天然色泽与98%活性营养。',
        '无菌物理压榨浓缩工艺，全程零防腐剂添加，果香醇正。',
        '喷雾干燥、深冷超微粉碎及定向风味复配定制。',
      ],
      cap2Title: '严密保密机制与质量保障承诺',
      cap2Items: [
        '配方洽谈前严格签署双向保密协议（NDA），保障知识产权。',
        '全封闭洁净流水线作业，全面符合严苛的国际食品卫生标准。',
        '每批次成品出厂前均随附权威批次质检报告（COA）。',
        '根据产线批次规模提供弹性的订货起订量（MOQ）支持。',
      ],
      bannerTitle: '有全新的 OEM 专属配方或研发定制项目？',
      bannerDesc:
        '提交您的具体技术参数，我们的资深工程师将在24个工作小时内与您对接。',
    };
  }

  return {
    badge: 'Dịch Vụ Gia Công',
    processTitle: 'Quy trình hợp tác OEM / ODM 5 bước tiêu chuẩn',
    cap1Title: 'Năng lực tùy biến công thức & kỹ thuật',
    cap1Items: [
      'Điều chỉnh mesh size từ 60 đến 120 mesh theo yêu cầu thiết bị nạp liệu.',
      'Sấy thăng hoa (Freeze-drying) giữ màu và dưỡng chất tối đa.',
      'Chiết xuất và thanh trùng nước cốt không dùng chất bảo quản.',
      'Công nghệ sấy phun, nghiền bột lạnh, phối trộn công thức đặc biệt.',
    ],
    cap2Title: 'Cam kết bảo mật & Chất lượng',
    cap2Items: [
      'Ký kết thỏa thuận bảo mật công thức (NDA) trước khi trao đổi.',
      'Sản xuất trên dây chuyền đạt tiêu chuẩn vệ sinh an toàn thực phẩm.',
      'Cung cấp đầy đủ COA từng lô thành phẩm trước khi xuất xưởng.',
      'Quy định MOQ linh hoạt cho từng dòng sản phẩm gia công.',
    ],
    bannerTitle: 'Bạn có dự án OEM / R&D nguyên liệu mới?',
    bannerDesc:
      'Gửi yêu cầu kỹ thuật để nhận phản hồi từ bộ phận chuyên môn trong vòng 24 giờ.',
  };
}

export function getSupplyChainContent(lang: Locale) {
  if (lang === 'en') {
    return {
      badge: 'Supply Infrastructure & Orchards',
      stat1: '10+',
      stat1Label: 'Years of Export Experience',
      stat2: '15,000 m²',
      stat2Label: 'Industrial Processing Facilities',
      stat3: '20,000+',
      stat3Label: 'Annual Capacity (Metric Tons)',
      stat4: '1,200 ha',
      stat4Label: 'Partner GAP Orchard Network',
      block1Title: '1. Sustainable Vietnamese Agricultural Orchards',
      block1Desc:
        'Agrihub maintains direct partnerships with certified farming cooperatives across premier tropical fruit hubs in Vietnam (Mekong Delta, Central Highlands, Binh Thuan). Fresh harvests are meticulously sorted, ensuring rigorous soil, irrigation water, and pesticide residue controls right at the farm gate.',
      block1Notice:
        '[Detailed orchard cooperative maps and seasonal harvest calendars available upon request]',
      block2Title: '2. Processing Technology & Warehousing Network',
      block2Desc:
        'Equipped with industrial-grade Freeze Dryers, convective hot-air dehydrators, and ultra-fine cryogenic milling lines meeting strict industrial sanitation codes. Climate-controlled warehousing maintains optimal temperature and humidity, safeguarding ingredient consistency year-round.',
      block2Notice:
        '[Industrial dehydration line schematics and cold storage facility specifications]',
    };
  }

  if (lang === 'zh') {
    return {
      badge: '源头果园基地与加工厂区',
      stat1: '10+',
      stat1Label: '年大宗出口履约经验',
      stat2: '15,000 m²',
      stat2Label: '现代化深加工车间面积',
      stat3: '20,000+',
      stat3Label: '年综合处理能力（吨/年）',
      stat4: '1,200 ha',
      stat4Label: 'GAP 示范合作种植果园',
      block1Title: '1. 越南核心源头热带水果示范基地',
      block1Desc:
        'Agrihub 与越南湄公河三角洲、西原高原及平顺等核心热带水果示范产区的正规农业合作社深度绑定。严选当季鲜果原料，从水土源头严控农残与化肥施用。',
      block1Notice: '[GAP 认证示范合作基地分布图及采收档案备索]',
      block2Title: '2. 先进深加工工艺与现代化温控仓储体系',
      block2Desc:
        '配备工业级冷冻干燥机组（FD）、热风对流烘干设备及气流超细粉碎机，全程遵循严苛食品洁净规范。大型恒温恒湿仓储库确保果粉与果干全年品质稳定如一。',
      block2Notice: '[现代化生产线设备及大型冷库技术规格表]',
    };
  }

  return {
    badge: 'Cơ Sở Hạ Tầng & Vùng Trồng',
    stat1: '10+',
    stat1Label: 'Năm kinh nghiệm xuất khẩu',
    stat2: '15,000 m²',
    stat2Label: 'Diện tích nhà xưởng chế biến (m²)',
    stat3: '20,000+',
    stat3Label: 'Sản lượng cung ứng (tấn/năm)',
    stat4: '1,200 ha',
    stat4Label: 'Quy mô vùng trồng liên kết (ha)',
    block1Title: '1. Vùng nguyên liệu nông sản Việt Nam',
    block1Desc:
      'Agrihub liên kết trực tiếp với các hợp tác xã và nông hộ tại các vựa trái cây nhiệt đới nổi tiếng của Việt Nam (Đồng bằng Sông Cửu Long, Tây Nguyên, Bình Thuận...). Nguồn quả tươi được tuyển chọn kỹ càng, kiểm soát chặt chẽ dư lượng thuốc BVTV ngay từ khâu canh tác.',
    block1Notice:
      '[Bản đồ vùng trồng liên kết chi tiết và hình ảnh mùa vụ thu hoạch]',
    block2Title: '2. Công nghệ chế biến & Hệ thống kho bãi',
    block2Desc:
      'Trang bị hệ thống máy sấy thăng hoa (Freeze Dryer), sấy nhiệt đối lưu và thiết bị nghiền bột siêu mịn đạt chuẩn vệ sinh an toàn công nghiệp. Kho bảo quản duy trì nhiệt độ và độ ẩm tiêu chuẩn giúp ổn định chất lượng bột và quả sấy quanh năm.',
    block2Notice: '[Hình ảnh máy móc dây chuyền sản xuất và hệ thống kho lạnh]',
  };
}

export function getQualityContent(lang: Locale) {
  if (lang === 'en') {
    return {
      badge: 'Quality Assurance',
      sampleBadge: 'CERTIFIED DOSSIER',
      items: [
        {
          code: 'ISO 22000',
          title: 'Food Safety Management System',
          desc: 'Comprehensive hazard control across entire dehydration, milling, and packaging lines.',
          status: '[Accredited Audit Certificate & Documentation Available]',
        },
        {
          code: 'HACCP',
          title: 'Hazard Analysis & Critical Control Points',
          desc: 'Rigorous prevention of physical, chemical, and microbiological hazards per production batch.',
          status: '[Accredited Audit Certificate & Documentation Available]',
        },
        {
          code: 'FSSC 22000',
          title: 'Food Safety System Certification',
          desc: 'GFSI-recognized global standard ensuring complete integrity across processing operations.',
          status: '[Accredited Audit Certificate & Documentation Available]',
        },
        {
          code: 'FDA / CO-CQ',
          title: 'Export Compliance & Traceability',
          desc: 'Complete Certificate of Origin (all Forms) and official Phytosanitary certificates for swift customs clearance.',
          status: '[Official CO Template & Registration Available]',
        },
      ],
      commitmentTitle: 'Technical Dossier Commitment & Laboratory Standards:',
      bullet1:
        '• Microbiological testing: E.coli, Salmonella, yeast & mold strictly within export safety thresholds.',
      bullet2:
        '• Heavy metals: Stringent screening for Lead (Pb), Arsenic (As), Cadmium (Cd).',
      bullet3:
        '• Pesticide residues: Full compliance with international Maximum Residue Limits (MRLs).',
    };
  }

  if (lang === 'zh') {
    return {
      badge: '质量与认证体系',
      sampleBadge: '资质完备',
      items: [
        {
          code: 'ISO 22000',
          title: '食品安全管理体系认证',
          desc: '对原料采收、精细加工及仓储物流全链条实施前置化食品安全风险防控。',
          status: '[官方权威认证证书与备案件随时备索]',
        },
        {
          code: 'HACCP',
          title: '危害分析与关键控制点 (HACCP)',
          desc: '逐批监控生产各个环节，杜绝物理杂质、化学危害与微生物超标隐患。',
          status: '[官方权威认证证书与备案件随时备索]',
        },
        {
          code: 'FSSC 22000',
          title: '全球食品安全体系认证 (FSSC 22000)',
          desc: 'GFSI 认可的国际权威体系，符合全球大型跨国食品企业的供货标准。',
          status: '[官方权威认证证书与备案件随时备索]',
        },
        {
          code: 'FDA / CO-CQ',
          title: '原产地及植物检疫通关单证',
          desc: '提供各类型优惠原产地证明（CO）及官方植检单证，助力买方顺畅高效通关。',
          status: '[原产地证书样本与登记资质备索]',
        },
      ],
      commitmentTitle: '批次技术单证与权威检测承诺：',
      bullet1:
        '• 微生物检测：大肠杆菌、沙门氏菌、霉菌与酵母菌严格符合进口国安全限量。',
      bullet2: '• 重金属筛查：严苛管控铅 (Pb)、砷 (As)、镉 (Cd) 残留含量。',
      bullet3: '• 农残管控：全面符合国际食品农药最高残留限量（MRLs）规定。',
    };
  }

  return {
    badge: 'Kiểm Soát Chất Lượng',
    sampleBadge: 'BẢO LƯU HỒ SƠ',
    items: [
      {
        code: 'ISO 22000',
        title: 'Hệ thống Quản lý An toàn Thực phẩm',
        desc: 'Đảm bảo kiểm soát rủi ro an toàn thực phẩm xuyên suốt toàn bộ chuỗi chế biến và đóng gói.',
        status: '[Hồ sơ chứng nhận & bản kiểm định sẵn sàng cung cấp]',
      },
      {
        code: 'HACCP',
        title: 'Phân tích Mối nguy & Điểm kiểm soát tới hạn',
        desc: 'Quy trình phòng ngừa mối nguy vi sinh, hóa học và vật lý trong sản xuất nguyên liệu F&B.',
        status: '[Hồ sơ chứng nhận & bản kiểm định sẵn sàng cung cấp]',
      },
      {
        code: 'FSSC 22000',
        title: 'Hệ thống An toàn Thực phẩm Toàn cầu',
        desc: 'Chứng nhận an toàn thực phẩm đạt tiêu chuẩn GFSI quốc tế phục vụ các đối tác F&B khắt khe nhất.',
        status: '[Hồ sơ chứng nhận & bản kiểm định sẵn sàng cung cấp]',
      },
      {
        code: 'FDA / CO-CQ',
        title: 'Hồ sơ Pháp lý & Truy xuất Nguồn gốc',
        desc: 'Giấy chứng nhận xuất xứ hàng hóa (CO các form) và chứng thư kiểm dịch thực vật (Phytosanitary).',
        status: '[Mẫu CO & Chứng nhận đăng ký sẵn sàng cung cấp]',
      },
    ],
    commitmentTitle: 'Cam kết hồ sơ kỹ thuật & Tiêu chuẩn kiểm nghiệm:',
    bullet1:
      '• Kiểm nghiệm vi sinh (Microbiological testing): E.coli, Salmonella, nấm men, nấm mốc đạt ngưỡng an toàn xuất khẩu.',
    bullet2:
      '• Kim loại nặng (Heavy metals): Kiểm soát nghiêm ngặt hàm lượng chì (Pb), asen (As), cadmi (Cd).',
    bullet3:
      '• Dư lượng thuốc BVTV: Cam kết tuân thủ giới hạn dư lượng tối đa (MRLs) theo tiêu chuẩn quốc tế.',
  };
}

export function getGlobalPresenceContent(lang: Locale) {
  if (lang === 'en') {
    return {
      badge: 'International Trade',
      marketsTitle: 'Proven Global Export Markets',
      showsTitle: 'International Trade Exhibitions',
      markets: [
        {
          country: 'United Arab Emirates (UAE)',
          note: 'Middle East Regional Hub',
        },
        {
          country: 'Bulgaria',
          note: 'Eastern European Gateway',
        },
        {
          country: 'China',
          note: 'High-Volume Raw Material Market',
        },
        {
          country: 'Cambodia',
          note: 'Southeast Asian Trading Partner',
        },
      ],
      shows: [
        {
          name: 'Saudi Food Show',
          location: 'Riyadh, Saudi Arabia',
          desc: 'Connecting with key agricultural and food ingredient importers across the GCC Gulf region.',
        },
        {
          name: 'WorldFood Moscow',
          location: 'Moscow, Russia',
          desc: 'Promoting tropical dried fruits and processed ingredients into Eastern Europe and the Eurasian market.',
        },
        {
          name: 'Vietnam Foodexpo',
          location: 'Ho Chi Minh City, Vietnam',
          desc: 'Vietnam premier international food industry exposition, welcoming international buying delegations.',
        },
        {
          name: 'Food Africa 2025',
          location: 'Cairo, Egypt',
          desc: 'Expanding processed ingredient export pipelines across North Africa and the wider Middle East.',
        },
      ],
      ctaTitle:
        'Are you a global importer seeking dependable Vietnamese agricultural ingredients?',
      ctaDesc:
        'The Agrihub export team supports complete customs dossiers, CO, CQ, and Incoterms standards (FOB, CIF, CFR).',
      showNote:
        '[Trade booth photography & exhibition schedules available upon request]',
    };
  }

  if (lang === 'zh') {
    return {
      badge: '全球贸易与展会',
      marketsTitle: '全球主要出口履约市场',
      showsTitle: '常年参展的国际顶级食品展会',
      markets: [
        {
          country: '阿联酋（阿拉伯联合酋长国）',
          note: '中东枢纽核心市场',
        },
        {
          country: '保加利亚',
          note: '东欧门户市场',
        },
        {
          country: '中国',
          note: '大宗食品工业原料核心市场',
        },
        {
          country: '柬埔寨',
          note: '东南亚近邻经贸合作伙伴',
        },
      ],
      shows: [
        {
          name: '沙特食品展 (Saudi Food Show)',
          location: '利雅得，沙特阿拉伯',
          desc: '深度对接海湾阿拉伯国家合作委员会（GCC）重点大宗食品进口买家。',
        },
        {
          name: '莫斯科国际食品展 (WorldFood Moscow)',
          location: '莫斯科，俄罗斯',
          desc: '推动热带优质冻干果干与天然原汁进军东欧及欧亚经济联盟市场。',
        },
        {
          name: '越南国际食品展 (Vietnam Foodexpo)',
          location: '胡志明市，越南',
          desc: '越南国家级国际食品工业盛会，常年接待来自全球数十国的专业采购商团。',
        },
        {
          name: '非洲食品展 (Food Africa 2025)',
          location: '开罗，埃及',
          desc: '进一步拓展北非及泛中东地区深加工食品配料的大宗出口业务。',
        },
      ],
      ctaTitle: '您是在寻找可靠越南深加工农产原料的大宗进口商吗？',
      ctaDesc:
        'Agrihub 出口贸易团队全方位支持海关清关全套单证（CO、植检证）及各类 Incoterms 国际贸易条款（FOB、CIF、CFR）。',
      showNote: '[展位现场实景与详细参展日程备索]',
    };
  }

  return {
    badge: 'Thương Mại Quốc Tế',
    marketsTitle: 'Thị trường xuất khẩu đã giao thương thành công',
    showsTitle: 'Hội chợ & Triển lãm quốc tế',
    markets: [
      {
        country: 'UAE (Các Tiểu Vương Quốc Ả Rập Thống Nhất)',
        note: 'Thị trường Trung Đông',
      },
      {
        country: 'Bulgaria',
        note: 'Cửa ngõ thị trường Đông Âu',
      },
      {
        country: 'Trung Quốc',
        note: 'Thị trường nguyên liệu quy mô lớn',
      },
      {
        country: 'Campuchia',
        note: 'Đối tác thương mại khu vực Đông Nam Á',
      },
    ],
    shows: [
      {
        name: 'Saudi Food Show',
        location: 'Riyadh, Saudi Arabia',
        desc: 'Kết nối mạng lưới nhập khẩu nông sản và nguyên liệu thực phẩm khu vực Vùng Vịnh (GCC).',
      },
      {
        name: 'WorldFood Moscow',
        location: 'Moscow, Nga',
        desc: 'Xúc tiến thương mại các dòng trái cây sấy và nguyên liệu nhiệt đới sang thị trường Đông Âu & Nga.',
      },
      {
        name: 'Vietnam Foodexpo',
        location: 'TP. Hồ Chí Minh, Việt Nam',
        desc: 'Triển lãm quốc tế ngành công nghiệp thực phẩm lớn nhất Việt Nam, tiếp đón các đoàn giao thương quốc tế.',
      },
      {
        name: 'Food Africa 2025',
        location: 'Cairo, Ai Cập',
        desc: 'Mở rộng thị trường xuất khẩu nguyên liệu chế biến sang khu vực Bắc Phi và Trung Đông.',
      },
    ],
    ctaTitle: 'Bạn là nhà nhập khẩu tìm kiếm nguồn cung nông sản Việt Nam?',
    ctaDesc:
      'Đội ngũ xuất khẩu Agrihub hỗ trợ đầy đủ thủ tục hải quan, CO, CQ và điều kiện Incoterms (FOB, CIF, CFR).',
    showNote: '[Hình ảnh gian hàng & Thời gian tham gia cụ thể]',
  };
}

export function getContactPageContent(lang: Locale) {
  if (lang === 'en') {
    return {
      responseBadge: '24h Response',
      channelTitle: 'Direct B2B Communication Desks',
      emailTitle: 'Commercial & Export Desk:',
      emailVal: 'sales@agrihub.vn',
      phoneTitle: 'Hotline / WhatsApp / WeChat:',
      phoneVal: '+84 90 123 4567',
      addressTitle: 'Corporate Headquarters:',
      addressVal: 'Ho Chi Minh City, Vietnam',
      factoryTitle: 'Processing Facility & Cold Storage:',
      factoryVal: 'Mekong Delta Agricultural Hub, Vietnam',
      commitmentTitle: 'Our B2B Commercial Commitments',
      commitment1:
        '• Technical price quotations and TDS datasheets dispatched within 24 business hours.',
      commitment2:
        '• Complimentary lab test samples dispatched via expedited international express courier.',
      commitment3:
        '• Mutual Non-Disclosure Agreements (NDA) executed for proprietary OEM/ODM formulations.',
      formTitle: 'B2B Quotation & Free Lab Sample Request Form',
      formSubtitle:
        'Please provide your project specifications so our technical sales desk can prepare an accurate proposal.',
    };
  }

  if (lang === 'zh') {
    return {
      responseBadge: '24小时答复',
      channelTitle: 'B2B 商务直通渠道',
      emailTitle: '国际贸易与出口专线邮箱：',
      emailVal: 'sales@agrihub.vn',
      phoneTitle: '直通热线 / WhatsApp / 微信：',
      phoneVal: '+84 90 123 4567',
      addressTitle: '企业总部地址：',
      addressVal: '越南胡志明市',
      factoryTitle: '加工生产基地与大型仓储：',
      factoryVal: '越南湄公河三角洲核心农产深加工区',
      commitmentTitle: 'B2B 商务履约承诺',
      commitment1: '• 24个工作小时内快速响应技术报价单与 TDS 参数表。',
      commitment2: '• 支持向海内外研发实验室快速空运免费测试样品包。',
      commitment3: '• 为专属定制与配方研发合作签署严格的双向保密协议（NDA）。',
      formTitle: 'B2B 商务大宗报价与样品申请表',
      formSubtitle:
        '请填写以下信息，Agrihub 商务工程师将为您定制详尽的技术规格书与阶梯报价。',
    };
  }

  return {
    responseBadge: 'Phản hồi 24h',
    channelTitle: 'Kênh liên hệ trực tiếp B2B',
    emailTitle: 'Email phòng Thương mại & Xuất khẩu:',
    emailVal: 'sales@agrihub.vn',
    phoneTitle: 'Hotline / WhatsApp / WeChat:',
    phoneVal: '+84 90 123 4567',
    addressTitle: 'Trụ sở chính:',
    addressVal: 'TP. Hồ Chí Minh, Việt Nam',
    factoryTitle: 'Cơ sở sản xuất & Kho hàng:',
    factoryVal: 'Vùng nguyên liệu Đồng bằng Sông Cửu Long, Việt Nam',
    commitmentTitle: 'Cam kết dịch vụ B2B',
    commitment1:
      '• Phản hồi bảng giá kỹ thuật và thông số TDS trong vòng 24 giờ làm việc.',
    commitment2:
      '• Hỗ trợ gửi mẫu thử phòng Lab qua đường chuyển phát nhanh quốc tế.',
    commitment3:
      '• Ký kết thỏa thuận bảo mật công thức (NDA) đối với các dự án gia công OEM.',
    formTitle: 'Biểu mẫu yêu cầu Báo giá & Mẫu thử B2B',
    formSubtitle:
      'Vui lòng cung cấp thông tin để chuyên viên thương mại Agrihub chuẩn bị hồ sơ kỹ thuật chính xác nhất.',
  };
}

export function getProductDetailPageTranslations(lang: Locale) {
  if (lang === 'en') {
    return {
      tableTitle: 'STANDARD TECHNICAL SPECIFICATIONS (TDS)',
      refCode: 'Reference Code:',
      colTradeName: 'Commercial Product Name',
      colCategory: 'Ingredient Category',
      colMoisture: 'Moisture Content',
      colMesh: 'Granulation / Mesh Size',
      colBrix: 'Total Soluble Solids (Brix)',
      colShelfLife: 'Shelf Life',
      colPackaging: 'Export Packaging Standard',
      colStorage: 'Storage Conditions (Storage Temp)',
      colApplication: 'Industrial Applications',
      colMoq: 'Minimum Order Quantity (MOQ)',
      defaultCategory: 'Processed Agricultural Ingredients',
      defaultMoisture: '≤ 5.0% or standardized upon request',
      defaultMesh: '80 - 120 mesh through 95% sieve',
      defaultShelfLife: '18 - 24 months from production date',
      defaultPackaging:
        'Vacuum aluminum bag 5kg/10kg x export carton, 20kg drum',
      defaultApplication:
        'Bakery, beverages, confectionery, functional dairy, nutrition',
      defaultMoq: '100 kg for trial testing, 500 kg for commercial run',
      btnQuoteSample: 'Request Quotation & Lab Sample Kit',
      btnDownloadPdf: '📄 Download Spec & TDS (PDF)',
      btnBackCatalog: 'Back to Ingredients Catalog',
      specDetailTitle: 'Ingredient Specification:',
    };
  }

  if (lang === 'zh') {
    return {
      tableTitle: '标准产品技术参数表 (TDS / SPEC)',
      refCode: '参考编号：',
      colTradeName: '商品名称与品类',
      colCategory: '原料类别',
      colMoisture: '水分含量 (Moisture)',
      colMesh: '细度目数 / 规格 (Mesh)',
      colBrix: '糖度 (Brix)',
      colShelfLife: '保质期 (Shelf Life)',
      colPackaging: '出口包装规格',
      colStorage: '储存条件与温度 (Storage)',
      colApplication: '核心工业应用',
      colMoq: '最低起订量 (MOQ)',
      defaultCategory: '深加工特色热带农产原料',
      defaultMoisture: '≤ 5.0% 或按工厂要求标准化调配',
      defaultMesh: '80 - 120 目（过筛率 > 95%）',
      defaultShelfLife: '自生产之日起 18 - 24 个月',
      defaultPackaging: '真空铝箔袋 5kg/10kg x 瓦楞纸箱，20kg 无菌钢桶',
      defaultApplication: '烘焙糕点、预调饮品、糖果糖浆、营养乳品代餐',
      defaultMoq: '中试打样单 100 kg，商业量产单 500 kg',
      btnQuoteSample: '索取大宗报价与研发样品 (Lab Sample)',
      btnDownloadPdf: '📄 下载技术规格书 (PDF)',
      btnBackCatalog: '返回原料列表',
      specDetailTitle: '原料技术详情：',
    };
  }

  return {
    tableTitle: 'BẢNG THÔNG SỐ KỸ THUẬT TIÊU CHUẨN (STANDARD SPECIFICATION)',
    refCode: 'Mã tham chiếu:',
    colTradeName: 'Tên thương mại & Sản phẩm',
    colCategory: 'Phân loại danh mục',
    colMoisture: 'Độ ẩm (Moisture)',
    colMesh: 'Độ mịn / Kích cỡ (Mesh Size)',
    colBrix: 'Độ ngọt / Chỉ số Brix',
    colShelfLife: 'Hạn sử dụng (Shelf Life)',
    colPackaging: 'Quy cách đóng gói xuất khẩu',
    colStorage: 'Nhiệt độ / Điều kiện bảo quản',
    colApplication: 'Ứng dụng chính trong sản xuất',
    colMoq: 'Số lượng đặt hàng tối thiểu (MOQ)',
    defaultCategory: 'Nguyên liệu nông sản chế biến',
    defaultMoisture: '≤ 5.0% hoặc chuẩn hóa theo yêu cầu nhà máy',
    defaultMesh: '80 - 120 mesh qua sàng 95%',
    defaultShelfLife: '18 - 24 tháng kể từ ngày sản xuất',
    defaultPackaging:
      'Túi nhôm hút chân không 5kg/10kg x thùng carton, phuy 20kg',
    defaultApplication: 'Bánh kẹo, đồ uống, sữa chua, thực phẩm dinh dưỡng',
    defaultMoq: '100 kg đối với đơn thử nghiệm, 500 kg đối với đơn sản xuất',
    btnQuoteSample: 'Yêu cầu Báo giá & Nhận mẫu thử (Lab Sample)',
    btnDownloadPdf: '📄 Tải Spec & TDS (PDF)',
    btnBackCatalog: 'Quay lại Danh mục nguyên liệu',
    specDetailTitle: 'Chi tiết nguyên liệu:',
  };
}

export function getProductsPageTranslations(lang: Locale) {
  if (lang === 'en') {
    return {
      specLabel: 'Specifications:',
      appLabel: 'Applications:',
      moistureLabel: 'Moisture',
      meshLabel: 'Mesh Size',
      shelfLifeLabel: 'Shelf Life',
      viewTds: 'View Spec & TDS',
      sampleBtn: 'Request Sample',
      cmsTitle: '⚡ Content Management System (WordPress CMS)',
      cmsDesc:
        'Product catalog dynamically synchronized from the WordPress API. Live updates in WordPress Admin are reflected directly here.',
    };
  }

  if (lang === 'zh') {
    return {
      specLabel: '技术规格：',
      appLabel: '核心应用：',
      moistureLabel: '水分含量',
      meshLabel: '细度目数',
      shelfLifeLabel: '保质期限',
      viewTds: '查看规格书 & TDS',
      sampleBtn: '索取样品',
      cmsTitle: '⚡ 内容管理系统 (WordPress CMS)',
      cmsDesc:
        '产品目录通过 WordPress API 动态同步展示。后台各项更新将实时在此反映。',
    };
  }

  return {
    specLabel: 'Thông số kỹ thuật:',
    appLabel: 'Ứng dụng chính:',
    moistureLabel: 'Độ ẩm',
    meshLabel: 'Độ mịn',
    shelfLifeLabel: 'Hạn dùng',
    viewTds: 'Xem Spec & TDS',
    sampleBtn: 'Xin mẫu thử',
    cmsTitle: '⚡ Hệ thống Quản trị Nội dung (WordPress CMS)',
    cmsDesc:
      'Danh mục sản phẩm được đồng bộ tự động từ WordPress API. Mọi cập nhật trong WordPress Admin sẽ hiển thị trực tiếp tại đây.',
  };
}
