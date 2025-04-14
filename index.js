const products = [
    { id: 1, name: "Pomme", price: 1.2, image: "pomme.jpg", category: "fruits" },
    { id: 2, name: "Banane", price: 0.8, image: "banane.jpg", category: "fruits" },
    { id: 3, name: "Carotte", price: 0.5, image: "carotte.jpg", category: "legumes" },
    { id: 4, name: "Lait", price: 1.0, image: "lait.jpg", category: "produits-laitiers" },
    { id: 5, name: "Yaourt", price: 0.9, image: "yaourt.jpg", category: "produits-laitiers" },
    { id: 6, name: "Jus d'orange", price: 1.5, image: "jus.jpg", category: "boissons" }
  ];
  
  let cart = [];
  
  function displayProducts(category = "all") {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    const filteredProducts = category === "all" ? products : products.filter(p => p.category === category);
    filteredProducts.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price.toFixed(2)} €</p>
        <button onclick="addToCart(${product.id})">Ajouter au panier</button>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
  }
  
  function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
  }
  
  document.getElementById("cart-btn").addEventListener("click", () => {
    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.remove("hidden");
    displayCartItems();
  });
  
  document.getElementById("close-cart").addEventListener("click", () => {
    document.getElementById("cart-modal").classList.add("hidden");
  });
  
  function displayCartItems() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price.toFixed(2)} €`;
      cartItems.appendChild(li);
      total += item.price;
    });
    document.getElementById("cart-total").textContent = total.toFixed(2) + " €";
  }
  
  document.querySelectorAll("#categories button").forEach(button => { button.addEventListener("click", () => {const category = button.getAttribute("::contentReference[oaicite:1]{index=1}")})
}
