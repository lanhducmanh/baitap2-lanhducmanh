async function timKiem() {
  const q = document.getElementById("keyword").value;
  const res = await fetch(`http://localhost:1880/timkiem?q=${q}`);
  const data = await res.json();

  document.getElementById("ketqua").innerHTML =
    data.map(d => `<p>${d.ten} - ${d.gia}đ</p>`).join("");

  if (data.length === 0) {
    document.getElementById("ketqua").innerHTML = "<p>Không tìm thấy sản phẩm nào!</p>";
  }
}
