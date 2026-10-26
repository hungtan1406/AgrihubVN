export type Locale = 'vi' | 'en' | 'zh';

export interface Dictionary {
  common: {
    brandName: string;
    tagline: string;
    requestQuote: string;
    requestSample: string;
    downloadProfile: string;
    learnMore: string;
    contactUs: string;
    viewDetails: string;
    backToHome: string;
    placeholderNotice: string;
    targetCustomer: string;
    selectLanguage: string;
  };
  nav: {
    home: string;
    aboutUs: string;
    distributionPartners: string;
    contact: string;
    requestQuoteBtn: string;
    products: string;
    // Internal jump anchors for consolidated home sections
    ingredients: string;
    oemOdm: string;
    supplyChain: string;
    qualityCertifications: string;
    globalPresence: string;
  };
  footer: {
    companyDescription: string;
    quickLinks: string;
    productsTitle: string;
    certificationsTitle: string;
    contactTitle: string;
    addressLabel: string;
    factoryLabel: string;
    emailLabel: string;
    hotlineLabel: string;
    rightsReserved: string;
    disclaimer: string;
  };
  pages: {
    home: {
      title: string;
      metaDescription: string;
      heroTitle: string;
      heroSubtitle: string;
      primaryCta: string;
      secondaryCta: string;
      heroCtaSample?: string;
      heroCtaQuote?: string;
      audienceBadge: string;
      audienceTitle: string;
      audienceSubtitle: string;
      pillarsBadge: string;
      pillarsTitle: string;
      pillarsSubtitle: string;
      ingredientsBadge: string;
      ingredientsTitle: string;
      ingredientsSubtitle: string;
      tabAll?: string;
      tabPowder?: string;
      tabPuree?: string;
      tabDried?: string;
      oemBadge: string;
      oemTitle: string;
      oemSubtitle: string;
      supplyBadge: string;
      supplyTitle: string;
      supplySubtitle: string;
      qualityBadge: string;
      qualityTitle: string;
      qualitySubtitle: string;
      globalBadge: string;
      globalTitle: string;
      globalSubtitle: string;
      contactBadge: string;
      contactTitle: string;
      contactSubtitle: string;
    };
    products: {
      title: string;
      subtitle: string;
      targetAudience: string;
      primaryCta: string;
    };
    productDetail: {
      title: string;
      subtitle: string;
      targetAudience: string;
      primaryCta: string;
    };
    oemOdm: {
      title: string;
      subtitle: string;
      targetAudience: string;
      primaryCta: string;
    };
    supplyChain: {
      title: string;
      subtitle: string;
      targetAudience: string;
      primaryCta: string;
    };
    qualityCertifications: {
      title: string;
      subtitle: string;
      targetAudience: string;
      primaryCta: string;
    };
    globalPresence: {
      title: string;
      subtitle: string;
      targetAudience: string;
      primaryCta: string;
    };
    distributionPartners: {
      title: string;
      subtitle: string;
      targetAudience: string;
      primaryCta: string;
    };
    aboutUs: {
      title: string;
      subtitle: string;
      targetAudience: string;
      primaryCta: string;
    };
    contact: {
      title: string;
      subtitle: string;
      targetAudience: string;
      primaryCta: string;
    };
  };
}
