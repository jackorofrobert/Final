import React from "react";
import "./Alaska.css";

function Alaska() {
  return (
    <div>
      <h1 className="text-center">ALASKA</h1>

      <div className="blue-heading">
        <h2>Tổng Quát</h2>
      </div>

      <div className="alaska-description">
        <p>
          Chó Alaska hay Alaska Malamute hay Mahlemuts là một giống chó kéo xe ở
          Alaska. Giống chó sói được đặt tên theo bộ tộc Mahlemut là Malamute.
          Người Eskimo du mục ở Alaska đã khám phá ra chúng có khả năng di
          chuyển và kéo xe trên tuyết một khoảng cách rất lớn và liên tục. Họ đã
          cho lai tạo với những giống khác như chó Newfoundland hoặc St Bernard
          để có được giống chó ngày càng to hơn, khỏe hơn, bền bỉ hơn, và chịu
          được thời tiết khắc nghiệt của vùng Bắc Cực. Người Nga đã dùng những
          chú chó này để chở lông thú và thịt thú rừng tới những khu vực lân cận
          để bán và đổi các mặt hàng khác. Giống chó này đòi hỏi được tập luyện
          hàng ngày nếu không chúng sẽ buồn chán và phá hoại.
        </p>
      </div>

      <h1 className="blue-heading">Cách Nuôi</h1>

      <div className="container">
        <h2>Khẩu phần ăn</h2>
        <p>
          Trái ngược với cơ thể to lớn, Alaska có hệ tiêu hóa khá kém, hay mắc
          các bệnh đường ruột. Bạn nên chú ý cung cấp cho Alaska một khẩu phần
          và chế độ dinh dưỡng phù hợp để chúng phát triển toàn diện. Các chất
          dinh dưỡng cần thiết cho Alaska bao gồm: chất đạm, chất béo, tinh
          bột, chất xơ, vitamin, canxi và chất khoáng.
        </p>
      </div>

      <div className="alaska-feeding-stages">
        <h2>Chó Alaska từ 2-3 tháng tuổi</h2>
        <div className="slider">
          <div className="bg-product2">
            <img src="images/alaska2-3.jpg" alt="Alaska 2-3 tháng tuổi" />
            <p className="mt-15px">
              Vào giai đoạn này, Alaska vừa mới cai sữa. Bạn nên chú ý cho chúng
              ăn thức ăn mềm, đã nghiền nát hoặc xay nhuyễn. Có thể cho chúng ăn
              cơm nhão trộn với thịt nạc, thịt bò xay mềm.
            </p>
            <p className="mt-15px">
              Nên cho chó Alaska nhỏ ăn 5 bữa/ngày, uống 200ml sữa mỗi ngày.
              Không nên cho chúng ăn quá no. Tuyệt đối không cho ăn cá và đồ
              tanh, có thể khiến Alaska bị bệnh tiêu chảy. Nếu cho ăn đồ khô thì
              nên ngâm mềm.
            </p>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="container">
        <h2 className="mt-15px">Chó Alaska từ 3-6 tháng tuổi</h2>
        <div className="slider">
          <div className="bg-product2">
            <img src="images/alaska3-6.jpg" alt="Alaska 3-6 tháng tuổi" />
            <p className="mt-15px">
              Chó Alaska ở tuổi này đã có thể cho ăn cơm trộn thịt bò, thịt lợn,
              thịt gà, … Bạn nên cung cấp thêm rau, củ, quả vào bữa ăn hàng
              ngày. Nên giảm xuống cho chúng ăn 4 bữa: sáng, trưa, chiều, tối.
              Uống thêm 500ml sữa mỗi ngày.
            </p>
          </div>
        </div>

        <h2 className="mt-15px">Chó Alaska từ 6 tháng tuổi</h2>
        <div className="slider">
          <div className="bg-product2">
            <img src="images/alaska6.jpg" alt="Alaska 6 tháng tuổi" />
            <p className="mt-15px">
              Tuổi này, bạn giảm khẩu phần ăn của chúng xuống còn 2-3 bữa một
              ngày. Uống 0.8-1l sữa mỗi ngày. Cho Alaska ăn thực phẩm chứa nhiều
              protein, canxi hơn do chúng đang trong giai đoạn phát triển xương
              và cơ bắp mạnh mẽ nhất.
            </p>
            <p className="mt-15px">
              Có thể cho Alaska gặm thêm xương động vật để kích thích răng và cơ
              hàm. Nhưng chỉ cho ăn số lượng ít, vì xương cứng quá có thể gây
              hóc trong quá trình ăn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alaska;
