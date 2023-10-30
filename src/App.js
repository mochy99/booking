import Header from './components/Header.js';
import Introduction from './components/Introduction.js'
import './App.css';
import Schedule from './components/Schedule.js';

function App() {
  const contents = [
    {content : "Cozoro Home để đăng ký dịch vụ. Sử dụng không đúng email có thể sẽ bị mất quyền truy cập mục này."},
    {content : "Lưu ý: chi phí được tính dựa theo số lần đặt dịch vụ. Nếu quý khách đã đặt lịch nhưng không sử dụng được, vui lòng bấm nút Cancel hoặc Reschedule trong email. Thời hạn để hủy hoặc thay đổi thời điểm sử dụng dịch vụ là 1h trước khi dịch vụ bắt đầu."},
    {content : "Phí dịch vụ: 15k/lần sấy. 15k/lần giặt "},
    {content : "Số lượt giặt miễn phí: Nam 06 lần, nữ 08 lần. "},
    {content : "Quý khách lưu ý cài đặt thời gian giặt ngắn hơn thời gian còn lại nếu không có thể sẽ không lấy được quần áo ra khỏi máy và ảnh hưởng đến lượt giặt tiếp theo. Quý khách sẽ bị tính thêm 1 lượt giặt/sấy. "}
  ]
  const schedules = [
    {date: "Oct 23, 2023", name: "Tester", email: "email.com", location: "kitchen", description: "hello"}
  ]
  return (
    <>
    <Header />
    <Introduction title = "DORM 7" contents= {contents}/>
    <Schedule title="Schedule Kitchen" schedules={schedules} />
    <Schedule title="Schedule Floor" schedules={schedules} />
    </>
    
  );
}

export default App;
