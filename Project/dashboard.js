const products = [
    {
        id: 1,
        name: "MSI MPG 321URXW",
        image: "/Project/Assets/MSI MPG 321 URXW.webp",
        price: "₱61,495.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "monitor"
    },
    {
        id: 2,
        name: "Intel Core Ultra 9 285",
        image: "/Project/Assets/Intel Core Ultra 9 285.webp",
        price: "₱35,950.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "cpu"
    },
    {
        id: 3,
        name: "Asus ROG Strix GeForce RTX 4090",
        image: "/Project/Assets/Asus ROG Strix GeForce RTX 4090.webp",
        price: "₱145,695.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "gpu"
    },
    {
        id: 4,
        name: "G.Skill Trident Z Neo RGB 32GB",
        image: "/Project/Assets/G.Skill Trident Z Neo RGB 32GB.webp",
        price: "₱4,350.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "ram"
    },
    {
        id: 5,
        name: "Asus ProArt PA401",
        image: "/Project/Assets/Asus ProArt PA401.webp",
        price: "₱6,050.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "pc-case"
    },
    {
        id: 6,
        name: "MSI Pro MP225V",
        image: "/Project/Assets/MSI Pro MP225V.webp",
        price: "₱6,050.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "monitor"
    },
    {
        id: 7,
        name: "Intel Core Ultra 7 265",
        image: "/Project/Assets/Intel Core Ultra 7 265.webp",
        price: "₱22,395.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "cpu"
    },
    {
        id: 8,
        name: "Gigabyte Geforce RTX 4090",
        image: "/Project/Assets/Gigabyte Geforce RTX 4090.webp",
        price: "₱117,750.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "gpu"
    },
    {
        id: 9,
        name: "Corsair Vengeance RGB Pro SL 32GB",
        image: "/Project/Assets/Corsair Vengeance RGB Pro SL 32GB.webp",
        price: "₱5,695.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "ram"
    },
    {
        id: 10,
        name: "Corsair 5000D",
        image: "/Project/Assets/Corsair 5000D.webp",
        price: "₱8,650.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "pc-case"
    },
    {
        id: 11,
        name: "Gigabyte M27QA",
        image: "/Project/Assets/Gigabyte M27QA.webp",
        price: "₱15,950.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "monitor"
    },
    {
        id: 12,
        name: "Intel Core i7-14700",
        image: "/Project/Assets/Intel Core i7-14700.webp",
        price: "₱20,995.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "cpu"
    },
    {
        id: 13,
        name: "ASRock AMD Radeon RX 6500",
        image: "/Project/Assets/ASRock AMD Radeon RX 6500.webp",
        price: "₱9,450.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "gpu"
    },
    {
        id: 14,
        name: "G.Skill Ripjaws V 32GB",
        image: "/Project/Assets/G.Skill Ripjaws V 32GB.webp",
        price: "₱3,295.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "ram"
    },
    {
        id: 15,
        name: "Montech Air X",
        image: "/Project/Assets/Montech Air X ARGB.webp",
        price: "₱3,350.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "pc-case"
    }
    
];

const productList = document.querySelector("#productList");
const categoryButtons = document.querySelectorAll(".categories-btn li");
const searchBar = document.querySelector(".search-bar");
const allProductsHeading = document.querySelector(".all-products h2");

let filteredProducts = products;


function displayProducts(productsToShow, category = "All Products") {
    productList.innerHTML = "";
    allProductsHeading.textContent = category;

    productsToShow.forEach(product => {
        const productItem = document.createElement("li");
        productItem.innerHTML = `
            <a href="#">
                <img class="product-img" src="${product.image}" alt="${product.name}">
                <div class="product-card-body">
                    <h5>${product.name}</h5>
                    <div class="product-card-text">
                        <img class="ratings-icon" src="${product.rating}" alt="Stars icon">
                        <h6>${product.price}</h6>
                    </div>
                    <h5>${product.reviews}</h5>
                </div>
            </a>
        `;
        productList.appendChild(productItem);
    });
}


categoryButtons.forEach(button => {
    button.addEventListener("click", function () {
        const category = this.getAttribute("data-category");
        if (category === "all") {
            filteredProducts = products;
            displayProducts(filteredProducts, "All Products");
        } else {
            const categoryName = this.querySelector("h3").textContent;
            filteredProducts = products.filter(product => product.category === category);
            displayProducts(filteredProducts, categoryName);
        }
    });
});


searchBar.addEventListener("input", function () {
    const searchTerm = searchBar.value.toLowerCase();
    const searchResults = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(searchResults, allProductsHeading.textContent);
});

displayProducts(products);

const categoryButtonsClicked = document.querySelectorAll(".categories-btn li");

categoryButtonsClicked .forEach(button => {
    button.addEventListener("click", function () {
        // Remove active class from all buttons
        categoryButtonsClicked .forEach(btn => btn.classList.remove("active-category"));

        // Add active class to the clicked button
        this.classList.add("active-category");

        // Filter and display products
        const category = this.getAttribute("data-category");
        if (category === "all") {
            filteredProducts = products;
            displayProducts(filteredProducts, "All Products");
        } else {
            const categoryName = this.querySelector("h3").textContent;
            filteredProducts = products.filter(product => product.category === category);
            displayProducts(filteredProducts, categoryName);
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const signupButton = document.getElementById("signupButton");

    const loginModal = document.getElementById("authModal");
    const signupModal = document.getElementById("signupModal");

    const closeLoginButton = document.querySelector(".close");
    const closeSignupButton = document.querySelector(".close-signup");

    const switchToSignup = document.getElementById("switchToSignup");
    const switchToLogin = document.getElementById("switchToLogin");

    // Open and close login modal
    loginButton.addEventListener("click", () => loginModal.classList.add("show"));
    closeLoginButton.addEventListener("click", () => loginModal.classList.remove("show"));

    // Open and close signup modal
    signupButton.addEventListener("click", () => signupModal.classList.add("show"));
    closeSignupButton.addEventListener("click", () => signupModal.classList.remove("show"));

    // Click outside modal to close
    window.addEventListener("click", (event) => {
        if (event.target === loginModal) loginModal.classList.remove("show");
        if (event.target === signupModal) signupModal.classList.remove("show");
    });

    // Switch between login and signup modals
    switchToSignup.addEventListener("click", (event) => {
        event.preventDefault();
        loginModal.classList.remove("show");
        signupModal.classList.add("show");
    });

    switchToLogin.addEventListener("click", (event) => {
        event.preventDefault();
        signupModal.classList.remove("show");
        loginModal.classList.add("show");
    });
});