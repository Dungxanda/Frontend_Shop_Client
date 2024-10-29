import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq */}

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)}
          >
            <span className="text-lg font-medium text-gray-900">
             Bạn muốn hỏi gì liên quan về các tác phẩm văn học ? 
            </span>
            {activeTab === 2 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 2 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
              Giới thiệu Fahasa
THÔNG TIN GIỚI THIỆU CÔNG TY FAHASA

Fahasa

Nguồn nhân lực

Để xây dựng Thương hiệu mạnh, một trong những định hướng quan trọng hàng đầu của FAHASA là chiến lược phát triển nguồn nhân lực - mấu chốt của mọi sự thành công.

FAHASA có hơn 2.200 CB-CNV, trình độ chuyên môn giỏi, nhiệt tình, năng động, chuyên nghiệp. Lực lượng quản lý FAHASA có thâm niên công tác, giỏi nghiệp vụ nhiều kinh nghiệm, có khả năng quản lý tốt và điều hành đơn vị hoạt động hiệu quả.

Kết hợp tuyển dụng nguồn nhân lực đầu vào có chất lượng và kế hoạch bồi dưỡng kiến thức, rèn luyện bổ sung các kỹ năng và chuẩn bị đội ngũ kế thừa theo hướng chính qui thông qua các lớp học ngắn hạn, dài hạn; các lớp bồi dưỡng CB-CNV được tổ chức trong nước cũng như ở nước ngoài đều được lãnh đạo FAHASA đặc biệt quan tâm và tạo điều kiện triển khai thực hiện. Chính vì thế, trình độ chuyên môn của đội ngũ CB-CNV ngày càng được nâng cao, đáp ứng nhu cầu ngày càng tăng của công việc cũng như sự phát triển của xã hội đang trên đường hội nhập.

Về hàng hóa

Công ty FAHASA chuyên kinh doanh: sách quốc văn, ngoại văn, văn hóa phẩm, văn phòng phẩm, dụng cụ học tập, quà lưu niệm, đồ chơi dành cho trẻ em… Một số Nhà sách trực thuộc Công ty FAHASA còn kinh doanh các mặt hàng siêu thị như: hàng tiêu dùng, hàng gia dụng, hóa  mỹ phẩm…

Sách quốc văn với nhiều thể loại đa dạng như sách giáo khoa – tham khảo, giáo trình, sách học ngữ, từ điển, sách tham khảo thuộc nhiều chuyên ngành phong phú: văn học, tâm lý – giáo dục, khoa học kỹ thuật, khoa học kinh tế - xã hội, khoa học thường thức, sách phong thủy, nghệ thuật sống, danh ngôn, sách thiếu nhi, truyện tranh, truyện đọc, từ điển, công nghệ thông tin, khoa học – kỹ thuật, nấu ăn, làm đẹp...  của nhiều Nhà xuất bản, nhà cung cấp sách có uy tín như: NXB Trẻ, Giáo Dục, Kim Đồng, Văn hóa -Văn Nghệ, Tổng hợp TP.HCM, Chính Trị Quốc Gia; Công ty Đông A, Nhã Nam, Bách Việt, Alphabook, Thái Hà, Minh Lâm, Đinh Tị, Minh Long, TGM, Sáng Tạo Trí Việt, Khang Việt, Toàn Phúc…

Sách ngoại văn bao gồm: từ điển, giáo trình, tham khảo, truyện tranh thiếu nhi , sách học ngữ, từ vựng, ngữ pháp, luyện thi TOEFL, TOEIC, IELS…được nhập từ các NXB nước ngoài như: Cambridge, Mc Graw-Hill, Pearson Education, Oxford, Macmillan, Cengage Learning…

Văn phòng phẩm, dụng cụ học tập, đồ chơi dành cho trẻ em, hàng lưu niệm… đa dạng, phong phú, mẫu mã đẹp, chất lượng tốt, được cung ứng bởi các công ty, nhà cung cấp uy tín như: Thiên Long, XNK Bình Tây, Hạnh Thuận, Ngô Quang, Việt Văn, Trương Vui, Hương Mi, Phương Nga, Việt Tinh Anh, Chăm sóc trẻ em Việt, Mẹ và em bé…

Cùng với việc phát hành độc quyền nhiều ấn bản các loại của các Nhà xuất bản là năng lực in ấn, sản xuất cung ứng nguồn hàng của Xí nghiệp in FAHASA, đã giúp Công ty luôn chủ động được nguồn hàng, nhất là các mặt hàng độc quyền như: lịch bloc, tập học sinh, sổ tay cao cấp, agenda, văn phòng phẩm, dụng cụ học tập…

Hệ thống Nhà sách chuyên nghiệp

Mạng lưới phát hành của Công ty FAHASA rộng khắp trên toàn quốc, gồm 5 Trung tâm sách, 1 Xí nghiệp in và với gần 60 Nhà sách trải dọc khắp các tỉnh thành từ TP.HCM đến Thủ Đô Hà Nội, miền Trung, Tây Nguyên, miền Đông và Tây Nam Bộ như: Hà Nội, Vĩnh Phúc, Hải Phòng, Thanh Hóa, Hà Tĩnh, Huế, Đà Nẵng, Quảng Nam, Quảng Ngãi, Quy Nhơn, Nha Trang, Gia Lai, Đăklăk, Bảo Lộc - Lâm Đồng, Ninh Thuận, Bình Thuận, Bình Phước, Bình Dương, Đồng Nai, Vũng Tàu, Long An, Tiền Giang, Bến Tre, Vĩnh Long, Cần Thơ, Hậu Giang, An Giang, Kiên Giang, Sóc Trăng, Cà Mau.

Năm 2004 Công ty đã được Cục Sở hữu Trí tuệ Việt Nam công nhận sở hữu độc quyền tên thương hiệu FAHASA.

Năm 2005, Công ty FAHASA được Trung tâm sách kỷ lục Việt Nam công nhận là đơn vị có hệ thống Nhà sách nhiều nhất Việt Nam; được Tạp chí The Guide công nhận Nhà sách Xuân Thu - đơn vị trực thuộc Công ty FAHASA là Nhà sách Ngoại văn đẹp nhất, lớn nhất, quy mô nhất, nhiều sách nhất ở Thành phố Hồ Chí Minh và cả nước.

Năm 2012 FAHASA là Doanh nghiệp nằm trong Top 10 nhà bán lẻ hàng đầu Việt Nam. Đặc biệt năm 2006, 2009, 2012 FAHASA đạt danh hiệu Top 500 Nhà bán lẻ hàng đầu Châu Á Thái Bình Dương, giải thưởng được tạp chí Retail Asia (Singapore) bình chọn.

Kinh nghiệm hoạt động

Là đơn vị có gần 40 năm kinh doanh và phục vụ xã hội, nên FAHASA đã tích lũy được nhiều kinh nghiệm trong việc nghiên cứu thị trường, phân tích tài chính, định hướng phát triển, hoạch định chiến lược kinh doanh và khả năng tiếp thị giỏi… Đồng thời FAHASA còn có nhiều kinh nghiệm trong việc tổ chức các cuộc Hội thảo, Triển lãm và giới thiệu sách quốc văn, ngoại văn với qui mô lớn, ấn tượng.

FAHASA luôn là đơn vị đi tiên phong trong nhiều hoạt động xã hội, điển hình là việc tham gia tổ chức các Hội sách ở TP.HCM như: Hội sách Thành Phố Hồ Chí Minh, Hội sách Thiếu nhi ngoại thành, Hội sách Mùa khai trường, Hội sách Học đường, Hội sách Trường Quốc tế… Nổi bật nhất là Hội sách Thành Phố Hồ Chí Minh, được định kỳ tổ chức 2 năm một lần. Đây là Hội sách có qui mô lớn, tầm ảnh hưởng rộng, đã để lại ý nghĩa kinh tế, văn hóa và xã hội sâu sắc. Hội sách không chỉ là nơi hội tụ văn hóa lý tưởng đối với người dân TP.HCM mà còn là một thông điệp văn hóa tôn vinh cho các hoạt động Xuất bản – Phát hành sách cả nước, nâng tầm cho việc giao lưu, trao đổi văn hóa với bạn bè thế giới, đồng thời góp phần đem sách - tri thức đến gần hơn với mọi tầng lớp nhân dân, phục vụ tốt hơn nhu cầu văn hóa tinh thần của xã hội

Xí nghiệp in FAHASA

Gồm Phân xưởng in và Phân xưởng thành phẩm: với nhiều máy in hiện đại của Đức và Nhật: Heidelberg, Komori, Akiyama, Lithrone, Mitsubishi… cùng nhiều máy móc, thiết bị khác như: máy cắt, máy vô bìa sách, máy bế hộp…  Đội ngũ công nhân tay nghề cao, đã cho ra những sản phẩm có chất lượng tốt, nhờ đó, FAHASA luôn chủ động được nguồn hàng, sản xuất theo đúng nhu cầu - thị hiếu của khách hàng và hình thành được quy trình in & phát hành; phương thức này không chỉ cho ra những sản phẩm đảm bảo chất lượng mà còn giúp cho việc giảm giá thành, tăng hiệu quả cạnh tranh và kinh doanh cao hơn.

Những sản phẩm chủ yếu do Xí nghiệp In FAHASA sản xuất như: tập học sinh, sổ tay cao cấp, lịch, bao bì, sổ notebook, agenda, catalogue, brochure quảng cáo, văn phòng phẩm…

FAHASA NHÀ PHÂN PHỐI SÁCH NGOẠI VĂN CHUYÊN NGHIỆP

Dù là những bạn đọc nhỏ tuổi hay những bậc cao niên, dù là bạn đọc ở TP.HCM hay ở các tỉnh thành khác trên cả nước thì tên FAHASA đã trở nên thân quen và tin cậy với họ trong những năm qua. Có thể nói, hệ thống gần 60 Nhà sách của FAHASA là những điểm sinh hoạt văn hóa thân quen dành cho mọi đối tượng bạn đọc. Trong số đó, nhà sách Xuân Thu ở địa chỉ cũ số 185, Đồng Khởi, Quận 1, TP.HCM, nay chuyển về 391-391A Trần Hưng Đạo, Quận 1, TP.HCM tọa lạc tại một địa điểm khá lý tưởng nằm ở trung tâm Thành phố, từ lâu đã là địa chỉ quen thuộc của đông đảo bạn đọc trong và ngoài nước và nơi đây được xem là địa điểm phát hành sách ngoại văn được xếp vào loại bậc nhất ở TP.HCM và của cả nước.

Cùng với xu thế hội nhập quốc tế đang ngày càng mở rộng, nhu cầu tìm hiểu và giao lưu văn hoá giữa các nước đang ngày càng phát triển, Công ty FAHASA ngày càng xứng đáng với tầm vóc là nhà phát hành đáng tin cậy của hơn 200 NXB trên Thế giới như Oxford, Cambridge, Pearson, McGraw-Hill, MacMillan, Cengage Learning, Reed Elsevier, Taylor & Francis, Heinemann, Hachette édition, Larousse, Clé International, Bắc Kinh, Thượng Hải, Hồng Kông… Thế mạnh của Công ty FAHASA trong lĩnh vực phân phối sách ngoại văn bao gồm cả hai mảng chính: sách học ngữ English language teaching (ELT) và mảng sách chuyên ngành (Academic).

Về lĩnh vực sách ELT, hiện nay FAHASA đã và đang là nhà phân phối tất cả các loại sách học ngữ, từ điển, các giáo trình tiếng Anh với đủ mọi cấp độ cho các Trung tâm Anh ngữ, các trường Đại học ở TP.HCM nói riêng và cả nước nói chung thông qua các loại sách từ những NXB danh tiếng trên thế giới như Oxford, Cambridge, Pearson Education, Cengage Learning, McGraw-Hill… Đặc biệt, ở lĩnh vực này FAHASA là nhà phát hành độc quyền các ấn phẩm của NXB Oxford tại thị trường Việt Nam bộ sách Let’s Go; hợp tác với NXB Cambridge in ấn và phát hành tại Việt Nam một số bộ giáo trình Anh ngữ New Interchange, Connect, American Primary Colors; Vocabulary in use; Grammar in use… nhằm giảm bớt giá thành so với giá sách nhập khẩu, phục vụ nhu cầu tìm hiểu nâng cao vốn tiếng Anh của đông đảo độc giả.

Về lĩnh vực sách chuyên ngành (Academic), FAHASA vẫn được xem là nhà phân phối lớn nhất các loại sách chuyên ngành phục vụ nhu cầu học tập, nghiên cứu cho các bạn sinh viên, các giáo viên, giáo sư, những người làm công tác nghiên cứu và hầu hết mọi đối tượng bạn đọc. FAHASA luôn năng động và nhạy bén trong việc nắm bắt nhu cầu của khách hàng, khai thác tối đa và phục vụ kịp thời nhu cầu của bạn đọc gần xa. Hiện nay, FAHASA đang là nhà phát hành cho các tập đoàn xuất bản lớn của Anh, Mỹ như NXB McGraw-Hill, Pearson Education, Cengage Learning, John Wiley…. Đến với cửa hàng sách ngoại văn của FAHASA bạn đọc sẽ tìm thấy hàng loạt các loại sách chuyên ngành bao gồm các thể loại đa dạng thuộc các lĩnh vực Kinh tế, Tin học, Y học, Kiến trúc, Hội họa, Khoa học kỹ thuật và các loại sách tham khảo khác.

Với phương châm phục vụ quý khách ngày càng tốt hơn, Công ty FAHASA sẽ nỗ lực và phấn đấu hơn nữa để mang đến cho bạn đọc nhiều sách hay, sách tốt nên không chỉ ở Nhà sách Xuân Thu, Tân Định, Sài Gòn là nơi phát hành sách đầy đủ sách ngoại văn mà trong một tương lai không xa, bạn đọc có thể tìm mua bất kỳ các tựa sách nước ngoài nào ở hầu hết các cửa hàng trực thuộc FAHASA.

TẦM NHÌN VÀ PHƯƠNG HƯỚNG PHÁT TRIỂN CỦA THƯƠNG HIỆU FAHASA TRONG TƯƠNG LAI

Từ 2005 đến nay, FAHASA đã nhất quán và thực hiện thành công chiến lược xuyên suốt là xây dựng, phát triển Hệ thống Nhà sách chuyên nghiệp trên toàn quốc.Tính đến nay, sau hơn 6 năm thực hiện chiến lược, bên cạnh hệ thống gần 20 Nhà sách được hình thành từ năm 1976 và được phân bổ rộng khắp trên phạm vi TP.HCM, FAHASA đã cơ bản hoàn thiện giai đoạn 1 trong kế hoạch phát triển mạng lưới ở khắp các tỉnh thành trên toàn quốc với thành tựu: gần 80% các tỉnh thành miền Nam và miền Trung đều có mặt ít nhất một Nhà sách FAHASA. Một số tỉnh thành lớn đã có mặt Nhà sách thứ 2, thứ 3 của FAHASA như: Bình Dương, Đồng Nai, Cần Thơ, Đà Nẵng, Hà Nội…

Tiếp tục định hướng hoạt động chuyên ngành và thực hiện chiến lược phát triển mạng lưới, từ năm 2013 – 2020 FAHASA sẽ phát triển mạnh hệ thống Nhà sách tại các tỉnh thành phía Bắc. Hiện nay, Nhà sách FAHASA đã có mặt tại Hà Nội, Hà Tĩnh, Vĩnh Phúc, Hải Phòng, Thanh Hóa.

Dự kiến 2020, Hệ thống Nhà sách FAHASA sẽ có khoảng 100 Nhà sách trên toàn quốc. Tiếp tục giữ vững vị thế là hệ thống Nhà sách hàng đầu Việt Nam và nằm trong Top 10 nhà bán lẻ hàng đầu Việt Nam (tính cho tất cả các ngành hàng).

Dự án xây dựng Trung tâm sách tại TP.HCM với diện tích 5.000m² đến 10.000m², gồm đầy đủ các loại hình hoạt động về sách, phấn đấu xây dựng phong cách kinh doanh hiện đại, ngang tầm với các nước trong khu vực. FAHASA sẽ là kênh tiêu thụ chính của các Nhà xuất bản, các Công ty Truyền thông Văn hóa và là đối tác tin cậy của các Nhà cung cấp trong và ngoài nước. Đồng thời FAHASA giữ vũng vị trí Nhà nhập khẩu và kinh doanh sách ngoại văn hàng đầu Việt Nam.

SỨ MỆNH CỦA FAHASA: “MANG TRI THỨC, VĂN HÓA ĐỌC ĐẾN VỚI MỌI NHÀ”!

FAHASA là thương hiệu hàng đầu trong ngành Phát hành sách Việt Nam, ngay từ thời bao cấp cho đến thời kỳ kinh tế thị trường, đổi mới, hội nhập quốc tế, Công ty FAHASA luôn khẳng định vị thế đầu ngành và được đánh giá cao trong quá trình xây dựng đời sống văn hóa, trước hết là văn hóa đọc của nước nhà. Là doanh nghiệp kinh doanh trên lĩnh vực văn hóa, Công ty FAHASA có vai trò và vị thế trong việc giữ vững định hướng tư tưởng văn hóa của Nhà nước, góp phần tích cực vào việc đáp ứng nhu cầu đọc sách của Nhân dân Thành phố Hồ Chí Minh và cả nước; thể hiện toàn diện các chức năng kinh tế - văn hóa - xã hội. Thông qua các chủ trương và hoạt động như: duy trì một số Nhà sách ở các tỉnh có nền kinh tế chưa phát triển, công trình Xe sách Lưu động FAHASA phục vụ bạn đọc ngoại thành tại các huyện vùng sâu, vùng xa, định kỳ tổ chức các Hội sách với nhiều quy mô lớn nhỏ khác nhau… chứng minh rằng FAHASA không chỉ quan tâm đến việc kinh doanh mà còn mang đến mọi người nguồn tri thức quý báu, góp phần không ngừng nâng cao dân trí cho người dân ở mọi miền đất nước, thể hiện sự hài hòa giữa các mục tiêu kinh doanh và hoạt động phục vụ xã hội của FAHASA.

Hiện nay, Công ty FAHASA đã và đang ngày càng nỗ lực hơn trong hoạt động sản xuất kinh doanh, tiếp tục góp phần vào sự nghiệp phát triển “văn hóa đọc”, làm cho những giá trị vĩnh hằng của sách ngày càng thấm sâu vào đời sống văn hóa tinh thần của xã hội, nhằm góp phần tích cực, đáp ứng yêu cầu nâng cao dân trí, bồi dưỡng nhân tài và nguồn nhân lực cho sự nghiệp công nghiệp hóa, hiện đại hóa đất nước, trong bối cảnh Thành phố Hồ Chí Minh và xã hội Việt Nam đang ngày càng hội nhập sâu rộng vào nền văn hóa, kinh tế tri thức của thế giới.

BẢNG VÀNG THÀNH TÍCH FAHASA ĐÃ ĐẠT ĐƯỢC TỪ NĂM 2008 - 2012 TRONG HOẠT ĐỘNG SẢN XUẤT KINH DOANH VÀ CÔNG TÁC XÃ HỘI
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(3)}
          >
            <span className="text-lg font-medium text-gray-900">
             Tôi có thể liên hệ với bạn bằng cách nào?
            </span>
            {activeTab === 3 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 3 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Bạn có thể liên hệ với tôi qua Email:<b>phamanhdung2704@gmail.com</b> nếu có vướng mắc hay điều gì muốn nói nhé.
              </p>
            </div>
          )}
        </div>

        {/* <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(4)}
          >
            <span className="text-lg font-medium text-gray-900">
              How do I contact customer support?
            </span>
            {activeTab === 4 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 4 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                You can contact our customer support team by emailing us at
                support@myecommercestore.com, or by calling us at (555) 123-4567
                between the hours of 9am and 5pm EST, Monday through Friday.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="text-lg font-medium text-gray-900">
              Can I change or cancel my order?
            </span>
            {activeTab === 5 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Unfortunately, once an order has been placed, we are not able to
                make changes or cancellations. If you no longer want the items
                you've ordered, you can return them for a refund within 30 days
                of delivery.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(6)}
          >
            <span className="text-lg font-medium text-gray-900">
              Do you offer international shipping?
            </span>
            {activeTab === 6 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 6 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Currently, we only offer shipping within the United States.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(7)}
          >
            <span className="text-lg font-medium text-gray-900">
              What payment methods do you accept?
            </span>
            {activeTab === 7 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 7 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                We accept visa,mastercard,paypal payment method also we have
                cash on delivery system.
              </p>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default FAQPage;
