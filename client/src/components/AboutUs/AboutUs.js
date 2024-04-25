import React from "react";
import "./Aboutus.css";
import AboutUsImage from "../../assets/images/slide1.png";
import hoang from "../../assets/images/hoang.jpg";
import huy from "../../assets/images/huy.jpg"; 
function AboutUs(props) {
  return (
    <div>
      <main id="main" className="">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="na-2">TỔNG QUAN VỀ CHÚNG TÔI</h2>
              <p className="na-2">
                FOURBEE tập trung chủ yếu vào thị trường thời trang thể thao với
                những sản phẩm chất lượng cao , phong cách chuyên nghiệp và
                thiết kế thời thượng. FOURBEE đang ngày càng khẳng định vị thế
                thương hiệu thời trang thể thao tiên phong&nbsp;tại thị trường
                Việt Nam. FOURBEE luôn gữ vững sứ mệnh “ Khơi dậy tinh thần thể
                thao – vượt qua chính mình của mỗi con người”
              </p>
            </div>
          </div>

          <section className=" section">
            <div className="container py-2">
              <div className="">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="na-2" style={{ textAlign: "center" }}>
                      <img style={{width:'900px', height:'500px'}} src={AboutUsImage} alt="aboutus1" />
                    </div>
                    <div className="">
                      <h1
                        className=""
                        style={{ textAlign: "center" }}
                      >
                        Giới thiệu
                      </h1>
                      <hr />
                    </div>

                    <div className=" py-3">
                      <ul style={{ textAlign: "justify" }}>
                        <li>
                          <p className="na-2">
                            Đội nhóm mong muốn đem lại cho người tiêu dùng Việt
                            Nam những sản phẩm thời trang và thể thao với tiêu
                            chí ba tốt:
                          </p>
                        </li>
                        <li>
                          <p className="na-2">Phong cách</p>
                        </li>
                        <li>
                          <p className="na-2">Chất lượng&nbsp;</p>
                        </li>
                        <li>
                          <p className="na-2">Dịch vụ hoàn hảo</p>
                        </li>
                      </ul>
                      <div className="content">
                        <p className="p-1" style={{ textAlign: "justify" }}>
                          <strong>&nbsp;Giá trị cốt lõi:</strong>
                        </p>

                        <p className="na-2" style={{ textAlign: "justify" }}>
                          Chúng tôi làm việc với tinh thần đoàn kết giữa các cá
                          nhân trong group và hợp tác đối với khách hàng để đạt
                          được mục tiêu thành công, đề cao tinh thần tận tâm và
                          tinh thần trách nhiệm với từng sản phẩm mình bán ra,
                          từng bước đưa shop tới sự chuyên nghiệp trong từng
                          dịch vụ và tiêu chuẩn hóa mọi quy trình làm việc, sáng
                          tạo và đổi mới để tìm ra những dịch vụ tốt hơn. Đó
                          chính là nền tảng cơ bản để chúng tôi thực hiện nhiệm
                          vụ của mình.
                        </p>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="content1">
                        <p
                          className="na-2"
                          style={{ textAlign: "left", marginTop:-5}}
                        >
                          <strong>
                            &nbsp;<em>TẦM NHÌN CỦA CHÚNG TÔI</em>
                          </strong>
                        </p>

                        <p className="na-2" style={{ textAlign: "left" }}>
                          Với nỗ lực không ngừng để trở thành tiên
                          phong&nbsp;trong lĩnh vực bán lẻ mặt hàng thời trang
                          và thể thao. Website được tạo ra với những mong muốn:
                          <p>
                            Chất Lượng Sản Phẩm: Cam kết cung cấp giày chất
                            lượng và đa dạng về mẫu mã, kiểu dáng, và kích
                            thước. Nỗ lực liên tục nâng cao chất lượng sản phẩm
                            và đáp ứng xu hướng thị trường.
                          </p>
                        </p>
                        <p className="na-2" style={{ textAlign: "left" }}>
                          Trải Nghiệm Người Dùng (UX):Tạo ra một trang web dễ sử
                          dụng, tương tác, và thân thiện với người dùng. Hỗ trợ
                          tính năng tìm kiếm và lọc sản phẩm hiệu quả. Giảm
                          thiểu thời gian và bước đơn hàng để tối ưu hóa trải
                          nghiệm mua sắm.
                        </p>
                        <p className="na-2" style={{ textAlign: "left" }}>
                          Thương Hiệu và Phong Cách: Phản ánh một thương hiệu
                          mạnh mẽ và phong cách riêng biệt. Sử dụng hình ảnh và
                          nội dung thú vị để tạo ấn tượng và kết nối với khách
                          hàng.
                        </p>
                        <p className="na-2" style={{ textAlign: "left" }}>
                          Dịch Vụ Khách Hàng:Cung cấp dịch vụ khách hàng xuất
                          sắc thông qua chat trực tuyến, điện thoại, và email.
                          Xây dựng cộng đồng và tương tác tích cực với khách
                          hàng qua các mạng xã hội.
                        </p>
                      </div>
                      <div className="content2">
                        <p
                          className="na-2"
                          style={{ textAlign: "justify", color: "black", marginTop:20 }}
                        >
                          <strong>
                            <em>SỨ MỆNH CỦA CHÚNG TÔI</em>
                          </strong>
                        </p>

                        <p className="na-2" style={{ textAlign: "justify" }}>
                          Mang đến cho người tiêu dùng những sản phẩm tốt, bảo
                          vệ lợi ích của khách hàng . Đem lại những giá trị tốt
                          đẹp cho cộng đồng xã hội, nâng cao chất lượng cuộc
                          sống của các thành viên về cả vật chất và tinh thần.
                        </p>
                        <p>
                          Đáp Ứng Nhu Cầu Khách Hàng: Cung cấp sự đa dạng và
                          chất lượng về giày để đáp ứng nhu cầu và mong muốn của
                          khách hàng. Tạo ra trải nghiệm mua sắm thuận tiện và
                          hấp dẫn để khách hàng có thể tìm thấy và mua những đôi
                          giày phản ánh phong cách và cá nhân của họ.
                        </p>
                        <p>
                          Tạo Nên Thương Hiệu Tích Cực: Xây dựng một thương hiệu
                          mạnh mẽ và tích cực thông qua các giá trị như sự tin
                          tưởng, chất lượng, và sáng tạo. Tạo ra không gian mua
                          sắm trực tuyến thân thiện và độc đáo để tạo ấn tượng
                          với khách hàng.
                        </p>
                        <p>
                          Trải Nghiệm Người Dùng Xuất Sắc: Tạo ra một trải
                          nghiệm mua sắm trực tuyến xuất sắc, từ việc tìm kiếm
                          sản phẩm đến quá trình thanh toán và giao hàng. Hỗ trợ
                          khách hàng một cách chuyên nghiệp và nhanh chóng.
                        </p>
                        <p>
                          Hỗ Trợ Đổi Trả và Bảo Hành: Cung cấp chính sách đổi
                          trả linh hoạt và bảo hành để tạo sự tin tưởng và hài
                          lòng từ phía khách hàng.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div classNameName="row mt-4">
            <div classNameName="col-12">
              <h2 style={{ marginTop: 15 }}>ĐỘI NGŨ CỦA CHÚNG TÔI</h2>
              <div
                className=""
                style={{ display: "block", height: "auto", marginTop: 40 }}
              ></div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div
                className="text-center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="pt-2 text-center gg">
                  <img className="img-fluid1" src={huy} alt="" />
                  <h4 className="na-2">VŨ VĂN HUY</h4>
                  <p className="na-2">Thành Viên</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div
                className=" text-center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="pt-2 text-center gg">
                  <img className="img-fluid1" src={hoang} alt="" />
                  <h4 className="na-2">VŨ VĂN HOÀNG</h4>
                  <p className="na-2">Thành viên</p>
                </div>
              </div>
            </div> 
          </div>

          <div className="section">
            <div className="container">
              <h2 className="text-center1">DỊCH VỤ CỦA CHÚNG TÔI</h2>
              <div className="" style={{ paddingTop: 30 }}></div>
              <div className="row">
                <div className="col-sm-4">
                  <div
                    className="text-center"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="box-text1 text-center">
                      {/* <img src="https://mauweb.monamedia.net/movic/wp-content/uploads/2020/04/taxi-1.svg" className="img-fluid2" alt=""> */}
                      <h4>GIAO HÀNG TẬN NƠI</h4>
                      <p>
                        Lorem ipsum dolor sit amet isse potenti. Vesquam ante
                        aliquet lacusemper elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="text-center"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="box-text1 text-center">
                      {/* <img src="https://mauweb.monamedia.net/movic/wp-content/uploads/2020/04/smile.svg" className="img-fluid2" alt=""> */}
                      <h4>HỖ TRỢ NHIỆT TÌNH</h4>
                      <p>
                        Lorem ipsum dolor sit amet isse potenti. Vesquam ante
                        aliquet lacusemper elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="text-center"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="box-text1 text-center">
                      {/* <img src="https://mauweb.monamedia.net/movic/wp-content/uploads/2020/04/supermarket.svg" className="img-fluid2" alt=""> */}
                      <h4>KIỂM TRA AN TOÀN</h4>
                      <p>
                        Lorem ipsum dolor sit amet isse potenti. Vesquam ante
                        aliquet lacusemper elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div
                    className="text-center"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="box-text1 text-center">
                      {/* <img src="https://mauweb.monamedia.net/movic/wp-content/uploads/2020/04/global.svg" className="img-fluid2" alt=""> */}
                      <h4>ĐA NGÔN NGỮ</h4>
                      <p>
                        Lorem ipsum dolor sit amet isse potenti. Vesquam ante
                        aliquet lacusemper elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="text-center"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="box-text1 text-center">
                      {/* <img src="https://mauweb.monamedia.net/movic/wp-content/uploads/2020/04/smartphone.svg" className="img-fluid2" alt=""> */}
                      <h4>ĐÁP ỨNG ĐẦY ĐỦ</h4>
                      <p>
                        Lorem ipsum dolor sit amet isse potenti. Vesquam ante
                        aliquet lacusemper elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="text-center"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div className="box-text1 text-center">
                      {/* <img src="https://mauweb.monamedia.net/movic/wp-content/uploads/2020/04/pen.svg" className="img-fluid2" alt=""> */}
                      <h4>ĐA DẠNG</h4>
                      <p>
                        Lorem ipsum dolor sit amet isse potenti. Vesquam ante
                        aliquet lacusemper elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className="map-container">
              <div className="google-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2625455544367!2d108.16749667459963!3d16.05186003990368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421916839b0713%3A0x48249868e780fc36!2zMTE3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgSG_DoCBBbiwgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1702912779452!5m2!1svi!2s"
    width="100%"
    height="450"
    style={{ border: "0" }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

</div>
      </main>
    </div>
  );
}
export default AboutUs;
