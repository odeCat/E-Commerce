const products = [
    {
        id: 1,
        name: "MSI MPG 321URXW",
        image: "/Project/Assets/MSI MPG 321 URXW.webp",
        price: "₱61,495.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "monitor",
        description: 'SPECIFICATION Panel Size 31.5“ Active Display Area (mm) 699.48(H) x 394.73(V) Curvature Flat Panel Type QD-OLED Panel Resolution 3840 x 2160 (UHD) Pixel Pitch (H x V) 0.1814 (H) x 0.1814 (V) Aspect Ratio 16:09 Brightness (nits) SDR: 250 HDR: 450 (Typ.)'
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
    productList.innerHTML = ""; // Clear the current product list
    allProductsHeading.textContent = category;

    productsToShow.forEach(product => {
        const productItem = document.createElement("li");
        productItem.innerHTML = `
            <a href="#" class="product-link" data-id="${product.id}">
                <img class="product-img" src="${product.image}" alt="${product.name}">
                <div class="product-card-body">
                    <h5 class="product-name">${product.name}</h5>
                    <div class="product-card-text">
                        <img class="ratings-icon" src="${product.rating}" alt="Stars icon">
                        <h6 class="product-price">${product.price}</h6>
                    </div>
                    <h5 class="product-reviews">${product.reviews}</h5>
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

        productList.style.display = "flex";
        allProductsSection.style.display = "block";
        categoriesSection.style.display = "block";
        productViewContainer.style.display = "none";

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
    const authButtons = document.getElementById("authButtons");
    const userDropdown = document.getElementById("userDropdown");
    const usernameDisplay = document.getElementById("usernameDisplay");

    const loginModal = document.getElementById("authModal");
    const signupModal = document.getElementById("signupModal");

    const loginButton = document.getElementById("loginButton");
    const signupButton = document.getElementById("signupButton");
    const authForm = document.getElementById("authForm");
    const signupForm = document.getElementById("signupForm");

    const logoutButton = document.getElementById("logoutButton");

    const switchToSignup = document.getElementById("switchToSignup");
    const switchToLogin = document.getElementById("switchToLogin");

    const closeModal = document.querySelector(".close");
    const closeSignupModal = document.querySelector(".close-signup");


    function updateUI() {
        const currentUserEmail = localStorage.getItem("currentUser");
        console.log("Updating UI. Current User:", currentUserEmail);
    
        if (currentUserEmail) {
            const userData = JSON.parse(localStorage.getItem(currentUserEmail));
            console.log("User Data:", userData);
    
            if (userData && userData.firstName) {
                console.log("Displaying username:", userData.firstName);
                usernameDisplay.textContent = userData.firstName;
            } else {
                console.log("Displaying email instead");
                usernameDisplay.textContent = currentUserEmail;
            }
    
            authButtons.classList.add("hidden");
            userDropdown.classList.remove("hidden");
            userDropdown.style.display = "flex"; // Ensure visibility
        } else {
            console.log("No user found, showing login buttons.");
            authButtons.classList.remove("hidden");
            userDropdown.classList.add("hidden");
            userDropdown.style.display = "none"; // Ensure it's hidden
        }
    }


    // Open login modal
    loginButton.addEventListener("click", () => {
        loginModal.classList.add("show");
    });

    // Open signup modal
    signupButton.addEventListener("click", () => {
        signupModal.classList.add("show");
    });

    closeModal.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    closeSignupModal.addEventListener("click", () => {
        signupModal.style.display = "none";
    });


    // Close modals when clicking outside
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

    // Handle signup
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("signup-first-name").value;
        const lastName = document.getElementById("signup-last-name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert("Please fill out all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (localStorage.getItem(email)) {
            alert("User already exists!");
            return;
        }

        // Save user data (including first name)
        localStorage.setItem(email, JSON.stringify({ firstName, lastName, password }));
        localStorage.setItem("currentUser", email);

        // Close signup modal
        signupModal.classList.remove("show");

        updateUI();
    });

    // Handle login
    authForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        const storedUserData = localStorage.getItem(email);

        if (!storedUserData) {
            alert("User not found!");
            return;
        }

        const userData = JSON.parse(storedUserData);

        if (userData.password === password) {
            localStorage.setItem("currentUser", email);
            loginModal.classList.remove("show");
            updateUI();
        } else {
            alert("Invalid email or password!");
        }
    });

    // Handle logout
    logoutButton.addEventListener("click", function () {
        console.log("Logging out...");
        localStorage.removeItem("currentUser");
        updateUI();
    });

    // Initialize UI on page load
    updateUI();
});

document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.addEventListener("click", function () {
            const product = {
                id: card.getAttribute("data-id"),
                name: card.querySelector(".product-name").textContent,
                price: card.querySelector(".product-price").textContent,
                image: card.querySelector("img").src,
                description: card.querySelector(".product-description").textContent
            };

            // Store product details in localStorage
            localStorage.setItem("selectedProduct", JSON.stringify(product));

            // Redirect to the product view page
            window.location.href = "product_view.html";
        });
    });
});


// Product View
document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector("#productList"); // Main product list
    const productViewContainer = document.getElementById("productViewContainer"); // Product details section
    const allProductsSection = document.querySelector(".all-products"); // "All Products" section
    const categoriesSection = document.querySelector(".categories-section"); // Categories section
    const similarItemsContainer = document.getElementById("similar-items-container"); // Similar items section
    const quantityInput = document.getElementById("quantity");
    const totalAmount = document.getElementById("total-amount");
    

    // Function to update product details
    function loadProductView(product) {
        console.log("Loading product:", product.name); // Debugging log
    
        // Update product details
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-title").textContent = product.name;
        document.getElementById("product-rating").textContent = product.reviews;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-description").textContent = product.description || "No description available.";
    
        // Reset quantity and update total price
        quantityInput.value = 1;
        totalAmount.textContent = product.price;
    
        // Hide product list, categories, and show product details
        productList.style.display = "none";
        allProductsSection.style.display = "none"; 
        categoriesSection.style.display = "none"; 
        productViewContainer.style.display = "block"; 
        
        loadSimilarItems(product.category, product.id);
    }

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

    function loadSimilarItems(category, currentProductId) {
        similarItemsContainer.innerHTML = ""; // Clear previous similar items
    
        // Filter products by category (excluding the current product)
        const similarProducts = products
            .filter(p => p.category === category && p.id !== currentProductId)
            .slice(0, 3); // Limit to 1-3 products
    
        // Create product elements using the same structure as All Products
        similarProducts.forEach(product => {
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
    
            // Add click event to open this product in product view
            productItem.querySelector("a").addEventListener("click", (event) => {
                event.preventDefault();
                loadProductView(product);
            });
    
            similarItemsContainer.appendChild(productItem);
        });
    }

    // Add event listeners to product items
    document.querySelectorAll(".product-card li a").forEach((productItem, index) => {
        productItem.addEventListener("click", (event) => {
            event.preventDefault();
            loadProductView(products[index]);
        });
    });

    // Back to Products button functionality
    document.getElementById("backToProducts").addEventListener("click", () => {
        productViewContainer.style.display = "none"; // Hide product view
        productList.style.display = "flex"; // Show product list
        allProductsSection.style.display = "block"; // Show "All Products" section
        categoriesSection.style.display = "block"; // Show Categories
    });
});

document.getElementById("dashboardBtn").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent any default behavior

    // Show all products again
    document.getElementById("productList").style.display = "flex"; 
    document.querySelector(".all-products").style.display = "block"; 
    document.querySelector(".categories-section").style.display = "block"; 
    document.getElementById("productViewContainer").style.display = "none"; 
});

document.getElementById("allProductsBtn").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent any default behavior

    // Show all products again
    document.getElementById("productList").style.display = "flex"; 
    document.querySelector(".all-products").style.display = "block"; 
    document.querySelector(".categories-section").style.display = "block"; 
    document.getElementById("productViewContainer").style.display = "none"; 
});

document.getElementById("quantity").addEventListener("input", function () {
    let qty = parseInt(this.value, 10) || 1; // Ensure a valid number
    if (qty < 1) qty = 1; // Prevent negative or zero values
    this.value = qty; // Keep the value valid

    // Get the product's base price
    const productPrice = parseFloat(
        document.getElementById("product-price").textContent.replace(/[₱,]/g, "")
    );

    // Update total price
    document.getElementById("total-amount").textContent = "₱" + (productPrice * qty).toLocaleString("en-US", { minimumFractionDigits: 2 });
});