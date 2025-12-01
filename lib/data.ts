export type RegionKey = 'bac' | 'trung' | 'nam';

export type LibraryEntry = {
  region: RegionKey;
  title: string;
  desc: string;
  tags: string[];
};

export type RegionCard = {
  name: string;
  badge: string;
  badge2: string;
  highlights: string[];
};

export type Rank = { name: string; min: number };

export const libraryEntries: LibraryEntry[] = [
  { region: 'bac', title: 'Quan họ Bắc Ninh', desc: 'Làn điệu giao duyên, UNESCO công nhận, hát đối đáp trên thuyền.', tags: ['Dân ca', 'Lễ hội Lim'] },
  { region: 'bac', title: 'Ca trù', desc: 'Không gian ca trù với phách, đàn đáy và giọng hát ca nương.', tags: ['Di sản phi vật thể'] },
  { region: 'bac', title: 'Ẩm thực Hà Nội', desc: 'Phở, bún chả, bún thang, cốm làng Vòng và trà sen.', tags: ['Ẩm thực'] },
  { region: 'trung', title: 'Nhã nhạc cung đình Huế', desc: 'Âm nhạc lễ nghi triều Nguyễn, nhạc cụ nhã nhạc & múa cung đình.', tags: ['Âm nhạc cung đình'] },
  { region: 'trung', title: 'Mì Quảng & cao lầu', desc: 'Sợi mì vàng, đậu phộng rang, bánh tráng nướng và rau sống xứ Quảng.', tags: ['Ẩm thực'] },
  { region: 'trung', title: 'Bài chòi Trung Bộ', desc: 'Trò chơi dân gian hát hò với thẻ tre, gắn với Tết Nguyên Đán.', tags: ['Trò chơi', 'Di sản UNESCO'] },
  { region: 'nam', title: 'Đờn ca tài tử', desc: 'Ngũ cung phương Nam, vọng cổ, nhịp song lang, không gian đờn ca trên sông.', tags: ['Âm nhạc'] },
  { region: 'nam', title: 'Chợ nổi Mekong', desc: 'Văn hóa giao thương trên sông, ghe xuồng, tiếng rao hàng đầu sáng.', tags: ['Đời sống', 'Du lịch'] },
  { region: 'nam', title: 'Ẩm thực miệt vườn', desc: 'Lẩu mắm, bánh xèo, cá kho tộ, trái cây Cái Bè, Cần Thơ.', tags: ['Ẩm thực'] },
  { region: 'trung', title: 'Lễ hội cầu ngư', desc: 'Tín ngưỡng cư dân biển miền Trung, cầu mùa tôm cá bội thu.', tags: ['Lễ hội', 'Tín ngưỡng'] },
  { region: 'bac', title: 'Chèo đồng bằng', desc: 'Sân khấu dân gian kết hợp hài hước, trữ tình và múa.', tags: ['Sân khấu'] },
  { region: 'nam', title: 'Đua ghe ngo Nam Bộ', desc: 'Lễ hội Khmer với những chiếc ghe ngo dài, nhiều tay chèo.', tags: ['Lễ hội', 'Thể thao dân gian'] }
];

export const regions: RegionCard[] = [
  {
    name: 'Miền Bắc',
    badge: 'Khí hậu bốn mùa',
    badge2: 'Đậm đà ngàn năm',
    highlights: [
      'Ẩm thực tinh tế: bún chả, phở, cốm làng Vòng.',
      'Lễ hội: đền Hùng, chùa Hương, hội Lim quan họ.',
      'Âm nhạc: quan họ, ca trù, chèo cổ.',
      'Địa hình: núi đá vôi, trung du, đồng bằng sông Hồng.'
    ]
  },
  {
    name: 'Miền Trung',
    badge: 'Dải đất di sản',
    badge2: 'Gió Lào & sóng biển',
    highlights: [
      'Ẩm thực: bún bò Huế, mì Quảng, cao lầu Hội An.',
      'Di sản: phố cổ Hội An, thánh địa Mỹ Sơn, kinh thành Huế.',
      'Lễ hội: Festival Huế, đua ghe ngo, cầu ngư miền biển.',
      'Âm nhạc: hò khoan Lệ Thủy, bài chòi, nhã nhạc cung đình.'
    ]
  },
  {
    name: 'Miền Nam',
    badge: 'Sông nước',
    badge2: 'Phóng khoáng miệt vườn',
    highlights: [
      'Ẩm thực: hủ tiếu, bánh xèo, cá kho tộ, lẩu mắm.',
      'Không gian: chợ nổi Cái Răng, rừng tràm Trà Sư, miệt vườn.',
      'Âm nhạc: đờn ca tài tử, vọng cổ, cải lương.',
      'Giao lưu: múa lân, lễ hội Ok Om Bok, bà chúa Xứ núi Sam.'
    ]
  }
];

export const ranks: Rank[] = [
  { name: 'Tân binh', min: 0 },
  { name: 'Dân chơi làng', min: 2 },
  { name: 'Cao thủ đình', min: 4 },
  { name: 'Nghệ nhân', min: 7 },
  { name: 'Huyền thoại', min: 10 }
];
