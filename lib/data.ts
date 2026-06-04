export type SourceRef = {
  id: string;
  title: string;
  publisher: string;
  url: string;
};

export type InfoCard = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  sourceIds?: string[];
};

export type PolicyPillar = {
  id: string;
  title: string;
  summary: string;
  plain: string;
  examples: string[];
  sourceIds: string[];
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
  sourceIds: string[];
};

export type AiTool = {
  name: string;
  purpose: string;
  result: string;
  verification: string;
  links?: { label: string; url: string }[];
};

export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export const sourceRefs: SourceRef[] = [
  {
    id: 'nq88',
    title: 'Nghị quyết 88/2019/QH14 phê duyệt Đề án tổng thể phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi giai đoạn 2021-2030',
    publisher: 'Cổng Thông tin điện tử Chính phủ',
    url: 'https://vanban.chinhphu.vn/default.aspx?docid=198414&pageid=27160'
  },
  {
    id: 'qd1719',
    title: 'Quyết định 1719/QĐ-TTg phê duyệt Chương trình mục tiêu quốc gia giai đoạn 2021-2030, giai đoạn I 2021-2025',
    publisher: 'Cổng Thông tin điện tử Chính phủ',
    url: 'https://vanban.chinhphu.vn/?docid=204285&pageid=27160'
  },
  {
    id: 'bdttg2025',
    title: 'Chương trình mục tiêu quốc gia: Hành trình đổi thay diện mạo vùng dân tộc thiểu số và miền núi',
    publisher: 'Bộ Dân tộc và Tôn giáo',
    url: 'https://bdttg.gov.vn/trang-chu-backup/hanh-trinh-thay-doi-dien-mao-vung-dan-toc-thieu-so-va-mien-nui-giai-doan-2021-2025.htm'
  },
  {
    id: 'baochinhphu2026',
    title: 'Xác định 15 tỉnh vùng dân tộc thiểu số, 12 tỉnh miền núi',
    publisher: 'Báo Chính phủ',
    url: 'https://baochinhphu.vn/xac-dinh-15-tinh-vung-dan-toc-thieu-so-12-tinh-mien-nui-102260415142233166.htm'
  },
  {
    id: 'baochinhphu2024dtts',
    title: 'Đời sống người dân vùng dân tộc thiểu số và miền núi không ngừng cải thiện',
    publisher: 'Báo Chính phủ',
    url: 'https://baochinhphu.vn/doi-song-nguoi-dan-vung-dan-toc-thieu-so-va-mien-nui-khong-ngung-cai-thien-102241230092327057.htm'
  },
  {
    id: 'bvhttdl2021',
    title: 'Nghệ thuật Xòe Thái được UNESCO ghi danh vào Danh sách di sản văn hóa phi vật thể đại diện của nhân loại',
    publisher: 'Bộ Văn hóa, Thể thao và Du lịch',
    url: 'https://bvhttdl.gov.vn/nghe-thuat-xoe-thai-duoc-unesco-ghi-danh-vao-danh-sach-di-san-van-hoa-phi-vat-the-dai-dien-cua-nhan-loai-20211215183109208.htm'
  },
  {
    id: 'election2026',
    title: 'Bầu cử 2026: sáng suốt lựa chọn những đại diện tiêu biểu, thực sự đại diện cho ý chí, nguyện vọng của nhân dân',
    publisher: 'Xây dựng Chính sách - Cổng TTĐT Chính phủ',
    url: 'https://xaydungchinhsach.chinhphu.vn/bau-cu-2026-sang-suot-lua-chon-nhung-dai-dien-tieu-bieu-thuc-su-dai-dien-cho-y-chi-nguyen-vong-cua-nhan-dan-119260314113515953.htm'
  },
  {
    id: 'baochinhphu1719',
    title: 'Phê duyệt Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi',
    publisher: 'Báo Chính phủ',
    url: 'https://baochinhphu.vn/phe-duyet-chuong-trinh-mtqg-phat-trien-kinh-te-xa-hoi-vung-dong-bao-dan-toc-thieu-so-va-mien-nui-102302202.htm'
  },
  {
    id: 'tt04dtnt',
    title: 'Thông tư 04/2023/TT-BGDĐT về quy chế tổ chức và hoạt động của trường phổ thông dân tộc nội trú',
    publisher: 'Cổng Thông tin điện tử Chính phủ',
    url: 'https://chinhphu.vn/?docid=207528&pageid=27160'
  }
];

export const heroStats: Metric[] = [
  {
    value: '54',
    label: 'dân tộc',
    detail: 'Một cộng đồng quốc gia thống nhất, đa dạng về văn hóa, ngôn ngữ, phong tục và lịch sử cư trú.',
    sourceIds: []
  },
  {
    value: '15',
    label: 'tỉnh vùng dân tộc thiểu số',
    detail: 'Danh mục mới là căn cứ quan trọng để triển khai chính sách và ưu tiên nguồn lực.',
    sourceIds: ['baochinhphu2026']
  },
  {
    value: '2021-2030',
    label: 'khung chương trình',
    detail: 'Giai đoạn triển khai Đề án tổng thể và Chương trình mục tiêu quốc gia về vùng dân tộc thiểu số, miền núi.',
    sourceIds: ['nq88', 'qd1719']
  }
];

export const conceptCards: InfoCard[] = [
  {
    eyebrow: 'Khái niệm',
    title: 'Dân tộc theo nghĩa quốc gia - dân tộc',
    body: 'Là cộng đồng chính trị - xã hội ổn định, có lãnh thổ, nhà nước, nền kinh tế, ngôn ngữ chung và ý thức về sự thống nhất quốc gia.',
    points: ['Gắn với chủ quyền quốc gia', 'Có cộng đồng lợi ích chung', 'Thể hiện trong một nhà nước thống nhất']
  },
  {
    eyebrow: 'Khái niệm',
    title: 'Dân tộc theo nghĩa tộc người',
    body: 'Là cộng đồng người có tên gọi, nguồn gốc lịch sử, tiếng nói, văn hóa, phong tục và ý thức tự giác tộc người riêng.',
    points: ['Có bản sắc văn hóa riêng', 'Có lịch sử cư trú và giao lưu', 'Cùng tham gia đại gia đình Việt Nam']
  },
  {
    eyebrow: 'Đặc trưng',
    title: 'Thống nhất trong đa dạng',
    body: 'Mỗi dân tộc có bản sắc riêng, nhưng đều bình đẳng trong cộng đồng Việt Nam thống nhất; khác biệt văn hóa không phải lý do để phân biệt đối xử.',
    points: ['Tôn trọng khác biệt', 'Gìn giữ bản sắc', 'Cùng nhau phát triển']
  }
];

export const marxLeninPrinciples: InfoCard[] = [
  {
    eyebrow: 'Cương lĩnh',
    title: 'Các dân tộc hoàn toàn bình đẳng',
    body: 'Không dân tộc nào có đặc quyền, đặc lợi; mọi dân tộc đều có quyền và nghĩa vụ ngang nhau trong đời sống xã hội.',
    points: ['Bình đẳng pháp lý', 'Bình đẳng cơ hội', 'Chống kỳ thị và áp bức dân tộc']
  },
  {
    eyebrow: 'Cương lĩnh',
    title: 'Các dân tộc được quyền tự quyết',
    body: 'Mỗi dân tộc có quyền quyết định con đường phát triển phù hợp, đồng thời gắn với lợi ích chung và sự thống nhất quốc gia.',
    points: ['Tôn trọng nguyện vọng chính đáng', 'Không áp đặt', 'Bảo vệ đoàn kết quốc gia']
  },
  {
    eyebrow: 'Cương lĩnh',
    title: 'Liên hiệp công nhân tất cả các dân tộc',
    body: 'Tinh thần đoàn kết của người lao động các dân tộc là cơ sở để chống chia rẽ, áp bức và xây dựng xã hội tiến bộ.',
    points: ['Đoàn kết giai cấp và dân tộc', 'Tương trợ trong phát triển', 'Chống tư tưởng ly khai, hẹp hòi']
  }
];

export const vietnamCharacteristics: InfoCard[] = [
  {
    eyebrow: 'Đặc điểm Việt Nam',
    title: 'Cư trú xen kẽ, địa bàn chiến lược',
    body: 'Các dân tộc Việt Nam cư trú đan xen trên nhiều vùng, trong đó nhiều địa bàn miền núi, biên giới có ý nghĩa quan trọng về kinh tế, quốc phòng và an ninh.',
    points: ['Tăng nhu cầu giao lưu, hợp tác', 'Cần chính sách phù hợp từng địa bàn', 'Đoàn kết gắn với ổn định quốc gia']
  },
  {
    eyebrow: 'Đặc điểm Việt Nam',
    title: 'Trình độ phát triển còn không đồng đều',
    body: 'Một số vùng dân tộc thiểu số và miền núi còn khó khăn về hạ tầng, giáo dục, y tế, sinh kế; vì vậy chính sách hỗ trợ đặc thù là cần thiết.',
    points: ['Thu hẹp khoảng cách phát triển', 'Tạo cơ hội công bằng', 'Giảm nghèo bền vững']
  },
  {
    eyebrow: 'Đặc điểm Việt Nam',
    title: 'Truyền thống đoàn kết lâu đời',
    body: 'Trong lịch sử dựng nước và giữ nước, các dân tộc Việt Nam luôn gắn bó, tương trợ và cùng bảo vệ cộng đồng quốc gia.',
    points: ['Đại đoàn kết toàn dân tộc', 'Tôn trọng văn hóa riêng', 'Cùng hướng tới phát triển bền vững']
  }
];

export const partyViewpoints: InfoCard[] = [
  {
    eyebrow: 'Quan điểm 1',
    title: 'Vấn đề dân tộc và đoàn kết dân tộc là chiến lược cơ bản, lâu dài, đồng thời cấp bách',
    body: 'Quan điểm này xem vấn đề dân tộc là một hệ thống quan hệ xã hội vận động khách quan: vừa cần tầm nhìn xuyên suốt, vừa đòi hỏi xử lý kịp thời trong thực tiễn hiện nay.',
    points: [
      'Có cơ sở lý luận trong sự phát triển lâu dài của quan hệ dân tộc',
      'Xuất phát từ thực tiễn Việt Nam đa tộc người và chênh lệch phát triển',
      'Gắn trực tiếp với đại đoàn kết, an sinh xã hội và quốc phòng - an ninh'
    ]
  },
  {
    eyebrow: 'Quan điểm 2',
    title: 'Bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển',
    body: 'Quan điểm này xác lập quan hệ giữa các tộc người trong một quốc gia thống nhất: bình đẳng là nền tảng, đoàn kết là sức mạnh, tương trợ là hành động để cùng phát triển.',
    points: [
      'Dựa trên nguyên tắc của Cương lĩnh dân tộc Mác - Lênin',
      'Các dân tộc có quyền lợi và nghĩa vụ ngang nhau',
      'Chống kỳ thị, chia rẽ, dân tộc lớn và dân tộc hẹp hòi'
    ]
  },
  {
    eyebrow: 'Quan điểm 3',
    title: 'Phát triển toàn diện vùng dân tộc và miền núi',
    body: 'Chính sách dân tộc phải tác động đồng bộ lên kinh tế, chính trị, quốc phòng - an ninh, văn hóa và xã hội tại vùng đồng bào dân tộc thiểu số và miền núi.',
    points: [
      'Phát triển kinh tế gắn với hạ tầng và sinh kế',
      'Củng cố hệ thống chính trị cơ sở và bảo vệ biên giới',
      'Nâng cao giáo dục, y tế, văn hóa và đời sống xã hội'
    ]
  }
];

export const policyPillars: PolicyPillar[] = [
  {
    id: 'politics',
    title: 'Chính trị: bình đẳng trong quyền làm chủ và tham gia quản lý đất nước',
    summary: 'Mọi dân tộc, dù đông người hay ít người, đều là thành viên bình đẳng trong cộng đồng Việt Nam và có quyền tham gia đời sống chính trị.',
    plain: 'Bình đẳng chính trị không chỉ là quyền trên giấy tờ; điều quan trọng là đồng bào dân tộc thiểu số có cơ hội thực sự để tiếng nói của mình được lắng nghe khi địa phương xây dựng đường, trường học, trạm y tế hoặc chính sách cộng đồng.',
    examples: [
      'Đồng bào có quyền bầu cử, ứng cử, góp ý, giám sát chính quyền và tham gia xây dựng đất nước.',
      'Bầu cử Quốc hội khóa XVI và HĐND các cấp nhiệm kỳ 2026-2031 có cơ cấu ứng cử viên đại biểu Quốc hội là người dân tộc thiểu số chiếm 21,76%.',
      'Chống kỳ thị, chia rẽ dân tộc và không để khó khăn kinh tế hoặc khác biệt văn hóa bị lợi dụng để gây mất đoàn kết.'
    ],
    sourceIds: ['election2026', 'nq88']
  },
  {
    id: 'economy',
    title: 'Kinh tế: ưu tiên phát triển vùng dân tộc và miền núi, thu hẹp khoảng cách',
    summary: 'Chính sách dân tộc tập trung phát triển kinh tế - xã hội ở miền núi, vùng đồng bào dân tộc thiểu số, nơi còn khó khăn về giao thông, việc làm, thu nhập, hạ tầng và dịch vụ công.',
    plain: 'Tương trợ trong kinh tế không chỉ là hỗ trợ tiền, mà là tạo điều kiện để đồng bào tự phát triển: có đường đi lại, điện, nước sạch, đất sản xuất, vốn vay, kỹ thuật, thị trường tiêu thụ, du lịch cộng đồng và sản phẩm nông - lâm nghiệp phù hợp địa phương.',
    examples: [
      'Chương trình mục tiêu quốc gia 1719 phát triển kinh tế - xã hội vùng dân tộc thiểu số và miền núi giai đoạn 2021-2030, giai đoạn I 2021-2025.',
      'Chương trình hướng tới khai thác tiềm năng địa phương, bảo đảm an sinh, giảm nghèo bền vững và thu hẹp khoảng cách mức sống.',
      'Các mô hình sinh kế như nuôi hươu ở Trà My và hỗ trợ bò sinh sản ở Đăk Rve giúp hộ dân tộc thiểu số tăng khả năng tự lực.'
    ],
    sourceIds: ['qd1719', 'baochinhphu1719', 'bdttg2025']
  },
  {
    id: 'culture',
    title: 'Văn hóa: giữ gìn bản sắc riêng, làm giàu văn hóa Việt Nam thống nhất',
    summary: 'Chính sách văn hóa hướng tới xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc và thống nhất trong đa dạng.',
    plain: 'Bình đẳng văn hóa nghĩa là không xem văn hóa của dân tộc nào cao hơn hay thấp hơn. Giữ gìn văn hóa dân tộc là chọn lọc giá trị tốt đẹp, loại bỏ hủ tục lạc hậu và biến văn hóa thành nguồn lực phát triển.',
    examples: [
      'Giữ gìn tiếng nói, chữ viết, lễ hội, trang phục, nhạc cụ, phong tục, tri thức dân gian và nghệ thuật truyền thống.',
      'Nghệ thuật Xòe Thái được UNESCO ghi danh ngày 15/12/2021 trong Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại.',
      'Bảo tồn văn hóa gắn với truyền dạy trong gia đình, đội văn nghệ, trường học, tôn vinh nghệ nhân và phát triển du lịch cộng đồng.'
    ],
    sourceIds: ['bvhttdl2021', 'nq88']
  },
  {
    id: 'society',
    title: 'Xã hội: bảo đảm an sinh, giáo dục, y tế và cơ hội phát triển',
    summary: 'Chính sách xã hội bảo đảm an sinh trong vùng đồng bào dân tộc thiểu số, từ giáo dục, y tế, giảm nghèo đến nhà ở, nước sạch, bình đẳng giới và bảo vệ phụ nữ, trẻ em.',
    plain: 'Bình đẳng xã hội không chỉ là mọi người đều có quyền đi học, khám bệnh và làm việc; người dân vùng sâu, vùng xa cũng cần có điều kiện thực tế để thực hiện các quyền đó.',
    examples: [
      'Chương trình 1719 có các nội dung về giáo dục - đào tạo, nâng cao chất lượng nguồn nhân lực, chăm sóc sức khỏe và phòng chống suy dinh dưỡng trẻ em.',
      'Thông tư 04/2023/TT-BGDĐT quy định tổ chức và hoạt động của trường phổ thông dân tộc nội trú.',
      'Dự án 8 trong Chương trình 1719 thúc đẩy bình đẳng giới và giải quyết vấn đề cấp thiết đối với phụ nữ, trẻ em vùng dân tộc thiểu số và miền núi.'
    ],
    sourceIds: ['qd1719', 'baochinhphu1719', 'tt04dtnt']
  },
  {
    id: 'security',
    title: 'An ninh - quốc phòng: ổn định vùng dân tộc, bảo vệ Tổ quốc từ cơ sở',
    summary: 'Chính sách dân tộc gắn với tăng cường sức mạnh bảo vệ Tổ quốc, ổn định chính trị, trật tự an toàn xã hội và an ninh biên giới.',
    plain: 'An ninh - quốc phòng ở vùng dân tộc không chỉ là chuyện quân sự. Khi người dân có đời sống ổn định, có việc làm, có niềm tin vào chính quyền và không bị phân biệt đối xử, các âm mưu chia rẽ khó tác động.',
    examples: [
      'Nhiều vùng đồng bào dân tộc thiểu số nằm ở miền núi, biên giới, vùng sâu, vùng xa và có vị trí chiến lược về quốc phòng, an ninh.',
      'Chương trình 1719 đặt mục tiêu xây dựng hệ thống chính trị cơ sở vững mạnh, giữ vững an ninh chính trị, trật tự an toàn xã hội và an ninh biên giới.',
      'Chính quyền địa phương, biên phòng, công an xã, già làng, trưởng bản và người có uy tín phối hợp tuyên truyền pháp luật, bảo vệ đường biên, cột mốc.'
    ],
    sourceIds: ['nq88', 'qd1719', 'baochinhphu1719']
  }
];

export const achievementMetrics: Metric[] = [
  {
    value: '98,4%',
    label: 'xã có đường ô tô đến trung tâm',
    detail: 'Hạ tầng giao thông giúp người dân tiếp cận giáo dục, y tế, thị trường và dịch vụ công thuận lợi hơn.',
    sourceIds: ['baochinhphu2024dtts']
  },
  {
    value: '96,7%',
    label: 'hộ dân tộc thiểu số dùng điện lưới',
    detail: 'Điện lưới mở rộng cơ hội học tập, sản xuất, kết nối thông tin và cải thiện đời sống.',
    sourceIds: ['baochinhphu2024dtts']
  },
  {
    value: '100%',
    label: 'xã có hạ tầng viễn thông',
    detail: 'Kết nối số giúp thu hẹp khoảng cách tiếp cận thông tin giữa vùng khó khăn và trung tâm.',
    sourceIds: ['baochinhphu2024dtts']
  },
  {
    value: '100%',
    label: 'xã có trường lớp mầm non, tiểu học, THCS',
    detail: 'Mạng lưới trường lớp giúp trẻ em vùng dân tộc thiểu số có điều kiện tiếp cận giáo dục từ sớm.',
    sourceIds: ['baochinhphu2024dtts']
  },
  {
    value: '99,3%',
    label: 'xã có trạm y tế',
    detail: 'Y tế cơ sở là điều kiện thiết yếu để bảo đảm an sinh và chăm sóc sức khỏe ban đầu.',
    sourceIds: ['baochinhphu2024dtts']
  },
  {
    value: 'trên 3%',
    label: 'mức giảm nghèo bình quân hằng năm ở nhiều tỉnh',
    detail: 'Giảm nghèo bền vững gắn với sinh kế, việc làm và khả năng tự phát triển của đồng bào.',
    sourceIds: ['baochinhphu2024dtts']
  }
];

export const achievementAreas: InfoCard[] = [
  {
    eyebrow: 'Hạ tầng',
    title: 'Hạ tầng cơ sở ngày càng được cải thiện',
    body: 'Đường giao thông nông thôn, đường đến trung tâm xã, đường liên thôn, liên bản cùng điện, nước, trường học, trạm y tế và viễn thông được đầu tư, nâng cấp.',
    points: ['98,4% xã vùng DTTS&MN có đường ô tô đến trung tâm', '96,7% hộ dân tộc thiểu số được sử dụng điện lưới quốc gia', '100% xã có hạ tầng viễn thông và được phủ sóng di động'],
    sourceIds: ['baochinhphu2024dtts']
  },
  {
    eyebrow: 'Giáo dục',
    title: 'Giáo dục có nhiều chuyển biến tích cực',
    body: 'Mạng lưới trường lớp ở vùng dân tộc thiểu số và miền núi ngày càng mở rộng, tạo cơ hội học tập bình đẳng hơn cho trẻ em vùng sâu, vùng xa.',
    points: ['100% xã có trường lớp mầm non, tiểu học và trung học cơ sở', 'Trường dân tộc nội trú, bán trú hỗ trợ học sinh về học tập và chỗ ở', 'Giáo dục góp phần nâng dân trí và đào tạo nguồn nhân lực tại chỗ'],
    sourceIds: ['baochinhphu2024dtts', 'qd1719']
  },
  {
    eyebrow: 'Y tế - an sinh',
    title: 'Chăm sóc sức khỏe và an sinh được quan tâm',
    body: 'Người dân vùng dân tộc thiểu số và miền núi có điều kiện tiếp cận tốt hơn với dịch vụ chăm sóc sức khỏe ban đầu, bảo hiểm y tế, tiêm chủng và hỗ trợ hộ khó khăn.',
    points: ['99,3% xã có trạm y tế', '83,5% xã có trạm y tế đạt chuẩn', '69,1% số trạm y tế có bác sĩ, y tá khám chữa bệnh cho người dân'],
    sourceIds: ['baochinhphu2024dtts', 'qd1719']
  },
  {
    eyebrow: 'Kinh tế - giảm nghèo',
    title: 'Sinh kế đa dạng, giảm nghèo đạt kết quả tích cực',
    body: 'Các chính sách hỗ trợ sản xuất, đào tạo nghề, vay vốn và chuyển đổi cơ cấu cây trồng vật nuôi giúp đồng bào dân tộc thiểu số cải thiện thu nhập.',
    points: ['Nhiều mô hình trồng cây dược liệu, cây ăn quả, chăn nuôi và du lịch cộng đồng', 'Tây Bắc tăng bình quân 8,0%/năm, Tây Nguyên 7,5%/năm, Tây Nam Bộ 7,0%/năm', 'Nhiều tỉnh có tỷ lệ giảm nghèo bình quân hằng năm trên 3%'],
    sourceIds: ['baochinhphu2024dtts', 'qd1719']
  },
  {
    eyebrow: 'Văn hóa',
    title: 'Bản sắc văn hóa được bảo tồn và phát huy',
    body: 'Việc giữ gìn tiếng nói, chữ viết, trang phục, lễ hội, phong tục, kiến trúc, âm nhạc, ẩm thực và tri thức dân gian luôn được quan tâm trong quá trình phát triển.',
    points: ['Nghị quyết 88/2019/QH14 nhấn mạnh giữ gìn, phát huy bản sắc văn hóa tốt đẹp', 'Lễ hội, nghề thủ công, dân ca, điệu múa và nhạc cụ dân tộc được phục dựng, giới thiệu rộng rãi', 'Du lịch cộng đồng giúp quảng bá văn hóa, tạo sinh kế và nuôi dưỡng niềm tự hào thế hệ trẻ'],
    sourceIds: ['nq88', 'bvhttdl2021']
  }
];

export const antiDiscriminationActions: InfoCard[] = [
  {
    eyebrow: 'Phê phán',
    title: 'Không kỳ thị, định kiến hoặc coi thường khác biệt',
    body: 'Kỳ thị dân tộc, định kiến vùng miền, coi thường tiếng nói, trang phục, phong tục hoặc tập quán của dân tộc khác đều đi ngược tinh thần bình đẳng, đoàn kết, tương trợ.',
    points: ['Không chế giễu sự khác biệt văn hóa', 'Không xem văn hóa của mình cao hơn văn hóa khác', 'Không đánh đồng một cá nhân với cả cộng đồng']
  },
  {
    eyebrow: 'Phê phán',
    title: 'Không tiếp tay thông tin chia rẽ trên mạng',
    body: 'Lời nói miệt thị, thông tin sai lệch hoặc nội dung kích động chia rẽ có thể lan truyền nhanh, làm tổn thương cộng đồng và suy yếu khối đại đoàn kết toàn dân tộc.',
    points: ['Kiểm chứng trước khi chia sẻ', 'Sử dụng ngôn từ văn minh', 'Không tham gia hoặc lan truyền nội dung gây mất đoàn kết']
  },
  {
    eyebrow: 'Kêu gọi',
    title: 'Bắt đầu từ hành động nhỏ của sinh viên',
    body: 'Bình đẳng, đoàn kết, tương trợ không chỉ là chủ trương chính sách mà còn là trách nhiệm của mỗi công dân, đặc biệt là thế hệ trẻ.',
    points: ['Tôn trọng văn hóa, ngôn ngữ, phong tục, trang phục và lối sống', 'Sẵn sàng giúp đỡ bạn bè trong học tập và đời sống', 'Chủ động tìm hiểu, học hỏi và lan tỏa giá trị tốt đẹp của các dân tộc']
  }
];

export const solidarityCommitments = [
  'Tôn trọng khác biệt văn hóa, ngôn ngữ, phong tục và lối sống.',
  'Không sử dụng ngôn từ kỳ thị hoặc chia sẻ nội dung kích động chia rẽ dân tộc.',
  'Chủ động tìm hiểu các giá trị tốt đẹp của 54 dân tộc Việt Nam.',
  'Cởi mở, lắng nghe và giúp đỡ bạn bè trong học tập, đời sống và không gian mạng.',
  'Gìn giữ thông điệp: 54 dân tộc - 1 đại gia đình Việt Nam.'
];

export const gameQuestions: Question[] = [
  {
    id: 1,
    question: 'Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin gồm nội dung nào?',
    options: ['Bình đẳng, tự quyết, liên hiệp công nhân các dân tộc', 'Đồng hóa văn hóa, tập trung kinh tế, mở rộng lãnh thổ', 'Tự do thương mại, cạnh tranh, đô thị hóa', 'Tách biệt dân cư, hạn chế giao lưu, bảo tồn khép kín'],
    correctAnswer: 0,
    explanation: 'Ba nội dung cơ bản là các dân tộc hoàn toàn bình đẳng, các dân tộc được quyền tự quyết, và liên hiệp công nhân tất cả các dân tộc.'
  },
  {
    id: 2,
    question: 'Theo phần thành tựu, chỉ số nào thể hiện hạ tầng giao thông vùng dân tộc thiểu số và miền núi được cải thiện?',
    options: ['98,4% xã có đường ô tô đến trung tâm', '10% xã có trường học', '54% hộ có điện lưới', '3% xã có hạ tầng viễn thông'],
    correctAnswer: 0,
    explanation: 'Số liệu 98,4% xã có đường ô tô đến trung tâm cho thấy giao thông đã giúp vùng khó khăn kết nối thuận lợi hơn.'
  },
  {
    id: 3,
    question: 'Hành vi nào cần phê phán vì làm suy yếu khối đại đoàn kết dân tộc?',
    options: ['Chế giễu tiếng nói, trang phục hoặc phong tục của dân tộc khác', 'Tôn trọng phong tục khác biệt', 'Kiểm chứng thông tin trước khi chia sẻ', 'Giúp đỡ bạn bè trong học tập, đời sống'],
    correctAnswer: 0,
    explanation: 'Kỳ thị, chế giễu hoặc lan truyền định kiến làm tổn thương cộng đồng và đi ngược tinh thần bình đẳng, đoàn kết, tương trợ.'
  },
  {
    id: 4,
    question: 'Nghị quyết 88/2019/QH14 liên quan đến nội dung nào?',
    options: ['Đề án tổng thể phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi giai đoạn 2021-2030', 'Quy chế thi tốt nghiệp trung học phổ thông', 'Luật giao thông đường bộ', 'Chính sách thuế xuất nhập khẩu'],
    correctAnswer: 0,
    explanation: 'Nghị quyết 88/2019/QH14 phê duyệt Đề án tổng thể cho vùng đồng bào dân tộc thiểu số và miền núi giai đoạn 2021-2030.'
  },
  {
    id: 5,
    question: 'Quyết định 1719/QĐ-TTg phê duyệt chương trình nào?',
    options: ['Chương trình mục tiêu quốc gia phát triển kinh tế - xã hội vùng dân tộc thiểu số và miền núi', 'Chương trình đào tạo lái xe quốc gia', 'Chương trình phát triển công nghiệp ô tô', 'Chương trình chuyển đổi cây xanh đô thị'],
    correctAnswer: 0,
    explanation: 'Quyết định 1719/QĐ-TTg phê duyệt Chương trình mục tiêu quốc gia giai đoạn 2021-2030, giai đoạn I 2021-2025.'
  },
  {
    id: 6,
    question: 'Ý nghĩa của khẩu hiệu “54 dân tộc - Một Việt Nam đoàn kết” là gì?',
    options: ['Khẳng định thống nhất quốc gia trong sự đa dạng bản sắc', 'Xóa bỏ mọi khác biệt văn hóa', 'Chỉ nhấn mạnh một dân tộc duy nhất', 'Tách biệt các cộng đồng để tránh giao lưu'],
    correctAnswer: 0,
    explanation: 'Thông điệp nhấn mạnh sự thống nhất của cộng đồng Việt Nam nhưng vẫn tôn trọng bản sắc riêng của từng dân tộc.'
  }
];

export const aiTools: AiTool[] = [
  {
    name: 'NotebookLM',
    purpose: 'Tổng hợp và đối chiếu nội dung lý thuyết Chương 6 về vấn đề dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội.',
    result: 'Xác định các ý trọng tâm: khái niệm dân tộc, cương lĩnh dân tộc, đặc điểm dân tộc Việt Nam, quan điểm và chính sách dân tộc.',
    verification: 'Đối chiếu lại với giáo trình, slide bài học và tài liệu chính thống trước khi đưa lên website.'
  },
  {
    name: 'ChatGPT',
    purpose: 'Hỗ trợ lập dàn ý, chọn lọc nội dung, soạn nháp câu chữ và gợi ý cấu trúc website.',
    result: 'Tạo bản nháp nội dung, câu hỏi quiz, lời dẫn thuyết trình và cách trình bày dễ theo dõi.',
    verification: 'Sinh viên rút gọn, sửa văn phong, loại bỏ ý chưa có căn cứ và gắn nguồn chính thống.',
    links: [
      { label: 'Prompt/log 1', url: 'https://chatgpt.com/share/6a1eb625-8f44-839d-98a3-7c3d53f5ca9d' },
      { label: 'Prompt/log 2', url: 'https://chatgpt.com/share/6a1fe51b-aafc-83ec-8c78-40f2a36a80da' },
      { label: 'Prompt/log 3', url: 'https://chatgpt.com/share/6a1fe60c-dae0-839e-877d-fe114c1c49b1' }
    ]
  },
  {
    name: 'Lovable',
    purpose: 'Tham khảo bố cục web, cách chia section và trình bày nội dung học thuật trực quan.',
    result: 'Gợi ý khung bố cục card, hero, phần chính sách, thành tựu và lời kêu gọi hành động.',
    verification: 'Chỉ giữ ý tưởng bố cục phù hợp; toàn bộ nội dung học thuật được kiểm chứng lại.'
  },
  {
    name: 'Pinterest',
    purpose: 'Tham khảo ý tưởng hình minh họa, poster, màu sắc và infographic về đoàn kết dân tộc.',
    result: 'Gợi ý hướng thị giác cho thẻ nội dung, poster thông điệp và cách dùng hình ảnh văn hóa.',
    verification: 'Chỉ dùng hình hợp lệ, có nguồn rõ ràng hoặc tài sản sẵn có/tự tạo.'
  }
];

export const verificationSteps = [
  'Đánh dấu nội dung do AI gợi ý: nhận định, số liệu, ví dụ, trích dẫn.',
  'Đối chiếu với giáo trình, slide bài học, nghị quyết và văn bản chính thức.',
  'Phân loại kết quả: hợp lệ, cần chỉnh sửa, chưa đủ căn cứ hoặc sai.',
  'Chỉ giữ nội dung đã xác minh; nhóm chịu trách nhiệm với bản cuối cùng.'
];

export const teamAssignments = [
  { name: 'Đào', task: 'Khái niệm, đặc trưng cơ bản của dân tộc' },
  { name: 'Linh', task: 'Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin, đặc điểm dân tộc ở Việt Nam' },
  { name: 'Hiển', task: 'Quan điểm của Đảng, Nhà nước Việt Nam về vấn đề dân tộc' },
  { name: 'Thỏ', task: 'Chính sách dân tộc của Đảng, Nhà nước Việt Nam' },
  { name: 'Tiên', task: 'Thành tựu phát triển, phê phán chia rẽ và kêu gọi đoàn kết' }
];
