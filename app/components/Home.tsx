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
import { HienSlideExplorer } from './HienSlideExplorer';
import { LinhSlideExplorer } from './LinhSlideExplorer';
import { NavBar } from './NavBar';
import { NationFactorExplorer } from './NationFactorExplorer';
import { SlideDeckControls } from './SlideDeckControls';
import { TienSlideExplorer } from './TienSlideExplorer';
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
  thoPolicyOverview: {
    src: '/images/mln131/tho/policy-overview.png',
    alt: 'Slide tổng quan chính sách dân tộc theo năm mặt chính trị, kinh tế, văn hóa, xã hội, an ninh - quốc phòng',
    label: '5 mặt chính sách'
  },
  thoPoliticalElection: {
    src: '/images/mln131/tho/political-election.jpg',
    alt: 'Poster toàn dân bầu cử với nhiều thành phần nhân dân và đồng bào dân tộc thiểu số',
    label: 'Bầu cử'
  },
  thoPoliticalParticipation: {
    src: '/images/mln131/tho/political-participation.jpg',
    alt: 'Đồng bào dân tộc thiểu số tham gia sự kiện chính trị và cầm cờ Việt Nam',
    label: 'Tham gia chính trị'
  },
  thoEconomyLivelihood: {
    src: '/images/mln131/tho/economy-livelihood.jpg',
    alt: 'Các mô hình sinh kế, vay vốn, sản xuất và dệt thủ công ở vùng dân tộc thiểu số',
    label: 'Sinh kế'
  },
  thoEconomyLocalProducts: {
    src: '/images/mln131/tho/economy-local-products.png',
    alt: 'Mô hình phát triển cây ăn quả, chăn nuôi, tín dụng và sản phẩm địa phương vùng dân tộc',
    label: 'Kinh tế địa phương'
  },
  thoSocialCommunityProduction: {
    src: '/images/mln131/tho/social-community-production.png',
    alt: 'Người dân vùng dân tộc sơ chế nông sản trong sinh hoạt cộng đồng',
    label: 'Đời sống cộng đồng'
  },
  thoCultureUnity: {
    src: '/images/mln131/tho/culture-unity.jpg',
    alt: 'Người dân trong trang phục nhiều dân tộc tham gia hoạt động văn hóa cộng đồng',
    label: 'Văn hóa thống nhất'
  },
  thoSecurityDefense: {
    src: '/images/mln131/tho/security-defense.png',
    alt: 'Không gian trưng bày về quốc phòng, an ninh và truyền thống bảo vệ Tổ quốc',
    label: 'Bảo vệ Tổ quốc'
  },
  thoUnityHoChiMinh: {
    src: '/images/mln131/tho/unity-ho-chi-minh.jpg',
    alt: 'Chủ tịch Hồ Chí Minh chụp ảnh cùng đồng bào các dân tộc',
    label: 'Đoàn kết dân tộc'
  },
  tienInfrastructureRoad: {
    src: '/images/mln131/tien/infrastructure-road.jpg',
    alt: 'Người dân cùng làm đường giao thông ở vùng dân tộc thiểu số và miền núi',
    label: 'Đường giao thông'
  },
  tienInfrastructureElectricity: {
    src: '/images/mln131/tien/infrastructure-electricity.jpg',
    alt: 'Công nhân điện lực kiểm tra điện lưới tại hộ gia đình vùng dân tộc thiểu số',
    label: 'Điện lưới'
  },
  tienCleanWater: {
    src: '/images/mln131/tien/infrastructure-clean-water.png',
    alt: 'Người dân vùng dân tộc thiểu số sử dụng bồn nước sạch phục vụ sinh hoạt',
    label: 'Nước sạch'
  },
  tienInfrastructureChildrenReading: {
    src: '/images/mln131/tien/infrastructure-children-reading.jpg',
    alt: 'Trẻ em dân tộc thiểu số đọc sách và vui chơi cùng nhau',
    label: 'Trẻ em vùng cao'
  },
  tienEducationClassroom: {
    src: '/images/mln131/tien/education-classroom.gif',
    alt: 'Học sinh dân tộc thiểu số học tập trong lớp học',
    label: 'Lớp học'
  },
  tienHealthStation: {
    src: '/images/mln131/tien/health-station.jpg',
    alt: 'Trạm y tế xã Sơn Điền phục vụ chăm sóc sức khỏe ban đầu',
    label: 'Trạm y tế'
  },
  tienHealthCheckup: {
    src: '/images/mln131/tien/health-checkup.jpg',
    alt: 'Nhân viên y tế khám sức khỏe cho người dân vùng dân tộc thiểu số',
    label: 'Khám sức khỏe'
  },
  tienHealthCommunityCheckup: {
    src: '/images/mln131/tien/health-community-checkup.webp',
    alt: 'Nhân viên y tế đo huyết áp cho phụ nữ dân tộc thiểu số tại điểm khám cộng đồng',
    label: 'Khám cộng đồng'
  },
  tienEconomyTea: {
    src: '/images/mln131/tien/economy-tea.jpg',
    alt: 'Cán bộ và người dân kiểm tra vùng trồng chè ở miền núi',
    label: 'Sinh kế chè'
  },
  tienEconomyTerraces: {
    src: '/images/mln131/tien/economy-terraces.jpg',
    alt: 'Ruộng bậc thang và cảnh quan sản xuất ở vùng miền núi',
    label: 'Sản xuất vùng cao'
  },
  tienEconomyGreenhouse: {
    src: '/images/mln131/tien/economy-greenhouse.jpg',
    alt: 'Người dân và cán bộ tham quan mô hình trồng rau trong nhà kính ở vùng dân tộc',
    label: 'Mô hình sản xuất'
  },
  tienCultureCostume: {
    src: '/images/mln131/tien/culture-costume.jpg',
    alt: 'Các cô gái trong trang phục truyền thống dân tộc',
    label: 'Trang phục'
  },
  tienCultureMinorityCostume: {
    src: '/images/mln131/tien/culture-minority-costume.jpg',
    alt: 'Phụ nữ dân tộc thiểu số trong trang phục truyền thống rực rỡ',
    label: 'Trang phục dân tộc'
  },
  tienCultureFestival: {
    src: '/images/mln131/tien/culture-festival.jpg',
    alt: 'Người dân biểu diễn múa truyền thống trong sinh hoạt văn hóa cộng đồng',
    label: 'Lễ hội'
  },
  tienUnityFestivalFlowers: {
    src: '/images/mln131/tien/unity-festival-flowers.jpg',
    alt: 'Đồng bào nhiều dân tộc tham gia sự kiện cộng đồng và giơ hoa đỏ',
    label: 'Đoàn kết cộng đồng'
  },
  tienActionVolunteerGifts: {
    src: '/images/mln131/tien/action-volunteer-gifts.webp',
    alt: 'Thanh niên tình nguyện trao quà cho trẻ em vùng dân tộc thiểu số',
    label: 'Tương trợ'
  },
  tienActionEthnicStudents: {
    src: '/images/mln131/tien/action-ethnic-students.jpeg',
    alt: 'Học sinh dân tộc thiểu số trong trang phục truyền thống tham gia hoạt động cộng đồng',
    label: 'Học sinh dân tộc'
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
  daoThiToc: {
    src: '/images/mln131/dao/thi-toc.jpg',
    alt: 'Minh hoa cong dong thi toc thoi so khai trong hang da',
    label: 'Thi toc'
  },
  daoBoLac: {
    src: '/images/mln131/dao/bo-lac.jpg',
    alt: 'Minh hoa cong dong bo lac sinh hoat quanh lua',
    label: 'Bo lac'
  },
  daoBoToc: {
    src: '/images/mln131/dao/bo-toc.jpg',
    alt: 'Minh hoa doan nguoi bo toc cung di chuyen trong rung',
    label: 'Bo toc'
  },
  daoDanToc: {
    src: '/images/mln131/dao/dan-toc.jpg',
    alt: 'Minh hoa cong dong dan toc Viet Nam doan ket',
    label: 'Dan toc'
  },
  daoPhuongTay: {
    src: '/images/mln131/dao/phuong-tay.jpg',
    alt: 'Minh hoa nen san xuat cong nghiep va chu nghia tu ban phuong Tay',
    label: 'Phuong Tay'
  },
  daoPhuongDong: {
    src: '/images/mln131/dao/phuong-dong.jpg',
    alt: 'Minh hoa khong gian van hoa cong dong phuong Dong',
    label: 'Phuong Dong'
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
    points: ['Gắn với sự xác lập của phương thức sản xuất tư bản chủ nghĩa  ', 'Xuất hiện khi quan hệ sản xuất phong kiến bị thay thế', 'Nhấn mạnh yếu tố kinh tế – xã hội hiện đại']
  },
  {
    eyebrow: 'Phương Đông',
    title: 'Hình thành trên nền văn hóa - tâm lý cộng đồng',
    body: 'Ở phương Đông, dân tộc thường hình thành trên cơ sở văn hóa, tâm lý dân tộc đã phát triển tương đối chín muồi; cộng đồng kinh tế tuy đã đạt đến một mức độ nhất định nhưng nhìn chung còn kém phát triển và phân tán.',
    points: ['Gắn với nền văn hóa và tâm lý dân tộc phát triển tương đối chín muồi', 'Cộng đồng kinh tế có phát triển nhưng thường còn phân tán', 'Nhấn mạnh yếu tố văn hóa, tâm lý cộng đồng và lịch sử lâu dài']
  }
];

const daoNationFeatureCards: InfoCard[] = [
  {
    eyebrow: 'Nation',
    title: 'Chung sinh hoạt kinh tế',
    body: 'Cùng tham gia vào đời sống sản xuất, trao đổi, phát triển kinh tế.',
    points: ['Sản xuất', 'Trao đổi', 'Phát triển kinh tế']
  },
  {
    eyebrow: 'Nation',
    title: 'Lãnh thổ ổn định',
    body: 'Có không gian sinh tồn và phát triển chung.',
    points: ['Không gian chung', 'Ổn định', 'Không bị chia cắt']
  },
  {
    eyebrow: 'Nation',
    title: 'Nhà nước quản lý',
    body: 'Có thiết chế chính trị đại diện và quản lý cộng đồng.',
    points: ['Nhà nước độc lập', 'Quản lý xã hội', 'Đại diện cộng đồng']
  },
  {
    eyebrow: 'Nation',
    title: 'Ngôn ngữ chung',
    body: 'Có công cụ giao tiếp chung trong xã hội.',
    points: ['Giao tiếp', 'Học tập', 'Tổ chức đời sống chung']
  },
  {
    eyebrow: 'Nation',
    title: 'Văn hóa - tâm lý chung',
    body: 'Có bản sắc, truyền thống, lối sống và tình cảm cộng đồng.',
    points: ['Bản sắc', 'Truyền thống', 'Tình cảm cộng đồng']
  }
];

const daoNationSlides: HomeSlide[] = [{
  member: 'Đào',
  eyebrow: 'Khái niệm 4/6',
  title: 'Dân tộc - quốc gia dân tộc',
  subtitle:
    'Theo nghĩa thứ nhất, dân tộc, hay quốc gia dân tộc - nation, là một cộng đồng chính trị - xã hội ổn định với các đặc trưng chung về kinh tế, lãnh thổ, nhà nước, ngôn ngữ và văn hóa.',
  items: daoNationFeatureCards
}];

const daoEthnicFeatureCards: InfoCard[] = [
  {
    eyebrow: 'Ethnic group',
    title: 'Ngôn ngữ',
    body: 'Có tiếng nói, chữ viết hoặc cách giao tiếp riêng.',
    points: ['Tiếng nói', 'Chữ viết', 'Cách giao tiếp riêng']
  },
  {
    eyebrow: 'Ethnic group',
    title: 'Văn hóa',
    body: 'Có phong tục, tập quán, trang phục, lễ hội, tín ngưỡng, nghệ thuật riêng.',
    points: ['Phong tục', 'Trang phục - lễ hội', 'Tín ngưỡng - nghệ thuật']
  },
  {
    eyebrow: 'Ethnic group',
    title: 'Ý thức tự giác tộc người',
    body: 'Các thành viên tự nhận mình thuộc về cộng đồng tộc người đó.',
    points: ['Tự nhận thuộc về cộng đồng', 'Gắn bó nội bộ', 'Giữ gìn bản sắc riêng']
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
    body: 'Khi ý thức dân tộc phát triển, các cộng đồng nhận thức rõ hơn quyền được sống độc lập, quyền tự quyết và nhu cầu thoát khỏi áp bức để làm chủ vận mệnh của mình.',
    points: ['Thức tỉnh ý thức dân tộc', 'Mong muốn làm chủ vận mệnh', 'Chống áp bức, bóc lột của chủ nghĩa thực dân và đế quốc']
  },
  {
    eyebrow: 'Xu hướng 2',
    title: 'Liên hiệp lại với nhau',
    body: 'Sự phát triển của lực lượng sản xuất, khoa học - công nghệ và giao lưu kinh tế, văn hóa làm các dân tộc có nhu cầu hợp tác, liên kết để cùng phát triển.',
    points: ['Liên kết để phát triển kinh tế', 'Bảo đảm hòa bình', 'Cùng giải quyết các vấn đề chung']
  },
  {
    eyebrow: 'Ví dụ',
    title: 'Việt Nam và hai xu hướng',
    body: 'Trước năm 1945, nhân dân Việt Nam đấu tranh giành độc lập trong Cách mạng Tháng Tám. Hiện nay, Việt Nam tham gia ASEAN, Liên Hợp Quốc và nhiều tổ chức quốc tế.',
    points: ['Cách mạng Tháng Tám: xu hướng độc lập dân tộc', 'ASEAN, Liên Hợp Quốc: xu hướng hợp tác', 'Độc lập và hợp tác cùng phục vụ phát triển']
  },
  {
    eyebrow: 'Biểu hiện',
    title: 'Trong phạm vi một quốc gia',
    body: 'Hai xu hướng thể hiện trong đời sống quốc gia: mỗi dân tộc nỗ lực phát triển tự do, bình đẳng, đồng thời các dân tộc tăng cường đoàn kết, giao lưu và hợp tác.',
    points: ['Phát triển để đạt tự do, bình đẳng, phồn vinh', 'Giao lưu, hợp tác trên nhiều lĩnh vực', 'Củng cố đoàn kết trong một quốc gia thống nhất']
  },
  {
    eyebrow: 'Biểu hiện',
    title: 'Trong phạm vi quốc tế',
    body: 'Trên thế giới, các dân tộc vừa đấu tranh bảo vệ độc lập, chủ quyền, vừa mở rộng hợp tác khu vực và quốc tế để cùng phát triển.',
    points: ['Bảo vệ độc lập, chủ quyền', 'Chống áp bức và can thiệp từ bên ngoài', 'Liên kết quốc tế trên cơ sở bình đẳng']
  },
  {
    eyebrow: 'Mối quan hệ',
    title: 'Thống nhất biện chứng',
    body: 'Hai xu hướng không đối lập tuyệt đối mà bổ sung cho nhau: độc lập dân tộc là cơ sở để hợp tác bình đẳng, còn hợp tác tạo điều kiện để dân tộc phát triển.',
    points: ['Tồn tại song song', 'Tác động qua lại', 'Không tách rời nhau trong thực tiễn']
  },
  {
    eyebrow: 'Ý nghĩa hiện nay',
    title: 'Nhận thức đúng để đoàn kết và cảnh giác',
    body: 'Hai xu hướng vẫn diễn ra mạnh mẽ, phức tạp trên thế giới; cần phát huy đoàn kết, hợp tác và cảnh giác với âm mưu lợi dụng vấn đề dân tộc để gây chia rẽ, mất ổn định.',
    points: ['Phát huy đoàn kết dân tộc', 'Mở rộng hợp tác bình đẳng', 'Chống lợi dụng vấn đề dân tộc để chia rẽ']
  }
];

const vietnamMoreCharacteristics: InfoCard[] = [
  {
    eyebrow: 'Đặc điểm Việt Nam',
    title: 'Chênh lệch về số dân giữa các tộc người',
    body: 'Dân tộc Kinh chiếm đa số, trong khi nhiều dân tộc thiểu số có dân số rất ít; sự chênh lệch này ảnh hưởng đến bảo tồn ngôn ngữ, văn hóa và phát triển kinh tế - xã hội.',
    points: ['Nhu cầu phát triển không giống nhau', 'Cần chính sách hỗ trợ phù hợp', 'Bình đẳng phải đi cùng chính sách đặc thù']
  },
  {
    eyebrow: 'Đặc điểm Việt Nam',
    title: 'Phân bố ở địa bàn chiến lược',
    body: 'Các dân tộc thiểu số chủ yếu sinh sống ở miền núi, vùng biên giới, Tây Nguyên và hải đảo - những khu vực có ý nghĩa quan trọng về kinh tế, quốc phòng, an ninh và chủ quyền lãnh thổ.',
    points: ['Gắn phát triển với bảo vệ chủ quyền', 'Cần đầu tư hạ tầng thiết yếu', 'Ổn định đời sống là nền tảng ổn định xã hội']
  },
  {
    eyebrow: 'Đặc điểm Việt Nam',
    title: 'Đa dạng bản sắc nhưng cùng một cộng đồng quốc gia',
    body: 'Mỗi dân tộc có ngôn ngữ, trang phục, lễ hội, phong tục riêng; sự đa dạng đó góp phần tạo nên nền văn hóa Việt Nam thống nhất trong đa dạng.',
    points: ['Giữ gìn bản sắc riêng', 'Làm giàu văn hóa chung', 'Củng cố khối đại đoàn kết toàn dân tộc']
  }
];

const partyStrategyCards: InfoCard[] = [
  partyViewpoints[0],
  {
    eyebrow: 'Tính chiến lược',
    title: 'Cơ bản, lâu dài',
    body: 'Việt Nam là quốc gia đa tộc người; việc thu hẹp chênh lệch về trình độ phát triển, mức sống và dân trí cần thời gian, nguồn lực và một tiến trình lịch sử lâu dài.',
    points: [
      'Xu hướng phát triển quan hệ dân tộc diễn ra lâu dài',
      'Đại đoàn kết dân tộc là nguồn lực và động lực chủ yếu',
      'Cần chính sách bền bỉ qua nhiều giai đoạn cách mạng'
    ]
  },
  {
    eyebrow: 'Tính cấp bách',
    title: 'Yêu cầu hiện nay',
    body: 'Khoảng cách phát triển, nguy cơ bất ổn an sinh và âm mưu lợi dụng vấn đề dân tộc đòi hỏi công tác dân tộc phải được giải quyết kịp thời.',
    points: [
      'Ổn định đời sống vùng miền núi, biên giới và vùng khó khăn',
      'Củng cố niềm tin của đồng bào',
      'Ngăn chặn kích động ly khai, kỳ thị và chia rẽ dân tộc'
    ]
  }
];

const partyEqualityCards: InfoCard[] = [
  partyViewpoints[1],
  {
    eyebrow: 'Bình đẳng dân tộc',
    title: 'Cơ sở pháp lý và đạo lý',
    body: 'Mọi dân tộc, không phân biệt đa số hay thiểu số, đều có vị thế chính trị ngang nhau, quyền lợi và nghĩa vụ ngang nhau trước pháp luật.',
    points: [
      'Có quyền tham gia hệ thống chính trị, quản lý nhà nước và xã hội',
      'Hiến pháp và pháp luật bảo vệ quyền bình đẳng',
      'Nghiêm cấm kỳ thị, chia rẽ tộc người'
    ]
  },
  {
    eyebrow: 'Đoàn kết - tương trợ',
    title: 'Sức mạnh và hành động thực tiễn',
    body: 'Đoàn kết tạo sức mạnh tổng hợp; tương trợ biến bình đẳng pháp lý thành bình đẳng thực tế trong đời sống.',
    points: [
      'Đoàn kết dựa trên liên minh công nhân - nông dân - trí thức',
      'Chia sẻ nguồn lực, kỹ thuật và tri thức cho vùng khó khăn',
      'Phát huy tự lực của đồng bào dân tộc thiểu số'
    ]
  }
];

const partyDevelopmentCards: InfoCard[] = [
  partyViewpoints[2],
  {
    eyebrow: 'Kinh tế',
    title: 'Hạ tầng và sinh kế bền vững',
    body: 'Ưu tiên nguồn vốn và huy động nguồn lực xã hội để đầu tư giao thông, điện, thủy lợi, trường học, trạm y tế và hạ tầng số.',
    points: [
      'Phát triển lâm nghiệp bền vững, cây công nghiệp và cây dược liệu',
      'Thúc đẩy chăn nuôi đại gia súc và du lịch sinh thái',
      'Giảm nghèo nhanh và bền vững dựa trên tiềm năng địa phương'
    ]
  },
  {
    eyebrow: 'Chính trị - xã hội',
    title: 'Cơ sở vững, đời sống nâng lên',
    body: 'Củng cố hệ thống chính trị cơ sở, đào tạo cán bộ dân tộc thiểu số, đồng thời nâng cao giáo dục, y tế và bảo tồn bản sắc văn hóa.',
    points: [
      'Gắn phát triển kinh tế - xã hội với quốc phòng - an ninh',
      'Nâng cao chất lượng trường dân tộc nội trú, bán trú và y tế cơ sở',
      'Bảo tồn tiếng nói, chữ viết, trang phục, lễ hội và xóa bỏ hủ tục lạc hậu'
    ]
  }
];

const policyCorePoints: Record<string, string[]> = {
  politics: [
    'Bầu cử, ứng cử, góp ý và giám sát chính quyền',
    'Lắng nghe nhu cầu của người dân địa phương',
    'Chống kỳ thị, chia rẽ và lợi dụng khó khăn để gây mất đoàn kết'
  ],
  economy: [
    'Đường, điện, nước sạch, đất sản xuất và hạ tầng thiết yếu',
    'Vốn vay, kỹ thuật, thị trường tiêu thụ và sản phẩm địa phương',
    'Sinh kế phù hợp để giảm nghèo bền vững, không phụ thuộc trợ cấp'
  ],
  culture: [
    'Giữ tiếng nói, chữ viết, lễ hội, trang phục và nghệ thuật truyền thống',
    'Chọn lọc giá trị tốt đẹp, loại bỏ hủ tục lạc hậu',
    'Gắn bảo tồn văn hóa với du lịch cộng đồng và sinh kế'
  ],
  society: [
    'Giáo dục, y tế, giảm nghèo, nhà ở và nước sạch',
    'Bình đẳng giới, bảo vệ phụ nữ và trẻ em',
    'Nâng cao nguồn nhân lực và đời sống vật chất, tinh thần'
  ],
  security: [
    'Ổn định chính trị, trật tự an toàn xã hội ở cơ sở',
    'Bảo đảm an ninh biên giới và địa bàn chiến lược',
    'Phối hợp chính quyền, biên phòng, công an, già làng và người có uy tín'
  ]
};

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
        points: policyCorePoints[pillar.id] ?? ['Bảo đảm bình đẳng thực chất', 'Gắn hỗ trợ với tự lực phát triển', 'Phù hợp từng địa bàn và cộng đồng'],
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
      body: 'Khi giao thông, điện, nước và viễn thông được cải thiện, vùng khó khăn kết nối tốt hơn với trung tâm kinh tế, giáo dục, y tế và hành chính.',
      points: ['Đi lại và giao thương thuận lợi hơn', 'Mở thêm cơ hội dịch vụ công, giáo dục, y tế', 'Tạo nền cho du lịch cộng đồng và sinh kế']
    }
  ],
  [
    achievementAreas[1],
    {
      eyebrow: 'Ý nghĩa',
      title: 'Trao cơ hội học tập bình đẳng',
      body: 'Giáo dục giúp nâng cao dân trí, mở rộng cơ hội nghề nghiệp và đào tạo nguồn nhân lực tại chỗ cho vùng dân tộc thiểu số và miền núi.',
      points: ['Trẻ em vùng sâu, vùng xa có điều kiện đến trường', 'Trường nội trú, bán trú hỗ trợ học tập và sinh hoạt', 'Tri thức trở thành nền tảng phát triển bền vững']
    }
  ],
  [
    achievementAreas[2],
    {
      eyebrow: 'Ý nghĩa',
      title: 'Không để ai bị bỏ lại phía sau',
      body: 'Y tế và an sinh xã hội giúp người dân vùng khó khăn tiếp cận chăm sóc sức khỏe ban đầu, bảo hiểm y tế và các chương trình hỗ trợ thiết yếu.',
      points: ['Trạm y tế cơ sở gần dân hơn', 'Quan tâm bà mẹ, trẻ em, hộ nghèo và người khó khăn', 'Củng cố niềm tin vào chính sách xã hội nhân văn']
    }
  ],
  [
    achievementAreas[3],
    {
      eyebrow: 'Ý nghĩa',
      title: 'Trao cơ hội để tự lực',
      body: 'Giảm nghèo bền vững không chỉ là hỗ trợ vật chất, mà còn là quá trình trao cơ hội để người dân chủ động phát triển kinh tế và ổn định đời sống.',
      points: ['Khai thác điều kiện tự nhiên và văn hóa bản địa', 'Đa dạng sinh kế, nâng thu nhập', 'Giảm phụ thuộc vào hỗ trợ ngắn hạn']
    }
  ],
  [
    achievementAreas[4],
    {
      eyebrow: 'Ý nghĩa',
      title: 'Bản sắc cũng là nguồn lực',
      body: 'Bảo tồn văn hóa là cách khẳng định bình đẳng, tôn trọng và đoàn kết giữa các dân tộc trong cộng đồng Việt Nam thống nhất.',
      points: ['Giữ gìn giá trị truyền thống tốt đẹp', 'Tạo niềm tự hào cho thế hệ trẻ', 'Gắn văn hóa với du lịch cộng đồng và sinh kế']
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
      'Theo nghĩa thứ hai, dân tộc - tộc người - ethnies là cộng đồng người có những đặc trưng về ngôn ngữ, văn hóa và ý thức tự giác tộc người.',
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
      'Theo V.I. Lênin, trong quá trình phát triển của lịch sử nhân loại, quan hệ dân tộc luôn vận động theo hai xu hướng khách quan. "Khách quan" ở đây có nghĩa là những xu hướng này xuất hiện do quy luật phát triển của xã hội chứ không phụ thuộc vào ý muốn của bất kỳ cá nhân hay tổ chức nào. Hai xu hướng này vừa tồn tại song song vừa tác động qua lại lẫn nhau.',
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
    title: 'Vấn đề dân tộc và đoàn kết dân tộc là chiến lược lâu dài, đồng thời cấp bách',
    subtitle:
      'Quan điểm này đặt vấn đề dân tộc trong tầm nhìn chiến lược lâu dài, đồng thời nhấn mạnh yêu cầu xử lý kịp thời các vấn đề an sinh, quốc phòng - an ninh hiện nay.',
    items: partyStrategyCards
  },
  {
    member: 'Hiển',
    eyebrow: 'Quan điểm 2/3',
    title: 'Bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển',
    subtitle:
      'Bình đẳng, đoàn kết và tương trợ có quan hệ biện chứng: bình đẳng là nền tảng, đoàn kết là sức mạnh, tương trợ là hành động để cùng phát triển.',
    items: partyEqualityCards
  },
  {
    member: 'Hiển',
    eyebrow: 'Quan điểm 3/3',
    title: 'Phát triển toàn diện vùng dân tộc và miền núi',
    subtitle:
      'Phát triển vùng dân tộc và miền núi phải đồng bộ trên kinh tế, chính trị, quốc phòng - an ninh, văn hóa và xã hội.',
    items: partyDevelopmentCards
  },
  ...policyPillars.map(policySlide),
  {
    member: 'Tiên',
    eyebrow: 'Thành tựu 1/5',
    title: 'Hạ tầng làm thay đổi diện mạo vùng khó khăn',
    subtitle:
      'Đường giao thông, điện, nước, trường học, trạm y tế và viễn thông được đầu tư giúp vùng dân tộc thiểu số kết nối tốt hơn.',
    items: achievementDetailCards[0]
  },
  {
    member: 'Tiên',
    eyebrow: 'Thành tựu 2/5',
    title: 'Giáo dục có nhiều chuyển biến tích cực',
    subtitle:
      'Mạng lưới trường lớp, trường dân tộc nội trú và bán trú giúp trẻ em dân tộc thiểu số có thêm điều kiện học tập.',
    items: achievementDetailCards[1]
  },
  {
    member: 'Tiên',
    eyebrow: 'Thành tựu 3/5',
    title: 'Y tế và an sinh xã hội được quan tâm',
    subtitle:
      'Trạm y tế, bảo hiểm, tiêm chủng, chăm sóc bà mẹ - trẻ em và hỗ trợ hộ khó khăn giúp người dân tiếp cận dịch vụ thiết yếu hơn.',
    items: achievementDetailCards[2]
  },
  {
    member: 'Tiên',
    eyebrow: 'Thành tựu 4/5',
    title: 'Sinh kế và giảm nghèo gắn với tự lực phát triển',
    subtitle:
      'Các mô hình sản xuất, vay vốn, đào tạo nghề và phát triển sản phẩm địa phương giúp đồng bào chủ động vươn lên.',
    items: achievementDetailCards[3]
  },
  {
    member: 'Tiên',
    eyebrow: 'Thành tựu 5/5',
    title: 'Bảo tồn bản sắc văn hóa gắn với phát triển',
    subtitle:
      'Bản sắc văn hóa các dân tộc không chỉ cần được gìn giữ, mà còn có thể trở thành nguồn lực cho sinh kế và giao lưu cộng đồng.',
    items: achievementDetailCards[4]
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
].slice(1);

const slideControlItems = homeSlides.map(slide => ({
  member: slide.member,
  eyebrow: slide.eyebrow,
  title: slide.title
}));

const slideVisuals: SlideVisual[] = ([
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
  {
    variant: 'statement',
    title: 'Nation',
    caption: 'Quốc gia dân tộc là cộng đồng chính trị - xã hội thống nhất, nơi các thành viên cùng chung sống, lao động, sáng tạo và bảo vệ Tổ quốc.',
    chips: daoNationFeatureCards.map(card => card.title)
  },
  {
    variant: 'gallery',
    title: 'Ethnic group',
    caption: 'Mỗi tộc người có bản sắc riêng, góp phần làm nên sự phong phú của văn hóa Việt Nam.',
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
    title: 'Chiến lược lâu dài, cấp bách hiện nay',
    caption: 'Vấn đề dân tộc phải được nhìn trong tiến trình lâu dài, đồng thời xử lý kịp thời các nguy cơ an sinh và chia rẽ.',
    chips: ['Lâu dài', 'Cấp bách', 'Đoàn kết']
  },
  {
    variant: 'gallery',
    title: 'Bình đẳng và tương trợ',
    caption: 'Bình đẳng là nền tảng, đoàn kết là sức mạnh, tương trợ là hành động thực tiễn để cùng phát triển.',
    chips: ['Bình đẳng', 'Đoàn kết', 'Tương trợ']
  },
  {
    variant: 'image',
    title: 'Phát triển toàn diện',
    caption: 'Kinh tế, chính trị, quốc phòng - an ninh, văn hóa và xã hội phải được đặt trong một chỉnh thể.',
    chips: ['Kinh tế', 'Chính trị', 'Văn hóa - xã hội', 'QP-AN']
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
    title: 'Giáo dục',
    caption: 'Trường lớp, nội trú và bán trú mở rộng cơ hội học tập cho trẻ em vùng dân tộc thiểu số.',
    chips: ['Đến trường', 'Nội trú', 'Nguồn nhân lực']
  },
  {
    variant: 'gallery',
    title: 'Y tế - an sinh',
    caption: 'Trạm y tế, bảo hiểm và chăm sóc sức khỏe ban đầu giúp chính sách xã hội gần dân hơn.',
    chips: ['Trạm y tế', 'Khám chữa bệnh', 'An sinh']
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
] satisfies SlideVisual[]).slice(1);

const slideImageGroups: VisualImage[][] = [
  [visualImages.commonsEthnicDistribution, visualImages.docCommunity],
  [visualImages.daoThiToc, visualImages.daoBoLac, visualImages.daoBoToc, visualImages.daoDanToc],
  [visualImages.daoPhuongTay, visualImages.daoPhuongDong],
  [visualImages.unityMap, visualImages.thoUnityHoChiMinh, visualImages.thoCultureUnity],
  [visualImages.commonsHmongDress, visualImages.commonsHmongBatik, visualImages.ethnicPortraits],
  [visualImages.docUnity, visualImages.docGirls],
  [visualImages.commonsBlackHmongWomen, visualImages.bridge],
  [visualImages.docPoliticalSlide],
  [visualImages.docDecision1719, visualImages.docTerraces],
  [visualImages.docViewpointSlide, visualImages.docMeeting],
  [visualImages.docEconomyEvidence],
  [visualImages.docEconomySlide],
  [visualImages.thoPolicyOverview],
  [visualImages.thoPoliticalElection, visualImages.thoPoliticalParticipation],
  [visualImages.thoEconomyLivelihood, visualImages.thoEconomyLocalProducts],
  [visualImages.thoCultureUnity, visualImages.thoUnityHoChiMinh],
  [visualImages.thoSocialCommunityProduction, visualImages.docClassroom, visualImages.docHealth],
  [visualImages.thoSecurityDefense],
  [visualImages.tienInfrastructureRoad, visualImages.tienInfrastructureChildrenReading, visualImages.tienInfrastructureElectricity, visualImages.tienCleanWater],
  [visualImages.tienInfrastructureChildrenReading, visualImages.tienEducationClassroom, visualImages.docSchoolRoad],
  [visualImages.tienHealthStation, visualImages.tienHealthCommunityCheckup, visualImages.tienHealthCheckup],
  [visualImages.tienEconomyGreenhouse, visualImages.tienEconomyTea, visualImages.tienEconomyTerraces],
  [visualImages.tienCultureMinorityCostume, visualImages.tienCultureCostume, visualImages.tienCultureFestival],
  [visualImages.tienUnityFestivalFlowers, visualImages.terraces, visualImages.festival],
  [visualImages.tienActionVolunteerGifts, visualImages.tienActionEthnicStudents]
].slice(1);

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
    const timelineAlt =
      'Dòng thời gian thể hiện quá trình phát triển của cộng đồng người từ thị tộc, bộ lạc, bộ tộc đến dân tộc.';

    return (
      <aside className="slide-visual timeline" data-timeline-active="0">
        {images.length ? (
          <div className="timeline-backdrop-stack" role="img" aria-label={timelineAlt}>
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
    const isMeaningContrast = visual.title === 'Thống nhất trong đa dạng';
    const comparisonKeywords = isEastWestComparison
      ? [
          ['Tư bản chủ nghĩa', 'Thị trường', 'Nhà nước hiện đại'],
          ['Văn hóa cộng đồng', 'Tâm lý dân tộc', 'Lịch sử lâu dài']
        ]
      : [];

    if (isMeaningContrast) {
      const contrastSides = [
        {
          label: 'Nghĩa thứ nhất',
          title: 'Quốc gia dân tộc',
          tag: 'Nation',
          image: images[0],
          points: ['Lãnh thổ - nhà nước - kinh tế', 'Ngôn ngữ chung của quốc gia', 'Cộng đồng chính trị - xã hội thống nhất']
        },
        {
          label: 'Nghĩa thứ hai',
          title: 'Dân tộc - tộc người',
          tag: 'Ethnic group',
          image: images[1] ?? images[0],
          points: ['Ngôn ngữ, văn hóa riêng', 'Ý thức tự giác tộc người', 'Một thành viên trong đại gia đình Việt Nam']
        }
      ];

      return (
        <aside className="slide-visual comparison meaning-contrast-visual">
          <div className="meaning-contrast-grid" aria-label="Phân biệt hai nghĩa của dân tộc">
            {contrastSides.map((side, index) => (
              <figure className={`meaning-side meaning-side-${index + 1}`} key={side.title}>
                {side.image ? <img src={side.image.src} alt={side.image.alt} /> : null}
                <div className="meaning-side-overlay" />
                <figcaption>
                  <span>{side.label}</span>
                  <strong>{side.title}</strong>
                  <small>{side.tag}</small>
                </figcaption>
                <ul>
                  {side.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </figure>
            ))}
            <div className="meaning-vs" aria-hidden="true">
              Phân biệt
            </div>
          </div>
          <div className="meaning-contrast-footer">
            <span>Liên hệ Việt Nam</span>
            <strong>Thống nhất trong đa dạng</strong>
            <p>{visual.caption}</p>
          </div>
          <VisualCredits images={images} />
        </aside>
      );
    }

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
    const isEthnicIdentityVisual = visual.title === 'Ethnic group';

    if (isEthnicIdentityVisual) {
      const identityPillars = [
        { index: '01', title: 'Ngôn ngữ riêng' },
        { index: '02', title: 'Văn hóa riêng' },
        { index: '03', title: 'Ý thức tự giác' }
      ];

      return (
        <aside className="slide-visual gallery ethnic-identity-visual">
          <div className="ethnic-identity-grid">
            {images.slice(0, 3).map((image, index) => (
              <figure key={image.src} className={`ethnic-image image-${index + 1}`}>
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
            <div className="ethnic-identity-core">
              <span>Ethnic group</span>
              <strong>Tộc người</strong>
              <small>Bản sắc riêng trong cộng đồng Việt Nam thống nhất</small>
            </div>
            <div className="ethnic-pillar-list">
              {identityPillars.map(pillar => (
                <div key={pillar.index} className="ethnic-pillar">
                  <span>{pillar.index}</span>
                  <strong>{pillar.title}</strong>
                </div>
              ))}
            </div>
          </div>
          <VisualCredits images={images} />
        </aside>
      );
    }

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
    const isEconomyNationStatement = isNationStatement && visual.activeNode === 0;

    return (
      <aside
        className={`slide-visual statement ${isNationStatement ? 'nation-structure-visual' : ''} ${
          isEconomyNationStatement ? 'nation-economy-visual' : ''
        }`}
      >
        {visual.image ? <img className="visual-backdrop" src={visual.image.src} alt={visual.image.alt} /> : null}
        <div className="visual-overlay" />
        <VisualCredits images={images} />
        {isEconomyNationStatement ? (
          <div className="economy-flow">
            <div className="economy-flow-core">
              <span>01</span>
              <strong>Chung sinh hoạt kinh tế</strong>
              <p>Sản xuất, trao đổi và phân công lao động tạo nền tảng vật chất chung của quốc gia dân tộc.</p>
            </div>
            <div className="economy-flow-grid">
              {['Sản xuất', 'Trao đổi', 'Phân công', 'Phát triển'].map((item, index) => (
                <div className="economy-flow-node" key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        ) : isNationStatement ? (
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

  if (slide.eyebrow === 'Khái niệm 4/6' || slide.eyebrow.startsWith('Khái niệm 4.')) {
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

function getLinhSlideKind(slide: HomeSlide) {
  if (slide.eyebrow === 'Mác - Lênin 1/4') {
    return 'trends' as const;
  }

  if (slide.eyebrow === 'Mác - Lênin 2/4') {
    return 'principles' as const;
  }

  if (slide.member === 'Linh') {
    return 'vietnam' as const;
  }

  return null;
}

function getHienSlideKind(slide: HomeSlide) {
  if (slide.eyebrow === 'Quan điểm 1/3') {
    return 'strategy' as const;
  }

  if (slide.eyebrow === 'Quan điểm 2/3') {
    return 'equality' as const;
  }

  if (slide.eyebrow === 'Quan điểm 3/3') {
    return 'development' as const;
  }

  return null;
}

function getTienSlideKind(slide: HomeSlide) {
  if (slide.member !== 'Tiên') {
    return null;
  }

  if (slide.eyebrow.startsWith('Thành tựu')) {
    return 'achievement' as const;
  }

  if (slide.eyebrow.startsWith('Hành động')) {
    return 'action' as const;
  }

  return null;
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
                slide.member === 'Linh' ? 'linh-slide' : '',
                slide.member === 'Hiển' ? 'hien-slide' : '',
                slide.member === 'Tiên' ? 'tien-slide' : '',
                slide.eyebrow === 'Khái niệm 1/6' ? 'concept-open-slide' : '',
                slide.eyebrow === 'Khái niệm 4/6' || slide.eyebrow.startsWith('Khái niệm 4.') ? 'nation-slide' : ''
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
                  {slide.eyebrow === 'Khái niệm 4/6' ? (
                    <NationFactorExplorer image={visibleSlideVisuals[index]?.image} images={visibleSlideVisuals[index]?.images} items={slide.items} />
                  ) : getLinhSlideKind(slide) ? (
                    <LinhSlideExplorer kind={getLinhSlideKind(slide)!} visual={visibleSlideVisuals[index]} items={slide.items} />
                  ) : getHienSlideKind(slide) ? (
                    <HienSlideExplorer kind={getHienSlideKind(slide)!} visual={visibleSlideVisuals[index]} items={slide.items} />
                  ) : getTienSlideKind(slide) ? (
                    <TienSlideExplorer kind={getTienSlideKind(slide)!} visual={visibleSlideVisuals[index]} items={slide.items} />
                  ) : (
                    <>
                      <SlideVisualPanel visual={visibleSlideVisuals[index]} />
                      <SlideCards items={slide.items} />
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
