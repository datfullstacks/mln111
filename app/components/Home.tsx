import {
  achievementAreas,
  antiDiscriminationActions,
  conceptCards,
  type InfoCard,
  marxLeninPrinciples,
  partyViewpoints,
  policyPillars,
  vietnamCharacteristics
} from '@/lib/data';
import { Hero } from './Hero';
import { NavBar } from './NavBar';
import { SlideDeckControls } from './SlideDeckControls';
import { TimelineCarousel } from './TimelineCarousel';
import { dongSonDrumMarkup } from './dongSonDrumMarkup';

type HomeSlide = {
  member: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: InfoCard[];
};

type VisualImage = {
  src: string;
  alt: string;
  label: string;
  credit?: string;
  license?: string;
  sourceUrl?: string;
};

type SlideVisual = {
  variant: 'image' | 'gallery' | 'timeline' | 'comparison' | 'statement' | 'policy';
  title: string;
  caption: string;
  image?: VisualImage;
  images?: VisualImage[];
  chips?: string[];
  activeNode?: number;
};

const visualImages = {
  unityMap: {
    src: '/images/modau.png',
    alt: 'Minh họa bản đồ Việt Nam với các yếu tố địa lý, văn hóa và xã hội',
    label: 'Một Việt Nam'
  },
  terraces: {
    src: '/images/mienbacne.jpg',
    alt: 'Ruộng bậc thang ở vùng núi phía Bắc',
    label: 'Vùng núi'
  },
  mountainValley: {
    src: '/images/dktn.jpg',
    alt: 'Thung lũng và ruộng bậc thang ở miền núi',
    label: 'Địa bàn chiến lược'
  },
  bridge: {
    src: '/images/mientrungne.jpg',
    alt: 'Cầu và hạ tầng trên địa hình miền núi',
    label: 'Hạ tầng'
  },
  city: {
    src: '/images/miennamne.jpg',
    alt: 'Đô thị phát triển bên sông',
    label: 'Phát triển'
  },
  ethnicPortraits: {
    src: '/images/dcmb2.png',
    alt: 'Một số cộng đồng dân tộc với trang phục và sinh hoạt văn hóa riêng',
    label: 'Bản sắc'
  },
  festival: {
    src: '/images/dcmb1.png',
    alt: 'Không gian lễ hội và sinh hoạt cộng đồng',
    label: 'Cộng đồng'
  },
  seaFestival: {
    src: '/images/dcmt1.png',
    alt: 'Lễ hội đông người với thuyền và sinh hoạt cộng đồng ven biển',
    label: 'Giao lưu'
  },
  populationMap: {
    src: '/images/dclagi.png',
    alt: 'Minh họa dân cư phân bố trên bản đồ thế giới',
    label: 'Cộng đồng người'
  },
  docTerraces: {
    src: '/images/mln131/image10.jpg',
    alt: 'Vùng ruộng bậc thang và điểm dân cư miền núi trong tài liệu nhóm',
    label: 'Vùng dân tộc'
  },
  docDance: {
    src: '/images/mln131/image11.jpg',
    alt: 'Hoạt động múa và sinh hoạt văn hóa của đồng bào dân tộc trong tài liệu nhóm',
    label: 'Văn hóa'
  },
  docLivelihood: {
    src: '/images/mln131/image12.png',
    alt: 'Sinh hoạt sản xuất và chế biến nông sản ở vùng dân tộc trong tài liệu nhóm',
    label: 'Sinh kế'
  },
  docCleanWater: {
    src: '/images/mln131/image13.png',
    alt: 'Người dân vùng dân tộc sử dụng công trình nước sạch trong tài liệu nhóm',
    label: 'Nước sạch'
  },
  docLivestock: {
    src: '/images/mln131/image14.jpg',
    alt: 'Hỗ trợ chăn nuôi và phát triển sinh kế trong tài liệu nhóm',
    label: 'Hỗ trợ sản xuất'
  },
  docHealth: {
    src: '/images/mln131/image15.jpg',
    alt: 'Nhân viên y tế khám sức khỏe cho người dân vùng dân tộc trong tài liệu nhóm',
    label: 'Y tế'
  },
  docPoliticalSlide: {
    src: '/images/mln131/image16.png',
    alt: 'Slide minh họa nội dung chính trị và bầu cử trong tài liệu nhóm',
    label: 'Chính trị'
  },
  docFruit: {
    src: '/images/mln131/image17.png',
    alt: 'Mô hình cây ăn quả và sản phẩm địa phương ở vùng dân tộc trong tài liệu nhóm',
    label: 'Kinh tế bản địa'
  },
  docRoad: {
    src: '/images/mln131/image18.jpg',
    alt: 'Người dân tham gia làm đường giao thông ở vùng khó khăn trong tài liệu nhóm',
    label: 'Giao thông'
  },
  docCleanWaterHome: {
    src: '/images/mln131/image20.png',
    alt: 'Công trình nước sạch phục vụ hộ gia đình vùng dân tộc trong tài liệu nhóm',
    label: 'An sinh'
  },
  docViewpointSlide: {
    src: '/images/mln131/image19.png',
    alt: 'Slide về quan điểm của Đảng và Nhà nước trong tài liệu nhóm',
    label: 'Quan điểm'
  },
  docTea: {
    src: '/images/mln131/image21.jpg',
    alt: 'Mô hình phát triển cây chè và sinh kế địa phương trong tài liệu nhóm',
    label: 'Sản xuất'
  },
  docEconomySlide: {
    src: '/images/mln131/image22.png',
    alt: 'Slide về chính sách kinh tế trong tài liệu nhóm',
    label: 'Kinh tế'
  },
  docElectionPoster: {
    src: '/images/mln131/image23.jpg',
    alt: 'Poster toàn dân bầu cử trong tài liệu nhóm',
    label: 'Quyền tham gia'
  },
  docClinic: {
    src: '/images/mln131/image24.jpg',
    alt: 'Trạm y tế xã vùng dân tộc trong tài liệu nhóm',
    label: 'Trạm y tế'
  },
  docPolicyOverview: {
    src: '/images/mln131/image25.png',
    alt: 'Slide tổng quan năm mặt chính sách dân tộc trong tài liệu nhóm',
    label: '5 mặt chính sách'
  },
  docCommunity: {
    src: '/images/mln131/image26.jpg',
    alt: 'Cộng đồng các dân tộc đoàn kết trong tài liệu nhóm',
    label: 'Đoàn kết'
  },
  docEconomyEvidence: {
    src: '/images/mln131/image27.png',
    alt: 'Slide minh họa nội dung kinh tế và số liệu trong tài liệu nhóm',
    label: 'Minh chứng kinh tế'
  },
  docSecurity: {
    src: '/images/mln131/image28.png',
    alt: 'Không gian trưng bày về quốc phòng và an ninh trong tài liệu nhóm',
    label: 'An ninh - quốc phòng'
  },
  docUnity: {
    src: '/images/mln131/image29.jpg',
    alt: 'Nhiều người trong trang phục dân tộc cùng tham gia hoạt động cộng đồng trong tài liệu nhóm',
    label: 'Đại đoàn kết'
  },
  docMeeting: {
    src: '/images/mln131/image30.jpg',
    alt: 'Cuộc họp cộng đồng vùng dân tộc trong tài liệu nhóm',
    label: 'Tham gia'
  },
  docRailWork: {
    src: '/images/mln131/image4.jpg',
    alt: 'Người dân cùng tham gia xây dựng hạ tầng trong tài liệu nhóm',
    label: 'Cùng làm'
  },
  docClassroom: {
    src: '/images/mln131/image5.gif',
    alt: 'Lớp học của học sinh vùng dân tộc trong tài liệu nhóm',
    label: 'Giáo dục'
  },
  docMuseum: {
    src: '/images/mln131/image6.jpg',
    alt: 'Không gian văn hóa và hiện vật truyền thống trong tài liệu nhóm',
    label: 'Bảo tồn'
  },
  docGirls: {
    src: '/images/mln131/image7.jpg',
    alt: 'Các cô gái trong trang phục truyền thống trong tài liệu nhóm',
    label: 'Trang phục'
  },
  docMedicalVisit: {
    src: '/images/mln131/image8.jpg',
    alt: 'Nhân viên y tế chăm sóc sức khỏe cho đồng bào trong tài liệu nhóm',
    label: 'Chăm sóc'
  },
  docSchoolRoad: {
    src: '/images/mln131/image9.jpg',
    alt: 'Học sinh vùng dân tộc đi học trên đường bản trong tài liệu nhóm',
    label: 'Đến trường'
  },
  docDecision1719: {
    src: '/images/mln131/image3.png',
    alt: 'Slide trích dẫn Quyết định 1719/QĐ-TTg trong tài liệu nhóm',
    label: 'Cơ sở pháp lý'
  },
  commonsMuCangChai: {
    src: '/images/mln131/external/muCangChai.jpg',
    alt: 'Đường và điểm dân cư ở Mù Cang Chải, Yên Bái',
    label: 'Mù Cang Chải',
    credit: 'Viethavvh',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mu_Cang_Chai.jpg'
  },
  commonsHmongDress: {
    src: '/images/mln131/external/hmongDress.jpg',
    alt: 'Trang phục truyền thống của người Hmong ở Việt Nam',
    label: 'Trang phục Hmong',
    credit: 'ManishNegi513',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_traditional_Vietnamese_dress.jpg'
  },
  commonsEthnicDistribution: {
    src: '/images/mln131/external/ethnicDistribution.jpg',
    alt: 'Bản đồ phân bố các nhóm dân tộc Việt Nam tại bảo tàng',
    label: 'Phân bố dân tộc',
    credit: 'Gary Todd',
    license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Distribution_of_Vietnam_Ethnic_Groups_(9981051103).jpg'
  },
  commonsDongSonDrum: {
    src: '/images/mln131/external/dongSonDrumPhoto.jpg',
    alt: 'Ảnh trống đồng Đông Sơn tại bảo tàng',
    label: 'Trống đồng Đông Sơn',
    credit: 'Gary Todd',
    license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dong_Son_Bronze_Drum_(9980530256).jpg'
  },
  commonsHmongBatik: {
    src: '/images/mln131/external/hmongBatik.jpg',
    alt: 'Vải batik của người Hmong Hoa tại Bảo tàng Dân tộc học Việt Nam',
    label: 'Hoa văn Hmong',
    credit: 'Daderot',
    license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Batik,_Hmong_(Hmong_Hoa)_-_Vietnam_Museum_of_Ethnology_-_Hanoi,_Vietnam_-_DSC03046.JPG'
  },
  commonsChamLion: {
    src: '/images/mln131/external/chamLion.png',
    alt: 'Tượng sư tử đá Chăm',
    label: 'Di sản Chăm',
    credit: 'Binh Giang',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cham_stone_lion_statue.png'
  },
  commonsBlackHmongWomen: {
    src: '/images/mln131/external/blackHmongWomen.jpg',
    alt: 'Phụ nữ Black Hmong ở Sa Pa',
    label: 'Cộng đồng Hmong',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Black_hmong_women_sapa_vietnam_1999.jpg'
  },
  commonsMaiChauRiceField: {
    src: '/images/mln131/external/maiChauRiceField.jpg',
    alt: 'Ruộng lúa Mai Châu',
    label: 'Mai Châu',
    credit: 'Shyamal',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mai_Chau_rice_field.jpg'
  },
  commonsIronFoundry: {
    src: '/images/mln131/external/ironFoundry1850.jpg',
    alt: 'Industrial iron foundry mural, circa 1850',
    label: 'Cong nghiep hoa',
    credit: 'Architect of the Capitol',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Flickr_-_USCapitol_-_Iron_Foundry,_circa_1850.jpg'
  },
  commonsDinhBangCommunalHouse: {
    src: '/images/mln131/external/dinhBangCommunalHouse.jpg',
    alt: 'Dinh Bang Communal House in Vietnam',
    label: 'Dinh lang',
    credit: '黃逸樂（世界首窮）',
    license: 'CC BY 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dinh_Bang_Communal_House_2009_-_panoramio.jpg'
  },
  commonsHmongHouse: {
    src: '/images/mln131/external/hmongHouse.jpg',
    alt: 'Bên trong một ngôi nhà Hmong ở Việt Nam',
    label: 'Không gian sống',
    credit: 'hudry',
    license: 'CC BY-SA 2.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Inside_a_H'Mong_house,_Vietnam.jpg"
  },
  commonsDanMoi: {
    src: '/images/mln131/external/danMoi.jpg',
    alt: 'Phụ nữ Hmong chơi đàn môi ở Việt Nam',
    label: 'Âm nhạc dân gian',
    credit: 'Peter Olshevsky',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hmong_woman_playing_Dan_Moi,_Vietnam.jpg'
  }
} satisfies Record<string, VisualImage>;

const daoFormationCards: InfoCard[] = [
  {
    eyebrow: 'Dòng phát triển',
    title: 'Thị tộc',
    body: 'Hình thức cộng đồng người sơ khai, gắn với quan hệ huyết thống và đời sống sản xuất còn đơn giản.',
    points: ['Quan hệ họ hàng là nền tảng', 'Cùng lao động và sinh hoạt', 'Quy mô cộng đồng còn nhỏ']
  },
  {
    eyebrow: 'Dòng phát triển',
    title: 'Bộ lạc',
    body: 'Nhiều thị tộc có liên hệ với nhau, cùng cư trú trên một địa bàn và hình thành nếp sinh hoạt chung.',
    points: ['Liên kết rộng hơn thị tộc', 'Có phong tục chung', 'Tăng nhu cầu phối hợp trong lao động']
  },
  {
    eyebrow: 'Dòng phát triển',
    title: 'Bộ tộc',
    body: 'Cộng đồng phát triển cao hơn, có sự liên kết xã hội rõ hơn và chuẩn bị tiền đề cho dân tộc.',
    points: ['Quan hệ xã hội ổn định hơn', 'Có giao lưu kinh tế - văn hóa', 'Ý thức cộng đồng mạnh hơn']
  },
  {
    eyebrow: 'Dòng phát triển',
    title: 'Dân tộc',
    body: 'Cộng đồng người ổn định, gắn với lãnh thổ, kinh tế, ngôn ngữ, văn hóa và ý thức cộng đồng.',
    points: ['Không xuất hiện ngẫu nhiên', 'Là kết quả của lịch sử lâu dài', 'Có nền tảng chính trị - xã hội rõ hơn']
  }
];

const daoEastWestCards: InfoCard[] = [
  {
    eyebrow: 'Phương Tây',
    title: 'Hình thành gắn với chủ nghĩa tư bản',
    body: 'Ở phương Tây, dân tộc thường xuất hiện khi phương thức sản xuất tư bản chủ nghĩa xác lập và thay thế quan hệ phong kiến.',
    points: ['Nhấn mạnh biến đổi kinh tế - xã hội', 'Gắn với thị trường và nhà nước hiện đại', 'Quan hệ phong kiến dần bị thay thế']
  },
  {
    eyebrow: 'Phương Đông',
    title: 'Hình thành trên nền văn hóa - tâm lý cộng đồng',
    body: 'Ở phương Đông, dân tộc thường hình thành trên cơ sở văn hóa, tâm lý dân tộc đã phát triển tương đối chín muồi.',
    points: ['Lịch sử cộng đồng lâu dài', 'Kinh tế có phát triển nhưng còn phân tán', 'Yếu tố văn hóa và tinh thần nổi bật']
  }
];

const daoNationFeatureCards: InfoCard[] = [
  {
    eyebrow: 'Nation',
    title: 'Chung sinh hoạt kinh tế',
    body: 'Các thành viên cùng tham gia đời sống sản xuất, trao đổi, phân công lao động và phát triển kinh tế chung.',
    points: ['Tạo lợi ích chung', 'Liên kết các vùng, nhóm xã hội', 'Là nền tảng vật chất của cộng đồng']
  },
  {
    eyebrow: 'Nation',
    title: 'Lãnh thổ ổn định',
    body: 'Dân tộc theo nghĩa quốc gia có không gian sinh tồn, phát triển và bảo vệ cộng đồng tương đối ổn định.',
    points: ['Không gian chung của quốc gia', 'Gắn với chủ quyền', 'Tạo điều kiện tổ chức đời sống xã hội']
  },
  {
    eyebrow: 'Nation',
    title: 'Nhà nước quản lý',
    body: 'Cộng đồng quốc gia dân tộc có thiết chế chính trị đại diện, tổ chức và quản lý đời sống chung.',
    points: ['Có quyền lực công', 'Có pháp luật', 'Bảo đảm trật tự và lợi ích chung']
  },
  {
    eyebrow: 'Nation',
    title: 'Ngôn ngữ chung',
    body: 'Ngôn ngữ chung là công cụ giao tiếp quan trọng, giúp cộng đồng trao đổi, học tập và tổ chức xã hội.',
    points: ['Tạo khả năng giao tiếp rộng', 'Hỗ trợ giáo dục và quản lý', 'Không phủ nhận ngôn ngữ riêng của tộc người']
  },
  {
    eyebrow: 'Nation',
    title: 'Văn hóa - tâm lý chung',
    body: 'Cộng đồng quốc gia có truyền thống, lối sống, tình cảm và bản sắc chung được hình thành trong lịch sử.',
    points: ['Tạo ý thức cùng thuộc về', 'Gắn với ký ức lịch sử', 'Bồi đắp tinh thần đoàn kết quốc gia']
  }
];

const daoNationSlides: HomeSlide[] = daoNationFeatureCards.map((card, index) => ({
  member: 'Đào',
  eyebrow: `Khái niệm 4.${index + 1}/6`,
  title: `Quốc gia dân tộc: ${card.title}`,
  subtitle: card.body,
  items: [card]
}));

const daoEthnicFeatureCards: InfoCard[] = [
  {
    eyebrow: 'Ethnic group',
    title: 'Ngôn ngữ riêng',
    body: 'Tộc người thường có tiếng nói, chữ viết hoặc cách giao tiếp riêng, thể hiện lịch sử và bản sắc cộng đồng.',
    points: ['Là dấu hiệu nhận diện quan trọng', 'Cần được tôn trọng', 'Góp phần làm giàu đời sống văn hóa']
  },
  {
    eyebrow: 'Ethnic group',
    title: 'Văn hóa riêng',
    body: 'Mỗi tộc người có phong tục, lễ hội, trang phục, tín ngưỡng, nghệ thuật và tri thức dân gian riêng.',
    points: ['Không có văn hóa cao - thấp', 'Khác biệt là giá trị', 'Bảo tồn gắn với phát triển']
  },
  {
    eyebrow: 'Ethnic group',
    title: 'Ý thức tự giác tộc người',
    body: 'Các thành viên tự nhận mình thuộc về cộng đồng tộc người đó và có ý thức giữ gìn bản sắc riêng.',
    points: ['Tạo sự gắn bó nội bộ', 'Nuôi dưỡng tự hào văn hóa', 'Cùng tham gia cộng đồng Việt Nam thống nhất']
  }
];

const daoComparisonCards: InfoCard[] = [
  {
    eyebrow: 'Phân biệt',
    title: 'Quốc gia dân tộc',
    body: 'Là cộng đồng chính trị - xã hội thống nhất, thường được hiểu bằng khái niệm nation.',
    points: ['Nhấn mạnh lãnh thổ, nhà nước, kinh tế', 'Có ngôn ngữ chung của quốc gia', 'Ví dụ: dân tộc Việt Nam theo nghĩa quốc gia']
  },
  {
    eyebrow: 'Phân biệt',
    title: 'Dân tộc - tộc người',
    body: 'Là cộng đồng người có bản sắc riêng, thường được hiểu bằng khái niệm ethnic group.',
    points: ['Nhấn mạnh ngôn ngữ, văn hóa, ý thức tộc người', 'Ví dụ: Kinh, Tày, Thái, Mường, Khmer, Mông, Chăm', 'Cùng thuộc đại gia đình Việt Nam']
  },
  {
    eyebrow: 'Liên hệ',
    title: 'Thống nhất trong đa dạng',
    body: 'Hiểu đúng hai nghĩa giúp thấy rõ Việt Nam vừa là một quốc gia thống nhất, vừa là mái nhà chung của nhiều tộc người.',
    points: ['Bình đẳng không phải xóa khác biệt', 'Đoàn kết dựa trên tôn trọng', 'Bản sắc riêng làm giàu văn hóa chung']
  }
];

const marxLeninTrendCards: InfoCard[] = [
  {
    eyebrow: 'Xu hướng 1',
    title: 'Tách ra để hình thành cộng đồng dân tộc độc lập',
    body: 'Khi ý thức dân tộc phát triển, các cộng đồng có nhu cầu khẳng định quyền tồn tại, quyền phát triển và bản sắc của mình.',
    points: ['Gắn với quyền dân tộc chính đáng', 'Phản ánh nhu cầu tự chủ', 'Cần đặt trong quan hệ lịch sử cụ thể']
  },
  {
    eyebrow: 'Xu hướng 2',
    title: 'Liên hiệp lại với nhau',
    body: 'Sự phát triển kinh tế, giao lưu văn hóa và lợi ích chung thúc đẩy các dân tộc hợp tác, liên kết, tương trợ.',
    points: ['Tăng giao lưu và phụ thuộc lẫn nhau', 'Cùng giải quyết vấn đề chung', 'Là cơ sở cho đoàn kết quốc gia']
  }
];

const vietnamMoreCharacteristics: InfoCard[] = [
  {
    eyebrow: 'Đặc điểm Việt Nam',
    title: 'Chênh lệch về số dân giữa các tộc người',
    body: 'Các dân tộc ở Việt Nam có quy mô dân số khác nhau, vì vậy chính sách cần quan tâm đến đặc điểm cụ thể của từng cộng đồng.',
    points: ['Không đồng nhất nhu cầu phát triển', 'Cần tiếng nói đại diện phù hợp', 'Bình đẳng đi cùng chính sách đặc thù']
  },
  {
    eyebrow: 'Đặc điểm Việt Nam',
    title: 'Phân bố ở địa bàn chiến lược',
    body: 'Nhiều vùng dân tộc thiểu số nằm ở miền núi, biên giới, nơi có ý nghĩa quan trọng về kinh tế, môi trường, quốc phòng và an ninh.',
    points: ['Gắn phát triển với bảo vệ biên giới', 'Cần đầu tư hạ tầng thiết yếu', 'Ổn định đời sống là nền tảng ổn định xã hội']
  },
  {
    eyebrow: 'Đặc điểm Việt Nam',
    title: 'Đa dạng bản sắc nhưng cùng một cộng đồng quốc gia',
    body: 'Mỗi dân tộc có bản sắc riêng, đồng thời cùng gắn bó trong cộng đồng Việt Nam thống nhất.',
    points: ['Giữ bản sắc riêng', 'Giao lưu văn hóa', 'Cùng xây dựng đất nước']
  }
];

const partyStrategyCards: InfoCard[] = [
  partyViewpoints[0],
  {
    eyebrow: 'Lâu dài',
    title: 'Không phải nhiệm vụ nhất thời',
    body: 'Công tác dân tộc gắn với phát triển bền vững, niềm tin của nhân dân và sự ổn định của đất nước.',
    points: ['Cần chính sách liên tục', 'Cần theo dõi đời sống thực tế', 'Cần phối hợp nhiều lĩnh vực']
  },
  {
    eyebrow: 'Cấp bách',
    title: 'Giải quyết khó khăn hiện nay',
    body: 'Chênh lệch phát triển, thiếu hạ tầng và nguy cơ bị lợi dụng để chia rẽ là các vấn đề cần xử lý kịp thời.',
    points: ['Ưu tiên vùng khó khăn', 'Không để định kiến lan rộng', 'Bảo vệ khối đại đoàn kết']
  }
];

const partyEqualityCards: InfoCard[] = [
  partyViewpoints[1],
  {
    eyebrow: 'Bình đẳng',
    title: 'Bình đẳng về quyền và cơ hội',
    body: 'Bình đẳng dân tộc không chỉ là quyền trên văn bản, mà còn là cơ hội học tập, sinh kế và tham gia đời sống xã hội.',
    points: ['Tôn trọng quyền của mọi dân tộc', 'Thu hẹp khoảng cách phát triển', 'Không phân biệt đối xử']
  },
  {
    eyebrow: 'Tương trợ',
    title: 'Giúp nhau cùng phát triển',
    body: 'Tương trợ là cách biến tinh thần đoàn kết thành hành động cụ thể trong chính sách, cộng đồng và môi trường học tập.',
    points: ['Hỗ trợ vùng khó khăn', 'Chia sẻ nguồn lực', 'Cùng nâng cao năng lực tự phát triển']
  }
];

const partyDevelopmentCards: InfoCard[] = [
  partyViewpoints[2],
  {
    eyebrow: 'Toàn diện',
    title: 'Không chỉ phát triển kinh tế',
    body: 'Phát triển vùng dân tộc và miền núi cần đồng thời chú ý chính trị, kinh tế, văn hóa, xã hội, môi trường và an ninh - quốc phòng.',
    points: ['Hạ tầng và sinh kế', 'Giáo dục và y tế', 'Văn hóa và an ninh cơ sở']
  },
  {
    eyebrow: 'Cơ sở',
    title: 'Phát huy vai trò cộng đồng',
    body: 'Chính sách hiệu quả khi người dân địa phương, già làng, trưởng bản, người có uy tín và chính quyền cơ sở cùng tham gia.',
    points: ['Lắng nghe nhu cầu thực tế', 'Tôn trọng tri thức bản địa', 'Tăng niềm tin chính sách']
  }
];

function policySlide(pillar: (typeof policyPillars)[number], index: number): HomeSlide {
  return {
    member: 'Thỏ',
    eyebrow: `Chính sách ${index + 1}/5`,
    title: pillar.title,
    subtitle: pillar.plain,
    items: [
      {
        eyebrow: 'Mục tiêu',
        title: 'Trọng tâm chính sách',
        body: pillar.summary,
        points: ['Bảo đảm bình đẳng thực chất', 'Gắn hỗ trợ với tự lực phát triển', 'Phù hợp từng địa bàn và cộng đồng'],
        sourceIds: pillar.sourceIds
      },
      {
        eyebrow: 'Ví dụ',
        title: 'Minh họa triển khai',
        body: 'Các ví dụ giúp phần chính sách dễ hiểu hơn khi trình bày trên slide.',
        points: pillar.examples,
        sourceIds: pillar.sourceIds
      }
    ]
  };
}

const achievementDetailCards: InfoCard[][] = [
  [
    achievementAreas[0],
    {
      eyebrow: 'Ý nghĩa',
      title: 'Hạ tầng mở đường cho kết nối',
      body: 'Khi đường, điện, nước, trường học, trạm y tế và viễn thông được cải thiện, người dân tiếp cận dịch vụ công và thị trường thuận lợi hơn.',
      points: ['Giảm cách biệt vùng sâu, vùng xa', 'Tạo điều kiện phát triển sinh kế', 'Tăng khả năng tiếp cận thông tin']
    }
  ],
  [
    achievementAreas[1],
    {
      eyebrow: 'Ý nghĩa',
      title: 'Đầu tư vào con người',
      body: 'Giáo dục, y tế và an sinh xã hội giúp đồng bào có điều kiện học tập, chăm sóc sức khỏe và nâng cao chất lượng cuộc sống.',
      points: ['Trường lớp và nội trú/bán trú', 'Y tế cơ sở gần dân hơn', 'Không để ai bị bỏ lại phía sau']
    }
  ],
  [
    achievementAreas[2],
    {
      eyebrow: 'Ý nghĩa',
      title: 'Trao cơ hội để tự lực',
      body: 'Giảm nghèo bền vững không chỉ là hỗ trợ trước mắt, mà là tạo điều kiện để người dân có kỹ năng, vốn, thị trường và mô hình sản xuất phù hợp.',
      points: ['Đào tạo nghề', 'Phát triển sản phẩm bản địa', 'Gắn sinh kế với lợi thế địa phương']
    }
  ],
  [
    achievementAreas[3],
    {
      eyebrow: 'Ý nghĩa',
      title: 'Bản sắc cũng là nguồn lực',
      body: 'Bảo tồn văn hóa, lễ hội, nghệ thuật dân gian, nghề thủ công và du lịch cộng đồng giúp giữ bản sắc đồng thời tạo sinh kế.',
      points: ['Tôn vinh nghệ nhân', 'Truyền dạy cho thế hệ trẻ', 'Giao lưu trong cộng đồng Việt Nam thống nhất']
    }
  ]
];

const actionCallCards: InfoCard[] = [
  antiDiscriminationActions[2],
  {
    eyebrow: 'Sinh viên',
    title: 'Tôn trọng khác biệt trong đời sống hằng ngày',
    body: 'Đoàn kết dân tộc bắt đầu từ cách lắng nghe, gọi đúng tên, không chế giễu văn hóa và sẵn sàng hỗ trợ bạn bè.',
    points: ['Không dùng ngôn từ miệt thị', 'Chủ động tìm hiểu văn hóa khác', 'Giúp đỡ trong học tập và đời sống']
  },
  {
    eyebrow: 'Thông điệp',
    title: '54 dân tộc - một đại gia đình Việt Nam',
    body: 'Tôn trọng khác biệt, đoàn kết, tương trợ và cùng phát triển là tinh thần xuyên suốt của toàn bộ sản phẩm.',
    points: ['Gìn giữ bản sắc', 'Lan tỏa câu chuyện tích cực', 'Cùng xây dựng Việt Nam thống nhất, giàu bản sắc']
  }
];

const homeSlides: HomeSlide[] = [
  {
    member: 'Đào',
    eyebrow: 'Khái niệm 1/6',
    title: 'Dân tộc: từ cộng đồng người đến đại gia đình Việt Nam',
    subtitle:
      'Mở đầu bằng cách hiểu nền tảng: dân tộc không chỉ là khái niệm lịch sử - xã hội, mà còn là cơ sở để nói về bình đẳng, đoàn kết và tương trợ.',
    items: conceptCards
  },
  {
    member: 'Đào',
    eyebrow: 'Khái niệm 2/6',
    title: 'Dân tộc hình thành như thế nào?',
    subtitle:
      'Dân tộc là kết quả của quá trình phát triển lâu dài: con người cùng sinh sống, lao động, giao tiếp, xây dựng văn hóa và tổ chức xã hội.',
    items: daoFormationCards
  },
  {
    member: 'Đào',
    eyebrow: 'Khái niệm 3/6',
    title: 'Sự hình thành dân tộc ở phương Tây và phương Đông',
    subtitle:
      'Hai khu vực có điều kiện hình thành dân tộc khác nhau, giúp người xem hiểu dân tộc luôn gắn với bối cảnh lịch sử cụ thể.',
    items: daoEastWestCards
  },
  ...daoNationSlides,
  {
    member: 'Đào',
    eyebrow: 'Khái niệm 5/6',
    title: 'Dân tộc theo nghĩa tộc người',
    subtitle:
      'Theo nghĩa ethnic group, dân tộc là cộng đồng người có bản sắc ngôn ngữ, văn hóa và ý thức tự giác tộc người riêng.',
    items: daoEthnicFeatureCards
  },
  {
    member: 'Đào',
    eyebrow: 'Khái niệm 6/6',
    title: 'Phân biệt nhanh và liên hệ Việt Nam',
    subtitle:
      'Hiểu đúng hai nghĩa của dân tộc giúp khẳng định Việt Nam là một quốc gia thống nhất, đồng thời là mái nhà chung của 54 dân tộc.',
    items: daoComparisonCards
  },
  {
    member: 'Linh',
    eyebrow: 'Mác - Lênin 1/4',
    title: 'Hai xu hướng khách quan của quan hệ dân tộc',
    subtitle:
      'Chủ nghĩa Mác - Lênin chỉ ra quan hệ dân tộc vừa có xu hướng khẳng định cộng đồng độc lập, vừa có xu hướng liên hiệp, hợp tác.',
    items: marxLeninTrendCards
  },
  {
    member: 'Linh',
    eyebrow: 'Mác - Lênin 2/4',
    title: 'Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin',
    subtitle:
      'Ba nội dung cốt lõi: các dân tộc hoàn toàn bình đẳng, các dân tộc được quyền tự quyết, liên hiệp công nhân tất cả các dân tộc.',
    items: marxLeninPrinciples
  },
  {
    member: 'Linh',
    eyebrow: 'Việt Nam 3/4',
    title: 'Đặc điểm dân tộc Việt Nam: cư trú, địa bàn, dân số',
    subtitle:
      'Thực tiễn Việt Nam cho thấy các dân tộc cư trú xen kẽ, quy mô dân số khác nhau và nhiều địa bàn có ý nghĩa chiến lược.',
    items: [vietnamMoreCharacteristics[0], vietnamCharacteristics[0], vietnamMoreCharacteristics[1]]
  },
  {
    member: 'Linh',
    eyebrow: 'Việt Nam 4/4',
    title: 'Đặc điểm dân tộc Việt Nam: phát triển, đoàn kết, bản sắc',
    subtitle:
      'Các dân tộc Việt Nam có trình độ phát triển còn không đồng đều, nhưng có truyền thống đoàn kết lâu đời và bản sắc văn hóa phong phú.',
    items: [vietnamCharacteristics[1], vietnamCharacteristics[2], vietnamMoreCharacteristics[2]]
  },
  {
    member: 'Hiển',
    eyebrow: 'Quan điểm 1/3',
    title: 'Vấn đề dân tộc là chiến lược cơ bản, lâu dài và cấp bách',
    subtitle:
      'Quan điểm này đặt công tác dân tộc trong nhiệm vụ phát triển đất nước, ổn định xã hội và củng cố niềm tin của nhân dân.',
    items: partyStrategyCards
  },
  {
    member: 'Hiển',
    eyebrow: 'Quan điểm 2/3',
    title: 'Bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển',
    subtitle:
      'Trọng tâm của quan điểm dân tộc là bảo đảm quyền, tôn trọng bản sắc và tạo điều kiện để các dân tộc cùng vươn lên.',
    items: partyEqualityCards
  },
  {
    member: 'Hiển',
    eyebrow: 'Quan điểm 3/3',
    title: 'Phát triển toàn diện vùng dân tộc và miền núi',
    subtitle:
      'Phát triển không chỉ là tăng trưởng kinh tế, mà còn là nâng cao đời sống chính trị, văn hóa, xã hội và bảo đảm an ninh - quốc phòng.',
    items: partyDevelopmentCards
  },
  ...policyPillars.map(policySlide),
  {
    member: 'Tiên',
    eyebrow: 'Thành tựu 1/4',
    title: 'Hạ tầng làm thay đổi diện mạo vùng khó khăn',
    subtitle:
      'Đường giao thông, điện, nước, trường học, trạm y tế và viễn thông được đầu tư giúp vùng dân tộc thiểu số kết nối tốt hơn.',
    items: achievementDetailCards[0]
  },
  {
    member: 'Tiên',
    eyebrow: 'Thành tựu 2/4',
    title: 'Giáo dục, y tế và an sinh xã hội được mở rộng',
    subtitle:
      'Các chính sách xã hội giúp người dân vùng sâu, vùng xa tiếp cận quyền học tập, chăm sóc sức khỏe và dịch vụ thiết yếu.',
    items: achievementDetailCards[1]
  },
  {
    member: 'Tiên',
    eyebrow: 'Thành tựu 3/4',
    title: 'Sinh kế và giảm nghèo gắn với tự lực phát triển',
    subtitle:
      'Các mô hình sản xuất, vay vốn, đào tạo nghề và phát triển sản phẩm địa phương giúp đồng bào chủ động vươn lên.',
    items: achievementDetailCards[2]
  },
  {
    member: 'Tiên',
    eyebrow: 'Thành tựu 4/4',
    title: 'Bảo tồn bản sắc văn hóa gắn với phát triển',
    subtitle:
      'Bản sắc văn hóa các dân tộc không chỉ cần được gìn giữ, mà còn có thể trở thành nguồn lực cho sinh kế và giao lưu cộng đồng.',
    items: achievementDetailCards[3]
  },
  {
    member: 'Tiên',
    eyebrow: 'Hành động 1/2',
    title: 'Phê phán kỳ thị, định kiến và chia rẽ dân tộc',
    subtitle:
      'Kỳ thị, chế giễu văn hóa, lan truyền thông tin sai lệch làm tổn thương cộng đồng và đi ngược tinh thần đại đoàn kết dân tộc.',
    items: [antiDiscriminationActions[0], antiDiscriminationActions[1]]
  },
  {
    member: 'Tiên',
    eyebrow: 'Hành động 2/2',
    title: 'Kêu gọi đoàn kết, tương trợ từ hành động nhỏ',
    subtitle:
      'Tinh thần đoàn kết không dừng ở khẩu hiệu; nó bắt đầu từ lời nói tôn trọng, thái độ lắng nghe và sự giúp đỡ chân thành.',
    items: actionCallCards
  }
];

const slideControlItems = homeSlides.map(slide => ({
  member: slide.member,
  eyebrow: slide.eyebrow,
  title: slide.title
}));

const slideVisuals: SlideVisual[] = [
  {
    variant: 'gallery',
    title: 'Mở bài bằng hình ảnh cộng đồng',
    caption: 'Từ một cộng đồng quốc gia thống nhất đến mái nhà chung của nhiều tộc người.',
    chips: ['54 dân tộc', 'Một Việt Nam', 'Đoàn kết']
  },
  {
    variant: 'timeline',
    title: 'Dòng phát triển cộng đồng người',
    caption: 'Các hình thức cộng đồng phát triển từ thấp đến cao trong lịch sử xã hội.',
    chips: ['Thị tộc', 'Bộ lạc', 'Bộ tộc', 'Dân tộc']
  },
  {
    variant: 'comparison',
    title: 'Hai bối cảnh hình thành',
    caption: 'So sánh ngắn giữa nền tảng kinh tế - xã hội và nền tảng văn hóa - tâm lý cộng đồng.',
    chips: ['Phương Tây', 'Phương Đông']
  },
  ...daoNationFeatureCards.map(
    (card, index): SlideVisual => ({
      variant: 'statement',
      title: 'Nation',
      caption: card.title,
      chips: [card.title],
      activeNode: index
    })
  ),
  {
    variant: 'gallery',
    title: 'Ethnic group',
    caption: 'Tộc người được nhận diện qua ngôn ngữ, văn hóa và ý thức tự giác cộng đồng.',
    chips: ['Ngôn ngữ', 'Văn hóa', 'Ý thức tộc người']
  },
  {
    variant: 'comparison',
    title: 'Thống nhất trong đa dạng',
    caption: 'Hai lớp nghĩa của dân tộc được đặt cạnh nhau: một quốc gia thống nhất và nhiều tộc người giàu bản sắc.',
    chips: ['Quốc gia thống nhất', 'Tộc người đa dạng']
  },
  {
    variant: 'comparison',
    title: 'Hai xu hướng quan hệ dân tộc',
    caption: 'Khẳng định bản sắc riêng và liên hiệp, hợp tác cùng phát triển.',
    chips: ['Tự chủ', 'Liên hiệp']
  },
  {
    variant: 'statement',
    title: 'Bình đẳng - Tự quyết - Liên hiệp',
    caption: 'Ba nội dung cốt lõi của cương lĩnh dân tộc trong chủ nghĩa Mác - Lênin.',
    chips: ['Bình đẳng', 'Tự quyết', 'Liên hiệp']
  },
  {
    variant: 'image',
    title: 'Cư trú xen kẽ, địa bàn chiến lược',
    caption: 'Vùng dân tộc và miền núi gắn với phát triển kinh tế, môi trường, quốc phòng và an ninh.',
    chips: ['Dân số', 'Cư trú', 'Biên giới']
  },
  {
    variant: 'gallery',
    title: 'Đoàn kết lâu đời, bản sắc phong phú',
    caption: 'Sự đa dạng văn hóa đi cùng truyền thống gắn bó trong cộng đồng quốc gia.',
    chips: ['Phát triển', 'Đoàn kết', 'Bản sắc']
  },
  {
    variant: 'statement',
    title: 'Chiến lược cơ bản, lâu dài',
    caption: 'Công tác dân tộc gắn với ổn định xã hội, niềm tin nhân dân và phát triển bền vững.',
    chips: ['Lâu dài', 'Cấp bách', 'Niềm tin']
  },
  {
    variant: 'gallery',
    title: 'Bình đẳng và tương trợ',
    caption: 'Tinh thần đoàn kết cần đi vào quyền, cơ hội và hành động hỗ trợ cụ thể.',
    chips: ['Quyền', 'Cơ hội', 'Tương trợ']
  },
  {
    variant: 'image',
    title: 'Phát triển toàn diện',
    caption: 'Kinh tế, văn hóa, xã hội, môi trường và an ninh phải được đặt trong một chỉnh thể.',
    chips: ['Kinh tế', 'Văn hóa', 'Xã hội', 'An ninh']
  },
  {
    variant: 'policy',
    title: 'Chính trị',
    caption: 'Bảo đảm tiếng nói, quyền tham gia và vai trò của cộng đồng ở cơ sở.',
    chips: ['Quyền làm chủ', 'Đại diện', 'Cơ sở']
  },
  {
    variant: 'gallery',
    title: 'Kinh tế',
    caption: 'Tạo sinh kế bền vững bằng hạ tầng, vốn, kỹ năng và sản phẩm địa phương.',
    chips: ['Sinh kế', 'Chuỗi giá trị', 'Giảm nghèo']
  },
  {
    variant: 'gallery',
    title: 'Văn hóa',
    caption: 'Giữ bản sắc, tôn vinh nghệ nhân và làm giàu văn hóa Việt Nam thống nhất.',
    chips: ['Lễ hội', 'Trang phục', 'Truyền dạy']
  },
  {
    variant: 'gallery',
    title: 'Xã hội',
    caption: 'Giáo dục, y tế, nước sạch và an sinh là điều kiện để bình đẳng trở nên thực chất.',
    chips: ['Giáo dục', 'Y tế', 'An sinh']
  },
  {
    variant: 'image',
    title: 'An ninh - quốc phòng',
    caption: 'Dân yên, biên giới vững và hệ thống chính trị cơ sở mạnh là nền tảng ổn định lâu dài.',
    chips: ['Ổn định', 'Biên giới', 'Cơ sở']
  },
  {
    variant: 'gallery',
    title: 'Hạ tầng kết nối',
    caption: 'Đường giao thông và công trình thiết yếu mở lối tiếp cận dịch vụ công, thị trường và thông tin.',
    chips: ['Đường', 'Điện', 'Viễn thông']
  },
  {
    variant: 'gallery',
    title: 'Giáo dục - y tế',
    caption: 'Đầu tư vào con người là trọng tâm của phát triển vùng dân tộc thiểu số và miền núi.',
    chips: ['Đến trường', 'Trạm y tế', 'Chăm sóc']
  },
  {
    variant: 'gallery',
    title: 'Sinh kế và giảm nghèo',
    caption: 'Mô hình sản xuất phù hợp giúp người dân chủ động nâng cao thu nhập.',
    chips: ['Sản xuất', 'Nông sản', 'Tự lực']
  },
  {
    variant: 'gallery',
    title: 'Bản sắc là nguồn lực',
    caption: 'Văn hóa dân tộc có thể gắn với du lịch cộng đồng, truyền dạy và sinh kế.',
    chips: ['Nghệ nhân', 'Lễ hội', 'Du lịch cộng đồng']
  },
  {
    variant: 'statement',
    title: 'Không kỳ thị, không chia rẽ',
    caption: 'Tôn trọng khác biệt là điều kiện tối thiểu để giữ vững khối đại đoàn kết toàn dân tộc.',
    chips: ['Không miệt thị', 'Không kích động', 'Kiểm chứng']
  },
  {
    variant: 'gallery',
    title: 'Bắt đầu từ hành động nhỏ',
    caption: 'Một lời nói tôn trọng, một thái độ lắng nghe và một sự giúp đỡ chân thành đều có giá trị.',
    chips: ['Tôn trọng', 'Lắng nghe', 'Tương trợ']
  }
];

const slideImageGroups: VisualImage[][] = [
  [visualImages.commonsEthnicDistribution, visualImages.docCommunity],
  [visualImages.commonsDongSonDrum, visualImages.commonsMaiChauRiceField, visualImages.commonsEthnicDistribution, visualImages.docCommunity],
  [visualImages.commonsIronFoundry, visualImages.commonsDinhBangCommunalHouse],
  ...daoNationFeatureCards.map(() => [visualImages.unityMap]),
  [visualImages.commonsHmongDress, visualImages.commonsHmongBatik, visualImages.ethnicPortraits],
  [visualImages.docUnity, visualImages.docGirls],
  [visualImages.commonsBlackHmongWomen, visualImages.bridge],
  [visualImages.docPoliticalSlide],
  [visualImages.docDecision1719, visualImages.docTerraces],
  [visualImages.docViewpointSlide, visualImages.docMeeting],
  [visualImages.docEconomyEvidence],
  [visualImages.docEconomySlide],
  [visualImages.docPolicyOverview],
  [visualImages.docElectionPoster],
  [visualImages.docTea, visualImages.docFruit, visualImages.docLivestock],
  [visualImages.docDance, visualImages.docMuseum, visualImages.commonsChamLion],
  [visualImages.docClassroom, visualImages.docHealth, visualImages.docCleanWater],
  [visualImages.docSecurity],
  [visualImages.commonsMuCangChai, visualImages.docRoad, visualImages.docRailWork],
  [visualImages.docClinic, visualImages.docMedicalVisit],
  [visualImages.docLivelihood, visualImages.docCleanWaterHome, visualImages.mountainValley],
  [visualImages.commonsDanMoi, visualImages.seaFestival],
  [visualImages.terraces, visualImages.festival],
  [visualImages.docSchoolRoad, visualImages.populationMap]
];

const visibleSlideVisuals: SlideVisual[] = slideVisuals.map((visual, index) => {
  const images = slideImageGroups[index] ?? [];
  const canShowMany = visual.variant !== 'timeline' && visual.variant !== 'policy';
  const variant = images.length > 1 && canShowMany ? (visual.variant === 'comparison' ? 'comparison' : 'gallery') : visual.variant;
  const shouldKeepImageSet = images.length > 1 && (canShowMany || visual.variant === 'timeline');

  return {
    variant,
    title: visual.title,
    caption: visual.caption,
    image: images[0],
    images: shouldKeepImageSet ? images : undefined,
    chips: visual.chips,
    activeNode: visual.activeNode
  };
});

function SlideVisualPanel({ visual }: { visual: SlideVisual }) {
  const images = visual.images ?? (visual.image ? [visual.image] : []);

  if (visual.variant === 'timeline') {
    return (
      <aside className="slide-visual timeline" data-timeline-active="0">
        {images.length ? (
          <div className="timeline-backdrop-stack" aria-hidden="true">
            {images.map((image, index) => (
              <img
                key={image.src}
                className="visual-backdrop timeline-backdrop"
                src={image.src}
                alt=""
                data-timeline-image={index}
              />
            ))}
          </div>
        ) : null}
        <div className="visual-overlay" />
        <VisualCredits images={images} />
        <div className="visual-copy">
          <strong>{visual.title}</strong>
          <p>{visual.caption}</p>
        </div>
        <TimelineCarousel items={visual.chips ?? []} />
      </aside>
    );
  }

  if (visual.variant === 'comparison') {
    const isEastWestComparison = visual.title === 'Hai bối cảnh hình thành';
    const comparisonKeywords = isEastWestComparison
      ? [
          ['Tư bản chủ nghĩa', 'Thị trường', 'Nhà nước hiện đại'],
          ['Văn hóa cộng đồng', 'Tâm lý dân tộc', 'Lịch sử lâu dài']
        ]
      : [];

    return (
      <aside className={`slide-visual comparison ${isEastWestComparison ? 'east-west-comparison' : ''}`}>
        <div className="visual-comparison-grid">
          {images.slice(0, 2).map((image, index) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{visual.chips?.[index] ?? image.label}</figcaption>
              {comparisonKeywords[index]?.length ? (
                <div className="comparison-keywords">
                  {comparisonKeywords[index].map(keyword => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
              ) : null}
            </figure>
          ))}
        </div>
        {isEastWestComparison ? (
          <div className="comparison-insight">
            <strong>Hai con đường hình thành</strong>
            <span>Khác điều kiện lịch sử nên dân tộc phát triển theo những nhịp khác nhau.</span>
          </div>
        ) : (
          <div className="visual-copy compact">
            <strong>{visual.title}</strong>
            <p>{visual.caption}</p>
          </div>
        )}
        <VisualCredits images={images} />
      </aside>
    );
  }

  if (visual.variant === 'gallery') {
    return (
      <aside className="slide-visual gallery">
        <div className={`visual-gallery-grid count-${Math.min(images.length, 3)}`}>
          {images.slice(0, 3).map(image => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="visual-copy compact">
          <strong>{visual.title}</strong>
          <p>{visual.caption}</p>
        </div>
        <VisualChips chips={visual.chips} />
        <VisualCredits images={images} />
      </aside>
    );
  }

  if (visual.variant === 'policy') {
    return (
      <aside className="slide-visual policy">
        {visual.image ? <img className="visual-backdrop" src={visual.image.src} alt={visual.image.alt} /> : null}
        <div className="visual-overlay" />
        <VisualCredits images={images} />
        <div className="visual-copy">
          <strong>{visual.title}</strong>
          <p>{visual.caption}</p>
        </div>
        <div className="visual-policy-rail">
          {visual.chips?.map(chip => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </aside>
    );
  }

  if (visual.variant === 'statement') {
    const isNationStatement = visual.title === 'Nation';

    return (
      <aside className={`slide-visual statement ${isNationStatement ? 'nation-structure-visual' : ''}`}>
        {visual.image ? <img className="visual-backdrop" src={visual.image.src} alt={visual.image.alt} /> : null}
        <div className="visual-overlay" />
        <VisualCredits images={images} />
        {isNationStatement ? (
          <div className="nation-structure">
            <div className="nation-core">
              <span>Nation</span>
              <strong>Quốc gia dân tộc</strong>
              <small>Cộng đồng chính trị - xã hội thống nhất</small>
            </div>
            <div className={`nation-node node-economy ${visual.activeNode === 0 ? 'active' : ''}`}>
              <span>01</span>
              <strong>Kinh tế</strong>
            </div>
            <div className={`nation-node node-territory ${visual.activeNode === 1 ? 'active' : ''}`}>
              <span>02</span>
              <strong>Lãnh thổ</strong>
            </div>
            <div className={`nation-node node-state ${visual.activeNode === 2 ? 'active' : ''}`}>
              <span>03</span>
              <strong>Nhà nước</strong>
            </div>
            <div className={`nation-node node-language ${visual.activeNode === 3 ? 'active' : ''}`}>
              <span>04</span>
              <strong>Ngôn ngữ</strong>
            </div>
            <div className={`nation-node node-culture ${visual.activeNode === 4 ? 'active' : ''}`}>
              <span>05</span>
              <strong>Văn hóa - tâm lý</strong>
            </div>
          </div>
        ) : (
          <>
            <div className="visual-copy statement-copy">
              <strong>{visual.title}</strong>
              <p>{visual.caption}</p>
            </div>
            <VisualChips chips={visual.chips} />
          </>
        )}
      </aside>
    );
  }

  return (
    <aside className="slide-visual image">
      {visual.image ? (
        <figure>
          <img src={visual.image.src} alt={visual.image.alt} />
          <figcaption>{visual.image.label}</figcaption>
        </figure>
      ) : null}
      <VisualCredits images={images} />
      <div className="visual-copy compact">
        <strong>{visual.title}</strong>
        <p>{visual.caption}</p>
      </div>
      <VisualChips chips={visual.chips} />
    </aside>
  );
}

function VisualChips({ chips }: { chips?: string[] }) {
  if (!chips?.length) {
    return null;
  }

  return (
    <div className="visual-chips">
      {chips.map(chip => (
        <span key={chip}>{chip}</span>
      ))}
    </div>
  );
}

function VisualCredits({ images }: { images: VisualImage[] }) {
  const creditedImages = images.filter(image => image.sourceUrl);

  if (!creditedImages.length) {
    return null;
  }

  return (
    <div className="visual-credit" aria-label="Nguồn ảnh">
      <span>Nguồn</span>
      {creditedImages.map((image, index) => {
        const credit = [image.credit, image.license].filter(Boolean).join(' / ');

        return (
          <a key={image.src} href={image.sourceUrl} target="_blank" rel="noreferrer" title={credit || image.label}>
            {index + 1}
          </a>
        );
      })}
    </div>
  );
}

function SlideCards({ items }: { items: InfoCard[] }) {
  const countClass = `count-${Math.min(items.length, 5)}`;

  return (
    <div className={`slide-card-grid ${countClass}`}>
      {items.map((item, itemIndex) => (
        <article key={`${item.title}-${itemIndex}`} className="slide-info-card" data-card-index={itemIndex}>
          <span className="eyebrow">{item.eyebrow}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <ul>
            {item.points.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function getDaoSlideClass(slide: HomeSlide) {
  if (slide.eyebrow === 'Khái niệm 1/6') {
    return 'dao-slide dao-slide-1';
  }

  if (slide.eyebrow === 'Khái niệm 2/6') {
    return 'dao-slide dao-slide-2';
  }

  if (slide.eyebrow === 'Khái niệm 3/6') {
    return 'dao-slide dao-slide-3';
  }

  if (slide.eyebrow.startsWith('Khái niệm 4.')) {
    return 'dao-slide dao-slide-4';
  }

  if (slide.eyebrow === 'Khái niệm 5/6') {
    return 'dao-slide dao-slide-5';
  }

  if (slide.eyebrow === 'Khái niệm 6/6') {
    return 'dao-slide dao-slide-6';
  }

  return '';
}

export function Home() {
  return (
    <>
      <NavBar current="home" />
      <main className="home-page">
        <Hero />

        <section className="home-deck" aria-label="Nội dung trình bày trang chủ">
          <div className="home-dongson-shell" aria-hidden="true" dangerouslySetInnerHTML={{ __html: dongSonDrumMarkup }} />
          <SlideDeckControls slides={slideControlItems} />
          {homeSlides.map((slide, index) => (
            <article
              key={`${slide.member}-${index}-${slide.title}`}
              data-slide-index={index}
              aria-labelledby={`home-slide-title-${index}`}
              className={[
                'slide-section',
                getDaoSlideClass(slide),
                slide.eyebrow === 'Khái niệm 1/6' ? 'concept-open-slide' : '',
                slide.eyebrow.startsWith('Khái niệm 4.') ? 'nation-slide' : ''
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="slide-content-wrapper container">
                <div className="slide-frame-head">
                  <span className="slide-counter">{String(index + 1).padStart(2, '0')}</span>
                  <span className="slide-owner">{slide.member}</span>
                  <span className="eyebrow">{slide.eyebrow}</span>
                </div>
                <div className="slide-layout">
                  <div className="slide-intro">
                    <h2 id={`home-slide-title-${index}`}>{slide.title}</h2>
                    <p>{slide.subtitle}</p>
                  </div>
                  <SlideVisualPanel visual={visibleSlideVisuals[index]} />
                  <SlideCards items={slide.items} />
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
