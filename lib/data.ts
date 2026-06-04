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
    id: 'bvhttdl2021',
    title: 'Nghệ thuật Xòe Thái được UNESCO ghi danh vào Danh sách di sản văn hóa phi vật thể đại diện của nhân loại',
    publisher: 'Bộ Văn hóa, Thể thao và Du lịch',
    url: 'https://bvhttdl.gov.vn/nghe-thuat-xoe-thai-duoc-unesco-ghi-danh-vao-danh-sach-di-san-van-hoa-phi-vat-the-dai-dien-cua-nhan-loai-20211215183109208.htm'
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
    title: 'Vấn đề dân tộc là chiến lược cơ bản, lâu dài và cấp bách',
    body: 'Công tác dân tộc không phải nhiệm vụ nhất thời. Đây là vấn đề chiến lược gắn với phát triển, an sinh, quốc phòng - an ninh và niềm tin của nhân dân.',
    points: ['Ổn định xã hội', 'Bảo vệ địa bàn chiến lược', 'Không để khó khăn bị lợi dụng để chia rẽ']
  },
  {
    eyebrow: 'Quan điểm 2',
    title: 'Bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển',
    body: 'Mọi dân tộc trong đại gia đình Việt Nam đều bình đẳng; đoàn kết và tương trợ là phương thức để cùng vượt qua chênh lệch phát triển.',
    points: ['Bình đẳng về quyền', 'Tôn trọng bản sắc', 'Hỗ trợ vùng khó khăn phát triển']
  },
  {
    eyebrow: 'Quan điểm 3',
    title: 'Phát triển toàn diện vùng dân tộc và miền núi',
    body: 'Phát triển vùng dân tộc thiểu số cần đồng bộ về kinh tế, chính trị, văn hóa, xã hội, môi trường và an ninh - quốc phòng.',
    points: ['Hạ tầng thiết yếu', 'Giáo dục - y tế', 'Bảo tồn văn hóa gắn với sinh kế']
  }
];

export const policyPillars: PolicyPillar[] = [
  {
    id: 'politics',
    title: 'Chính trị: quyền làm chủ và tiếng nói cộng đồng',
    summary: 'Bảo đảm mọi dân tộc đều là thành viên bình đẳng, có quyền tham gia quản lý đất nước và giám sát đời sống chính trị.',
    plain: 'Bình đẳng chính trị không chỉ nằm trên văn bản; điều quan trọng là tiếng nói của đồng bào được lắng nghe khi xây dựng chính sách tại địa phương.',
    examples: ['Tăng đại diện và tiếng nói của đồng bào trong cơ quan dân cử', 'Phát huy vai trò già làng, trưởng bản, người có uy tín', 'Chống mọi hành vi lợi dụng khó khăn để kích động chia rẽ'],
    sourceIds: ['nq88']
  },
  {
    id: 'economy',
    title: 'Kinh tế: ưu tiên phát triển và giảm nghèo bền vững',
    summary: 'Đầu tư hạ tầng, sinh kế, vốn, kỹ thuật, thị trường và dịch vụ công để vùng khó khăn tự phát triển.',
    plain: 'Tương trợ trong kinh tế không chỉ là hỗ trợ tiền, mà là tạo điều kiện để đồng bào có đường, điện, nước, đất sản xuất, kỹ năng và đầu ra ổn định.',
    examples: ['Chương trình MTQG 1719 giai đoạn 2021-2030', 'Phát triển sản xuất theo chuỗi giá trị', 'Khai thác thế mạnh nông - lâm nghiệp, du lịch cộng đồng'],
    sourceIds: ['qd1719', 'bdttg2025']
  },
  {
    id: 'culture',
    title: 'Văn hóa: giữ bản sắc, làm giàu văn hóa Việt Nam',
    summary: 'Tôn trọng tiếng nói, chữ viết, lễ hội, trang phục, tri thức dân gian và nghệ thuật truyền thống của từng dân tộc.',
    plain: 'Không có văn hóa dân tộc nào cao hơn hay thấp hơn. Mỗi bản sắc riêng đều góp phần làm phong phú văn hóa Việt Nam thống nhất.',
    examples: ['Bảo tồn và truyền dạy nghệ thuật, lễ hội, nghề thủ công', 'Xòe Thái được UNESCO ghi danh năm 2021', 'Gắn bảo tồn văn hóa với du lịch cộng đồng'],
    sourceIds: ['bvhttdl2021', 'nq88']
  },
  {
    id: 'society',
    title: 'Xã hội: an sinh, giáo dục, y tế và cơ hội phát triển',
    summary: 'Bảo đảm người dân vùng sâu, vùng xa có điều kiện thực hiện quyền học tập, chăm sóc sức khỏe và phát triển năng lực.',
    plain: 'Công bằng xã hội đòi hỏi hỗ trợ đặc thù: đường đến trường, trường nội trú, trạm y tế, bảo hiểm, nước sạch, nhà ở và bình đẳng giới.',
    examples: ['Dự án phát triển giáo dục và nguồn nhân lực', 'Chăm sóc sức khỏe, phòng chống suy dinh dưỡng trẻ em', 'Dự án 8 về bình đẳng giới, phụ nữ và trẻ em'],
    sourceIds: ['qd1719', 'bdttg2025']
  },
  {
    id: 'security',
    title: 'An ninh - quốc phòng: dân yên, biên giới vững',
    summary: 'Ổn định vùng dân tộc, củng cố hệ thống chính trị cơ sở, bảo vệ an ninh biên giới và trật tự an toàn xã hội.',
    plain: 'Khi đời sống ổn định, người dân có niềm tin và không bị phân biệt đối xử, các luận điệu chia rẽ khó có thể tác động.',
    examples: ['Giữ vững an ninh chính trị ở địa bàn chiến lược', 'Phối hợp chính quyền, biên phòng, công an và người có uy tín', 'Tuyên truyền pháp luật, bảo vệ đường biên, cột mốc'],
    sourceIds: ['nq88', 'qd1719']
  }
];

export const achievementMetrics: Metric[] = [
  {
    value: '98,4%',
    label: 'xã có đường ô tô đến trung tâm',
    detail: 'Hạ tầng giao thông giúp người dân tiếp cận giáo dục, y tế, thị trường và dịch vụ công thuận lợi hơn.',
    sourceIds: ['bdttg2025']
  },
  {
    value: '96,7%',
    label: 'hộ dân tộc thiểu số dùng điện lưới',
    detail: 'Điện lưới mở rộng cơ hội học tập, sản xuất, kết nối thông tin và cải thiện đời sống.',
    sourceIds: ['bdttg2025']
  },
  {
    value: '100%',
    label: 'xã có hạ tầng viễn thông',
    detail: 'Kết nối số giúp thu hẹp khoảng cách tiếp cận thông tin giữa vùng khó khăn và trung tâm.',
    sourceIds: ['bdttg2025']
  },
  {
    value: '99,3%',
    label: 'xã có trạm y tế',
    detail: 'Y tế cơ sở là điều kiện thiết yếu để bảo đảm an sinh và chăm sóc sức khỏe ban đầu.',
    sourceIds: ['bdttg2025']
  }
];

export const achievementAreas: InfoCard[] = [
  {
    eyebrow: 'Hạ tầng',
    title: 'Diện mạo vùng khó khăn từng bước thay đổi',
    body: 'Đường giao thông, điện, nước, trường học, trạm y tế và viễn thông được đầu tư, giúp đồng bào kết nối tốt hơn với dịch vụ xã hội và thị trường.',
    points: ['Kết nối trung tâm xã - huyện - vùng', 'Mở rộng tiếp cận dịch vụ công', 'Tạo nền cho sinh kế và du lịch cộng đồng'],
    sourceIds: ['bdttg2025']
  },
  {
    eyebrow: 'Giáo dục - y tế',
    title: 'Cơ hội phát triển con người được mở rộng',
    body: 'Mạng lưới trường lớp, trường dân tộc nội trú/bán trú, trạm y tế và chính sách bảo hiểm giúp người dân vùng sâu, vùng xa tiếp cận quyền học tập và chăm sóc sức khỏe tốt hơn.',
    points: ['Nâng cao dân trí', 'Đào tạo nguồn nhân lực tại chỗ', 'Không để ai bị bỏ lại phía sau'],
    sourceIds: ['qd1719', 'bdttg2025']
  },
  {
    eyebrow: 'Sinh kế',
    title: 'Giảm nghèo gắn với tự lực phát triển',
    body: 'Các mô hình sản xuất, vay vốn, đào tạo nghề, chuyển đổi cây trồng vật nuôi và sản phẩm địa phương giúp người dân chủ động vươn lên.',
    points: ['Phát triển chuỗi giá trị', 'Tận dụng lợi thế bản địa', 'Giảm phụ thuộc vào hỗ trợ ngắn hạn'],
    sourceIds: ['qd1719', 'bdttg2025']
  },
  {
    eyebrow: 'Văn hóa',
    title: 'Bản sắc trở thành nguồn lực phát triển',
    body: 'Việc phục dựng lễ hội, truyền dạy nghệ thuật dân gian, bảo tồn tiếng nói và phát triển du lịch cộng đồng vừa giữ bản sắc, vừa tạo sinh kế.',
    points: ['Tự hào văn hóa', 'Tôn vinh nghệ nhân', 'Giao lưu trong thống nhất'],
    sourceIds: ['nq88', 'bvhttdl2021']
  }
];

export const antiDiscriminationActions: InfoCard[] = [
  {
    eyebrow: 'Phê phán',
    title: 'Không chế giễu tiếng nói, trang phục, phong tục',
    body: 'Kỳ thị văn hóa làm tổn thương cá nhân và cộng đồng, đi ngược truyền thống đoàn kết của dân tộc Việt Nam.',
    points: ['Không dùng ngôn từ miệt thị', 'Không biến khác biệt thành trò cười', 'Không đánh đồng một cá nhân với cả cộng đồng']
  },
  {
    eyebrow: 'Phê phán',
    title: 'Không tiếp tay thông tin chia rẽ trên mạng',
    body: 'Nội dung sai lệch, kích động hoặc định kiến có thể lan truyền nhanh và làm suy yếu khối đại đoàn kết toàn dân tộc.',
    points: ['Kiểm chứng trước khi chia sẻ', 'Báo cáo nội dung kích động', 'Tranh luận văn minh, có căn cứ']
  },
  {
    eyebrow: 'Kêu gọi',
    title: 'Bắt đầu từ hành động nhỏ của sinh viên',
    body: 'Đoàn kết không chỉ là khẩu hiệu. Đó là thái độ lắng nghe, tôn trọng, giúp đỡ và học hỏi từ bạn bè khác vùng, khác dân tộc.',
    points: ['Tôn trọng tên gọi và bản sắc', 'Sẵn sàng hỗ trợ trong học tập', 'Lan tỏa câu chuyện tích cực']
  }
];

export const solidarityCommitments = [
  'Tôn trọng khác biệt văn hóa, ngôn ngữ, phong tục và lối sống.',
  'Không chia sẻ thông tin sai lệch hoặc nội dung kích động chia rẽ dân tộc.',
  'Chủ động tìm hiểu các giá trị tốt đẹp của 54 dân tộc Việt Nam.',
  'Tương trợ trong học tập, đời sống và không gian mạng.',
  'Gắn bảo tồn bản sắc với phát triển bền vững.'
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
    question: 'Vì sao chính sách dân tộc cần ưu tiên vùng dân tộc thiểu số và miền núi?',
    options: ['Vì các vùng này thường còn khó khăn về hạ tầng, sinh kế, giáo dục và y tế', 'Vì cần tách vùng dân tộc khỏi cộng đồng quốc gia', 'Vì chỉ có miền núi mới có văn hóa', 'Vì mọi vùng đã phát triển ngang nhau'],
    correctAnswer: 0,
    explanation: 'Ưu tiên nguồn lực nhằm thu hẹp khoảng cách phát triển và tạo cơ hội công bằng hơn cho đồng bào.'
  },
  {
    id: 3,
    question: 'Hành vi nào thể hiện tinh thần đoàn kết, tương trợ giữa các dân tộc?',
    options: ['Tôn trọng phong tục khác biệt và giúp đỡ nhau trong học tập, đời sống', 'Chế giễu giọng nói của bạn khác dân tộc', 'Chia sẻ nội dung kích động chia rẽ', 'Coi văn hóa của mình cao hơn văn hóa khác'],
    correctAnswer: 0,
    explanation: 'Đoàn kết bắt đầu từ thái độ tôn trọng, lắng nghe và hỗ trợ thực chất.'
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
