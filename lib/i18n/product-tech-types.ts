import { Locale } from './types';

export type ProductTechnologyType = 'spray-dried' | 'milled' | 'puree' | 'concentrate';

export interface ProcessStep {
  step: string; // e.g. "01", "02", ...
  title: string;
  desc: string;
}

export interface BenefitPoint {
  title: string;
  desc: string;
}

export interface ApplicationGroup {
  group: string;
  items: string;
}

export interface PackagingStorageSpec {
  packaging: string;
  shelfLife: string;
  storage: string;
}

export interface PartnerPoint {
  title: string;
  desc: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductTechDetail {
  slug: string;
  technologyType: ProductTechnologyType;
  // Khu vực A: Giới thiệu sản phẩm
  displayName?: string;
  vietnameseName: string;
  englishName: string;
  typeBadge: string;
  italicIntro: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  
  // Khu vực B: Quy trình sản xuất
  processTitle: string;
  processIntro: string;
  processSteps: ProcessStep[]; // Đúng 5 bước
  
  // Khu vực C: Vì sao chọn AGRIHUB?
  whyChooseTitle: string;
  whyChooseIntro: string;
  benefits: BenefitPoint[]; // 4 lợi ích
  
  // Khu vực D: Ứng dụng
  applicationsTitle: string;
  applicationGroups: ApplicationGroup[]; // 3 nhóm
  
  // Khu vực E: Quy cách đóng gói và bảo quản
  packagingStorageTitle: string;
  packagingStorage: PackagingStorageSpec; // 3 dòng
  
  // Khu vực F: AGRIHUB – Đối tác cung ứng và tư vấn
  partnerTitle: string;
  partnerIntro: string;
  partnerPoints: PartnerPoint[]; // 4 điểm
  partnerCtaText: string;
  
  // Khu vực G: Câu hỏi thường gặp
  faqTitle: string;
  faqs: ProductFaq[]; // Đúng 2 câu hỏi kỹ thuật đã duyệt
}
