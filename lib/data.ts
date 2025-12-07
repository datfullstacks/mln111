export type RegionKey = 'bac' | 'trung' | 'nam';

export type LibraryEntry = {
  region: RegionKey;
  title: string;
  desc: string;
  tags: string[];
};

export type RegionHighlight = {
  title: string;
  points: string[];
};

export type RegionCard = {
  key: RegionKey;
  name: string;
  image?: string;
  badge: string;
  badge2: string;
  badgeImage?: string;
  highlights: RegionHighlight[];
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
    key: 'bac',
    name: 'Miền Bắc',
    image: '/images/mienbacne.jpg',
    badge: 'Khí hậu bốn mùa',
    badge2: 'Đậm đà ngàn năm',
    badgeImage: '/images/mienbacne.jpg',
    highlights: [
      {
        title: 'Ẩm thực tinh tế',
        points: ['Bún chả', 'Phở', 'Cốm làng Vòng']
      },
      {
        title: 'Lễ hội tiêu biểu',
        points: ['Đền Hùng', 'Chùa Hương', 'Hội Lim quan họ']
      },
      {
        title: 'Âm nhạc truyền thống',
        points: ['Quan họ', 'Ca trù', 'Chèo cổ']
      },
      {
        title: 'Địa hình',
        points: ['Núi đá vôi', 'Trung du', 'Đồng bằng sông Hồng']
      },
      {
        title: 'Vì sao “trang trọng – lễ nghi – chỉn chu”?',
        points: [
          'Lịch sử định cư lâu đời với cộng đồng làng xã kết chặt tạo quan hệ dày đặc.',
          'Môi trường đông người đòi hỏi khuôn phép: xưng hô phân vai, cưới hỏi/giỗ chạp chuẩn bị nghi thức, giờ giấc chuẩn chỉnh.'
        ]
      },
      {
        title: 'Phong tục tiêu biểu',
        points: [
          'Xưng hô luôn kèm vai vế (cô, chú, bác, anh, chị) và “dạ/thưa”.',
          'Nghi lễ gia đình coi trọng trình tự, sính lễ, giờ lành, thể hiện sự chỉn chu.'
        ]
      }
    ]
  },
  {         
    key: 'trung',
    name: 'Miền Trung',
    badge: 'Dải đất di sản',
    badge2: 'Gió Lào & sóng biển',
    badgeImage: '/images/mientrungne.jpg',
    highlights: [
      {
        title: 'Ẩm thực',
        points: ['Bún bò Huế', 'Mì Quảng', 'Cao lầu Hội An']
      },
      {
        title: 'Di sản văn hóa',
        points: ['Phố cổ Hội An', 'Thánh địa Mỹ Sơn', 'Kinh thành Huế']
      },
      {
        title: 'Lễ hội & biển',
        points: ['Festival Huế', 'Đua ghe ngo', 'Lễ cầu ngư miền biển']
      },
      {
        title: 'Âm nhạc',
        points: ['Hò khoan Lệ Thủy', 'Bài chòi', 'Nhã nhạc cung đình']
      }
    ]
  },
  {
    key: 'nam',
    name: 'Miền Nam',
    badge: 'Sông nước',
    badge2: 'Phóng khoáng miệt vườn',
    badgeImage: '/images/miennamne.jpg',
    highlights: [
      {
        title: 'Ẩm thực sông nước',
        points: ['Hủ tiếu', 'Bánh xèo', 'Cá kho tộ', 'Lẩu mắm']
      },
      {
        title: 'Không gian trải nghiệm',
        points: ['Chợ nổi Cái Răng', 'Rừng tràm Trà Sư', 'Miệt vườn trái cây']
      },
      {
        title: 'Âm nhạc dân gian',
        points: ['Đờn ca tài tử', 'Vọng cổ', 'Cải lương']
      },
      {
        title: 'Giao lưu văn hóa',
        points: ['Múa lân', 'Lễ hội Ok Om Bok', 'Miếu Bà Chúa Xứ núi Sam']
      }
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
