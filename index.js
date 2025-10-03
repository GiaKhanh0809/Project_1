// Lấy element bằng selector (querySelector)
const h1 = document.querySelector(".title");
const btn = document.getElementById("btn");

// Thay text khi click
btn.addEventListener("click", () => {
  // innerHTML cho phép chèn HTML (dùng cẩn thận nếu dữ liệu từ user)
  h1.innerHTML = "Đã thay đổi text của thẻ h1";
});
