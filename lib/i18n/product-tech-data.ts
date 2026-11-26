import { Locale } from './types';
import { ProductTechDetail } from './product-tech-types';
import { localizeProductName } from './product-names';

export const GUAVA_TECH_DETAILS_VI: Record<string, ProductTechDetail> = {
  'bot-oi-say-phun': {
    slug: 'bot-oi-say-phun',
    technologyType: 'spray-dried',
    displayName: 'Bột Ổi Sấy Phun AGRIHUB',
    vietnameseName: 'BỘT ỔI SẤY PHUN AGRIHUB',
    englishName: 'SPRAY-DRIED GUAVA POWDER',
    typeBadge: 'Bột sấy phun công nghệ cao',
    italicIntro:
      'Bột ổi AGRIHUB được chế biến từ những quả ổi tươi lựa chọn kỹ lưỡng, ứng dụng công nghệ sấy phun tạo thành bột khô mịn, mang hương vị ổi đặc trưng. Sản phẩm không sử dụng chất bảo quản, thuận tiện trong bảo quản, vận chuyển và ứng dụng vào sản xuất thực phẩm, đồ uống.',
    image: '/images/products/bot-oi-say-phun.jpg',
    imageAlt: 'Bột ổi sấy phun AGRIHUB mịn đồng đều',
    highlights: ['Bột mịn phân tán nhanh', 'Thuận tiện phối trộn', 'Không chất bảo quản'],

    processTitle: 'Quy trình sản xuất bột ổi sấy phun',
    processIntro:
      'Quy trình sản xuất bột ổi sấy phun AGRIHUB theo quy trình khép kín, với chất lượng được kiểm soát từ nguyên liệu đầu vào đến thành phẩm. Những quả ổi tươi được lựa chọn kỹ lưỡng, làm sạch và xử lý thành dịch quả. Dịch ổi tiếp tục được chuẩn bị theo công thức trước khi đưa vào hệ thống sấy phun và được phân tán thành các giọt nhỏ tạo thành bột mịn. Bột sau sấy được thu hồi, kiểm tra chất lượng và đóng gói theo quy cách sản phẩm.',
    processSteps: [
      { step: '01', title: 'Lựa chọn kỹ lưỡng', desc: 'Kiểm tra chất lượng nguyên liệu' },
      { step: '02', title: 'Sơ chế nguyên liệu', desc: 'Làm sạch và chuẩn bị phần quả' },
      { step: '03', title: 'Chuẩn bị dịch sấy', desc: 'Xử lý, phối trộn dịch cấp sấy' },
      { step: '04', title: 'Sấy phun tạo bột', desc: 'Phun sương, làm khô, thu hồi bột' },
      { step: '05', title: 'Kiểm tra thành phẩm', desc: 'Đánh giá chất lượng, đóng gói' },
    ],

    whyChooseTitle: 'Vì sao chọn bột ổi sấy phun AGRIHUB?',
    whyChooseIntro:
      'Khi sản xuất nhiều công thức, việc chuẩn bị quả tươi cho từng mẻ tốn thêm thời gian và công đoạn. Bột ổi sấy phun AGRIHUB giúp đơn giản hóa khâu chuẩn bị nguyên liệu, để doanh nghiệp chủ động hơn khi thử mẫu và đưa sản phẩm vào sản xuất.',
    benefits: [
      {
        title: 'Giảm công đoạn chuẩn bị ổi tươi',
        desc: 'Nguyên liệu được cung cấp ở dạng bột, không cần các bước rửa, ép và lọc quả mỗi lần phối trộn.',
      },
      {
        title: 'Dễ kiểm soát lượng dùng giữa các mẻ',
        desc: 'Tỷ lệ bột được xác định qua thử mẫu và đưa vào công thức sản xuất, giúp doanh nghiệp tiết kiệm thời gian lặp lại các mẻ.',
      },
      {
        title: 'Chủ động kế hoạch cung ứng nguyên liệu',
        desc: 'Bột được đóng gói theo quy cách đặt hàng, giúp doanh nghiệp tính lượng cần dùng cho từng đợt sản xuất mà không phải dự trữ quả tươi.',
      },
      {
        title: 'Điều chỉnh theo công thức khách hàng',
        desc: 'AGRIHUB tiếp nhận yêu cầu về thành phần, hương vị và mục đích sử dụng để tư vấn kỹ thuật, chuẩn bị mẫu phù hợp với sản phẩm khách hàng đang phát triển.',
      },
    ],

    applicationsTitle: 'Ứng dụng trong sản xuất F&B',
    applicationGroups: [
      {
        group: 'Đồ uống',
        items: 'Bột pha uống hương ổi, trà trái cây, nước giải khát và các dòng bột pha sẵn dùng trong sản xuất đồ uống.',
      },
      {
        group: 'Sữa và sản phẩm từ sữa',
        items: 'Sữa chua ăn, sữa chua uống, kem và các sản phẩm từ sữa có phối trộn thành phần ổi.',
      },
      {
        group: 'Thực phẩm chế biến',
        items: 'Bánh quy, bánh bông lan, kẹo dẻo, thạch, ngũ cốc và hỗn hợp bột dinh dưỡng có bổ sung ổi.',
      },
    ],

    packagingStorageTitle: 'Quy cách đóng gói và bảo quản',
    packagingStorage: {
      packaging:
        'Bột ổi sấy phun AGRIHUB được cung cấp với nhiều quy cách đóng gói, phù hợp với nhu cầu sử dụng của doanh nghiệp sản xuất thực phẩm.',
      shelfLife: 'Theo thông tin được công bố trên bao bì sản phẩm.',
      storage:
        'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và đậy kín bao bì sau khi mở.',
    },

    partnerTitle: 'AGRIHUB – Đối tác cung ứng và tư vấn bột ổi sấy phun',
    partnerIntro:
      'AGRIHUB cung cấp bột ổi sấy phun cho các doanh nghiệp sản xuất thực phẩm và đồ uống. Chúng tôi tư vấn lựa chọn nguyên liệu, quy cách đóng gói và mẫu thử theo yêu cầu của từng sản phẩm.',
    partnerPoints: [
      {
        title: 'Tư vấn theo ứng dụng',
        desc: 'Trao đổi về sản phẩm dự kiến để lựa chọn dòng bột có đặc tính phù hợp.',
      },
      {
        title: 'Hỗ trợ đánh giá mẫu',
        desc: 'Khách hàng thử hương vị và khả năng phối trộn trong công thức trước khi đặt hàng.',
      },
      {
        title: 'Đảm bảo chất lượng và an toàn thực phẩm',
        desc: 'AGRIHUB luôn chú trọng chất lượng và an toàn thực phẩm trong sản xuất, bảo đảm mang đến những sản phẩm ổn định về chất lượng, phù hợp với yêu cầu của từng khách hàng.',
      },
      {
        title: 'Giá cạnh tranh theo đơn hàng',
        desc: 'Báo giá theo khối lượng, quy cách bao bì và công thức đặt hàng.',
      },
    ],
    partnerCtaText:
      'Liên hệ với chúng tôi để được tư vấn kỹ thuật và nhận báo giá. Khách hàng vui lòng cho biết mục đích sử dụng, quy cách đóng gói và khối lượng dự kiến để AGRIHUB hỗ trợ lựa chọn nguyên liệu.',

    faqTitle: 'Câu hỏi thường gặp kỹ thuật',
    faqs: [
      {
        question: 'Bột ổi sấy phun có dễ hòa tan khi pha chế không?',
        answer:
          'Công nghệ sấy phun tạo dạng bột mịn, thuận tiện phối trộn vào đồ uống và thực phẩm. Khả năng hòa tan và độ lắng phụ thuộc từng công thức; AGRIHUB cung cấp mẫu để khách hàng đánh giá trực tiếp trước khi đặt hàng.',
      },
      {
        question: 'Bột ổi sấy phun có sử dụng chất mang không?',
        answer:
          'Tùy công thức sản phẩm; thông tin thành phần được AGRIHUB cung cấp khi khách hàng liên hệ.',
      },
    ],
  },

  'bot-oi-say-nghien': {
    slug: 'bot-oi-say-nghien',
    technologyType: 'milled',
    displayName: 'Bột Ổi Sấy Nghiền AGRIHUB',
    vietnameseName: 'BỘT ỔI SẤY NGHIỀN AGRIHUB',
    englishName: 'DRIED AND MILLED GUAVA POWDER',
    typeBadge: 'Bột sấy nghiền nguyên cấu trúc hạt',
    italicIntro:
      'Bột ổi sấy nghiền AGRIHUB được làm từ ổi tươi được lựa chọn kỹ lưỡng, qua sơ chế, sấy khô và nghiền theo cỡ hạt của từng quy cách. Cấu trúc hạt từ phần quả sau sấy là nét đặc trưng của dòng bột này, góp phần tạo cảm giác trái cây rõ nét trong các công thức thực phẩm. Dạng bột khô cũng thuận tiện cho đóng gói, bảo quản và vận chuyển hơn nguyên liệu tươi. Sản phẩm không sử dụng chất bảo quản.',
    image: '/images/products/bot-oi-say-nghien.jpg',
    imageAlt: 'Bột ổi sấy nghiền AGRIHUB giữ cấu trúc hạt tự nhiên',
    highlights: ['Cấu trúc hạt tự nhiên', 'Độ mịn Mesh tùy chỉnh', 'Không chất bảo quản'],

    processTitle: 'Quy trình sản xuất bột ổi sấy nghiền',
    processIntro:
      'Với công nghệ sấy nghiền, các công đoạn được kiểm soát xuyên suốt từ khâu lựa chọn ổi tươi đến hoàn thiện bột thành phẩm. Sau khi kiểm tra và sơ chế, phần quả được sấy khô nhằm giảm lượng nước, tạo điều kiện cho công đoạn nghiền. Nguyên liệu sau sấy được nghiền và hoàn thiện cỡ hạt theo quy cách của từng sản phẩm. Bột thành phẩm được kiểm tra chất lượng trước khi đóng gói, với cỡ hạt theo quy cách đã thống nhất.',
    processSteps: [
      { step: '01', title: 'Lựa chọn kỹ lưỡng', desc: 'Kiểm tra chất lượng ổi đầu vào' },
      { step: '02', title: 'Sơ chế phần quả', desc: 'Làm sạch, chuẩn bị để sấy' },
      { step: '03', title: 'Sấy khô nguyên liệu', desc: 'Giảm lượng nước của phần quả' },
      { step: '04', title: 'Nghiền thành bột', desc: 'Hoàn thiện cỡ hạt theo quy cách' },
      { step: '05', title: 'Kiểm tra thành phẩm', desc: 'Đánh giá chất lượng, đóng gói' },
    ],

    whyChooseTitle: 'Vì sao chọn bột ổi sấy nghiền AGRIHUB?',
    whyChooseIntro:
      'Với những sản phẩm cần thành phần trái cây dạng khô, bột ổi sấy nghiền tạo điểm nhấn nhờ hương vị ổi và kết cấu hạt sau nghiền. Dòng nguyên liệu này phù hợp với các công thức muốn thể hiện rõ thành phần trái cây, nhất là bánh và sản phẩm ngũ cốc.',
    benefits: [
      {
        title: 'Tiết kiệm công đoạn làm bột tại cơ sở',
        desc: 'Nguyên liệu đã được sấy và nghiền trước khi giao hàng, giúp rút ngắn khâu chuẩn bị ổi tươi cho từng đợt sản xuất.',
      },
      {
        title: 'Tạo điểm nhấn cho kết cấu thành phẩm',
        desc: 'Cỡ hạt được lựa chọn phù hợp để thành phần ổi thể hiện rõ hơn về kết cấu khi kết hợp với bánh, ngũ cốc và thực phẩm dạng khô.',
      },
      {
        title: 'Dễ kết hợp trong công thức nguyên liệu khô',
        desc: 'Bột ổi được phối cùng bột ngũ cốc và các thành phần làm bánh mà không làm tăng lượng nước như khi dùng quả tươi.',
      },
      {
        title: 'Lựa chọn độ mịn và công thức theo yêu cầu',
        desc: 'AGRIHUB tiếp nhận nhu cầu về cỡ hạt, thành phần và hương vị để tư vấn, chuẩn bị mẫu thử phù hợp với sản phẩm khách hàng đang phát triển.',
      },
    ],

    applicationsTitle: 'Ứng dụng trong sản xuất F&B',
    applicationGroups: [
      {
        group: 'Bánh và thực phẩm nướng',
        items: 'Bánh quy, bánh bông lan, bánh mì và các loại bánh có bổ sung thành phần ổi dạng bột.',
      },
      {
        group: 'Ngũ cốc và thanh dinh dưỡng',
        items: 'Granola, ngũ cốc ăn sáng, thanh ngũ cốc và thanh dinh dưỡng cần nguyên liệu trái cây dạng khô.',
      },
      {
        group: 'Đồ uống có kết cấu sánh',
        items: 'Sinh tố và đồ uống trái cây chấp nhận phần hạt mịn; cần thử độ lắng và cảm giác khi uống trước khi chọn loại bột.',
      },
    ],

    packagingStorageTitle: 'Quy cách đóng gói và bảo quản',
    packagingStorage: {
      packaging:
        'Bột ổi sấy nghiền AGRIHUB được cung cấp với nhiều quy cách đóng gói, đáp ứng nhu cầu sử dụng và sản xuất của khách hàng.',
      shelfLife: 'Theo thông tin công bố trên bao bì sản phẩm.',
      storage:
        'Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và đóng kín bao bì sau khi sử dụng.',
    },

    partnerTitle: 'AGRIHUB – Đối tác cung ứng và tư vấn bột ổi sấy nghiền',
    partnerIntro:
      'AGRIHUB cung cấp bột ổi sấy nghiền theo độ mịn và quy cách phù hợp với từng ứng dụng sản xuất. Doanh nghiệp được tư vấn lựa chọn mẫu thử để đánh giá trong công thức thực tế.',
    partnerPoints: [
      {
        title: 'Tư vấn theo thành phẩm',
        desc: 'Ghi nhận yêu cầu về độ mịn trong sản phẩm cuối.',
      },
      {
        title: 'Mẫu thử cho từng ứng dụng',
        desc: 'Khách hàng đánh giá cách bột kết hợp với nền nguyên liệu đang sử dụng.',
      },
      {
        title: 'Đảm bảo chất lượng và an toàn thực phẩm',
        desc: 'AGRIHUB luôn chú trọng chất lượng và an toàn thực phẩm trong sản xuất, bảo đảm mang đến những sản phẩm ổn định về chất lượng, phù hợp với yêu cầu của từng khách hàng.',
      },
      {
        title: 'Giá cạnh tranh cho khách hàng B2B',
        desc: 'Báo giá được tính theo khối lượng, độ mịn yêu cầu, hình thức đóng gói và điều kiện cung ứng.',
      },
    ],
    partnerCtaText:
      'Liên hệ với chúng tôi để được tư vấn kỹ thuật và nhận báo giá. Khách hàng vui lòng chia sẻ nhóm sản phẩm, độ mịn mong muốn, bao bì và khối lượng dự kiến.',

    faqTitle: 'Câu hỏi thường gặp kỹ thuật',
    faqs: [
      {
        question: 'Bột ổi sấy nghiền có dùng được trong đồ uống không?',
        answer:
          'Dòng bột phù hợp với những công thức chấp nhận phần hạt trái cây. Khi dùng trong đồ uống, cần thử độ mịn, độ lắng và cảm giác khi uống trước khi chọn quy cách.',
      },
      {
        question: 'AGRIHUB có nhận điều chỉnh độ mịn theo yêu cầu sản phẩm không?',
        answer:
          'AGRIHUB tiếp nhận yêu cầu về cỡ hạt, thành phần và mục đích sử dụng để tư vấn mẫu thử. Cỡ hạt được thống nhất sau khi đánh giá trong công thức thực tế.',
      },
    ],
  },

  'puree-oi': {
    slug: 'puree-oi',
    technologyType: 'puree',
    displayName: 'Puree Ổi AGRIHUB',
    vietnameseName: 'PUREE ỔI AGRIHUB',
    englishName: 'GUAVA PURÉE',
    typeBadge: 'Puree thịt quả sánh nhuyễn',
    italicIntro:
      'Puree ổi AGRIHUB được chế biến từ những quả ổi tươi được lựa chọn kỹ lưỡng, qua sơ chế và xay nhuyễn phần quả. Sản phẩm giữ được hương thơm đặc trưng của ổi cùng vị chua ngọt rõ nét; phần thịt quả sánh nhuyễn giúp hương vị trái cây thể hiện nổi bật trong các công thức đồ uống và thực phẩm chế biến. Puree không sử dụng chất bảo quản.',
    image: '/images/products/puree-oi.jpg',
    imageAlt: 'Puree ổi AGRIHUB thịt quả sánh nhuyễn tự nhiên',
    highlights: ['Thịt quả sánh nhuyễn', 'Vị chua ngọt tự nhiên', 'Không chất bảo quản'],

    processTitle: 'Quy trình sản xuất puree ổi',
    processIntro:
      'Puree ổi AGRIHUB được chế biến qua các công đoạn liên tục, bắt đầu từ lựa chọn kỹ lưỡng, làm sạch và sơ chế ổi tươi. Phần quả được xay nhuyễn để tạo kết cấu thịt quả sánh đặc trưng; độ mịn và độ sánh tiếp tục được hoàn thiện theo quy cách từng sản phẩm. Sau các bước xử lý theo quy trình sản xuất, puree được kiểm tra chất lượng, đóng gói và bảo quản theo điều kiện phù hợp.',
    processSteps: [
      { step: '01', title: 'Lựa chọn kỹ lưỡng', desc: 'Kiểm tra chất lượng ổi đầu vào' },
      { step: '02', title: 'Sơ chế phần quả', desc: 'Làm sạch, chuẩn bị để xay' },
      { step: '03', title: 'Xay nhuyễn phần quả', desc: 'Tạo kết cấu thịt quả sánh nhuyễn' },
      { step: '04', title: 'Hoàn thiện puree', desc: 'Hoàn thiện độ sánh và độ mịn' },
      { step: '05', title: 'Kiểm tra thành phẩm', desc: 'Đóng gói, bảo quản theo quy cách' },
    ],

    whyChooseTitle: 'Vì sao chọn puree ổi AGRIHUB?',
    whyChooseIntro:
      'Puree ổi phù hợp với các công thức muốn thể hiện rõ vị ổi cùng phần thịt quả sánh nhuyễn. Khi nguyên liệu đã được chế biến sẵn, doanh nghiệp tiết kiệm thời gian chuẩn bị quả tươi và tập trung lựa chọn kết cấu phù hợp với sản phẩm cuối.',
    benefits: [
      {
        title: 'Hương ổi nổi bật cùng độ sánh tự nhiên',
        desc: 'Phần thịt quả xay nhuyễn đưa vị ổi chua ngọt và kết cấu sánh vào sinh tố, sữa chua hoặc món tráng miệng, giúp sản phẩm có nét riêng từ nguyên liệu trái cây.',
      },
      {
        title: 'Rút ngắn khâu chuẩn bị nguyên liệu',
        desc: 'Không phải qua các bước rửa, cắt và xay ổi tại nơi sử dụng mỗi khi bắt đầu một mẻ sản xuất.',
      },
      {
        title: 'Điều chỉnh độ sánh theo công thức khách hàng',
        desc: 'AGRIHUB tư vấn độ mịn, độ sánh và chuẩn bị mẫu để doanh nghiệp thử trực tiếp trong sản phẩm đang phát triển.',
      },
      {
        title: 'Linh hoạt quy cách đặt hàng',
        desc: 'Bao bì và khối lượng được trao đổi theo nhu cầu, giúp doanh nghiệp chủ động chuẩn bị nguyên liệu cho kế hoạch chế biến.',
      },
    ],

    applicationsTitle: 'Ứng dụng trong sản xuất F&B',
    applicationGroups: [
      {
        group: 'Đồ uống',
        items: 'Sinh tố ổi, nectar, nước trái cây có thịt quả và đồ uống phối trộn từ nhiều loại trái cây.',
      },
      {
        group: 'Sữa và sản phẩm từ sữa',
        items: 'Sữa chua ăn, sữa chua uống, kem và các sản phẩm từ sữa sử dụng thành phần ổi dạng nhuyễn.',
      },
      {
        group: 'Thực phẩm chế biến',
        items: 'Sốt ổi, nhân bánh, lớp phủ bánh, topping và các sản phẩm tráng miệng có thành phần trái cây.',
      },
    ],

    packagingStorageTitle: 'Quy cách đóng gói và bảo quản',
    packagingStorage: {
      packaging:
        'Puree ổi AGRIHUB được cung cấp theo các quy cách đóng gói phù hợp với nhu cầu sử dụng và sản xuất của khách hàng.',
      shelfLife: 'Theo thông tin được công bố trên bao bì sản phẩm.',
      storage:
        'Bảo quản theo điều kiện nhiệt độ quy định đối với từng sản phẩm nhằm duy trì chất lượng trong suốt thời hạn sử dụng.',
    },

    partnerTitle: 'AGRIHUB – Đối tác cung ứng và tư vấn puree ổi',
    partnerIntro:
      'AGRIHUB cung cấp puree ổi theo quy cách phù hợp với doanh nghiệp, cùng thông tin về bao bì, điều kiện bảo quản và giao nhận của từng sản phẩm.',
    partnerPoints: [
      {
        title: 'Tư vấn trạng thái puree',
        desc: 'Trao đổi về độ mịn, độ sánh và mục tiêu ứng dụng của sản phẩm.',
      },
      {
        title: 'Hỗ trợ thử mẫu',
        desc: 'Khách hàng đánh giá hương vị và phối trộn trong công thức thực tế.',
      },
      {
        title: 'Đảm bảo chất lượng và an toàn thực phẩm',
        desc: 'AGRIHUB luôn chú trọng chất lượng và an toàn thực phẩm trong sản xuất, bảo đảm mang đến những sản phẩm ổn định về chất lượng, phù hợp với yêu cầu của từng khách hàng.',
      },
      {
        title: 'Chính sách giá cạnh tranh',
        desc: 'Báo giá được trao đổi theo khối lượng, loại bao bì, điều kiện bảo quản và yêu cầu công thức.',
      },
    ],
    partnerCtaText: 'Liên hệ với chúng tôi để được tư vấn kỹ thuật và nhận báo giá.',

    faqTitle: 'Câu hỏi thường gặp kỹ thuật',
    faqs: [
      {
        question: 'AGRIHUB có nhận puree ổi với độ sánh theo công thức của tôi không?',
        answer:
          'AGRIHUB tiếp nhận yêu cầu về độ sánh, độ mịn và hương vị để tư vấn, chuẩn bị mẫu thử. Khách hàng đánh giá mẫu trong sản phẩm thực tế trước khi thống nhất quy cách.',
      },
      {
        question: 'Puree ổi cần được bảo quản và vận chuyển như thế nào?',
        answer:
          'Điều kiện lưu kho và vận chuyển phụ thuộc phương pháp xử lý, loại bao bì và quy cách sản phẩm. AGRIHUB cung cấp hướng dẫn cụ thể cho dòng puree khách hàng lựa chọn.',
      },
    ],
  },

  'oi-co-dac': {
    slug: 'oi-co-dac',
    technologyType: 'concentrate',
    displayName: 'Ổi Cô Đặc AGRIHUB',
    vietnameseName: 'ỔI CÔ ĐẶC AGRIHUB',
    englishName: 'GUAVA CONCENTRATE',
    typeBadge: 'Cô đặc chân không chất lượng cao',
    italicIntro:
      'Ổi cô đặc AGRIHUB được chế biến từ dịch ổi hoặc puree ổi, tùy theo yêu cầu của khách hàng. Nguyên liệu từ những quả ổi tươi được lựa chọn kỹ lưỡng, sau đó cô đặc chân không để giảm bớt lượng nước và tăng hàm lượng chất khô. Thành phẩm mang hương ổi rõ, vị chua ngọt đậm đà; độ sánh và kết cấu được điều chỉnh theo yêu cầu của từng công thức đồ uống và thực phẩm chế biến. Sản phẩm không sử dụng chất bảo quản.',
    image: '/images/products/oi-co-dac.jpg',
    imageAlt: 'Ổi cô đặc AGRIHUB chất khô đậm đà',
    highlights: ['Hàm lượng chất khô cao', 'Cô đặc chân không', 'Tối ưu chi phí vận chuyển'],

    processTitle: 'Quy trình sản xuất ổi cô đặc',
    processIntro:
      'Quy trình sản xuất ổi cô đặc AGRIHUB sử dụng dịch ổi hoặc puree ổi làm nguyên liệu đầu vào, tùy theo yêu cầu về công thức sản phẩm. Ổi tươi được lựa chọn kỹ lưỡng, sơ chế và xử lý trước khi đưa nguyên liệu vào hệ thống cô đặc chân không. Dưới áp suất thấp, một phần nước được tách ra nhằm tăng hàm lượng chất khô, tạo độ sánh và hương vị ổi đặc trưng. Thành phẩm được kiểm tra chất lượng, đóng gói và bảo quản theo quy cách đã thống nhất.',
    processSteps: [
      { step: '01', title: 'Lựa chọn kỹ lưỡng', desc: 'Kiểm tra chất lượng ổi đầu vào' },
      { step: '02', title: 'Sơ chế nguyên liệu', desc: 'Chuẩn bị dịch ổi hoặc puree' },
      { step: '03', title: 'Chuẩn bị cô đặc', desc: 'Xử lý nguyên liệu trước cô đặc' },
      { step: '04', title: 'Cô đặc chân không', desc: 'Tách bớt nước dưới áp suất thấp' },
      { step: '05', title: 'Kiểm tra thành phẩm', desc: 'Đánh giá chất lượng, đóng gói' },
    ],

    whyChooseTitle: 'Vì sao chọn ổi cô đặc AGRIHUB?',
    whyChooseIntro:
      'Trong các công thức cần vị ổi rõ và dễ cân đối lượng nước, ổi cô đặc giúp doanh nghiệp chủ động hơn ở bước phối trộn. Tùy mục đích sử dụng, khách hàng lựa chọn nền dịch ổi hoặc puree ổi cô đặc để đạt kết cấu mong muốn.',
    benefits: [
      {
        title: 'Tăng độ đậm đà của vị ổi trong công thức',
        desc: 'Dạng cô đặc mang đến hương ổi rõ nét cho đồ uống, sốt và thực phẩm chế biến mà không bổ sung nhiều nước như nguyên liệu ban đầu.',
      },
      {
        title: 'Chủ động lượng nguyên liệu trong công thức',
        desc: 'Hàm lượng chất khô là cơ sở để tính lượng ổi cô đặc và lượng nước bổ sung theo mục tiêu thành phẩm.',
      },
      {
        title: 'Linh hoạt về nền nguyên liệu và kết cấu',
        desc: 'AGRIHUB tư vấn sản phẩm cô đặc từ dịch ổi hoặc puree ổi tùy yêu cầu về phần thịt quả, độ sánh và cảm quan.',
      },
      {
        title: 'Giảm khối lượng nước khi vận chuyển',
        desc: 'Với cùng lượng chất khô, cô đặc chứa ít nước hơn trước khi cô đặc, giúp giảm khối lượng nguyên liệu cần vận chuyển.',
      },
    ],

    applicationsTitle: 'Ứng dụng trong sản xuất F&B',
    applicationGroups: [
      {
        group: 'Đồ uống',
        items: 'Nước giải khát hương ổi, syrup pha chế và các loại đồ uống phối trộn.',
      },
      {
        group: 'Sữa và sản phẩm từ sữa',
        items: 'Sữa chua ăn, sữa chua uống, kem và các sản phẩm từ sữa có bổ sung thành phần ổi cô đặc.',
      },
      {
        group: 'Thực phẩm chế biến',
        items: 'Sốt trái cây, mứt, thạch, kẹo và nhân bánh cần vị ổi rõ hoặc kết cấu sánh.',
      },
    ],

    packagingStorageTitle: 'Quy cách đóng gói và bảo quản',
    packagingStorage: {
      packaging:
        'Ổi cô đặc AGRIHUB được cung cấp theo các quy cách đóng gói phù hợp với nhu cầu sử dụng và sản xuất của khách hàng.',
      shelfLife: 'Theo thông tin được công bố trên bao bì sản phẩm.',
      storage:
        'Bảo quản theo điều kiện nhiệt độ quy định đối với từng sản phẩm nhằm duy trì chất lượng trong thời hạn sử dụng.',
    },

    partnerTitle: 'AGRIHUB – Đối tác cung ứng và tư vấn ổi cô đặc',
    partnerIntro:
      'AGRIHUB cung cấp ổi cô đặc theo nhu cầu sản xuất của doanh nghiệp, với quy cách, chất lượng và điều kiện giao nhận được thống nhất cho từng đơn hàng.',
    partnerPoints: [
      {
        title: 'Tư vấn theo mục tiêu sản phẩm',
        desc: 'Trao đổi về độ Brix, trạng thái và hương vị phù hợp với ứng dụng dự kiến.',
      },
      {
        title: 'Mẫu thử phục vụ phối liệu',
        desc: 'Khách hàng đánh giá nguyên liệu trong công thức trước khi thống nhất đặt hàng.',
      },
      {
        title: 'Đảm bảo chất lượng và an toàn thực phẩm',
        desc: 'AGRIHUB luôn chú trọng chất lượng và an toàn thực phẩm trong sản xuất, bảo đảm mang đến những sản phẩm ổn định về chất lượng, phù hợp với yêu cầu của từng khách hàng.',
      },
      {
        title: 'Báo giá cạnh tranh theo nhu cầu',
        desc: 'Giá được xây dựng quy cách đóng gói, khối lượng và điều kiện giao hàng.',
      },
    ],
    partnerCtaText: 'Liên hệ với chúng tôi để được tư vấn kỹ thuật và nhận báo giá.',

    faqTitle: 'Câu hỏi thường gặp kỹ thuật',
    faqs: [
      {
        question: 'Ổi cô đặc có cần pha thêm nước trước khi đưa vào sản xuất không?',
        answer:
          'Tùy công thức, ổi cô đặc được phối trộn trực tiếp hoặc bổ sung nước theo mục tiêu thành phẩm. Tỷ lệ sử dụng được lựa chọn dựa trên độ Brix, hương vị và độ sánh sau khi thử mẫu.',
      },
      {
        question: 'AGRIHUB có nhận điều chỉnh độ Brix và hương vị theo yêu cầu không?',
        answer:
          'AGRIHUB tiếp nhận yêu cầu về độ Brix, độ sánh, hương vị và nền nguyên liệu dịch ổi hoặc puree để tư vấn kỹ thuật, chuẩn bị mẫu thử theo công thức khách hàng đang phát triển.',
      },
    ],
  },
};

// Aliases for English / alternative slugs
export const SLUG_ALIASES: Record<string, string> = {
  'spray-dried-guava-powder': 'bot-oi-say-phun',
  'guava-powder-spray-dried': 'bot-oi-say-phun',
  'milled-guava-powder': 'bot-oi-say-nghien',
  'guava-powder-milled': 'bot-oi-say-nghien',
  'guava-puree': 'puree-oi',
  'puree-guava': 'puree-oi',
  'guava-concentrate': 'oi-co-dac',
  'concentrated-guava': 'oi-co-dac',
};

export const GUAVA_TECH_DETAILS_EN: Record<string, ProductTechDetail> = {
  'bot-oi-say-phun': {
    slug: 'bot-oi-say-phun',
    technologyType: 'spray-dried',
    displayName: 'Spray-Dried Guava Powder',
    vietnameseName: 'BỘT ỔI SẤY PHUN AGRIHUB',
    englishName: 'SPRAY-DRIED GUAVA POWDER',
    typeBadge: 'High-Tech Spray-Dried Powder',
    italicIntro:
      'AGRIHUB Guava Powder is crafted from carefully selected fresh guavas, utilizing advanced spray drying technology to create a fine dry powder retaining characteristic guava aroma. Free from artificial preservatives, convenient for industrial storage, transport, and integration into food and beverage formulations.',
    image: '/images/products/bot-oi-say-phun.jpg',
    imageAlt: 'AGRIHUB Spray-Dried Guava Powder fine texture',
    highlights: ['Fine dispersible powder', 'Consistent batch blending', 'No preservatives'],

    processTitle: 'Spray-Dried Guava Powder Manufacturing Process',
    processIntro:
      'AGRIHUB spray-dried guava powder follows a closed-loop manufacturing flow, rigorously inspected from raw materials to final output. Fresh fruits are sorted, cleaned, and processed into fruit liquid before entering spray atomization into fine powder. Recovered powder undergoes quality inspection and standardized packaging.',
    processSteps: [
      { step: '01', title: 'Rigorous Selection', desc: 'Raw fruit quality inspection' },
      { step: '02', title: 'Fruit Preparation', desc: 'Cleaning and pulp extraction' },
      { step: '03', title: 'Feed Slurry Prep', desc: 'Formulation blending for spray drying' },
      { step: '04', title: 'Spray Atomization', desc: 'Nozzle atomization, drying & powder recovery' },
      { step: '05', title: 'Quality Assurance', desc: 'Batch sensory testing & packaging' },
    ],

    whyChooseTitle: 'Why Choose AGRIHUB Spray-Dried Guava Powder?',
    whyChooseIntro:
      'Preparing fresh fruit for diverse recipe batches consumes significant plant labor. AGRIHUB Spray-Dried Guava Powder streamlines raw ingredient prep, granting manufacturers greater flexibility for trials and commercial runs.',
    benefits: [
      {
        title: 'Eliminate Fresh Fruit Handling',
        desc: 'Supplied in stable powder form—bypassing washing, peeling, pressing, and filtering on every mixing shift.',
      },
      {
        title: 'Precision Batch-to-Batch Dosing',
        desc: 'Formulation ratios validated through sampling save trial time and guarantee repeatable production consistency.',
      },
      {
        title: 'Reliable Supply Chain Planning',
        desc: 'Standardized industrial packaging allows accurate requirement forecasting without cold storing perishable fresh fruits.',
      },
      {
        title: 'Customized R&D Formulations',
        desc: 'AGRIHUB tailors ingredient profile, flavor notes, and carrier preferences to support your active product development.',
      },
    ],

    applicationsTitle: 'F&B Industrial Applications',
    applicationGroups: [
      {
        group: 'Beverages',
        items: 'Instant beverage mixes, fruit tea infusions, flavored carbonated drinks, and premix powders.',
      },
      {
        group: 'Dairy & Plant Milk',
        items: 'Stirred & drinkable yogurts, ice creams, dairy blends, and frozen desserts.',
      },
      {
        group: 'Processed Food & Bakery',
        items: 'Biscuits, sponge cakes, gummies, fruit jellies, granolas, and fortified meal replacement blends.',
      },
    ],

    packagingStorageTitle: 'Packaging Specifications & Storage',
    packagingStorage: {
      packaging:
        'Supplied in diverse industrial bulk formats tailored to commercial food manufacturing needs.',
      shelfLife: 'Refer to official packaging label according to approved SKU dossier.',
      storage:
        'Store in cool, dry conditions away from direct sunlight. Reseal tightly after opening.',
    },

    partnerTitle: 'AGRIHUB – Guava Powder Supply & Technical Consulting Partner',
    partnerIntro:
      'AGRIHUB provides spray-dried guava powder for industrial F&B manufacturers, consulting on ingredient selection, packaging specs, and R&D pilot samples.',
    partnerPoints: [
      {
        title: 'Application Consulting',
        desc: 'Aligning powder technical properties with final product target profile.',
      },
      {
        title: 'Application Trial Support',
        desc: 'Sample batches provided to evaluate dispersibility and flavor profile in your pilot line.',
      },
      {
        title: 'Guaranteed Quality & Food Safety',
        desc: 'Standardized manufacturing backed by certified ISO 22000, HACCP, and FDA compliance.',
      },
      {
        title: 'Competitive B2B Volume Pricing',
        desc: 'Customized quotation structured on volume tiers, packaging specs, and supply schedule.',
      },
    ],
    partnerCtaText:
      'Contact our technical team for application advice and personalized quotations. Share your intended application, target volume, and packaging specs.',

    faqTitle: 'Technical FAQ',
    faqs: [
      {
        question: 'Does spray-dried guava powder dissolve easily in formulation?',
        answer:
          'Spray drying yields a fine powder for convenient dispersion into liquid and dry matrixes. Solubility and sedimentation depend on recipe matrix; AGRIHUB provides trial samples for direct evaluation before ordering.',
      },
      {
        question: 'Does the product contain carriers (e.g. Maltodextrin)?',
        answer:
          'Formulation depends on client technical requirements; exact carrier and ingredient profile are detailed upon direct R&D inquiry.',
      },
    ],
  },

  'bot-oi-say-nghien': {
    slug: 'bot-oi-say-nghien',
    technologyType: 'milled',
    displayName: 'Dried and Milled Guava Powder',
    vietnameseName: 'BỘT ỔI SẤY NGHIỀN AGRIHUB',
    englishName: 'DRIED AND MILLED GUAVA POWDER',
    typeBadge: 'Milled Fruit Powder with Natural Particle Structure',
    italicIntro:
      'AGRIHUB Dried and Milled Guava Powder is produced from selected fresh guavas through washing, dehydrating, and milling to customized sieve mesh sizes. Natural fruit particle structure provides noticeable fruit presence and texture in dry formulas. No artificial preservatives added.',
    image: '/images/products/bot-oi-say-nghien.jpg',
    imageAlt: 'AGRIHUB Dried & Milled Guava Powder natural texture',
    highlights: ['Natural fruit pulp texture', 'Customizable mesh size', 'No preservatives'],

    processTitle: 'Milled Guava Powder Manufacturing Process',
    processIntro:
      'Controlled from whole fresh fruit selection to final granulated powder. Following cleaning, the fruit is dehydrated to lower moisture content, enabling controlled precision milling to designated particle size distributions.',
    processSteps: [
      { step: '01', title: 'Fruit Selection', desc: 'Screening raw guava inputs' },
      { step: '02', title: 'Pulp Preparation', desc: 'Washing, slicing, prep for dehydration' },
      { step: '03', title: 'Moisture Removal', desc: 'Gentle drying to optimal milling moisture' },
      { step: '04', title: 'Precision Milling', desc: 'Controlled grinding to specified mesh size' },
      { step: '05', title: 'Quality Inspection', desc: 'Sieve mesh validation and bulk packing' },
    ],

    whyChooseTitle: 'Why Choose AGRIHUB Milled Guava Powder?',
    whyChooseIntro:
      'For dry food applications requiring genuine fruit texture, milled guava powder delivers distinctive mouthfeel and visual fruit speckling without adding excess water.',
    benefits: [
      {
        title: 'Save In-House Dehydration Labor',
        desc: 'Pre-dried and milled to specification prior to delivery, shortening batch preparation.',
      },
      {
        title: 'Authentic Particle Texture',
        desc: 'Calibrated particle sizes emphasize real fruit structure in baked goods and dry breakfast cereals.',
      },
      {
        title: 'Seamless Dry Formula Blending',
        desc: 'Easily premixed with flours, starches, and powders without altering product water activity.',
      },
      {
        title: 'Tailored Mesh Granulation',
        desc: 'AGRIHUB adjusts granulation, sieve mesh, and flavor intensity to match your product development goals.',
      },
    ],

    applicationsTitle: 'F&B Industrial Applications',
    applicationGroups: [
      {
        group: 'Bakery & Pastry',
        items: 'Cookies, artisan biscuits, sponge cakes, bread loaves, and baked snacks with fruit inclusion.',
      },
      {
        group: 'Cereals & Snack Bars',
        items: 'Breakfast granola, muesli, fruit energy bars, and nutrition crisp bars.',
      },
      {
        group: 'Viscous Drinks & Smoothies',
        items: 'Smoothies and fruit nectars accommodating fine natural seed/fiber pulp texture (pilot trial recommended).',
      },
    ],

    packagingStorageTitle: 'Packaging Specifications & Storage',
    packagingStorage: {
      packaging:
        'Supplied in multi-layer moisture-barrier industrial bags matching food manufacturing standards.',
      shelfLife: 'According to official product batch labeling.',
      storage:
        'Store in a cool, dry area away from direct sunlight. Keep tightly sealed after opening.',
    },

    partnerTitle: 'AGRIHUB – Milled Powder Supply & Technical Consulting',
    partnerIntro:
      'AGRIHUB provides milled guava powder tailored in particle size and packaging for food manufacturers. Trial samples provided for recipe integration.',
    partnerPoints: [
      {
        title: 'Target Texture Consulting',
        desc: 'Analyzing required mesh fineness and sensory impact in your final matrix.',
      },
      {
        title: 'Application Pilot Samples',
        desc: 'Validate powder blendability and mouthfeel on your pilot production lines.',
      },
      {
        title: 'Food Safety Standard',
        desc: 'Clean-room manufacturing under ISO 22000, HACCP, and FDA compliant protocols.',
      },
      {
        title: 'B2B Scaled Quotation',
        desc: 'Pricing built on mesh precision requirements, order volume, and packaging configurations.',
      },
    ],
    partnerCtaText:
      'Contact us for technical consultation and sample requests. Share your product category, desired mesh size, and estimated batch volume.',

    faqTitle: 'Technical FAQ',
    faqs: [
      {
        question: 'Can milled guava powder be used in beverage formulations?',
        answer:
          'Suitable for formulations that accept natural fruit pulp particles. For drink applications, testing dispersion, sedimentation, and mouthfeel with pilot samples is advised.',
      },
      {
        question: 'Does AGRIHUB customize powder mesh size upon request?',
        answer:
          'Yes, AGRIHUB accommodates custom sieve mesh sizing and sensory specs following practical application trials.',
      },
    ],
  },

  'puree-oi': {
    slug: 'puree-oi',
    technologyType: 'puree',
    displayName: 'Guava Purée',
    vietnameseName: 'PUREE ỔI AGRIHUB',
    englishName: 'GUAVA PURÉE',
    typeBadge: 'Smooth Natural Fruit Purée',
    italicIntro:
      'AGRIHUB Guava Purée is processed from ripe guavas through sorting, washing, and smooth mechanical refining. It preserves true-to-fruit tropical aroma, balanced sweet-tart notes, and thick velvety pulp texture. Free from artificial preservatives.',
    image: '/images/products/puree-oi.jpg',
    imageAlt: 'AGRIHUB Guava Puree rich velvety pulp texture',
    highlights: ['Rich velvety fruit pulp', 'Balanced sweet-tart flavor', 'No preservatives'],

    processTitle: 'Guava Purée Manufacturing Process',
    processIntro:
      'A continuous, temperature-monitored process from fresh fruit selection to finished purée. Fruit pulp is finely refined to achieve signature viscosity and smooth suspension, followed by pasteurization and aseptic cold-chain packaging.',
    processSteps: [
      { step: '01', title: 'Fruit Selection', desc: 'Strict inspection of fresh ripe guavas' },
      { step: '02', title: 'Washing & Slicing', desc: 'Hygienic cleaning and fruit preparation' },
      { step: '03', title: 'Pulp Refining', desc: 'Mechanical blending into homogeneous purée' },
      { step: '04', title: 'Texture Calibration', desc: 'Adjusting viscosity and smoothness specifications' },
      { step: '05', title: 'Aseptic Packaging', desc: 'Standardized filling and cold storage protocol' },
    ],

    whyChooseTitle: 'Why Choose AGRIHUB Guava Purée?',
    whyChooseIntro:
      'Ideal for formulations demanding authentic fruit pulp mouthfeel and tropical fruit notes. By utilizing ready-to-blend purée, factories bypass fruit processing labor.',
    benefits: [
      {
        title: 'Prominent Fruit Aroma & Natural Viscosity',
        desc: 'Velvety guava pulp delivers authentic body and refreshing tropical fruit aroma to smoothies and yogurts.',
      },
      {
        title: 'Eliminate Plant Pre-Processing',
        desc: 'Removes the need to wash, chop, destone, and blend fresh fruit on production lines.',
      },
      {
        title: 'Customized Purée Consistency',
        desc: 'AGRIHUB consults on viscosity and pulp content, preparing trial samples for your exact recipe specifications.',
      },
      {
        title: 'Flexible Packaging Options',
        desc: 'Available in diverse aseptic packaging formats supporting efficient cold chain logistics.',
      },
    ],

    applicationsTitle: 'F&B Industrial Applications',
    applicationGroups: [
      {
        group: 'Beverages & Smoothies',
        items: 'Guava smoothies, nectars, pulpy fruit juices, craft blends, and cocktail fruit purees.',
      },
      {
        group: 'Dairy & Ice Cream',
        items: 'Swirl fruit sauces for yogurt, fruit ice creams, gelatos, and dairy beverages.',
      },
      {
        group: 'Sauces, Glazes & Fillings',
        items: 'Pastry fillings, tart toppings, tropical fruit glazes, and dessert condiments.',
      },
    ],

    packagingStorageTitle: 'Packaging Specifications & Storage',
    packagingStorage: {
      packaging:
        'Supplied in food-grade aseptic bags, pails, or steel drums suited for industrial F&B scale.',
      shelfLife: 'Refer to specifications indicated on batch packaging.',
      storage:
        'Must be stored under designated cold-chain temperatures as specified per product SKU.',
    },

    partnerTitle: 'AGRIHUB – Guava Purée Supply & Advisory Partner',
    partnerIntro:
      'AGRIHUB provides guava purée aligned with commercial specifications, complete with documentation on storage conditions and delivery logistics.',
    partnerPoints: [
      {
        title: 'Viscosity & Texture Advisory',
        desc: 'Consulting on optimal purée consistency for your product type.',
      },
      {
        title: 'Benchtop Trial Samples',
        desc: 'Test aroma retention and formula stability with authentic pilot batches.',
      },
      {
        title: 'Certified Safety Standard',
        desc: 'Produced under strict HACCP, ISO 22000, and FDA compliant facilities.',
      },
      {
        title: 'Transparent B2B Supply Terms',
        desc: 'Quotations built on packaging tier, storage conditions, and scheduled call-offs.',
      },
    ],
    partnerCtaText: 'Contact our technical specialists for purée specifications and commercial pricing.',

    faqTitle: 'Technical FAQ',
    faqs: [
      {
        question: 'Can AGRIHUB adjust purée viscosity to match our proprietary formula?',
        answer:
          'Yes, AGRIHUB accommodates requests regarding consistency, pulp fineness, and flavor balance by preparing dedicated pilot samples.',
      },
      {
        question: 'What are the storage and shipping requirements for guava purée?',
        answer:
          'Storage and logistics conditions depend on thermal processing and packaging format. Detailed temperature guidelines are provided per chosen SKU.',
      },
    ],
  },

  'oi-co-dac': {
    slug: 'oi-co-dac',
    technologyType: 'concentrate',
    displayName: 'Guava Concentrate',
    vietnameseName: 'ỔI CÔ ĐẶC AGRIHUB',
    englishName: 'GUAVA CONCENTRATE',
    typeBadge: 'Vacuum Evaporated Fruit Concentrate',
    italicIntro:
      'AGRIHUB Guava Concentrate is processed from guava juice or guava purée based on buyer requirements. Under low-temperature vacuum evaporation, water is gently removed to increase soluble solids (°Brix) while preserving natural fruit fragrance. Free from preservatives.',
    image: '/images/products/oi-co-dac.jpg',
    imageAlt: 'AGRIHUB Guava Concentrate high soluble solids',
    highlights: ['High soluble solids', 'Low-temp vacuum evaporation', 'Optimized freight volume'],

    processTitle: 'Guava Concentrate Manufacturing Process',
    processIntro:
      'Utilizing premium guava juice or purée as raw feedstock. In a vacuum evaporation system under reduced atmospheric pressure, moisture is removed gently to protect heat-sensitive aromatics, followed by batch testing and packaging.',
    processSteps: [
      { step: '01', title: 'Feedstock Selection', desc: 'Raw fruit and base puree screening' },
      { step: '02', title: 'Clarification / Prep', desc: 'Preparation of juice or puree feedstock' },
      { step: '03', title: 'Evaporator Feed', desc: 'Thermal conditioning before concentration' },
      { step: '04', title: 'Vacuum Concentration', desc: 'Low-temperature moisture removal under vacuum' },
      { step: '05', title: 'Solids QA & Pack', desc: 'Brix verification, filling & cold storage' },
    ],

    whyChooseTitle: 'Why Choose AGRIHUB Guava Concentrate?',
    whyChooseIntro:
      'For recipes demanding intense fruit flavor without excess liquid volume, guava concentrate gives processors total control over reconstitution and water balance.',
    benefits: [
      {
        title: 'Intense Guava Flavor Profile',
        desc: 'Delivers concentrated guava notes into drinks, sauces, and confectionery without watering down formulations.',
      },
      {
        title: 'Control Soluble Solids & Recipe Water',
        desc: 'High total solids provide predictable calculation basis for syrup reconstitution and finished product Brix.',
      },
      {
        title: 'Flexible Feedstock Options',
        desc: 'Choose between clear juice concentrate or cloudy purée concentrate based on required pulp appearance.',
      },
      {
        title: 'Significant Transport Cost Savings',
        desc: 'With water removed at origin, shipping weight and storage volumes are drastically reduced per batch.',
      },
    ],

    applicationsTitle: 'F&B Industrial Applications',
    applicationGroups: [
      {
        group: 'Beverages & Soft Drinks',
        items: 'Guava juices, cocktail cordials, fruit syrups, and reconstituted soft drink formulations.',
      },
      {
        group: 'Dairy & Ice Cream',
        items: 'Fruit yogurt bases, concentrated flavoring for soft-serve and artisanal gelatos.',
      },
      {
        group: 'Jams, Jellies & Confectionery',
        items: 'Fruit preserves, gummy candies, jelly cups, and high-intensity fruit glazes.',
      },
    ],

    packagingStorageTitle: 'Packaging Specifications & Storage',
    packagingStorage: {
      packaging:
        'Supplied in industrial aseptic bags, food-grade drums, or tailored container sizes for industrial plants.',
      shelfLife: 'According to product specification sheet and batch label.',
      storage:
        'Must be stored in regulated temperature facilities to preserve flavor, color, and soluble solids.',
    },

    partnerTitle: 'AGRIHUB – Guava Concentrate Supply & Formulation Partner',
    partnerIntro:
      'AGRIHUB supplies customized guava concentrates with verified Brix specifications, safety certificates, and international logistics support.',
    partnerPoints: [
      {
        title: 'Target Brix Formulation Advisory',
        desc: 'Collaborating on desired °Brix, consistency, and base fruit profile.',
      },
      {
        title: 'Reconstitution Trial Samples',
        desc: 'Providing lab samples for water dilution and recipe harmonization testing.',
      },
      {
        title: 'Stringent Quality Controls',
        desc: 'Monitored under certified ISO 22000, HACCP, and FDA compliant food safety systems.',
      },
      {
        title: 'Scalable B2B Quotations',
        desc: 'Tailored pricing reflecting packaging type, batch size, and scheduled container shipments.',
      },
    ],
    partnerCtaText: 'Contact our engineering sales team to request concentrate technical sheets and trial samples.',

    faqTitle: 'Technical FAQ',
    faqs: [
      {
        question: 'Does guava concentrate require water addition before production?',
        answer:
          'Depending on formulation, concentrate can be dosed directly into viscous sauces or reconstituted with water to target Brix. Optimal ratios are verified via pilot sample trials.',
      },
      {
        question: 'Can AGRIHUB customize °Brix and acidity levels?',
        answer:
          'Yes, AGRIHUB accommodates specifications for °Brix, viscosity, and raw base (juice or purée) for R&D client projects.',
      },
    ],
  },
};

export const GUAVA_TECH_DETAILS_ZH: Record<string, ProductTechDetail> = {
  'bot-oi-say-phun': {
    slug: 'bot-oi-say-phun',
    technologyType: 'spray-dried',
    displayName: '喷雾干燥番石榴粉',
    vietnameseName: 'BỘT ỔI SẤY PHUN AGRIHUB',
    englishName: 'SPRAY-DRIED GUAVA POWDER',
    typeBadge: '高科技喷雾干燥果粉',
    italicIntro:
      'AGRIHUB喷雾干燥番石榴粉选用优质新鲜番石榴，经先进喷雾干燥工艺加工成均匀细腻的干粉，保留番石榴特有香气。无防腐剂添加，便于工业仓储、运输及广泛应用于食品和饮料配方中。',
    image: '/images/products/bot-oi-say-phun.jpg',
    imageAlt: 'AGRIHUB喷雾干燥番石榴粉',
    highlights: ['细腻易分散', '批次稳定', '无防腐剂'],

    processTitle: '喷雾干燥番石榴粉生产工艺',
    processIntro:
      'AGRIHUB喷雾干燥番石榴粉采用封闭式加工流程，从原料进厂到成品出厂全程严格质控。鲜果精选清洗后制成果浆，经配方调配后送入喷雾干燥系统雾化成微细粉末，经旋风分离收集、检验合格后定量包装。',
    processSteps: [
      { step: '01', title: '严选原料', desc: '原料果实严格理化与品质检验' },
      { step: '02', title: '前处理清洗', desc: '清洁清洗并精制原果浆液' },
      { step: '03', title: '进料调配', desc: '按工艺要求调配进料浓浆' },
      { step: '04', title: '喷雾干燥', desc: '高效雾化、瞬间干燥与粉末收集' },
      { step: '05', title: '成品检验', desc: '感官理化指标检测与标准包装' },
    ],

    whyChooseTitle: '为什么选择AGRIHUB喷雾干燥番石榴粉？',
    whyChooseIntro:
      '在多配方生产中，频繁处理鲜果不仅耗费车间工时，且容易引起批次差异。AGRIHUB喷雾干燥粉大幅简化原料准备环节，帮助制造企业更灵活地打样并快速投入量产。',
    benefits: [
      {
        title: '免除鲜果预处理繁琐工序',
        desc: '以标准化干粉形式供应，无需在生产线现场进行清洗、压榨及过滤。',
      },
      {
        title: '精准控制批次间配方用量',
        desc: '通过前期打样确定精准比例，助力生产线实现高复现性与效率。',
      },
      {
        title: '稳定可靠的供应链计划',
        desc: '标准化规格包装，使企业按生产排程精准领料，无需承担冷藏鲜果损耗风险。',
      },
      {
        title: '根据客户研发需求灵活调配',
        desc: 'AGRIHUB可根据成分、风味及载体需求进行专业技术对接并提供匹配样品。',
      },
    ],

    applicationsTitle: '食品饮料工业应用',
    applicationGroups: [
      {
        group: '饮品制造',
        items: '固体冲调饮品、果茶特调、风味饮料及预混粉原料。',
      },
      {
        group: '乳品与冰淇淋',
        items: '凝固型/搅拌型酸奶、乳酸菌饮品、冰淇淋及乳酪甜点。',
      },
      {
        group: '焙烤与糖果',
        items: '饼干、海绵蛋糕、软糖、果冻、即食麦片及营养强化粉。',
      },
    ],

    packagingStorageTitle: '包装规格与储存指引',
    packagingStorage: {
      packaging: '提供符合食品工业级标准的多种规格密封包装，满足不同批次采购需求。',
      shelfLife: '以产品包装上依官方核准标准标注的保质期为准。',
      storage: '置于阴凉干燥处，避免阳光直射；开封后请务必密封保存。',
    },

    partnerTitle: 'AGRIHUB – 番石榴粉工业供应与技术咨询伙伴',
    partnerIntro:
      'AGRIHUB致力于为全球食品饮料制造商提供高品质原料支持，提供选料、包装定制及配方研发样品协同。',
    partnerPoints: [
      {
        title: '应用领域定向咨询',
        desc: '根据终端产品属性评估匹配最适合的果粉特性。',
      },
      {
        title: '配方打样试产支持',
        desc: '提供样品供客户在实际配方中测试溶解性与风味表现。',
      },
      {
        title: '品质与食品安全保证',
        desc: '工厂通过ISO 22000、HACCP认证并符合美国FDA合规标准。',
      },
      {
        title: '竞争性B2B梯度报价',
        desc: '结合采购批量、包装规格与供货周期量身核算最具竞争力的价格。',
      },
    ],
    partnerCtaText:
      '欢迎联系我们获取技术咨询与样品。请告知您的应用方向、包装需求及预估采购量。',

    faqTitle: '技术常见问题 (FAQ)',
    faqs: [
      {
        question: '喷雾干燥番石榴粉在调配时容易溶解吗？',
        answer:
          '喷雾干燥工艺赋予物料微细粉末形态，便于在液体与干粉基料中均匀分散。实际分散与沉降效果取决于具体配方体系；AGRIHUB可提供样品供客户直接打样验证。',
      },
      {
        question: '该产品是否含有载体（如麦芽糊精）？',
        answer:
          '载体选用视客户具体产品配方需求而定；详细技术资料与成分清单将在对接时由工程师提供。',
      },
    ],
  },

  'bot-oi-say-nghien': {
    slug: 'bot-oi-say-nghien',
    technologyType: 'milled',
    displayName: '烘干研磨番石榴粉',
    vietnameseName: 'BỘT ỔI SẤY NGHIỀN AGRIHUB',
    englishName: 'DRIED AND MILLED GUAVA POWDER',
    typeBadge: '保留自然果肉颗粒结构的研磨果粉',
    italicIntro:
      'AGRIHUB烘干研磨番石榴粉精选鲜果，经清洗、脱水烘干并依目数规格精密研磨而成。烘干后果肉天然颗粒结构是该产品的显著特色，赋予烘焙与固体配方清晰可见的真果感。无防腐剂添加。',
    image: '/images/products/bot-oi-say-nghien.jpg',
    imageAlt: 'AGRIHUB烘干研磨番石榴粉',
    highlights: ['保留自然果粒结构', '目数粒径可调', '无防腐剂'],

    processTitle: '烘干研磨番石榴粉生产工艺',
    processIntro:
      '从新鲜原料果严选到成品粉碎全流程受控。鲜果前处理清洗后，经控温烘干降低水分，为后续精密研磨创造理想条件，并按约定目数筛分、质检与密封包装。',
    processSteps: [
      { step: '01', title: '原料精选', desc: '番石榴原料严格入厂检测' },
      { step: '02', title: '果肉切制', desc: '清洗、切分与脱水准备' },
      { step: '03', title: '控温脱水', desc: '均匀干燥降低果肉水分' },
      { step: '04', title: '分级研磨', desc: '依客户需求目数精密粉碎筛分' },
      { step: '05', title: '成品检测', desc: '粒度与理化指标确认并出库包装' },
    ],

    whyChooseTitle: '为什么选择AGRIHUB烘干研磨番石榴粉？',
    whyChooseIntro:
      '针对需要凸显真实水果颗粒口感与质感的烘焙及谷物配方，烘干研磨番石榴粉在不额外增加多余水分的前提下，呈现天然水果的存在感。',
    benefits: [
      {
        title: '节省生产车间自制粉碎工序',
        desc: '原料出厂前已完成脱水与分级研磨，大幅缩短工厂备料准备时间。',
      },
      {
        title: '为终端产品增添天然质感亮点',
        desc: '特定目数颗粒能在饼干、谷物棒及干粉食品中呈现出色的质感辨识度。',
      },
      {
        title: '易于融入干混配方体系',
        desc: '可与谷物粉、烘焙预混粉直接混合，不会像使用鲜果那样打破水分平衡。',
      },
      {
        title: '粒度与风味按需定制',
        desc: 'AGRIHUB可对接粒径分布与目数需求，提供精准匹配的样品供测试。',
      },
    ],

    applicationsTitle: '食品饮料工业应用',
    applicationGroups: [
      {
        group: '烘焙与焙烤食品',
        items: '曲奇饼干、戚风蛋糕、吐司面包及添加果粒粉的各类烘焙制品。',
      },
      {
        group: '谷物麦片与能量棒',
        items: 'Granola燕麦、早餐谷物片、坚果棒及固体代餐粉。',
      },
      {
        group: '浓郁质感饮品',
        items: '允许微细果粒口感的冰沙、果汁特调（建议先进行沉降与口感试验）。',
      },
    ],

    packagingStorageTitle: '包装规格与储存指引',
    packagingStorage: {
      packaging: '采用工业级多层防潮铝箔袋或内衬纸箱包装，满足食品加工厂要求。',
      shelfLife: '请参阅外包装上标明的检验出厂保质期限。',
      storage: '存放在阴凉、通风、干燥环境中，避免直射光并密封防潮。',
    },

    partnerTitle: 'AGRIHUB – 研磨果粉工业供应与技术咨询',
    partnerIntro:
      '根据企业具体配方需求，提供定制目数与工业级包装的番石榴研磨粉。',
    partnerPoints: [
      {
        title: '按最终产品需求定制目数',
        desc: '评估终端产品的颗粒感与分散状态，推荐匹配筛网目数。',
      },
      {
        title: '小试打样与配方融合测试',
        desc: '提供试验批次样品，协助工程师验证与基础原料的混配性。',
      },
      {
        title: '全流程食品安全保障',
        desc: '工厂通过ISO 22000与HACCP认证，生产环境洁净受控。',
      },
      {
        title: '具竞争力的B2B合作价格',
        desc: '按订购吨位、粒径精度与包装形式提供透明合理的阶梯式报价。',
      },
    ],
    partnerCtaText: '欢迎与我们技术团队联系，洽谈规格与索取测试样品。',

    faqTitle: '技术常见问题 (FAQ)',
    faqs: [
      {
        question: '烘干研磨番石榴粉能直接用于冲饮饮料吗？',
        answer:
          '本品适合允许天然水果颗粒悬浮的配方体系。若用于冲调饮料，建议先行评估粒度、沉降速度及入口颗粒感后再行确定型号。',
      },
      {
        question: 'AGRIHUB是否接受指定目数粒度的定制生产？',
        answer:
          '是的，AGRIHUB支持根据客户的具体筛分目数与理化要求进行定制研磨及打样。',
      },
    ],
  },

  'puree-oi': {
    slug: 'puree-oi',
    technologyType: 'puree',
    displayName: '番石榴原果浆',
    vietnameseName: 'PUREE ỔI AGRIHUB',
    englishName: 'GUAVA PURÉE',
    typeBadge: '浓醇细腻原果浆 (Purée)',
    italicIntro:
      'AGRIHUB番石榴果浆精选成熟度极佳的新鲜番石榴，经清洗、打浆与均质研磨制成。保留天然果香与酸甜适口的纯正风味；浓郁绵密的果肉质感使水果风味在饮品与加工食品中表现出色。无防腐剂添加。',
    image: '/images/products/puree-oi.jpg',
    imageAlt: 'AGRIHUB番石榴果浆浓郁质地',
    highlights: ['浓郁果肉绵密质地', '天然酸甜纯正风味', '无防腐剂'],

    processTitle: '番石榴果浆生产工艺',
    processIntro:
      '从新鲜原料精选到均质灌装全程流水线连续化作业。果肉精细破碎均质形成特征性的粘稠果浆体，根据规格校准粘稠度与细度，经瞬时灭菌并冷链无菌灌装。',
    processSteps: [
      { step: '01', title: '严选熟果', desc: '精选新鲜饱满成熟番石榴' },
      { step: '02', title: '清洗去杂', desc: '全自动清洗与精细果肉分选' },
      { step: '03', title: '精细打浆', desc: '物理均质破碎形成浓郁果肉浆' },
      { step: '04', title: '调质均质', desc: '标准化粘度、细度与质地' },
      { step: '05', title: '无菌冷储', desc: '无菌大桶定量灌装与冷链储存' },
    ],

    whyChooseTitle: '为什么选择AGRIHUB番石榴果浆？',
    whyChooseIntro:
      '专为希望凸显真果果肉纤维与浓稠口感的配方打造。采用标准化工业原浆，食品厂可省去繁重的水果初加工人力。',
    benefits: [
      {
        title: '突出果香与天然浓稠质感',
        desc: '细腻均质的果肉为冰沙、酸奶及甜点带来纯正的番石榴热带风味与醇厚口感。',
      },
      {
        title: '大幅缩短车间备料时间',
        desc: '无需在每次投料时重复进行洗果、切分及现场打浆作业。',
      },
      {
        title: '依配方需求调节稠度与细度',
        desc: 'AGRIHUB可根据研发需求调节物料状态并提供试验小样供调配测试。',
      },
      {
        title: '灵活的工业冷链包装规格',
        desc: '提供无菌袋装、桶装等多元形式，方便工厂根据冷链物流与排产需求领料。',
      },
    ],

    applicationsTitle: '食品饮料工业应用',
    applicationGroups: [
      {
        group: '果汁与特饮制造',
        items: '番石榴果昔、Nectar果肉饮料、复合果汁及高端鸡尾酒特调浆。',
      },
      {
        group: '乳制品与冰品',
        items: '风味发酵乳、常温酸奶、果肉冰淇淋、雪葩及乳品配料。',
      },
      {
        group: '果酱与烘焙夹心',
        items: '烘焙馅料、淋面果酱、慕斯果泥及各类水果甜品。',
      },
    ],

    packagingStorageTitle: '包装规格与储存指引',
    packagingStorage: {
      packaging: '提供符合国际食品无菌标准的无菌袋配铁桶或食品级塑胶桶包装。',
      shelfLife: '请依据具体SKU包装标贴说明及出厂检测证明为准。',
      storage: '必须严格在规定的冷链低温环境下储存运输，以保障质地与风味稳定性。',
    },

    partnerTitle: 'AGRIHUB – 番石榴果浆工业供应与技术咨询',
    partnerIntro:
      '为饮料乳品制造商提供高品质番石榴果浆，并提供包装、仓储温度及冷链物流全方位技术支持。',
    partnerPoints: [
      {
        title: '果浆形态定向定制',
        desc: '深入探讨终端产品对于细度、粘度及挂杯感的具体指标。',
      },
      {
        title: '研发样品快速支持',
        desc: '提供试验批次，协助客户验证原浆在不同温度体系下的风味留存。',
      },
      {
        title: '权威食品安全体系',
        desc: 'ISO 22000与HACCP全程受控，生产线符合FDA合规要求。',
      },
      {
        title: '透明具竞争力的供应政策',
        desc: '按订购柜量、包装材质及温控运输条件核定最具优势的B2B价格。',
      },
    ],
    partnerCtaText: '欢迎联系我们获取详细TDS技术参数及申请测试样品。',

    faqTitle: '技术常见问题 (FAQ)',
    faqs: [
      {
        question: 'AGRIHUB是否接受按特定配方稠度定制果浆？',
        answer:
          '我们接受针对粘稠度、细度及风味特征的研发定制要求，并提供匹配的实验室样品供客户打样确认。',
      },
      {
        question: '番石榴果浆应如何储存与运输？',
        answer:
          '储存与运输环境依加工杀菌方式及包装规格而定。AGRIHUB在交付时会提供该规格专用的温度控制与操作指引。',
      },
    ],
  },

  'oi-co-dac': {
    slug: 'oi-co-dac',
    technologyType: 'concentrate',
    displayName: '番石榴浓缩汁/浆',
    vietnameseName: 'ỔI CÔ ĐẶC AGRIHUB',
    englishName: 'GUAVA CONCENTRATE',
    typeBadge: '高干物质真空浓缩果汁/浆',
    italicIntro:
      'AGRIHUB番石榴浓缩液以番石榴清汁或果浆为基底加工而成。鲜果经严格精选，采用真空低温减压浓缩技术蒸发部分水分并大幅提升可溶性固形物含量，保留浓郁番石榴香气与纯厚酸甜感。无防腐剂添加。',
    image: '/images/products/oi-co-dac.jpg',
    imageAlt: 'AGRIHUB番石榴浓缩液高固形物',
    highlights: ['高可溶性固形物', '真空低温浓缩', '显著降低运输能耗'],

    processTitle: '番石榴浓缩液生产工艺',
    processIntro:
      '根据客户配方需求选用优质番石榴汁或果浆为投料基质。原料经前处理进入真空减压浓缩系统，在低温下分离水分，显著提升折光糖度（°Brix）与香气浓度，随后经检测合格后无菌灌装。',
    processSteps: [
      { step: '01', title: '原料精选', desc: '入厂番石榴汁/浆基料严格指标化验' },
      { step: '02', title: '进料调质', desc: '原料过滤与浓缩前温度预调' },
      { step: '03', title: '真空进料', desc: '真空系统负压平衡与连续进料' },
      { step: '04', title: '低温浓缩', desc: '真空减压温和脱水，保护热敏香气' },
      { step: '05', title: '糖度质检', desc: '折光Brix与理化指标复检并灌装' },
    ],

    whyChooseTitle: '为什么选择AGRIHUB番石榴浓缩液？',
    whyChooseIntro:
      '在需要浓烈热带水果风味且需精准平衡配方水量的工业体系中，浓缩液能让工厂在复配调香阶段拥有更高的自主权与成本控制力。',
    benefits: [
      {
        title: '显著提升配方中的番石榴浓郁风味',
        desc: '高倍浓缩形态赋予饮料与调味酱纯正风味，而不会像鲜果原料那样引入多余水分。',
      },
      {
        title: '精准把握配方原料干物质平衡',
        desc: '稳定的固形物含量是计算物料投料量与还原复水倍数的坚实基础。',
      },
      {
        title: '清汁基底与果浆基底灵活可选',
        desc: 'AGRIHUB可依据客户对澄清度或果肉纤维的要求，提供不同基底的浓缩物料。',
      },
      {
        title: '大幅降低跨境物流与仓储成本',
        desc: '在相同干物质前提下，浓缩大幅减少含水量，有效降低运输吨位与空间占用。',
      },
    ],

    applicationsTitle: '食品饮料工业应用',
    applicationGroups: [
      {
        group: '饮料与果味糖浆',
        items: '番石榴复原果汁、风味调制茶饮、浓缩果浆糖浆及鸡尾酒调配液。',
      },
      {
        group: '乳品配料',
        items: '风味酸奶底料、调味乳饮料、意式冰淇淋果酱层。',
      },
      {
        group: '食品加工与糖果',
        items: '水果软糖、果冻、果膏夹心、果味烘焙调味涂层。',
      },
    ],

    packagingStorageTitle: '包装规格与储存指引',
    packagingStorage: {
      packaging: '无菌食品级内衬袋配200L镀锌铁桶或专供工业工厂的散装大规格容器。',
      shelfLife: '严格依照技术规格书及批次标贴的标注期限。',
      storage: '必须置于规定温度的冷藏/冷冻仓库中，避免高温造成褐变与风味损失。',
    },

    partnerTitle: 'AGRIHUB – 番石榴浓缩物料工业供应伙伴',
    partnerIntro:
      '根据企业研发生产指标定向供应标准化浓缩液，提供详尽理化指标确认与批量供货保障。',
    partnerPoints: [
      {
        title: '目标Brix指标协同咨询',
        desc: '就目标可溶性固形物、粘稠度及酸甜比提供针对性技术对接。',
      },
      {
        title: '复原与复配试验打样',
        desc: '提供样品供实验室进行加水还原、热敏性及口感稳定性测试。',
      },
      {
        title: '严苛的质量安全把控',
        desc: 'ISO 22000与HACCP认证生产线，可按需出具批次COA分析报告。',
      },
      {
        title: '贴合采购周期的价格机制',
        desc: '按年季采购计划、交货条款及包装形态制定最优商务方案。',
      },
    ],
    partnerCtaText: '欢迎与我们工程销售团队联系，获取浓缩物料技术参数与索取样品。',

    faqTitle: '技术常见问题 (FAQ)',
    faqs: [
      {
        question: '番石榴浓缩液在投入生产前必须加水稀释吗？',
        answer:
          '视具体生产工艺而定：既可直接添加于高浓度果酱或糖浆中，也可根据目标产品的Brix指标与风味强度按比例加水复原。具体比例建议经实验室打样确定。',
      },
      {
        question: 'AGRIHUB是否接受指定Brix与酸度的定制加工？',
        answer:
          '是的，AGRIHUB接受关于折光糖度、酸甜比、粘度及选用清汁或果浆为基料的定制研发需求。',
      },
    ],
  },
};

export function getProductTechDetail(slug: string, lang: Locale = 'vi'): ProductTechDetail | null {
  const normalizedSlug = SLUG_ALIASES[slug] || slug;

  if (lang === 'en') {
    return GUAVA_TECH_DETAILS_EN[normalizedSlug] || GUAVA_TECH_DETAILS_VI[normalizedSlug] || null;
  }
  if (lang === 'zh') {
    return GUAVA_TECH_DETAILS_ZH[normalizedSlug] || GUAVA_TECH_DETAILS_VI[normalizedSlug] || null;
  }
  return GUAVA_TECH_DETAILS_VI[normalizedSlug] || null;
}

export interface FallbackProductInfo {
  name?: string;
  category?: string;
  processingMethod?: string;
  categoryGroup?: string;
  specs?: string;
  packaging?: string;
  storage?: string;
  shelfLife?: string;
  image?: string;
}

export function resolveProductTechDetail(
  slug: string,
  lang: Locale,
  fallbackInfo?: FallbackProductInfo
): ProductTechDetail {
  const direct = getProductTechDetail(slug, lang);
  if (direct) return direct;

  const rawName = fallbackInfo?.name || slug.replace(/-/g, ' ');
  const name = localizeProductName({
    viName: rawName,
    slug,
    lang,
    categoryGroup: fallbackInfo?.categoryGroup,
  });
  const enName =
    lang === 'en'
      ? name
      : localizeProductName({
          viName: rawName,
          slug,
          lang: 'en',
          categoryGroup: fallbackInfo?.categoryGroup,
        });
  const combined = `${slug} ${rawName} ${name} ${fallbackInfo?.processingMethod || ''} ${fallbackInfo?.category || ''} ${fallbackInfo?.categoryGroup || ''}`.toLowerCase();

  let techType: import('./product-tech-types').ProductTechnologyType = 'spray-dried';
  if (
    combined.includes('cô đặc') ||
    combined.includes('co-dac') ||
    combined.includes('concentrate') ||
    combined.includes('chân không') ||
    combined.includes('浓缩')
  ) {
    techType = 'concentrate';
  } else if (
    combined.includes('nghiền') ||
    combined.includes('nghien') ||
    combined.includes('milled') ||
    combined.includes('milling') ||
    combined.includes('研磨')
  ) {
    techType = 'milled';
  } else if (
    combined.includes('puree') ||
    combined.includes('xay nhuyễn') ||
    combined.includes('nước cốt') ||
    combined.includes('cốt') ||
    combined.includes('purée') ||
    combined.includes('原浆') ||
    combined.includes('果浆')
  ) {
    techType = 'puree';
  } else {
    techType = 'spray-dried';
  }

  // Filter out unwanted default text like "Tiêu chuẩn xuất khẩu B2B"
  const rawSpecs = (fallbackInfo?.specs || '').trim();
  const isDefaultOrEmpty =
    !rawSpecs ||
    rawSpecs.toLowerCase().includes('tiêu chuẩn xuất khẩu b2b') ||
    rawSpecs.toLowerCase().includes('export b2b standard specification') ||
    rawSpecs.toLowerCase().includes('国际出口 b2b 工业级技术标准');

  if (lang === 'en') {
    if (techType === 'milled') {
      return {
        slug,
        technologyType: 'milled',
        displayName: name,
        vietnameseName: name,
        englishName: enName,
        typeBadge: 'Milled Powder',
        italicIntro: !isDefaultOrEmpty
          ? rawSpecs
          : `${name} is produced from selected fresh fruits through washing, dehydrating, and milling to customized sieve mesh sizes. Natural fruit particle structure provides noticeable fruit presence and texture in dry formulas. No artificial preservatives added.`,
        image: fallbackInfo?.image || '',
        imageAlt: name,
        highlights: ['Natural fruit particle structure', 'Customizable mesh size', 'No preservatives'],
        processTitle: `${name} Manufacturing Process`,
        processIntro:
          'Controlled from whole fresh fruit selection to final granulated powder. Following cleaning, the fruit is dehydrated to lower moisture content, enabling controlled precision milling to designated particle size distributions.',
        processSteps: [
          { step: '01', title: 'Fruit Selection', desc: 'Screening raw fruit inputs' },
          { step: '02', title: 'Pulp Preparation', desc: 'Washing, slicing, prep for dehydration' },
          { step: '03', title: 'Moisture Removal', desc: 'Gentle drying to optimal milling moisture' },
          { step: '04', title: 'Precision Milling', desc: 'Controlled grinding to specified mesh size' },
          { step: '05', title: 'Quality Inspection', desc: 'Sieve mesh validation and bulk packing' },
        ],
        whyChooseTitle: `Why Choose AGRIHUB ${name}?`,
        whyChooseIntro:
          'For dry food applications requiring genuine fruit texture, milled powder delivers distinctive mouthfeel and visual fruit speckling without adding excess water.',
        benefits: [
          { title: 'Save In-House Dehydration Labor', desc: 'Pre-dried and milled to specification prior to delivery, shortening batch preparation.' },
          { title: 'Authentic Particle Texture', desc: 'Calibrated particle sizes emphasize real fruit structure in baked goods and dry breakfast cereals.' },
          { title: 'Seamless Dry Formula Blending', desc: 'Easily premixed with flours, starches, and powders without altering product water activity.' },
          { title: 'Tailored Mesh Granulation', desc: 'AGRIHUB adjusts granulation, sieve mesh, and flavor intensity to match your product development goals.' },
        ],
        applicationsTitle: 'F&B Industrial Applications',
        applicationGroups: [
          { group: 'Bakery & Pastry', items: 'Cookies, artisan biscuits, sponge cakes, bread loaves, and baked snacks with fruit inclusion.' },
          { group: 'Cereals & Snack Bars', items: 'Breakfast granola, muesli, fruit energy bars, and nutrition crisp bars.' },
          { group: 'Viscous Drinks & Smoothies', items: 'Smoothies and fruit nectars accommodating fine natural seed/fiber pulp texture.' },
        ],
        packagingStorageTitle: 'Packaging Specifications & Storage',
        packagingStorage: {
          packaging: fallbackInfo?.packaging || 'Multi-layer moisture-barrier industrial bags or customized.',
          shelfLife: fallbackInfo?.shelfLife || 'Refer to official product packaging label.',
          storage: fallbackInfo?.storage || 'Store in a cool, dry area away from direct sunlight. Keep tightly sealed after opening.',
        },
        partnerTitle: 'AGRIHUB – Milled Powder Supply & Technical Consulting',
        partnerIntro: 'AGRIHUB provides milled powder tailored in particle size and packaging for food manufacturers. Trial samples provided for recipe integration.',
        partnerPoints: [
          { title: 'Target Texture Consulting', desc: 'Analyzing required mesh fineness and sensory impact in your final matrix.' },
          { title: 'Application Pilot Samples', desc: 'Validate powder blendability and mouthfeel on your pilot production lines.' },
          { title: 'Food Safety Standard', desc: 'Clean-room manufacturing under ISO 22000, HACCP, and FDA compliant protocols.' },
          { title: 'B2B Scaled Quotation', desc: 'Pricing built on mesh precision requirements, order volume, and packaging configurations.' },
        ],
        partnerCtaText: 'Contact us for technical consultation and sample requests. Share your product category, desired mesh size, and estimated batch volume.',
        faqTitle: 'Technical FAQ',
        faqs: [
          { question: `Can ${name} be used in beverage formulations?`, answer: 'Suitable for formulations that accept natural fruit pulp particles. For drink applications, testing dispersion, sedimentation, and mouthfeel with pilot samples is advised.' },
          { question: 'Does AGRIHUB customize powder mesh size upon request?', answer: 'Yes, AGRIHUB accommodates custom sieve mesh sizing and sensory specs following practical application trials.' },
        ],
      };
    }

    if (techType === 'puree') {
      return {
        slug,
        technologyType: 'puree',
        displayName: name,
        vietnameseName: name,
        englishName: enName,
        typeBadge: 'Fruit Purée',
        italicIntro: !isDefaultOrEmpty
          ? rawSpecs
          : `${name} is processed from ripe fresh fruits through sorting, washing, and smooth mechanical refining. It preserves true-to-fruit tropical aroma, balanced sweet-tart notes, and thick velvety pulp texture. Free from artificial preservatives.`,
        image: fallbackInfo?.image || '',
        imageAlt: name,
        highlights: ['Rich velvety fruit pulp', 'Balanced sweet-tart flavor', 'No preservatives'],
        processTitle: `${name} Manufacturing Process`,
        processIntro:
          'A continuous, temperature-monitored process from fresh fruit selection to finished purée. Fruit pulp is finely refined to achieve signature viscosity and smooth suspension, followed by pasteurization and aseptic cold-chain packaging.',
        processSteps: [
          { step: '01', title: 'Fruit Selection', desc: 'Strict inspection of fresh ripe fruits' },
          { step: '02', title: 'Washing & Slicing', desc: 'Hygienic cleaning and fruit preparation' },
          { step: '03', title: 'Pulp Refining', desc: 'Mechanical blending into homogeneous purée' },
          { step: '04', title: 'Texture Calibration', desc: 'Adjusting viscosity and smoothness specifications' },
          { step: '05', title: 'Aseptic Packaging', desc: 'Standardized filling and cold storage protocol' },
        ],
        whyChooseTitle: `Why Choose AGRIHUB ${name}?`,
        whyChooseIntro:
          'Ideal for formulations demanding authentic fruit pulp mouthfeel and natural fruit notes. By utilizing ready-to-blend purée, factories bypass fruit processing labor.',
        benefits: [
          { title: 'Prominent Fruit Aroma & Natural Viscosity', desc: 'Velvety fruit pulp delivers authentic body and refreshing aroma to smoothies and yogurts.' },
          { title: 'Eliminate Plant Pre-Processing', desc: 'Removes the need to wash, chop, destone, and blend fresh fruit on production lines.' },
          { title: 'Customized Purée Consistency', desc: 'AGRIHUB consults on viscosity and pulp content, preparing trial samples for your exact recipe specifications.' },
          { title: 'Flexible Packaging Options', desc: 'Available in diverse aseptic packaging formats supporting efficient cold chain logistics.' },
        ],
        applicationsTitle: 'F&B Industrial Applications',
        applicationGroups: [
          { group: 'Beverages & Smoothies', items: 'Smoothies, nectars, pulpy fruit juices, craft blends, and cocktail fruit purees.' },
          { group: 'Dairy & Ice Cream', items: 'Swirl fruit sauces for yogurt, fruit ice creams, gelatos, and dairy beverages.' },
          { group: 'Sauces, Glazes & Fillings', items: 'Pastry fillings, tart toppings, tropical fruit glazes, and dessert condiments.' },
        ],
        packagingStorageTitle: 'Packaging Specifications & Storage',
        packagingStorage: {
          packaging: fallbackInfo?.packaging || 'Aseptic bags, pails, or steel drums suited for industrial F&B scale.',
          shelfLife: fallbackInfo?.shelfLife || 'Refer to specifications indicated on batch packaging.',
          storage: fallbackInfo?.storage || 'Must be stored under designated cold-chain temperatures as specified per product SKU.',
        },
        partnerTitle: 'AGRIHUB – Fruit Purée Supply & Advisory Partner',
        partnerIntro: 'AGRIHUB provides purée aligned with commercial specifications, complete with documentation on storage conditions and delivery logistics.',
        partnerPoints: [
          { title: 'Viscosity & Texture Advisory', desc: 'Consulting on optimal purée consistency for your product type.' },
          { title: 'Benchtop Trial Samples', desc: 'Test aroma retention and formula stability with authentic pilot batches.' },
          { title: 'Certified Safety Standard', desc: 'Produced under strict HACCP, ISO 22000, and FDA compliant facilities.' },
          { title: 'Transparent B2B Supply Terms', desc: 'Quotations built on packaging tier, storage conditions, and scheduled call-offs.' },
        ],
        partnerCtaText: 'Contact our technical specialists for purée specifications and commercial pricing.',
        faqTitle: 'Technical FAQ',
        faqs: [
          { question: `Can AGRIHUB adjust ${name} viscosity to match our formula?`, answer: 'Yes, AGRIHUB accommodates requests regarding consistency, pulp fineness, and flavor balance by preparing dedicated pilot samples.' },
          { question: `What are the storage and shipping requirements for ${name}?`, answer: 'Storage and logistics conditions depend on thermal processing and packaging format. Detailed temperature guidelines are provided per chosen SKU.' },
        ],
      };
    }

    if (techType === 'concentrate') {
      return {
        slug,
        technologyType: 'concentrate',
        displayName: name,
        vietnameseName: name,
        englishName: enName,
        typeBadge: 'Fruit Concentrate',
        italicIntro: !isDefaultOrEmpty
          ? rawSpecs
          : `${name} is processed from fruit juice or fruit purée based on buyer requirements. Under low-temperature vacuum evaporation, water is gently removed to increase soluble solids (°Brix) while preserving natural fruit fragrance. Free from preservatives.`,
        image: fallbackInfo?.image || '',
        imageAlt: name,
        highlights: ['High soluble solids', 'Low-temp vacuum evaporation', 'Optimized freight volume'],
        processTitle: `${name} Manufacturing Process`,
        processIntro:
          'Utilizing premium fruit juice or purée as raw feedstock. In a vacuum evaporation system under reduced atmospheric pressure, moisture is removed gently to protect heat-sensitive aromatics, followed by batch testing and packaging.',
        processSteps: [
          { step: '01', title: 'Feedstock Selection', desc: 'Raw fruit and base puree screening' },
          { step: '02', title: 'Clarification / Prep', desc: 'Preparation of juice or puree feedstock' },
          { step: '03', title: 'Evaporator Feed', desc: 'Thermal conditioning before concentration' },
          { step: '04', title: 'Vacuum Concentration', desc: 'Low-temperature moisture removal under vacuum' },
          { step: '05', title: 'Solids QA & Pack', desc: 'Brix verification, filling & cold storage' },
        ],
        whyChooseTitle: `Why Choose AGRIHUB ${name}?`,
        whyChooseIntro:
          'For recipes demanding intense fruit flavor without excess liquid volume, fruit concentrate gives processors total control over reconstitution and water balance.',
        benefits: [
          { title: 'Intense Fruit Flavor Profile', desc: 'Delivers concentrated fruit notes into drinks, sauces, and confectionery without watering down formulations.' },
          { title: 'Control Soluble Solids & Recipe Water', desc: 'High total solids provide predictable calculation basis for syrup reconstitution and finished product Brix.' },
          { title: 'Flexible Feedstock Options', desc: 'Choose between clear juice concentrate or cloudy purée concentrate based on required pulp appearance.' },
          { title: 'Significant Transport Cost Savings', desc: 'With water removed at origin, shipping weight and storage volumes are drastically reduced per batch.' },
        ],
        applicationsTitle: 'F&B Industrial Applications',
        applicationGroups: [
          { group: 'Beverages & Soft Drinks', items: 'Fruit juices, cocktail cordials, fruit syrups, and reconstituted soft drink formulations.' },
          { group: 'Dairy & Ice Cream', items: 'Fruit yogurt bases, concentrated flavoring for soft-serve and artisanal gelatos.' },
          { group: 'Jams, Jellies & Confectionery', items: 'Fruit preserves, gummy candies, jelly cups, and high-intensity fruit glazes.' },
        ],
        packagingStorageTitle: 'Packaging Specifications & Storage',
        packagingStorage: {
          packaging: fallbackInfo?.packaging || 'Aseptic bags, food-grade drums, or tailored container sizes for industrial plants.',
          shelfLife: fallbackInfo?.shelfLife || 'According to product specification sheet and batch label.',
          storage: fallbackInfo?.storage || 'Must be stored in regulated temperature facilities to preserve flavor, color, and soluble solids.',
        },
        partnerTitle: 'AGRIHUB – Fruit Concentrate Supply & Formulation Partner',
        partnerIntro: 'AGRIHUB supplies customized concentrates with verified Brix specifications, safety certificates, and international logistics support.',
        partnerPoints: [
          { title: 'Target Brix Formulation Advisory', desc: 'Collaborating on desired °Brix, consistency, and base fruit profile.' },
          { title: 'Reconstitution Trial Samples', desc: 'Providing lab samples for water dilution and recipe harmonization testing.' },
          { title: 'Stringent Quality Controls', desc: 'Monitored under certified ISO 22000, HACCP, and FDA compliant food safety systems.' },
          { title: 'Scalable B2B Quotations', desc: 'Tailored pricing reflecting packaging type, batch size, and scheduled container shipments.' },
        ],
        partnerCtaText: 'Contact our engineering sales team to request concentrate technical sheets and trial samples.',
        faqTitle: 'Technical FAQ',
        faqs: [
          { question: `Does ${name} require water addition before production?`, answer: 'Depending on formulation, concentrate can be dosed directly into viscous sauces or reconstituted with water to target Brix. Optimal ratios are verified via pilot sample trials.' },
          { question: 'Can AGRIHUB customize °Brix and acidity levels?', answer: 'Yes, AGRIHUB accommodates specifications for °Brix, viscosity, and raw base (juice or purée) for R&D client projects.' },
        ],
      };
    }

    // Default Spray-Dried in EN
    return {
      slug,
      technologyType: 'spray-dried',
      displayName: name,
      vietnameseName: name,
      englishName: enName,
      typeBadge: 'Spray-Dried Powder',
      italicIntro: !isDefaultOrEmpty
        ? rawSpecs
        : `${name} is crafted from carefully selected fresh fruits, utilizing advanced spray drying technology to create a fine dry powder retaining characteristic fruit aroma. Free from artificial preservatives, convenient for industrial storage, transport, and integration into food and beverage formulations.`,
      image: fallbackInfo?.image || '',
      imageAlt: name,
      highlights: ['Fine dispersible powder', 'Consistent batch blending', 'No preservatives'],
      processTitle: `${name} Manufacturing Process`,
      processIntro:
        `AGRIHUB ${name} follows a closed-loop manufacturing flow, rigorously inspected from raw materials to final output. Fresh fruits are sorted, cleaned, and processed into fruit liquid before entering spray atomization into fine powder. Recovered powder undergoes quality inspection and standardized packaging.`,
      processSteps: [
        { step: '01', title: 'Rigorous Selection', desc: 'Raw fruit quality inspection' },
        { step: '02', title: 'Fruit Preparation', desc: 'Cleaning and pulp extraction' },
        { step: '03', title: 'Feed Slurry Prep', desc: 'Formulation blending for spray drying' },
        { step: '04', title: 'Spray Atomization', desc: 'Nozzle atomization, drying & powder recovery' },
        { step: '05', title: 'Quality Assurance', desc: 'Batch sensory testing & packaging' },
      ],
      whyChooseTitle: `Why Choose AGRIHUB ${name}?`,
      whyChooseIntro:
        'Preparing fresh fruit for diverse recipe batches consumes significant plant labor. AGRIHUB Spray-Dried Powder streamlines raw ingredient prep, granting manufacturers greater flexibility for trials and commercial runs.',
      benefits: [
        { title: 'Eliminate Fresh Fruit Handling', desc: 'Supplied in stable powder form—bypassing washing, peeling, pressing, and filtering on every mixing shift.' },
        { title: 'Precision Batch-to-Batch Dosing', desc: 'Formulation ratios validated through sampling save trial time and guarantee repeatable production consistency.' },
        { title: 'Reliable Supply Chain Planning', desc: 'Standardized industrial packaging allows accurate requirement forecasting without cold storing perishable fresh fruits.' },
        { title: 'Customized R&D Formulations', desc: 'AGRIHUB tailors ingredient profile, flavor notes, and carrier preferences to support your active product development.' },
      ],
      applicationsTitle: 'F&B Industrial Applications',
      applicationGroups: [
        { group: 'Beverages', items: 'Instant beverage mixes, fruit tea infusions, flavored carbonated drinks, and premix powders.' },
        { group: 'Dairy & Plant Milk', items: 'Stirred & drinkable yogurts, ice creams, dairy blends, and frozen desserts.' },
        { group: 'Processed Food & Bakery', items: 'Biscuits, sponge cakes, gummies, fruit jellies, granolas, and fortified meal replacement blends.' },
      ],
      packagingStorageTitle: 'Packaging Specifications & Storage',
      packagingStorage: {
        packaging: fallbackInfo?.packaging || 'Supplied in diverse industrial bulk formats tailored to commercial food manufacturing needs.',
        shelfLife: fallbackInfo?.shelfLife || 'Refer to official packaging label according to approved SKU dossier.',
        storage: fallbackInfo?.storage || 'Store in cool, dry conditions away from direct sunlight. Reseal tightly after opening.',
      },
      partnerTitle: `AGRIHUB – ${name} Supply & Technical Consulting Partner`,
      partnerIntro: `AGRIHUB provides ${name} for industrial F&B manufacturers, consulting on ingredient selection, packaging specs, and R&D pilot samples.`,
      partnerPoints: [
        { title: 'Application Consulting', desc: 'Aligning powder technical properties with final product target profile.' },
        { title: 'Application Trial Support', desc: 'Sample batches provided to evaluate dispersibility and flavor profile in your pilot line.' },
        { title: 'Guaranteed Quality & Food Safety', desc: 'Standardized manufacturing backed by certified ISO 22000, HACCP, and FDA compliance.' },
        { title: 'Competitive B2B Volume Pricing', desc: 'Customized quotation structured on volume tiers, packaging specs, and supply schedule.' },
      ],
      partnerCtaText: 'Contact our technical team for application advice and personalized quotations. Share your intended application, target volume, and packaging specs.',
      faqTitle: 'Technical FAQ',
      faqs: [
        { question: `Does ${name} dissolve easily in formulation?`, answer: 'Spray drying yields a fine powder for convenient dispersion into liquid and dry matrixes. Solubility and sedimentation depend on recipe matrix; AGRIHUB provides trial samples for direct evaluation before ordering.' },
        { question: `Does ${name} contain carriers (e.g. Maltodextrin)?`, answer: 'Formulation depends on client technical requirements; exact carrier and ingredient profile are detailed upon direct R&D inquiry.' },
      ],
    };
  }

  if (lang === 'zh') {
    if (techType === 'milled') {
      return {
        slug,
        technologyType: 'milled',
        displayName: name,
        vietnameseName: name,
        englishName: enName,
        typeBadge: '低温研磨粉',
        italicIntro: !isDefaultOrEmpty
          ? rawSpecs
          : `AGRIHUB ${name}精选优质新鲜原料，经清洗、控温脱水烘干并按指定目数精密研磨而成。保留天然颗粒结构与纯正风味，便于在固体及烘焙配方中均匀混合。无防腐剂添加。`,
        image: fallbackInfo?.image || '',
        imageAlt: name,
        highlights: ['保留自然颗粒结构', '目数粒径可调', '无防腐剂'],
        processTitle: `${name}生产工艺`,
        processIntro:
          '从新鲜原料严选到成品粉碎全流程受控。原料经清洗预处理后控温脱水降低水分，随后按客户指定目数精密研磨筛分、理化质检与密封包装。',
        processSteps: [
          { step: '01', title: '原料精选', desc: '入厂原料品质与理化严格筛查' },
          { step: '02', title: '清洗预处理', desc: '洁净清洗、切分与脱水准备' },
          { step: '03', title: '控温脱水', desc: '温和均匀干燥以锁住天然色香' },
          { step: '04', title: '精密研磨', desc: '按约定筛网目数分级粉碎' },
          { step: '05', title: '成品检验', desc: '粒度与微生物检测合格后包装' },
        ],
        whyChooseTitle: `为什么选择 AGRIHUB ${name}？`,
        whyChooseIntro:
          '针对需要凸显天然原料颗粒质感与纯正风味的干粉配方，研磨粉在不引入多余水分的前提下提升产品辨识度与稳定性。',
        benefits: [
          { title: '省去车间前处理工序', desc: '出厂前已完成脱水与分级研磨，大幅缩短工厂备料周期。' },
          { title: '赋予终端产品自然质感', desc: '可控粒径使原料风味与质感在烘焙、谷物及调味体系中清晰呈现。' },
          { title: '易于融入干混配方体系', desc: '可直接与各类粉体原辅料复配，不影响终端产品水分活度。' },
          { title: '粒度与规格按需定制', desc: 'AGRIHUB 可对接具体目数与风味要求，提供实验室样品供试产验证。' },
        ],
        applicationsTitle: '食品饮料工业应用',
        applicationGroups: [
          { group: '焙烤与糕点', items: '饼干、蛋糕、吐司面包及复合烘焙预混粉。' },
          { group: '谷物与营养食品', items: '早餐麦片、能量棒、代餐粉及复合调味料。' },
          { group: '特调饮品与餐饮', items: '冰沙、浓浆饮品及工业餐饮风味配料。' },
        ],
        packagingStorageTitle: '包装规格与储存指引',
        packagingStorage: {
          packaging: fallbackInfo?.packaging || '工业级多层防潮铝箔袋或内衬瓦楞纸箱，支持按需定制。',
          shelfLife: fallbackInfo?.shelfLife || '以产品外包装标贴及出厂检验标准为准。',
          storage: fallbackInfo?.storage || '置于阴凉、通风、干燥处，避免阳光直射，开封后请密封保存。',
        },
        partnerTitle: `AGRIHUB – ${name}工业供应与技术咨询伙伴`,
        partnerIntro: `AGRIHUB 为食品饮料制造企业提供定制目数与包装规格的${name}，并配套提供配方研发样品支持。`,
        partnerPoints: [
          { title: '终端质感定向咨询', desc: '结合终端产品形态匹配合适的筛分目数与工艺规格。' },
          { title: '研发打样测试支持', desc: '提供小试样品供客户产线验证混配性与风味表现。' },
          { title: '国际食品安全认证', desc: '生产体系通过 ISO 22000、HACCP 认证并符合 FDA 合规标准。' },
          { title: '具竞争力的 B2B 报价', desc: '依据采购批量、粒径精度与包装方案提供阶梯式商务报价。' },
        ],
        partnerCtaText: '欢迎联系技术与商务团队获取详细规格书 (TDS) 及申请测试样品。',
        faqTitle: '技术常见问题 (FAQ)',
        faqs: [
          { question: `${name}能否用于冲调饮品配方？`, answer: '适合允许天然微细颗粒悬浮的饮品体系；建议在大规模投产前先通过小样评估分散度与口感表现。' },
          { question: 'AGRIHUB 是否支持定制筛网目数？', answer: '支持。AGRIHUB 可根据客户具体配方指标定制研磨目数并提供测试样品。' },
        ],
      };
    }

    if (techType === 'puree') {
      return {
        slug,
        technologyType: 'puree',
        displayName: name,
        vietnameseName: name,
        englishName: enName,
        typeBadge: '浓醇原果浆',
        italicIntro: !isDefaultOrEmpty
          ? rawSpecs
          : `AGRIHUB ${name}精选成熟优质鲜果，经清洗、打浆与精细均质制成。完整保留天然果香与纯正酸甜口感，质地细腻绵密，无防腐剂添加。`,
        image: fallbackInfo?.image || '',
        imageAlt: name,
        highlights: ['细腻绵密果肉质地', '纯正天然果香风味', '无防腐剂'],
        processTitle: `${name}生产工艺`,
        processIntro:
          '从鲜果分选到无菌灌装全程连续化受控加工。鲜果果肉经物理均质精制达到标准稠度与细度，经杀菌处理后冷链无菌包装。',
        processSteps: [
          { step: '01', title: '严选鲜果', desc: '筛选成熟度与糖酸比达标的鲜果' },
          { step: '02', title: '清洗分选', desc: '洁净清洗与精细果肉前处理' },
          { step: '03', title: '精细打浆', desc: '物理均质破碎形成顺滑果浆' },
          { step: '04', title: '稠度校准', desc: '按规格标准化粘度与细度指标' },
          { step: '05', title: '无菌冷储', desc: '无菌灌装与温控冷链储存' },
        ],
        whyChooseTitle: `为什么选择 AGRIHUB ${name}？`,
        whyChooseIntro:
          '适合追求真实果肉口感与天然果香的饮品及食品配方，免去工厂繁琐的鲜果初加工环节。',
        benefits: [
          { title: '天然果香与醇厚口感', desc: '细腻果浆为冰沙、酸奶及烘焙馅料带来饱满的自然风味。' },
          { title: '缩短产线备料时间', desc: '开袋即用，省去现场清洗、去皮去籽与打浆工序。' },
          { title: '稠度与细度灵活可调', desc: '可根据客户研发配方需求定制粘度并提供试验样品。' },
          { title: '多元化工业无菌包装', desc: '提供无菌袋、桶装等多种规格，适配工厂冷链与排产计划。' },
        ],
        applicationsTitle: '食品饮料工业应用',
        applicationGroups: [
          { group: '果汁与现制茶饮', items: '果昔、Nectar 果肉饮料、复合果汁及茶饮基底。' },
          { group: '乳制品与冰品', items: '风味发酵乳、冰淇淋、雪葩及乳品果味配料。' },
          { group: '烘焙馅料与果酱', items: '糕点夹心、淋面果酱、慕斯甜品及餐饮调味酱。' },
        ],
        packagingStorageTitle: '包装规格与储存指引',
        packagingStorage: {
          packaging: fallbackInfo?.packaging || '食品级无菌袋配铁桶/塑胶桶，或按工业客户需求定制。',
          shelfLife: fallbackInfo?.shelfLife || '以具体批次包装标贴及规格书标注为准。',
          storage: fallbackInfo?.storage || '须严格按照规定冷链温度储存运输，以保持风味与质地稳定。',
        },
        partnerTitle: `AGRIHUB – ${name}工业供应与技术咨询伙伴`,
        partnerIntro: `AGRIHUB 为食品饮料制造企业稳定供应符合国际标准的${name}，配套完整的冷链与技术文件支持。`,
        partnerPoints: [
          { title: '果浆状态定向匹配', desc: '针对终端产品的粘度、细度与酸甜比提供技术建议。' },
          { title: '研发小样快速寄送', desc: '协助客户在实际工艺条件下验证风味留存与稳定性。' },
          { title: '权威食品安全体系', desc: '通过 ISO 22000、HACCP 认证并符合 FDA 合规标准。' },
          { title: '透明的 B2B 供应方案', desc: '结合柜量、包装材质与交货条款制定具竞争力的合作价格。' },
        ],
        partnerCtaText: '欢迎联系我们获取详细 TDS 技术参数及申请研发测试样品。',
        faqTitle: '技术常见问题 (FAQ)',
        faqs: [
          { question: `AGRIHUB 是否支持按配方调整${name}稠度？`, answer: '支持。我们可根据客户对粘度、细度及风味指标的要求提供定制打样。' },
          { question: `${name}的储存与运输条件是什么？`, answer: '具体温控要求依杀菌方式与包装规格而定，出货时将附带完整冷链操作指引。' },
        ],
      };
    }

    if (techType === 'concentrate') {
      return {
        slug,
        technologyType: 'concentrate',
        displayName: name,
        vietnameseName: name,
        englishName: enName,
        typeBadge: '真空浓缩原料',
        italicIntro: !isDefaultOrEmpty
          ? rawSpecs
          : `AGRIHUB ${name}精选优质鲜果原汁或果浆，采用低温真空减压浓缩工艺温和脱除部分水分，大幅提升可溶性固形物 (°Brix) 并锁住天然香气，无防腐剂添加。`,
        image: fallbackInfo?.image || '',
        imageAlt: name,
        highlights: ['高可溶性固形物', '真空低温浓缩', '优化跨境物流成本'],
        processTitle: `${name}生产工艺`,
        processIntro:
          '以精选原汁或果浆为投料基底，在真空负压低温环境下蒸发浓缩，保护热敏性芳香物质，经糖度与理化检验合格后无菌灌装。',
        processSteps: [
          { step: '01', title: '基料精选', desc: '入厂鲜果与原汁/浆指标严格筛查' },
          { step: '02', title: '过滤调质', desc: '进料精细过滤与浓缩前预处理' },
          { step: '03', title: '真空进料', desc: '负压蒸发系统连续稳定进料' },
          { step: '04', title: '低温浓缩', desc: '温和减压脱水以提升固形物浓度' },
          { step: '05', title: '质检灌装', desc: 'Brix 复检、无菌灌装与温控入库' },
        ],
        whyChooseTitle: `为什么选择 AGRIHUB ${name}？`,
        whyChooseIntro:
          '在追求浓郁水果风味并需精确控制配方水量的工业生产中，浓缩原料赋予研发与成本控制更高自由度。',
        benefits: [
          { title: '浓缩纯正天然风味', desc: '高倍风味强度适用于饮料、糖浆与糖果配方，不引入多余水分。' },
          { title: '精准控制折光糖度 (°Brix)', desc: '稳定的可溶性固形物指标便于精确核算投料比与复水比例。' },
          { title: '清汁或果浆基底可选', desc: '可根据终端产品澄清度或果肉质感要求灵活匹配基料。' },
          { title: '显著降低储运成本', desc: '脱除多余水分后大幅减少单批运输重量与冷库占用体积。' },
        ],
        applicationsTitle: '食品饮料工业应用',
        applicationGroups: [
          { group: '饮料与糖浆制造', items: '复原果汁、风味糖浆、茶饮特调基底及气泡饮料。' },
          { group: '乳品与冷饮冰品', items: '风味酸奶果味底料、冰淇淋及雪糕配料。' },
          { group: '糖果、果冻与烘焙', items: '软糖、果冻布丁、果酱夹心及烘焙风味淋面。' },
        ],
        packagingStorageTitle: '包装规格与储存指引',
        packagingStorage: {
          packaging: fallbackInfo?.packaging || '工业级无菌袋配 200L 铁桶或按工厂产线需求定制容器。',
          shelfLife: fallbackInfo?.shelfLife || '严格依照技术规格书与批次标贴标注期限执行。',
          storage: fallbackInfo?.storage || '须置于规定温度的冷藏/冷冻库房保存，防止高温褐变与风味流失。',
        },
        partnerTitle: `AGRIHUB – ${name}工业供应与配方协同伙伴`,
        partnerIntro: `AGRIHUB 按客户目标 °Brix 与理化规格稳定供应${name}，提供完整质检报告与国际物流履约支持。`,
        partnerPoints: [
          { title: '目标 °Brix 配方对接', desc: '围绕可溶性固形物、酸度及风味特征提供专业技术协同。' },
          { title: '实验室复水打样支持', desc: '提供测试小样协助客户完成稀释比例与稳定性验证。' },
          { title: '严苛质量安全管控', desc: 'ISO 22000、HACCP 认证产线生产，随货可附批次 COA。' },
          { title: '灵活大宗商务合作', desc: '支持托盘及整柜采购，按交货周期制定具竞争力的价格方案。' },
        ],
        partnerCtaText: '欢迎联系工程销售团队索取浓缩原料技术规格书与测试样品。',
        faqTitle: '技术常见问题 (FAQ)',
        faqs: [
          { question: `${name}投入生产前是否需要加水稀释？`, answer: '视具体配方而定：既可直接投料于高固形物体系，也可按目标 °Brix 加水复原，最佳比例可通过小样测试确定。' },
          { question: 'AGRIHUB 能否按要求定制 °Brix 与酸度指标？', answer: '可以。AGRIHUB 支持针对折光糖度、酸甜比及粘稠度进行定制研发生产。' },
        ],
      };
    }

    // Default Spray-Dried in ZH
    return {
      slug,
      technologyType: 'spray-dried',
      displayName: name,
      vietnameseName: name,
      englishName: enName,
      typeBadge: '喷雾干燥粉',
      italicIntro: !isDefaultOrEmpty
        ? rawSpecs
        : `AGRIHUB ${name}甄选优质新鲜原料，采用先进喷雾干燥工艺制成均匀细腻干粉，保留原料特征香气。无人工防腐剂添加，便于工业仓储、跨境运输并广泛应用于各类食品与饮料配方中。`,
      image: fallbackInfo?.image || '',
      imageAlt: name,
      highlights: ['微细易分散粉末', '批次品质稳定', '无防腐剂'],
      processTitle: `${name}生产工艺`,
      processIntro:
        `AGRIHUB ${name}采用全封闭式加工流程，从原料入厂到成品包装全程严格质控。新鲜原料经分选清洗并制成浆液，按标准配方调配后进入喷雾干燥塔雾化干燥成微细粉末，经收集质检后密封包装。`,
      processSteps: [
        { step: '01', title: '严选原料', desc: '原料品质与理化指标严格检验' },
        { step: '02', title: '清洗制浆', desc: '洁净清洗并提取原果精华浆液' },
        { step: '03', title: '进料调配', desc: '按喷雾干燥工艺标准化调配浆料' },
        { step: '04', title: '喷雾雾化', desc: '瞬间雾化干燥与旋风分离收粉' },
        { step: '05', title: '品质检验', desc: '感官理化复检合格后标准包装' },
      ],
      whyChooseTitle: `为什么选择 AGRIHUB ${name}？`,
      whyChooseIntro:
        '在多品类规模化生产中，使用标准化喷雾干燥粉可省去繁琐的鲜果处理工序，助力制造企业高效完成研发打样与稳定量产。',
      benefits: [
        { title: '免除鲜果前处理损耗', desc: '干粉形态即投即用，无需产线现场清洗、压榨与过滤。' },
        { title: '批次间精准定量投料', desc: '通过小试确定投料比例后即可稳定复现，显著提升生产效率。' },
        { title: '供应链与仓储更可控', desc: '常温密封防潮储运即可，降低鲜果季节性波动与冷链成本。' },
        { title: '支持客制化研发调配', desc: 'AGRIHUB 可根据客户对风味浓度、溶解度及载体的要求定制样品。' },
      ],
      applicationsTitle: '食品饮料工业应用',
      applicationGroups: [
        { group: '饮品制造', items: '固体冲调饮品、特调果茶、风味饮料及预混粉原料。' },
        { group: '乳品与冷饮', items: '酸奶、乳酸菌饮品、冰淇淋及植物基乳品配料。' },
        { group: '烘焙、糖果与营养品', items: '饼干糕点、软糖果冻、麦片谷物及营养代餐粉。' },
      ],
      packagingStorageTitle: '包装规格与储存指引',
      packagingStorage: {
        packaging: fallbackInfo?.packaging || '提供符合食品工业标准的多种大宗密封防潮包装规格。',
        shelfLife: fallbackInfo?.shelfLife || '以官方核准之产品包装标贴所载保质期为准。',
        storage: fallbackInfo?.storage || '请存放于阴凉干燥处，避免阳光直射；开封后务必密封防潮。',
      },
      partnerTitle: `AGRIHUB – ${name}工业供应与技术咨询伙伴`,
      partnerIntro: `AGRIHUB 为全球食品饮料制造商供应高品质${name}，提供选型指导、包装定制与研发样品支持。`,
      partnerPoints: [
        { title: '应用配方技术咨询', desc: '结合终端产品体系匹配适宜溶解度与风味表现的粉体规格。' },
        { title: '中试打样评估支持', desc: '提供样品供客户在实验室及中试产线直接验证分散与风味效果。' },
        { title: '权威食品安全保障', desc: '标准化工厂通过 ISO 22000、HACCP 认证并符合 FDA 合规要求。' },
        { title: '具竞争力的 B2B 价格', desc: '按订单吨位、包装形式与供货周期提供透明阶梯报价。' },
      ],
      partnerCtaText: '欢迎联系我们的技术团队获取应用建议与专属报价，请告知您的目标应用、包装规格与预估用量。',
      faqTitle: '技术常见问题 (FAQ)',
      faqs: [
        { question: `${name}在配方中容易溶解分散吗？`, answer: '喷雾干燥工艺形成均匀微细粉末，便于在液体与干混体系中分散。具体溶解度与沉降表现视配方基质而定，AGRIHUB 可提供样品供试产评估。' },
        { question: `${name}是否含有载体（如麦芽糊精）？`, answer: '配方载体可根据客户技术标准灵活调整，具体成分比例将在技术对接时详细提供。' },
      ],
    };
  }

  // Vietnamese Implementation
  const powderVi = /^bột\b/i.test(name) ? name : `Bột ${name}`;
  const pureeVi = /^(puree|purée|nước)\b/i.test(name) ? name : `Puree ${name}`;
  const concentrateVi = /cô đặc/i.test(name) ? name : `${name} cô đặc`;

  if (techType === 'milled') {
    return {
      slug,
      technologyType: 'milled',
      displayName: name,
      vietnameseName: name,
      englishName: enName,
      typeBadge: 'Bột sấy nghiền nguyên cấu trúc hạt',
      italicIntro: !isDefaultOrEmpty
        ? rawSpecs
        : `${powderVi} AGRIHUB được làm từ nguyên liệu tươi được lựa chọn kỹ lưỡng, qua sơ chế, sấy khô và nghiền theo cỡ hạt của từng quy cách. Cấu trúc hạt tự nhiên sau sấy là nét đặc trưng của dòng bột này, góp phần tạo cảm quan rõ nét trong các công thức thực phẩm. Dạng bột khô thuận tiện cho đóng gói, bảo quản và vận chuyển hơn nguyên liệu tươi. Sản phẩm không sử dụng chất bảo quản.`,
      image: fallbackInfo?.image || '',
      imageAlt: name,
      highlights: ['Cấu trúc hạt tự nhiên', 'Độ mịn Mesh tùy chỉnh', 'Không chất bảo quản'],
      processTitle: `Quy trình sản xuất ${powderVi.toLowerCase()}`,
      processIntro:
        'Với công nghệ sấy nghiền, các công đoạn được kiểm soát xuyên suốt từ khâu lựa chọn nguyên liệu tươi đến hoàn thiện bột thành phẩm. Sau khi kiểm tra và sơ chế, nguyên liệu được sấy khô nhằm giảm lượng nước, tạo điều kiện cho công đoạn nghiền và hoàn thiện cỡ hạt theo quy cách đã thống nhất.',
      processSteps: [
        { step: '01', title: 'Lựa chọn kỹ lưỡng', desc: 'Kiểm tra chất lượng đầu vào' },
        { step: '02', title: 'Sơ chế nguyên liệu', desc: 'Làm sạch, chuẩn bị để sấy' },
        { step: '03', title: 'Sấy khô nguyên liệu', desc: 'Giảm lượng nước theo tiêu chuẩn' },
        { step: '04', title: 'Nghiền thành bột', desc: 'Hoàn thiện cỡ hạt theo quy cách' },
        { step: '05', title: 'Kiểm tra thành phẩm', desc: 'Đánh giá chất lượng, đóng gói' },
      ],
      whyChooseTitle: `Vì sao chọn ${powderVi} AGRIHUB?`,
      whyChooseIntro:
        'Với những sản phẩm cần thành phần tự nhiên dạng khô, bột sấy nghiền tạo điểm nhấn nhờ hương vị đặc trưng và kết cấu hạt sau nghiền, phù hợp với bánh, ngũ cốc và thực phẩm chế biến.',
      benefits: [
        { title: 'Tiết kiệm công đoạn làm bột tại cơ sở', desc: 'Nguyên liệu đã được sấy và nghiền trước khi giao hàng, giúp rút ngắn khâu chuẩn bị tươi cho từng đợt sản xuất.' },
        { title: 'Tạo điểm nhấn cho kết cấu thành phẩm', desc: 'Cỡ hạt được lựa chọn phù hợp để thành phần thể hiện rõ hơn về kết cấu khi kết hợp với bánh, ngũ cốc và thực phẩm dạng khô.' },
        { title: 'Dễ kết hợp trong công thức nguyên liệu khô', desc: 'Bột được phối cùng bột ngũ cốc và các thành phần chế biến mà không làm tăng lượng nước như khi dùng nguyên liệu tươi.' },
        { title: 'Lựa chọn độ mịn và công thức theo yêu cầu', desc: 'AGRIHUB tiếp nhận nhu cầu về cỡ hạt, thành phần và hương vị để tư vấn, chuẩn bị mẫu thử phù hợp với sản phẩm khách hàng đang phát triển.' },
      ],
      applicationsTitle: 'Ứng dụng trong sản xuất F&B',
      applicationGroups: [
        { group: 'Bánh và thực phẩm nướng', items: 'Bánh quy, bánh bông lan, bánh mì và các dòng thực phẩm chế biến bổ sung nguyên liệu dạng bột.' },
        { group: 'Ngũ cốc và thanh dinh dưỡng', items: 'Granola, ngũ cốc ăn sáng, thanh ngũ cốc, gia vị và hỗn hợp bột dinh dưỡng.' },
        { group: 'Đồ uống có kết cấu sánh', items: 'Sinh tố và đồ uống chấp nhận phần hạt mịn; cần thử độ lắng và cảm giác khi uống trước khi chọn loại bột.' },
      ],
      packagingStorageTitle: 'Quy cách đóng gói và bảo quản',
      packagingStorage: {
        packaging: fallbackInfo?.packaging || 'AGRIHUB cung cấp với nhiều quy cách đóng gói, đáp ứng nhu cầu sử dụng và sản xuất của khách hàng.',
        shelfLife: fallbackInfo?.shelfLife || 'Theo thông tin công bố trên bao bì sản phẩm.',
        storage: fallbackInfo?.storage || 'Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và đóng kín bao bì sau khi sử dụng.',
      },
      partnerTitle: `AGRIHUB – Đối tác cung ứng và tư vấn ${powderVi}`,
      partnerIntro: `AGRIHUB cung cấp ${powderVi} theo độ mịn và quy cách phù hợp với từng ứng dụng sản xuất. Doanh nghiệp được tư vấn lựa chọn mẫu thử để đánh giá trong công thức thực tế.`,
      partnerPoints: [
        { title: 'Tư vấn theo thành phẩm', desc: 'Ghi nhận yêu cầu về độ mịn trong sản phẩm cuối.' },
        { title: 'Mẫu thử cho từng ứng dụng', desc: 'Khách hàng đánh giá cách bột kết hợp với nền nguyên liệu đang sử dụng.' },
        { title: 'Đảm bảo chất lượng và an toàn thực phẩm', desc: 'AGRIHUB luôn chú trọng chất lượng và an toàn thực phẩm trong sản xuất, bảo đảm mang đến những sản phẩm ổn định về chất lượng.' },
        { title: 'Giá cạnh tranh cho khách hàng B2B', desc: 'Báo giá được tính theo khối lượng, độ mịn yêu cầu, hình thức đóng gói và điều kiện cung ứng.' },
      ],
      partnerCtaText: 'Liên hệ với chúng tôi để được tư vấn kỹ thuật và nhận báo giá. Khách hàng vui lòng chia sẻ nhóm sản phẩm, độ mịn mong muốn, bao bì và khối lượng dự kiến.',
      faqTitle: 'Câu hỏi thường gặp kỹ thuật',
      faqs: [
        { question: `${powderVi} có dùng được trong đồ uống không?`, answer: 'Dòng bột phù hợp với những công thức chấp nhận phần hạt tự nhiên. Khi dùng trong đồ uống, cần thử độ mịn, độ lắng và cảm giác khi uống trước khi chọn quy cách.' },
        { question: 'AGRIHUB có nhận điều chỉnh độ mịn theo yêu cầu sản phẩm không?', answer: 'AGRIHUB tiếp nhận yêu cầu về cỡ hạt, thành phần và mục đích sử dụng để tư vấn mẫu thử. Cỡ hạt được thống nhất sau khi đánh giá trong công thức thực tế.' },
      ],
    };
  }

  if (techType === 'puree') {
    return {
      slug,
      technologyType: 'puree',
      displayName: name,
      vietnameseName: name,
      englishName: enName,
      typeBadge: 'Puree thịt quả sánh nhuyễn',
      italicIntro: !isDefaultOrEmpty
        ? rawSpecs
        : `${pureeVi} AGRIHUB được chế biến từ những quả tươi được lựa chọn kỹ lưỡng, qua sơ chế và xay nhuyễn phần quả. Sản phẩm giữ được hương thơm đặc trưng cùng vị chua ngọt rõ nét; phần thịt quả sánh nhuyễn giúp hương vị trái cây thể hiện nổi bật trong các công thức đồ uống và thực phẩm chế biến. Sản phẩm không sử dụng chất bảo quản.`,
      image: fallbackInfo?.image || '',
      imageAlt: name,
      highlights: ['Thịt quả sánh nhuyễn', 'Vị chua ngọt tự nhiên', 'Không chất bảo quản'],
      processTitle: `Quy trình sản xuất ${pureeVi.toLowerCase()}`,
      processIntro:
        `${pureeVi} AGRIHUB được chế biến qua các công đoạn liên tục, bắt đầu từ lựa chọn kỹ lưỡng, làm sạch và sơ chế quả tươi. Phần quả được xay nhuyễn để tạo kết cấu thịt quả sánh đặc trưng; độ mịn và độ sánh tiếp tục được hoàn thiện theo quy cách từng sản phẩm, kiểm tra chất lượng và bảo quản theo điều kiện phù hợp.`,
      processSteps: [
        { step: '01', title: 'Lựa chọn kỹ lưỡng', desc: 'Kiểm tra chất lượng đầu vào' },
        { step: '02', title: 'Sơ chế phần quả', desc: 'Làm sạch, chuẩn bị để xay' },
        { step: '03', title: 'Xay nhuyễn phần quả', desc: 'Tạo kết cấu thịt quả sánh nhuyễn' },
        { step: '04', title: 'Hoàn thiện puree', desc: 'Hoàn thiện độ sánh và độ mịn' },
        { step: '05', title: 'Kiểm tra thành phẩm', desc: 'Đóng gói, bảo quản theo quy cách' },
      ],
      whyChooseTitle: `Vì sao chọn ${pureeVi} AGRIHUB?`,
      whyChooseIntro:
        `${pureeVi} phù hợp với các công thức muốn thể hiện rõ hương vị cùng phần thịt quả sánh nhuyễn. Khi nguyên liệu đã được chế biến sẵn, doanh nghiệp tiết kiệm thời gian chuẩn bị quả tươi và tập trung lựa chọn kết cấu phù hợp với sản phẩm cuối.`,
      benefits: [
        { title: 'Hương vị nổi bật cùng độ sánh tự nhiên', desc: 'Phần thịt quả xay nhuyễn đưa vị chua ngọt và kết cấu sánh vào sinh tố, sữa chua hoặc món tráng miệng, giúp sản phẩm có nét riêng từ nguyên liệu trái cây.' },
        { title: 'Rút ngắn khâu chuẩn bị nguyên liệu', desc: 'Không phải qua các bước rửa, cắt và xay tại nơi sử dụng mỗi khi bắt đầu một mẻ sản xuất.' },
        { title: 'Điều chỉnh độ sánh theo công thức khách hàng', desc: 'AGRIHUB tư vấn độ mịn, độ sánh và chuẩn bị mẫu để doanh nghiệp thử trực tiếp trong sản phẩm đang phát triển.' },
        { title: 'Linh hoạt quy cách đặt hàng', desc: 'Bao bì và khối lượng được trao đổi theo nhu cầu, giúp doanh nghiệp chủ động chuẩn bị nguyên liệu cho kế hoạch chế biến.' },
      ],
      applicationsTitle: 'Ứng dụng trong sản xuất F&B',
      applicationGroups: [
        { group: 'Đồ uống', items: 'Sinh tố, nectar, nước trái cây có thịt quả và đồ uống phối trộn.' },
        { group: 'Sữa và sản phẩm từ sữa', items: 'Sữa chua ăn, sữa chua uống, kem và các sản phẩm từ sữa sử dụng thành phần dạng nhuyễn.' },
        { group: 'Thực phẩm chế biến', items: 'Sốt trái cây, nhân bánh, lớp phủ bánh, topping và các sản phẩm tráng miệng.' },
      ],
      packagingStorageTitle: 'Quy cách đóng gói và bảo quản',
      packagingStorage: {
        packaging: fallbackInfo?.packaging || 'Cung cấp theo các quy cách đóng gói phù hợp với nhu cầu sử dụng và sản xuất của khách hàng.',
        shelfLife: fallbackInfo?.shelfLife || 'Theo thông tin được công bố trên bao bì sản phẩm.',
        storage: fallbackInfo?.storage || 'Bảo quản theo điều kiện nhiệt độ quy định đối với từng sản phẩm nhằm duy trì chất lượng trong suốt thời hạn sử dụng.',
      },
      partnerTitle: `AGRIHUB – Đối tác cung ứng và tư vấn ${pureeVi}`,
      partnerIntro: `AGRIHUB cung cấp ${pureeVi} theo quy cách phù hợp với doanh nghiệp, cùng thông tin về bao bì, điều kiện bảo quản và giao nhận của từng sản phẩm.`,
      partnerPoints: [
        { title: 'Tư vấn trạng thái puree', desc: 'Trao đổi về độ mịn, độ sánh và mục tiêu ứng dụng của sản phẩm.' },
        { title: 'Hỗ trợ thử mẫu', desc: 'Khách hàng đánh giá hương vị và phối trộn trong công thức thực tế.' },
        { title: 'Đảm bảo chất lượng và an toàn thực phẩm', desc: 'AGRIHUB luôn chú trọng chất lượng và an toàn thực phẩm trong sản xuất, bảo đảm mang đến những sản phẩm ổn định về chất lượng.' },
        { title: 'Chính sách giá cạnh tranh', desc: 'Báo giá được trao đổi theo khối lượng, loại bao bì, điều kiện bảo quản và yêu cầu công thức.' },
      ],
      partnerCtaText: 'Liên hệ với chúng tôi để được tư vấn kỹ thuật và nhận báo giá.',
      faqTitle: 'Câu hỏi thường gặp kỹ thuật',
      faqs: [
        { question: `AGRIHUB có nhận điều chỉnh ${pureeVi} với độ sánh theo công thức của tôi không?`, answer: 'AGRIHUB tiếp nhận yêu cầu về độ sánh, độ mịn và hương vị để tư vấn, chuẩn bị mẫu thử. Khách hàng đánh giá mẫu trong sản phẩm thực tế trước khi thống nhất quy cách.' },
        { question: `${pureeVi} cần được bảo quản và vận chuyển như thế nào?`, answer: 'Điều kiện lưu kho và vận chuyển phụ thuộc phương pháp xử lý, loại bao bì và quy cách sản phẩm. AGRIHUB cung cấp hướng dẫn cụ thể cho dòng sản phẩm khách hàng lựa chọn.' },
      ],
    };
  }

  if (techType === 'concentrate') {
    return {
      slug,
      technologyType: 'concentrate',
      displayName: name,
      vietnameseName: name,
      englishName: enName,
      typeBadge: 'Cô đặc chân không chất lượng cao',
      italicIntro: !isDefaultOrEmpty
        ? rawSpecs
        : `${concentrateVi} AGRIHUB được chế biến từ dịch quả hoặc puree quả, tùy theo yêu cầu của khách hàng. Nguyên liệu từ những quả tươi được lựa chọn kỹ lưỡng, sau đó cô đặc chân không để giảm bớt lượng nước và tăng hàm lượng chất khô. Thành phẩm mang hương vị đậm đà; độ sánh và kết cấu được điều chỉnh theo yêu cầu của từng công thức đồ uống và thực phẩm chế biến. Sản phẩm không sử dụng chất bảo quản.`,
      image: fallbackInfo?.image || '',
      imageAlt: name,
      highlights: ['Hàm lượng chất khô cao', 'Cô đặc chân không', 'Tối ưu chi phí vận chuyển'],
      processTitle: `Quy trình sản xuất ${concentrateVi.toLowerCase()}`,
      processIntro:
        `Quy trình sản xuất ${concentrateVi} AGRIHUB sử dụng dịch quả hoặc puree quả làm nguyên liệu đầu vào, tùy theo yêu cầu về công thức sản phẩm. Quả tươi được lựa chọn kỹ lưỡng, sơ chế và xử lý trước khi đưa nguyên liệu vào hệ thống cô đặc chân không. Dưới áp suất thấp, một phần nước được tách ra nhằm tăng hàm lượng chất khô, tạo độ sánh và hương vị đặc trưng.`,
      processSteps: [
        { step: '01', title: 'Lựa chọn kỹ lưỡng', desc: 'Kiểm tra chất lượng đầu vào' },
        { step: '02', title: 'Sơ chế nguyên liệu', desc: 'Chuẩn bị dịch quả hoặc puree' },
        { step: '03', title: 'Chuẩn bị cô đặc', desc: 'Xử lý nguyên liệu trước cô đặc' },
        { step: '04', title: 'Cô đặc chân không', desc: 'Tách bớt nước dưới áp suất thấp' },
        { step: '05', title: 'Kiểm tra thành phẩm', desc: 'Đánh giá chất lượng, đóng gói' },
      ],
      whyChooseTitle: `Vì sao chọn ${concentrateVi} AGRIHUB?`,
      whyChooseIntro:
        'Trong các công thức cần hương vị rõ và dễ cân đối lượng nước, dạng cô đặc giúp doanh nghiệp chủ động hơn ở bước phối trộn. Tùy mục đích sử dụng, khách hàng lựa chọn nền dịch quả hoặc puree cô đặc để đạt kết cấu mong muốn.',
      benefits: [
        { title: 'Tăng độ đậm đà của hương vị trong công thức', desc: 'Dạng cô đặc mang đến hương vị rõ nét cho đồ uống, sốt và thực phẩm chế biến mà không bổ sung nhiều nước như nguyên liệu ban đầu.' },
        { title: 'Chủ động lượng nguyên liệu trong công thức', desc: 'Hàm lượng chất khô là cơ sở để tính lượng cô đặc và lượng nước bổ sung theo mục tiêu thành phẩm.' },
        { title: 'Linh hoạt về nền nguyên liệu và kết cấu', desc: 'AGRIHUB tư vấn sản phẩm cô đặc từ dịch hoặc puree tùy yêu cầu về phần thịt quả, độ sánh và cảm quan.' },
        { title: 'Giảm khối lượng nước khi vận chuyển', desc: 'Với cùng lượng chất khô, cô đặc chứa ít nước hơn trước khi cô đặc, giúp giảm khối lượng nguyên liệu cần vận chuyển.' },
      ],
      applicationsTitle: 'Ứng dụng trong sản xuất F&B',
      applicationGroups: [
        { group: 'Đồ uống', items: 'Nước giải khát hương trái cây, syrup pha chế và các loại đồ uống phối trộn.' },
        { group: 'Sữa và sản phẩm từ sữa', items: 'Sữa chua ăn, sữa chua uống, kem và các sản phẩm từ sữa có bổ sung thành phần cô đặc.' },
        { group: 'Thực phẩm chế biến', items: 'Sốt trái cây, mứt, thạch, kẹo và nhân bánh cần vị trái cây rõ hoặc kết cấu sánh.' },
      ],
      packagingStorageTitle: 'Quy cách đóng gói và bảo quản',
      packagingStorage: {
        packaging: fallbackInfo?.packaging || 'Cung cấp theo các quy cách đóng gói phù hợp với nhu cầu sử dụng và sản xuất của khách hàng.',
        shelfLife: fallbackInfo?.shelfLife || 'Theo thông tin được công bố trên bao bì sản phẩm.',
        storage: fallbackInfo?.storage || 'Bảo quản theo điều kiện nhiệt độ quy định đối với từng sản phẩm nhằm duy trì chất lượng trong thời hạn sử dụng.',
      },
      partnerTitle: `AGRIHUB – Đối tác cung ứng và tư vấn ${concentrateVi}`,
      partnerIntro: `AGRIHUB cung cấp ${concentrateVi} theo nhu cầu sản xuất của doanh nghiệp, với quy cách, chất lượng và điều kiện giao nhận được thống nhất cho từng đơn hàng.`,
      partnerPoints: [
        { title: 'Tư vấn theo mục tiêu sản phẩm', desc: 'Trao đổi về độ Brix, trạng thái và hương vị phù hợp với ứng dụng dự kiến.' },
        { title: 'Mẫu thử phục vụ phối liệu', desc: 'Khách hàng đánh giá nguyên liệu trong công thức trước khi thống nhất đặt hàng.' },
        { title: 'Đảm bảo chất lượng và an toàn thực phẩm', desc: 'AGRIHUB luôn chú trọng chất lượng và an toàn thực phẩm trong sản xuất, bảo đảm mang đến những sản phẩm ổn định về chất lượng.' },
        { title: 'Báo giá cạnh tranh theo nhu cầu', desc: 'Giá được xây dựng theo quy cách đóng gói, khối lượng và điều kiện giao hàng.' },
      ],
      partnerCtaText: 'Liên hệ với chúng tôi để được tư vấn kỹ thuật và nhận báo giá.',
      faqTitle: 'Câu hỏi thường gặp kỹ thuật',
      faqs: [
        { question: `${concentrateVi} có cần pha thêm nước trước khi đưa vào sản xuất không?`, answer: 'Tùy công thức, sản phẩm cô đặc được phối trộn trực tiếp hoặc bổ sung nước theo mục tiêu thành phẩm. Tỷ lệ sử dụng được lựa chọn dựa trên độ Brix, hương vị và độ sánh sau khi thử mẫu.' },
        { question: 'AGRIHUB có nhận điều chỉnh độ Brix và hương vị theo yêu cầu không?', answer: 'AGRIHUB tiếp nhận yêu cầu về độ Brix, độ sánh, hương vị và nền nguyên liệu dịch hoặc puree để tư vấn kỹ thuật, chuẩn bị mẫu thử theo công thức khách hàng đang phát triển.' },
      ],
    };
  }

  // Default: Spray-Dried in VI
  return {
    slug,
    technologyType: 'spray-dried',
    displayName: name,
    vietnameseName: name,
    englishName: enName,
    typeBadge: 'Bột sấy phun công nghệ cao',
    italicIntro: !isDefaultOrEmpty
      ? rawSpecs
      : `${powderVi} AGRIHUB được chế biến từ những quả tươi lựa chọn kỹ lưỡng, ứng dụng công nghệ sấy phun tạo thành bột khô mịn, mang hương vị đặc trưng. Sản phẩm không sử dụng chất bảo quản, thuận tiện trong bảo quản, vận chuyển và ứng dụng vào sản xuất thực phẩm, đồ uống.`,
    image: fallbackInfo?.image || '',
    imageAlt: name,
    highlights: ['Bột mịn phân tán nhanh', 'Thuận tiện phối trộn', 'Không chất bảo quản'],
    processTitle: `Quy trình sản xuất ${powderVi.toLowerCase()}`,
    processIntro:
      `Quy trình sản xuất ${powderVi} AGRIHUB theo quy trình khép kín, với chất lượng được kiểm soát từ nguyên liệu đầu vào đến thành phẩm. Nguyên liệu tươi được lựa chọn kỹ lưỡng, làm sạch và xử lý thành dịch quả, tiếp tục chuẩn bị theo công thức trước khi đưa vào hệ thống sấy phun tạo thành bột mịn đồng đều.`,
    processSteps: [
      { step: '01', title: 'Lựa chọn kỹ lưỡng', desc: 'Kiểm tra chất lượng nguyên liệu' },
      { step: '02', title: 'Sơ chế nguyên liệu', desc: 'Làm sạch và chuẩn bị phần quả' },
      { step: '03', title: 'Chuẩn bị dịch sấy', desc: 'Xử lý, phối trộn dịch cấp sấy' },
      { step: '04', title: 'Sấy phun tạo bột', desc: 'Phun sương, làm khô, thu hồi bột' },
      { step: '05', title: 'Kiểm tra thành phẩm', desc: 'Đánh giá chất lượng, đóng gói' },
    ],
    whyChooseTitle: `Vì sao chọn ${powderVi} AGRIHUB?`,
    whyChooseIntro:
      `Khi sản xuất nhiều công thức, việc chuẩn bị quả tươi cho từng mẻ tốn thêm thời gian và công đoạn. ${powderVi} AGRIHUB giúp đơn giản hóa khâu chuẩn bị nguyên liệu, để doanh nghiệp chủ động hơn khi thử mẫu và đưa sản phẩm vào sản xuất.`,
    benefits: [
      { title: 'Giảm công đoạn chuẩn bị quả tươi', desc: 'Nguyên liệu được cung cấp ở dạng bột, không cần các bước rửa, ép và lọc quả mỗi lần phối trộn.' },
      { title: 'Dễ kiểm soát lượng dùng giữa các mẻ', desc: 'Tỷ lệ bột được xác định qua thử mẫu và đưa vào công thức sản xuất, giúp doanh nghiệp tiết kiệm thời gian lặp lại các mẻ.' },
      { title: 'Chủ động kế hoạch cung ứng nguyên liệu', desc: 'Bột được đóng gói theo quy cách đặt hàng, giúp doanh nghiệp tính lượng cần dùng cho từng đợt sản xuất mà không phải dự trữ quả tươi.' },
      { title: 'Điều chỉnh theo công thức khách hàng', desc: 'AGRIHUB tiếp nhận yêu cầu về thành phần, hương vị và mục đích sử dụng để tư vấn kỹ thuật, chuẩn bị mẫu phù hợp với sản phẩm khách hàng đang phát triển.' },
    ],
    applicationsTitle: 'Ứng dụng trong sản xuất F&B',
    applicationGroups: [
      { group: 'Đồ uống', items: 'Bột pha uống hương trái cây, trà trái cây, nước giải khát và các dòng bột pha sẵn dùng trong sản xuất đồ uống.' },
      { group: 'Sữa và sản phẩm từ sữa', items: 'Sữa chua ăn, sữa chua uống, kem và các sản phẩm từ sữa có phối trộn thành phần trái cây.' },
      { group: 'Thực phẩm chế biến', items: 'Bánh quy, bánh bông lan, kẹo dẻo, thạch, ngũ cốc và hỗn hợp bột dinh dưỡng.' },
    ],
    packagingStorageTitle: 'Quy cách đóng gói và bảo quản',
    packagingStorage: {
      packaging: fallbackInfo?.packaging || 'Bột được cung cấp với nhiều quy cách đóng gói, phù hợp với nhu cầu sử dụng của doanh nghiệp sản xuất thực phẩm.',
      shelfLife: fallbackInfo?.shelfLife || 'Theo thông tin được công bố trên bao bì sản phẩm.',
      storage: fallbackInfo?.storage || 'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và đậy kín bao bì sau khi mở.',
    },
    partnerTitle: `AGRIHUB – Đối tác cung ứng và tư vấn ${powderVi}`,
    partnerIntro: `AGRIHUB cung cấp ${powderVi} cho các doanh nghiệp sản xuất thực phẩm và đồ uống. Chúng tôi tư vấn lựa chọn nguyên liệu, quy cách đóng gói và mẫu thử theo yêu cầu của từng sản phẩm.`,
    partnerPoints: [
      { title: 'Tư vấn theo ứng dụng', desc: 'Trao đổi về sản phẩm dự kiến để lựa chọn dòng bột có đặc tính phù hợp.' },
      { title: 'Hỗ trợ đánh giá mẫu', desc: 'Khách hàng thử hương vị và khả năng phối trộn trong công thức trước khi đặt hàng.' },
      { title: 'Đảm bảo chất lượng và an toàn thực phẩm', desc: 'AGRIHUB luôn chú trọng chất lượng và an toàn thực phẩm trong sản xuất, bảo đảm mang đến những sản phẩm ổn định về chất lượng.' },
      { title: 'Giá cạnh tranh theo đơn hàng', desc: 'Báo giá theo khối lượng, quy cách bao bì và công thức đặt hàng.' },
    ],
    partnerCtaText: 'Liên hệ với chúng tôi để được tư vấn kỹ thuật và nhận báo giá. Khách hàng vui lòng cho biết mục đích sử dụng, quy cách đóng gói và khối lượng dự kiến để AGRIHUB hỗ trợ lựa chọn nguyên liệu.',
    faqTitle: 'Câu hỏi thường gặp kỹ thuật',
    faqs: [
      { question: `${powderVi} có dễ hòa tan khi pha chế không?`, answer: 'Công nghệ sấy phun tạo dạng bột mịn, thuận tiện phối trộn vào đồ uống và thực phẩm. Khả năng hòa tan và độ lắng phụ thuộc từng công thức; AGRIHUB cung cấp mẫu để khách hàng đánh giá trực tiếp trước khi đặt hàng.' },
      { question: `${powderVi} có sử dụng chất mang không?`, answer: 'Tùy công thức sản phẩm; thông tin thành phần được AGRIHUB cung cấp khi khách hàng liên hệ.' },
    ],
  };
}
