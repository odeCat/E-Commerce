const products = [{
        image: '/Project/Assets/MSI MPG 321 URXW.webp',
        name: 'MSI MPG 321URXW',
        rating: '⭐⭐⭐⭐ 4.8 Rating',
        price: '₱61,495.00',
        description: 'SPECIFICATION Panel Size 31.5“ Active Display Area (mm) 699.48(H) x 394.73(V) Curvature Flat Panel Type QD-OLED Panel Resolution 3840 x 2160 (UHD) Pixel Pitch (H x V) 0.1814 (H) x 0.1814 (V) Aspect Ratio 16:09 Brightness (nits) SDR: 250 HDR: 450 (Typ.)'
    },
    {
        image: '/Project/Assets/Intel Core Ultra 9 285.webp',
        name: 'Intel Core Ultra 9 285',
        rating: '⭐⭐⭐⭐ 4.8 Rating',
        price: '₱35,950.00',
        description: 'The Intel Core Ultra 9 285 is a high-end desktop processor designed for power users, content creators, and gamers who demand top-tier performance. Built on Intels Arrow Lake architecture, this CPU features a 24-core, 24-thread hybrid design, combining 10 Performance-cores (P-cores)'
    },
    {
        image: '/Project/Assets/Asus ROG Strix GeForce RTX 4090.webp',
        name: 'Asus ROG Strix GeForce RTX 4090',
        rating: '⭐⭐⭐⭐ 4.8 Rating',
        price: '₱145,695.00',
        description: 'ROG Strix GeForce RTX™ 4090 BTF OC Edition 24GB GDDR6X buffed-up design with chart-topping thermal performance and innovative Graphics Card High-Power (GC-HPWR) Gold Finger. Powered by NVIDIA DLSS3, ultra-efficient Ada Lovelace arch, and full ray tracing 4th Generation Tensor Cores'
    }
];

// Parse the peso price to float
function parsePrice(priceString) {
    return parseFloat(priceString.replace(/[₱,]/g, '')) || 0;
}

// Convert the the float into peso string
function formatPeso(amount) {
    return '₱' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}


// Main product view
function updateProduct(product) {
    const productImg = document.getElementById('product-image');
    const productTitle = document.getElementById('product-title');
    const productRating = document.getElementById('product-rating');
    const productPrice = document.getElementById('product-price');
    const productDesc = document.getElementById('product-description');
    const quantityInput = document.getElementById('quantity');
    const totalAmount = document.getElementById('total-amount');

    // Update DOM elemets
    productImg.src = product.image;
    productTitle.textContent = product.name;
    productRating.textContent = product.rating;
    productPrice.textContent = product.price;
    productDesc.textContent = product.description;

    quantityInput.value = 1;

    const numericPrice = parsePrice(product.price);

    totalAmount.textContent = formatPeso(numericPrice);

    attachQuantityLogic(numericPrice);
}

// Quantity counter
function attachQuantityLogic(pricePerItem) {
    const quantityInput = document.getElementById('quantity');
    const totalAmount = document.getElementById('total-amount');
  
    quantityInput.addEventListener('input', () => {
      let qty = parseInt(quantityInput.value, 10) || 1;
      if (qty < 1) qty = 1;
      quantityInput.value = qty;
      // Recalculate total
      const newTotal = pricePerItem * qty;
      totalAmount.textContent = formatPeso(newTotal);
    });
}

// Load similar items
function loadSimilarItems() {
    const container = document.getElementById('similar-items-container');
    container.innerHTML = '';
  
    products.forEach((prod) => {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}">
        <p>${prod.name}</p>
        <p>${prod.price}</p>
      `;
      // When clicked, update the main product
      item.addEventListener('click', () => {
        updateProduct(prod);
      });
      container.appendChild(item);
    });
}
  
  // Initialize
    document.addEventListener('DOMContentLoaded', () => {
    updateProduct(products[0]); // Show first product
    loadSimilarItems();         // Populate similar items below
});  