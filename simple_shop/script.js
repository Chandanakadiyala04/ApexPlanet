const products = [
  { id: 1, name: "Sneakers", price: 1999, img: "images/prod1.jpg" },
  { id: 2, name: "Backpack", price: 2499, img: "images/prod2.jpg" },
  { id: 3, name: "Sunglasses", price: 699, img: "images/prod3.jpg" }
];

let cart = {};

const productList = document.getElementById("productList");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCart = document.getElementById("closeCart");

// Render products
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" loading="lazy">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productList.appendChild(card);
});

// Add to cart
window.addToCart = function(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCartUI();
};

// Update cart UI
function updateCartUI() {
  cartCount.textContent = Object.values(cart).reduce((a, b) => a + b, 0);
  cartItems.innerHTML = "";
  let total = 0;
  for (let id in cart) {
    const p = products.find(x => x.id == id);
    total += p.price * cart[id];
    const li = document.createElement("li");
    li.textContent = `${p.name} × ${cart[id]}`;
    cartItems.appendChild(li);
  }
  cartTotal.textContent = total;
}

// Cart modal toggle
cartBtn.addEventListener("click", () => cartModal.classList.remove("hidden"));
closeCart.addEventListener("click", () => cartModal.classList.add("hidden"));
