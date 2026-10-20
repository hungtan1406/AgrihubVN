'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Locale, Dictionary } from '@/lib/i18n';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

interface HomePageContentProps {
  currentLang: Locale;
  dict: Dictionary;
}

export default function HomePageContent({ currentLang, dict }: HomePageContentProps) {
  // Client-side category tab filter
  const [activeCategory, setActiveCategory] = useState<'all' | 'powder' | 'dried' | 'puree'>('all');
  // Selected product for technical TDS drawer/modal
  const [selectedTds, setSelectedTds] = useState<string | null>(null);

  // Form submit state
  const [submitted, setSubmitted] = useState(false);

  // Products dataset with tropical flavor accents
  const ingredients = [
    {
      id: 'dragon-fruit-powder',
      category: 'powder',
      categoryName: 'Bột trái cây',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      name: 'Bột Thanh Long Đỏ (Red Dragon Fruit Powder)',
      specs: 'Độ ẩm ≤ 5% | 80-100 mesh | 100% tự nhiên không chất bảo quản',
      moisture: '≤ 5.0%',
      mesh: '80 - 100 mesh',
      brix: 'Tự nhiên từ quả',
      shelfLife: '24 tháng',
      packaging: 'Túi nhôm tiệt trùng 5kg x 4 / thùng carton 20kg',
      applications: 'Bánh kẹo, đồ uống dinh dưỡng, sữa chua, tạo màu tự nhiên Clean-label.',
    },
    {
      id: 'passion-fruit-powder',
      category: 'powder',
      categoryName: 'Bột trái cây',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      name: 'Bột Chanh Dây Hòa Tan (Passion Fruit Powder)',
      specs: 'Độ tan > 95% | Vị chua thanh tự nhiên | Giàu Vitamin C & khoáng chất',
      moisture: '≤ 4.5%',
      mesh: '100 mesh',
      brix: 'Chuẩn hóa theo yêu cầu',
      shelfLife: '18 tháng',
      packaging: 'Túi nhôm hút chân không 10kg x 2',
      applications: 'Trà trái cây, si-rô pha chế, nhân bánh ngọt, kem cao cấp.',
    },
    {
      id: 'banana-powder',
      category: 'powder',
      categoryName: 'Bột trái cây',
      badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      name: 'Bột Chuối Sấy Phun (Spray-Dried Banana Powder)',
      specs: 'Màu vàng kem | Hương thơm đậm đà | Dồi dào chất xơ & Kali',
      moisture: '≤ 5.0%',
      mesh: '80 mesh',
      brix: 'Tự nhiên',
      shelfLife: '24 tháng',
      packaging: 'Thùng carton 20kg lót túi PE kép chống ẩm',
      applications: 'Ngũ cốc ăn sáng, thức ăn dặm trẻ em, sinh tố protein, bánh quy.',
    },
    {
      id: 'freeze-dried-mango',
      category: 'dried',
      categoryName: 'Trái cây sấy',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
      name: 'Xoài Sấy Thăng Hoa (Freeze-Dried Mango Slices)',
      specs: 'Độ ẩm ≤ 3% | Cắt lát 5-7mm | Giòn xốp, giữ nguyên 98% vi chất & màu vàng tươi',
      moisture: '≤ 3.0%',
      mesh: 'Lát cắt / Hạt lựu / Dạng mảnh vụn',
      brix: 'Đậm đà tự nhiên',
      shelfLife: '18 tháng',
      packaging: 'Túi nhôm tiệt trùng 5kg x 2 / thùng carton',
      applications: 'Ngũ cốc Granola, socola bọc trái cây, snack trái cây sấy thượng hạng.',
    },
    {
      id: 'freeze-dried-jackfruit',
      category: 'dried',
      categoryName: 'Trái cây sấy',
      badgeColor: 'bg-lime-100 text-lime-800 border-lime-200',
      name: 'Mít Sấy Thăng Hoa (Freeze-Dried Jackfruit)',
      specs: 'Màu vàng nghệ óng ả | Hương thơm nguyên bản | Không dầu chiên, không đường',
      moisture: '≤ 4.0%',
      mesh: 'Múi nguyên / Nửa múi',
      brix: 'Tự nhiên',
      shelfLife: '18 tháng',
      packaging: 'Thùng carton 10kg chống ẩm công nghiệp',
      applications: 'Snack dinh dưỡng văn phòng, trà hoa quả sấy, nguyên liệu làm bánh cao cấp.',
    },
    {
      id: 'passion-fruit-puree',
      category: 'puree',
      categoryName: 'Nước cốt & Puree',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      name: 'Nước Cốt Chanh Dây Không Hạt (Passion Fruit Puree)',
      specs: 'Brix 14-16% | Công nghệ tiệt trùng Aseptic | 100% nguyên chất đậm đặc',
      moisture: 'Dạng lỏng sánh mịn',
      mesh: 'Lọc qua lưới 0.5mm',
      brix: '14 - 16° Brix',
      shelfLife: '24 tháng (ở -18°C) hoặc 12 tháng (Aseptic)',
      packaging: 'Phuy sắt vô trùng 200kg (Aseptic Steel Drum)',
      applications: 'Sản xuất nước giải khát, sữa chua uống, kem que, mứt sốt F&B.',
    },
  ];

  const filteredIngredients =
    activeCategory === 'all'
      ? ingredients
      : ingredients.filter((item) => item.category === activeCategory);

  const selectedProductData = ingredients.find((item) => item.id === selectedTds);

  return (
    <div className="flex flex-col gap-12 sm:gap-20 lg:gap-24">
      {/* SECTION 1: HERO BANNER (INSPIRED BY IMAGE 1) */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-850 to-primary-900 text-white pt-12 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 overflow-hidden rounded-b-3xl sm:rounded-b-4xl shadow-soft">
        {/* Subtle leaf and sunlit ambient glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary-leaf/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 bottom-0 w-80 h-80 bg-accent-gold/15 rounded-full blur-3xl pointer-events-none"></div>

        <Container>
          <div className="max-w-3xl space-y-5 sm:space-y-6 relative z-10">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-300/20 backdrop-blur-md border border-cream-200/30 text-cream-200 text-xs font-bold uppercase tracking-wider"
            >
              <span>🌿</span>
              <span>{dict.common.tagline}</span>
            </motion.div>

            {/* Giant Friendly Geometric Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-balance leading-[1.1] text-white"
            >
              From Vietnamese Farms To Global Markets
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-lg lg:text-xl text-cream-100/90 leading-relaxed max-w-2xl font-medium"
            >
              Agrihub cung cấp bột trái cây, trái cây sấy thăng hoa, nước cốt và nguyên liệu nông sản chế biến đạt chuẩn quốc tế cho các nhà máy F&B và nhà nhập khẩu toàn cầu.
            </motion.p>

            {/* CTA Buttons - Fresh Leaf Pill Style */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <Button href="#bao-gia" variant="primary" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
                <span>{dict.pages.home.primaryCta}</span>
                <span className="text-lg">&rarr;</span>
              </Button>
              <Button
                href="#nguyen-lieu"
                variant="pill"
                size="lg"
                className="w-full sm:w-auto bg-cream-200/90 hover:bg-cream-200 text-primary-850 font-extrabold"
              >
                Khám phá Danh mục Nguyên liệu &darr;
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: ABOUT AGRIHUB & PREMIUM INGREDIENTS (RECREATING IMAGE 2!) */}
      <section id="ve-agrihub" className="scroll-mt-24">
        <Container>
          <FadeIn direction="up">
            <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 lg:p-14 border border-cream-200/80 shadow-soft relative overflow-hidden">
              {/* Soft decorative botanical leaf watermark in top right */}
              <div className="absolute top-4 right-4 text-cream-300/40 select-none pointer-events-none text-6xl sm:text-8xl font-serif">
                🌿
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                {/* Left Column: Friendly Showcase & Visual representation */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                    className="relative w-56 h-56 sm:w-68 sm:h-68 rounded-full border-4 border-primary-leaf/20 bg-cream-100 flex flex-col items-center justify-center p-6 text-center shadow-inner"
                  >
                    <span className="text-4xl sm:text-5xl mb-2">🥭</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-leaf">
                      Vietnamese Tropical Fruits
                    </span>
                    <span className="text-primary-850 font-black text-base sm:text-lg mt-1">
                      100% Tự Nhiên
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1 max-w-[180px]">
                      Xoài cát, Thanh long đỏ, Chanh dây, Chuối, Mít...
                    </p>
                  </motion.div>

                  <div className="flex gap-2.5 sm:gap-3 text-center w-full max-w-xs justify-center">
                    <div className="bg-cream-100 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-cream-200 flex-1">
                      <span className="block text-primary-leaf font-black text-base sm:text-lg">100%</span>
                      <span className="text-[10px] sm:text-[11px] text-slate-600 font-bold">Chất lượng kiểm định</span>
                    </div>
                    <div className="bg-cream-100 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-cream-200 flex-1">
                      <span className="block text-primary-leaf font-black text-base sm:text-lg">100%</span>
                      <span className="text-[10px] sm:text-[11px] text-slate-600 font-bold">Truy xuất nguồn gốc</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Content matching Image 2 with Checklist */}
                <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3 bg-primary-leaf/10 text-primary-leaf text-xs font-bold uppercase tracking-wider">
                      <span>🌿</span>
                      <span>About Agrihub Vietnam</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-850 tracking-tight leading-tight">
                      Premium Fruit Ingredients From Vietnam to the World
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Agrihub chuyên cung ứng và xuất khẩu các dòng nguyên liệu nông sản chế biến cao cấp từ Việt Nam: bột trái cây hòa tan, trái cây sấy thăng hoa và nước cốt thanh trùng. Chúng tôi kết nối vùng trồng đạt chuẩn, năng lực sản xuất hiện đại và hệ thống logistics toàn cầu để phục vụ các nhà máy chế biến thực phẩm và đồ uống.
                  </p>

                  {/* Checklist with Green Checkmarks (cascading stagger) */}
                  <StaggerContainer className="space-y-2.5 sm:space-y-3 pt-1">
                    <StaggerItem>
                      <div className="flex items-start sm:items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-primary-leaf/15 text-primary-leaf flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                          ✓
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-primary-850">
                          Premium Fresh Fruits Supply (Nguồn cung trái cây tươi & nguyên liệu đạt chuẩn)
                        </span>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="flex items-start sm:items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-primary-leaf/15 text-primary-leaf flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                          ✓
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-primary-850">
                          IQF & Freeze-Dried Fruit Solutions (Giải pháp trái cây sấy thăng hoa & sấy lạnh)
                        </span>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="flex items-start sm:items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-primary-leaf/15 text-primary-leaf flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                          ✓
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-primary-850">
                          Fruit Puree & Concentrates (Nước cốt & Puree đậm đặc nguyên chất)
                        </span>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="flex items-start sm:items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-primary-leaf/15 text-primary-leaf flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                          ✓
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-primary-850">
                          Fruit Powder Manufacturing (Nhà máy chế biến & nghiền mịn bột trái cây)
                        </span>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="flex items-start sm:items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-primary-leaf/15 text-primary-leaf flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                          ✓
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-primary-850">
                          Global Export & Logistics (Xuất khẩu & Logistics chuẩn Incoterms 2020)
                        </span>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <Button href="#bao-gia" variant="primary" size="md">
                      <span>Xin báo giá & Nhận mẫu thử</span>
                      <span>&rarr;</span>
                    </Button>
                    <Button href={`/${currentLang}/about-us`} variant="pill" size="md">
                      Tìm hiểu lịch sử 10 năm Agrihub &rarr;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SECTION 3: 4 NHÓM KHÁCH HÀNG B2B TRỌNG TÂM */}
      <section>
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.audienceBadge}
              title={dict.pages.home.audienceTitle}
              subtitle={dict.pages.home.audienceSubtitle}
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Card 1: F&B Manufacturers */}
            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full bg-white p-6 rounded-2xl border border-cream-200/80 shadow-soft flex flex-col justify-between hover:border-primary-leaf transition-colors hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-cream-300 text-primary-850 flex items-center justify-center font-black text-xs">
                    F&B
                  </div>
                  <h3 className="text-base font-bold text-primary-850">Nhà máy sản xuất F&B</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nguyên liệu ổn định, độ mịn & độ ẩm đồng nhất, màu sắc và dinh dưỡng chuẩn hóa cho dây chuyền công nghiệp.
                  </p>
                </div>
                <div className="pt-6">
                  <Button href="#nguyen-lieu" variant="primary" size="sm" fullWidth>
                    <span>Xem Spec & Mẫu Lab</span>
                    <span>&rarr;</span>
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Card 2: International Importers */}
            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full bg-white p-6 rounded-2xl border border-cream-200/80 shadow-soft flex flex-col justify-between hover:border-primary-leaf transition-colors hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-cream-300 text-primary-850 flex items-center justify-center font-black text-xs">
                    EXP
                  </div>
                  <h3 className="text-base font-bold text-primary-850">Nhà Nhập Khẩu Quốc Tế</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nguồn hàng tin cậy, đầy đủ hồ sơ xuất khẩu (CO-CQ, Phyto), giàu kinh nghiệm giao thương Trung Đông, châu Phi, Nga, châu Á.
                  </p>
                </div>
                <div className="pt-6">
                  <Button href="#xuat-khau" variant="primary" size="sm" fullWidth>
                    <span>Hồ sơ xuất khẩu</span>
                    <span>&rarr;</span>
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Card 3: OEM / Private Label Brands */}
            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full bg-white p-6 rounded-2xl border border-cream-200/80 shadow-soft flex flex-col justify-between hover:border-primary-leaf transition-colors hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-cream-300 text-primary-850 flex items-center justify-center font-black text-xs">
                    OEM
                  </div>
                  <h3 className="text-base font-bold text-primary-850">Thương Hiệu Cần OEM</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gia công theo công thức độc quyền, tùy chỉnh thông số kỹ thuật (độ ẩm, độ mịn, brix) và đóng gói thành phẩm nhãn riêng.
                  </p>
                </div>
                <div className="pt-6">
                  <Button href="#oem-odm" variant="primary" size="sm" fullWidth>
                    <span>Quy trình OEM</span>
                    <span>&rarr;</span>
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Card 4: Domestic Distributors */}
            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full bg-white p-6 rounded-2xl border border-cream-200/80 shadow-soft flex flex-col justify-between hover:border-primary-leaf transition-colors hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-cream-300 text-primary-850 flex items-center justify-center font-black text-xs">
                    DIST
                  </div>
                  <h3 className="text-base font-bold text-primary-850">Đại Lý Phân Phối Nội Địa</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sản phẩm chất lượng cao, giá sỉ cạnh tranh từ nhà máy, nguồn hàng sẵn kho và chính sách bảo vệ đại lý.
                  </p>
                </div>
                <div className="pt-6">
                  <Button href={`/${currentLang}/distribution-partners`} variant="primary" size="sm" fullWidth>
                    <span>Chính sách Đại lý</span>
                    <span>&rarr;</span>
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* SECTION 4: GỘP - DANH MỤC NGUYÊN LIỆU CHỦ LỰC & TDS SPEC */}
      <section id="nguyen-lieu" className="scroll-mt-24">
        <Container>
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <SectionTitle
                badge={dict.pages.home.ingredientsBadge}
                title={dict.pages.home.ingredientsTitle}
                subtitle={dict.pages.home.ingredientsSubtitle}
                className="mb-0"
              />

              {/* Category Filter Tabs with dynamic sliding pill */}
              <div className="flex flex-wrap items-center bg-cream-300/80 p-1 rounded-full border border-cream-400/40 text-xs font-bold self-start md:self-auto shadow-2xs gap-1">
                {[
                  { id: 'all', label: 'Tất cả nguyên liệu' },
                  { id: 'powder', label: 'Bột trái cây' },
                  { id: 'dried', label: 'Trái cây sấy' },
                  { id: 'puree', label: 'Nước cốt & Puree' },
                ].map((tab) => {
                  const isActive = activeCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
                      className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors text-xs font-bold ${
                        isActive ? 'text-white' : 'text-primary-850 hover:text-primary-leaf'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeCategoryPill"
                          className="absolute inset-0 bg-primary-leaf rounded-full shadow-xs"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Ingredients Grid with layout animation */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIngredients.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white border border-cream-200/90 rounded-2xl p-6 shadow-soft flex flex-col justify-between hover:border-primary-leaf transition-colors hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.categoryName}
                    </span>
                    <span className="text-[11px] text-slate-400 font-bold">GRADE: F&B</span>
                  </div>

                  <h3 className="text-base font-bold text-primary-850 mb-2 leading-snug">
                    {item.name}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-cream-50 p-3.5 rounded-xl border border-cream-200/50">
                    <p>
                      <strong className="text-primary-850">Đặc tính:</strong> {item.specs}
                    </p>
                    <p>
                      <strong className="text-primary-850">Ứng dụng:</strong> {item.applications}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-cream-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTds(item.id)}
                    className="text-xs font-bold text-primary-leaf hover:text-primary-leafHover transition-colors flex items-center gap-1 min-h-[36px]"
                  >
                    <span>Xem bảng TDS</span> &rarr;
                  </button>
                  <Button href="#bao-gia" variant="pill" size="sm">
                    Xin mẫu test
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick TDS Viewer Modal/Drawer with AnimatePresence */}
          <AnimatePresence>
            {selectedProductData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedTds(null)}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cream-200"
                >
                  <div className="bg-primary-900 text-white px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between rounded-t-3xl sticky top-0 z-10">
                  <div>
                    <span className="text-xs text-accent-gold font-bold uppercase tracking-wider">
                      Technical Data Sheet (TDS)
                    </span>
                    <h3 className="text-base sm:text-lg font-bold mt-0.5">{selectedProductData.name}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTds(null)}
                    className="text-slate-300 hover:text-white p-2 text-2xl font-bold min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Close TDS Modal"
                  >
                    &times;
                  </button>
                </div>

                <div className="p-4 sm:p-6 space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="divide-y divide-cream-200 border border-cream-200 rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 bg-cream-50 gap-1 sm:gap-0">
                      <span className="font-bold text-primary-850">Độ ẩm (Moisture):</span>
                      <span className="sm:col-span-2">{selectedProductData.moisture}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 gap-1 sm:gap-0">
                      <span className="font-bold text-primary-850">Độ mịn (Mesh):</span>
                      <span className="sm:col-span-2">{selectedProductData.mesh}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 bg-cream-50 gap-1 sm:gap-0">
                      <span className="font-bold text-primary-850">Độ ngọt (Brix):</span>
                      <span className="sm:col-span-2">{selectedProductData.brix}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 gap-1 sm:gap-0">
                      <span className="font-bold text-primary-850">Hạn sử dụng:</span>
                      <span className="sm:col-span-2">{selectedProductData.shelfLife}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 bg-cream-50 gap-1 sm:gap-0">
                      <span className="font-bold text-primary-850">Quy cách đóng gói:</span>
                      <span className="sm:col-span-2">{selectedProductData.packaging}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-3.5 gap-1 sm:gap-0">
                      <span className="font-bold text-primary-850">Ứng dụng sản xuất:</span>
                      <span className="sm:col-span-2">{selectedProductData.applications}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 bg-cream-100 p-3.5 rounded-xl border border-cream-300">
                    [Lưu ý: Mọi thông số kỹ thuật có thể tùy chỉnh theo công thức và dây chuyền của khách hàng]
                  </div>

                  <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 pt-2">
                    <Button onClick={() => setSelectedTds(null)} variant="ghost" size="sm">
                      Đóng
                    </Button>
                    <Button
                      href="#bao-gia"
                      variant="primary"
                      size="sm"
                      onClick={() => setSelectedTds(null)}
                    >
                      <span>Yêu cầu Báo giá & Mẫu thử</span>
                      <span>&rarr;</span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </Container>
      </section>

      {/* SECTION 5: GỘP - GIA CÔNG OEM / ODM THEO TIÊU CHUẨN NHÀ MÁY */}
      <section id="oem-odm" className="bg-white py-12 sm:py-16 border-y border-cream-200/80 scroll-mt-24">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.oemBadge}
              title={dict.pages.home.oemTitle}
              subtitle={dict.pages.home.oemSubtitle}
            />
          </FadeIn>

          {/* 5-Step OEM Process Flow in soft rounded cards with stagger cascade */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-8">
            {[
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
            ].map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="h-full bg-cream-50 p-5 rounded-2xl border border-cream-200 shadow-2xs hover:border-primary-leaf hover:shadow-md transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-primary-leaf font-black text-2xl block mb-2">{s.step}</span>
                    <h3 className="font-bold text-sm text-primary-850 mb-1">{s.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-cream-100 p-6 rounded-3xl border border-cream-300 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="font-bold text-base text-primary-850">
                  Bạn có công thức riêng hoặc muốn tùy chỉnh quy cách nguyên liệu?
                </h3>
                <p className="text-xs text-slate-600">
                  Agrihub hỗ trợ từ giai đoạn mẫu thử nghiệm nhỏ đến sản xuất quy mô container.
                </p>
              </div>
              <Button href="#bao-gia" variant="primary" size="md" className="shrink-0">
                <span>Đặt lịch trao đổi R&D</span>
                <span>&rarr;</span>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SECTION 6: GỘP - NĂNG LỰC CUNG ỨNG & VÙNG TRỒNG */}
      <section id="nang-luc" className="scroll-mt-24">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.supplyBadge}
              title={dict.pages.home.supplyTitle}
              subtitle={dict.pages.home.supplySubtitle}
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <StaggerItem>
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-cream-200 text-center shadow-soft">
                <span className="text-2xl sm:text-3xl font-black text-primary-850 block">10+</span>
                <span className="text-xs text-slate-600 font-bold mt-1 block">Năm xuất khẩu</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-cream-200 text-center shadow-soft">
                <span className="text-2xl sm:text-3xl font-black text-primary-leaf block">[CẦN BỔ SUNG]</span>
                <span className="text-xs text-slate-600 font-bold mt-1 block">Diện tích nhà xưởng</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-cream-200 text-center shadow-soft">
                <span className="text-2xl sm:text-3xl font-black text-primary-850 block">[CẦN BỔ SUNG]</span>
                <span className="text-xs text-slate-600 font-bold mt-1 block">Sản lượng tấn/năm</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-cream-200 text-center shadow-soft">
                <span className="text-2xl sm:text-3xl font-black text-primary-leaf block">[CẦN BỔ SUNG]</span>
                <span className="text-xs text-slate-600 font-bold mt-1 block">Vùng trồng liên kết</span>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <FadeIn direction="up">
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft h-full"
              >
                <h3 className="text-base font-bold text-primary-850 mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-leaf"></span>
                  Vùng nguyên liệu nông sản Việt Nam
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Agrihub liên kết chặt chẽ với các vùng chuyên canh nông sản trù phú (ĐBSCL, Tây Nguyên, Bình Thuận...). Trái cây tươi được thu hoạch đúng vụ, kiểm soát chặt chẽ dư lượng thuốc BVTV từ nguồn đất và nguồn nước.
                </p>
                <div className="text-xs text-slate-500 bg-cream-50 p-3 rounded-xl border border-cream-200">
                  [CẦN BỔ SUNG: Bản đồ vùng trồng liên kết cụ thể & ảnh chụp mùa vụ]
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft h-full"
              >
                <h3 className="text-base font-bold text-primary-850 mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-gold"></span>
                  Công nghệ sấy & Cơ sở hạ tầng
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Hệ thống máy sấy thăng hoa (Freeze-drying), sấy nhiệt đối lưu và máy nghiền bột công nghiệp khép kín. Kho bảo quản kiểm soát độ ẩm và nhiệt độ nghiêm ngặt giúp bảo đảm chất lượng nguyên liệu quanh năm.
                </p>
                <div className="text-xs text-slate-500 bg-cream-50 p-3 rounded-xl border border-cream-200">
                  [CẦN BỔ SUNG: Ảnh chụp dây chuyền máy móc & hệ thống kho bảo quản]
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* SECTION 7: GỘP - TIÊU CHUẨN CHẤT LƯỢNG & CHỨNG NHẬN */}
      <section id="chat-luong" className="bg-white py-12 sm:py-16 border-y border-cream-200/80 scroll-mt-24">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.qualityBadge}
              title={dict.pages.home.qualityTitle}
              subtitle={dict.pages.home.qualitySubtitle}
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8">
            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full bg-cream-50 p-5 rounded-2xl border border-cream-200 shadow-2xs hover:border-primary-leaf hover:shadow-md transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-primary-leaf bg-white px-3 py-1 rounded-full border border-cream-300">
                      ISO 22000
                    </span>
                    <span className="text-[10px] text-primary-leaf font-bold">HỒ SƠ MẪU</span>
                  </div>
                  <h3 className="font-bold text-sm text-primary-850 mb-1">An toàn thực phẩm</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kiểm soát rủi ro an toàn thực phẩm xuyên suốt chuỗi chế biến và bảo quản.
                  </p>
                </div>
                <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-cream-200">
                  [CẦN BỔ SUNG: Số hiệu]
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full bg-cream-50 p-5 rounded-2xl border border-cream-200 shadow-2xs hover:border-primary-leaf hover:shadow-md transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-primary-leaf bg-white px-3 py-1 rounded-full border border-cream-300">
                      HACCP
                    </span>
                    <span className="text-[10px] text-primary-leaf font-bold">HỒ SƠ MẪU</span>
                  </div>
                  <h3 className="font-bold text-sm text-primary-850 mb-1">Kiểm soát điểm tới hạn</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ngăn ngừa các mối nguy vi sinh, hóa học và vật lý trên từng mẻ sản xuất.
                  </p>
                </div>
                <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-cream-200">
                  [CẦN BỔ SUNG: Số hiệu]
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full bg-cream-50 p-5 rounded-2xl border border-cream-200 shadow-2xs hover:border-primary-leaf hover:shadow-md transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-primary-leaf bg-white px-3 py-1 rounded-full border border-cream-300">
                      HALAL
                    </span>
                    <span className="text-[10px] text-primary-leaf font-bold">HỒ SƠ MẪU</span>
                  </div>
                  <h3 className="font-bold text-sm text-primary-850 mb-1">Chuẩn Hồi giáo</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Đáp ứng yêu cầu khắt khe xuất khẩu sang Trung Đông (UAE, Saudi) và ASEAN.
                  </p>
                </div>
                <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-cream-200">
                  [CẦN BỔ SUNG: Tổ chức cấp]
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full bg-cream-50 p-5 rounded-2xl border border-cream-200 shadow-2xs hover:border-primary-leaf hover:shadow-md transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-primary-leaf bg-white px-3 py-1 rounded-full border border-cream-300">
                      CO - CQ - PHYTO
                    </span>
                    <span className="text-[10px] text-primary-leaf font-bold">HỒ SƠ MẪU</span>
                  </div>
                  <h3 className="font-bold text-sm text-primary-850 mb-1">Chứng từ xuất xứ</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Chứng chỉ xuất xứ hàng hóa các Form và kiểm dịch thực vật thông quan nhanh chóng.
                  </p>
                </div>
                <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-cream-200">
                  [CẦN BỔ SUNG: Mẫu CO]
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-cream-50 p-5 sm:p-6 rounded-3xl border border-cream-200 text-xs text-slate-600">
              <h3 className="font-bold text-sm text-primary-850 mb-2">
                Cam kết cung cấp COA (Certificate of Analysis) đi kèm từng lô hàng:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-2">
                <p>• <strong>Vật lý & Hóa học:</strong> Độ ẩm, tro tổng số, brix, kim loại nặng (Pb, As, Cd).</p>
                <p>• <strong>Vi sinh vật:</strong> E.coli, Coliforms, Salmonella, Nấm men và nấm mốc.</p>
                <p>• <strong>Dư lượng:</strong> Đảm bảo không dư lượng hóa chất BVTV ngoài ngưỡng cho phép.</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SECTION 8: GỘP - THỊ TRƯỜNG QUỐC TẾ & SỰ KIỆN TRIỂN LÃM */}
      <section id="xuat-khau" className="scroll-mt-24">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              badge={dict.pages.home.globalBadge}
              title={dict.pages.home.globalTitle}
              subtitle={dict.pages.home.globalSubtitle}
            />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 my-8">
            {/* Export Markets */}
            <FadeIn direction="up">
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft h-full"
              >
                <h3 className="text-base font-bold text-primary-850 mb-4">
                  Thị trường xuất khẩu đã giao thương thành công
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 hover:border-primary-leaf/50 transition-colors">
                    <span className="font-bold text-primary-850 text-sm block">UAE</span>
                    <span className="text-slate-500">Các Tiểu Vương Quốc Ả Rập Thống Nhất</span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 hover:border-primary-leaf/50 transition-colors">
                    <span className="font-bold text-primary-850 text-sm block">Bulgaria</span>
                    <span className="text-slate-500">Cửa ngõ thị trường Đông Âu</span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 hover:border-primary-leaf/50 transition-colors">
                    <span className="font-bold text-primary-850 text-sm block">Trung Quốc</span>
                    <span className="text-slate-500">Thị trường nguyên liệu quy mô lớn</span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 hover:border-primary-leaf/50 transition-colors">
                    <span className="font-bold text-primary-850 text-sm block">Campuchia</span>
                    <span className="text-slate-500">Đối tác thương mại Đông Nam Á</span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            {/* Trade Shows */}
            <FadeIn direction="up" delay={0.15}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-cream-200 shadow-soft h-full"
              >
                <h3 className="text-base font-bold text-primary-850 mb-4">
                  Hội chợ & Triển lãm quốc tế đã tham gia
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 flex justify-between items-center gap-2 hover:border-primary-leaf/50 transition-colors">
                    <div>
                      <strong className="text-primary-850 block">Saudi Food Show</strong>
                      <span className="text-slate-500">Riyadh, Saudi Arabia</span>
                    </div>
                    <span className="text-primary-leaf font-bold bg-white px-3 py-1 rounded-full border border-cream-300 text-[11px] shrink-0">
                      Trung Đông
                    </span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 flex justify-between items-center gap-2 hover:border-primary-leaf/50 transition-colors">
                    <div>
                      <strong className="text-primary-850 block">WorldFood Moscow</strong>
                      <span className="text-slate-500">Moscow, Nga</span>
                    </div>
                    <span className="text-primary-leaf font-bold bg-white px-3 py-1 rounded-full border border-cream-300 text-[11px] shrink-0">
                      Đông Âu
                    </span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 flex justify-between items-center gap-2 hover:border-primary-leaf/50 transition-colors">
                    <div>
                      <strong className="text-primary-850 block">Vietnam Foodexpo</strong>
                      <span className="text-slate-500">TP. Hồ Chí Minh, Việt Nam</span>
                    </div>
                    <span className="text-primary-leaf font-bold bg-white px-3 py-1 rounded-full border border-cream-300 text-[11px] shrink-0">
                      Quốc tế
                    </span>
                  </div>
                  <div className="p-3.5 bg-cream-50 rounded-2xl border border-cream-200 flex justify-between items-center gap-2 hover:border-primary-leaf/50 transition-colors">
                    <div>
                      <strong className="text-primary-850 block">Food Africa 2025</strong>
                      <span className="text-slate-500">Cairo, Ai Cập</span>
                    </div>
                    <span className="text-primary-leaf font-bold bg-white px-3 py-1 rounded-full border border-cream-300 text-[11px] shrink-0">
                      Châu Phi
                    </span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* SECTION 9: FORM B2B TOÀN DIỆN NGAY TẠI CHÂN TRANG CHỦ */}
      <section id="bao-gia" className="bg-gradient-to-br from-primary-900 via-primary-850 to-primary-900 text-white py-12 sm:py-16 rounded-t-3xl sm:rounded-t-4xl border-t border-primary-700/40 scroll-mt-24 shadow-soft">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <div className="text-center mb-8 sm:mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent-gold bg-white/10 px-4 py-1.5 rounded-full border border-white/20 mb-3">
                  {dict.pages.home.contactBadge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  {dict.pages.home.contactTitle}
                </h2>
                <p className="mt-3 text-xs sm:text-base text-cream-200/80 max-w-2xl mx-auto leading-relaxed">
                  {dict.pages.home.contactSubtitle}
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <div className="bg-white text-primary-850 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl">
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-cream-100 border border-primary-leaf/30 p-6 sm:p-8 rounded-2xl text-center space-y-3"
                  >
                    <div className="text-primary-leaf text-2xl sm:text-3xl font-black">✓ Đã tiếp nhận yêu cầu</div>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Cảm ơn quý đối tác. Chuyên viên thương mại B2B của Agrihub sẽ liên hệ qua Email / WhatsApp trong vòng 24 giờ làm việc.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="pill" size="sm">
                      Gửi yêu cầu khác
                    </Button>
                  </motion.div>
                ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-primary-850 mb-1">
                        Họ và tên người liên hệ *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-primary-850 mb-1">
                        Tên công ty / Doanh nghiệp *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Công ty TNHH Thực phẩm..."
                        className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-primary-850 mb-1">
                        Email doanh nghiệp *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="purchasing@company.com"
                        className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-primary-850 mb-1">
                        Số điện thoại / WhatsApp / WeChat *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+84 90 123 4567"
                        className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-primary-850 mb-1">
                        Mục đích liên hệ chính *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                      >
                        <option value="quote">Báo giá nguyên liệu công nghiệp (Sản lượng lớn)</option>
                        <option value="sample">Đăng ký nhận mẫu thử phòng Lab (Free Sample Kit)</option>
                        <option value="oem">Gia công OEM / Đặt hàng theo công thức riêng</option>
                        <option value="export">Thương mại xuất khẩu quốc tế (Incoterms 2020)</option>
                        <option value="distributor">Đăng ký Đại lý / Phân phối sỉ nội địa</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-primary-850 mb-1">
                        Nhóm nguyên liệu quan tâm
                      </label>
                      <select
                        className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                      >
                        <option value="fruit-powder">Bột trái cây (Fruit Powders)</option>
                        <option value="dried-fruits">Trái cây sấy (Freeze-Dried Fruits)</option>
                        <option value="puree">Nước cốt & Puree (Fruit Concentrates)</option>
                        <option value="multiple">Nhiều nhóm nguyên liệu</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-primary-850 mb-1">
                      Chi tiết yêu cầu kỹ thuật, sản lượng dự kiến hoặc địa điểm giao hàng
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ví dụ: Cần 500kg bột thanh long đỏ mesh 100 giao cảng Cát Lái hoặc cần mẫu thử 200g bột chanh dây test phòng Lab..."
                      className="w-full px-4 py-3 text-base sm:text-sm bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-leaf focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="lg" fullWidth className="font-black tracking-wide text-sm sm:text-base min-h-[48px]">
                      <span>Gửi yêu cầu B2B &rarr; Cam kết phản hồi trong 24 giờ</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
