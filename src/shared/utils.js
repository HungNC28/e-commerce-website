// hàm lấy từ Local
export function getDataLocal(item) {
  if (!item) return [];
  const docs = localStorage.getItem(item);
  const data = docs ? JSON.parse(docs) : [];
  return data;
}

//hàm lấy EmailCurrentUser
export function getEmailCurrentUser() {
  const docs = localStorage.getItem("currentUser");
  const data = docs ? JSON.parse(docs) : {};
  if (data) return data.email;
  return "";
}

//hàm lấy currentCart
export function getCurrentCart() {
  const cart = getDataLocal("cart");
  const email = getEmailCurrentUser();
  const current = cart.filter((c) => c.email === email);
  return current;
}

// hàm tính tổng tiền
export function CalculatePrice(cart) {
  const sum = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  return sum;
}

// function thêm dấu chấm vào giá tiền
export function toPrice(e) {
  return Number(e).toLocaleString();
}
