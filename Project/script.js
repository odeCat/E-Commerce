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
        category: "cpu",
        description: `The Intel Core Ultra 9 285 is a high-end desktop processor designed for power users, content creators, and gamers who demand top-tier performance. Built on Intel's Arrow Lake architecture, this CPU features a 24-core, 24-thread hybrid design, combining 10 Performance-cores (P-cores) for intensive workloads and 14 Efficiency-cores (E-cores) for optimized power consumption.`
    },
    {
        id: 3,
        name: "Asus ROG Strix GeForce RTX 4090",
        image: "/Project/Assets/Asus ROG Strix GeForce RTX 4090.webp",
        price: "₱145,695.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "gpu",
        description: 'ROG Strix GeForce RTX® 4090 OC Edition 24GB GDDR6X with DLSS 3 and chart-topping thermal performance NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency 4th Generation Tensor Cores: Up to 4x performance with DLSS 3 vs. brute-force rendering'
    },
    {
        id: 4,
        name: "G.Skill Trident Z Neo RGB 32GB",
        image: "/Project/Assets/G.Skill Trident Z Neo RGB 32GB.webp",
        price: "₱4,350.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "ram",
        description: 'Engineered and optimized for full compatibility on the latest AMD Ryzen platforms, Trident Z Neo brings unparalleled DRAM memory performance and vibrant RGB lighting to any gaming PC or workstation with latest AMD Ryzen CPUs and AMD DDR4 motherboards. Optimized DDR4 Performance for AMD Ryzen'
    },
    {
        id: 5,
        name: "Asus ProArt PA401",
        image: "/Project/Assets/Asus ProArt PA401.webp",
        price: "₱6,050.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "pc-case",
        description: 'SPECIFICATION Model ProArt PA401 Wood Edition - Tempered Glass Panel Motherboard Support ATX Drive Bays 2 x 2.5" Bay 2 x 2.5"/3.5" Combo Bay Expansion Slots 7 Front I/O Port 1 x headphone / Microphone 2 x USB 3.2 Gen1 1 x USB 3.2 Gen 2x2 Type C Radiator Support (Top) 120 mm'
    },
    {
        id: 6,
        name: "MSI Pro MP225V",
        image: "/Project/Assets/MSI Pro MP225V.webp",
        price: "₱6,050.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "monitor",
        description: 'SPECIFICATION PANEL SIZE 21.45" PANEL RESOLUTION 1920 x 1080 (FHD) REFRESH RATE 100Hz RESPONSE TIME 1ms (MPRT) / 4ms (GTG) PANEL TYPE VA BRIGHTNESS (NITS) 300 VIEWING ANGLE 178(H) / 178(V) ASPECT RATIO 16:09 CONTRAST RATIO 4000:01:00 sRGB 100% (CIE 1976) ACTIVE DISPLAY'
    },
    {
        id: 7,
        name: "Intel Core Ultra 7 265",
        image: "/Project/Assets/Intel Core Ultra 7 265.webp",
        price: "₱22,395.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "cpu",
        description: `The Intel Core Ultra 7 265 is a next-generation desktop processor designed for high performance and efficiency. Built on Intel's Arrow Lake architecture, this CPU features a hybrid core design with 20 cores and 20 threads, including 8 Performance-cores (P-cores) for demanding tasks`
    },
    {
        id: 8,
        name: "Gigabyte Geforce RTX 4090",
        image: "/Project/Assets/Gigabyte Geforce RTX 4090.webp",
        price: "₱117,750.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "gpu",
        description: 'GeForce RTX™ 4090 WINDFORCE V2 24GB Specification Graphics Processing: GeForce RTX™ 4090Core Clock: 2520 MHzCUDA® Cores: 16384Memory Clock: 21 GbpsMemory Size: 24 GBMemory Type: GDDR6XMemory Bus: 384 bitCard Bus: PCI-E 4.0Digital max resolution: 7680x4320Multi-view: 4Card size: L=331 W=136 H'
    },
    {
        id: 9,
        name: "Corsair Vengeance RGB Pro SL 32GB",
        image: "/Project/Assets/Corsair Vengeance RGB Pro SL 32GB.webp",
        price: "₱5,695.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "ram",
        description: 'VENGEANCE RGB PRO SL VISUALIZE, SYNCHRONIZE, MEMORIZE. OPTIMIZED FOR INTEL® AND AMD® CORSAIR VENGEANCE RGB PRO SL DDR4 memory lights up your PC with dynamic, individually addressable RGB lighting, while delivering peak performance in a compact form factor. INTELLIGENT CONTROL'
    },
    {
        id: 10,
        name: "Corsair 5000D",
        image: "/Project/Assets/Corsair 5000D.webp",
        price: "₱8,650.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "pc-case",
        description: '5000D Tempered Glass Mid-Tower ATX PC Case The CORSAIR 5000D is a mid-tower ATX case that shows off your PC, and not its cables. Hidden cable management and massive cooling potential make building a clean, cool PC easy, with two included CORSAIR AirGuide fans. Specifications: Case Height'
    },
    {
        id: 11,
        name: "Gigabyte M27QA",
        image: "/Project/Assets/Gigabyte M27QA.webp",
        price: "₱15,950.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "monitor",
        description: 'As an unseen player, monitor is often being underestimated. The truth is monitors form as a synergistic effect and bring out the best performance of PC components. GIGABYTE gaming monitors offer the ultimate specifications and quality, users can truly enjoy upscale performance without the need for extravagance.'
    },
    {
        id: 12,
        name: "Intel Core i7-14700",
        image: "/Project/Assets/Intel Core i7-14700.webp",
        price: "₱20,995.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "cpu",
        description: 'SPECIFICATION Model name Core i7-14700 Compatible socket LGA1700 Code name Raptor Lake-S Refresh Number of cores 20 cores (P core: 8, E core: 12) Number of threads 28 threads (P core threads: 16, E core threads: 12) base clock P core base clock: 2.1GhzE core base clock: 1'
    },
    {
        id: 13,
        name: "ASRock AMD Radeon RX 6500",
        image: "/Project/Assets/ASRock AMD Radeon RX 6500.webp",
        price: "₱9,450.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "gpu",
        description: 'AMD Radeon™ RX 6500 XTPhantom Gaming D 4GB OC RX6500XT PGD 4GO PRODUCT BRIEF: Clock: GPU / MemoryBoost Clock: Up to 2820 MHz / 18 GbpsGame Clock: Up to 2650 MHz / 18 GbpsBase Clock: 2365 MHz / 18 Gbps Key Specification6nm AMD Radeon™ RX 6500 XT4GB GDDR6AMD RDNA™ 2 ArchitectureDirectX® 12 Ult'
    },
    {
        id: 14,
        name: "G.Skill Ripjaws V 32GB",
        image: "/Project/Assets/G.Skill Ripjaws V 32GB.webp",
        price: "₱3,295.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "ram",
        description: 'F4-3600C18D-32GVK Ripjaws V series DDR4 DRAM memory is designed for sleek aesthetics and performance, making it an ideal choice for building a new PC system or for upgrading your system memory. SPECIFICATION Memory Type : DDR4 Capacity : 32GB (16GBx2) Multi-Channel Kit'
    },
    {
        id: 15,
        name: "Montech Air X",
        image: "/Project/Assets/Montech Air X ARGB.webp",
        price: "₱3,350.00",
        rating: "/Project/Assets/5 star rating icon.webp",
        reviews: "5 reviews",
        category: "pc-case",
        description: 'Montech AIR X ARG Black ATX Mid Tower Gaming Case comes with a Unique Diamonded Mesh design. This Unique design case featured with Fine metal mesh front , Dustproof fine, Mesh dust screens, Compact ATX, Double USB 3.0 + Single USB 2.0, 200mm ARGB Fans x 2 + 120mm ARGB Fan x 1, Controller. In this case, All pre-installed fans have already connected with the controller. It is designed with a large surface metallic Diamond Mesh front with air intake mesh and two 200mm ARGB fans. Here, Included another 120mm ARGB fan for a total of three fans and a maximum air intake area for incredible cooling performance and the aesthetics to match.'
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

        // Add click event to each product item
        productItem.querySelector(".product-link").addEventListener("click", function(event) {
            event.preventDefault();
            // Find the product by id
            const productId = parseInt(this.getAttribute("data-id"));
            const selectedProduct = products.find(p => p.id === productId);
            
            if (selectedProduct) {
                loadProductView(selectedProduct);
            }
        });

        productList.appendChild(productItem);
    });
}

document.querySelector('.categories-btn li[data-category="all"]').classList.add('active-category');


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
        
        categoryButtonsClicked .forEach(btn => btn.classList.remove("active-category"));

       
        this.classList.add("active-category");

        
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
            userDropdown.style.display = "flex";
        } else {
            console.log("No user found, showing login buttons.");
            authButtons.classList.remove("hidden");
            userDropdown.classList.add("hidden");
            userDropdown.style.display = "none";
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

document.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
    
    // Update cart when user logs in or out
    const updateUI = window.updateUI;
    if (updateUI) {
        window.updateUI = function() {
            updateUI.call(this);
            updateCartCount();
        };
    }
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
    const productList = document.querySelector("#productList"); 
    const productViewContainer = document.getElementById("productViewContainer"); 
    const allProductsSection = document.querySelector(".all-products"); 
    const categoriesSection = document.querySelector(".categories-section"); 
    const similarItemsContainer = document.getElementById("similar-items-container"); 
    const quantityInput = document.getElementById("quantity");
    const totalAmount = document.getElementById("total-amount");

    // Function to update product details
    function loadProductView(product) {

        // Update product details
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-title").textContent = product.name;
        document.getElementById("product-rating").textContent = product.reviews;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-description").textContent = product.description || "No description available.";

         // Add data-id to the product title
        const productTitle = document.getElementById("product-title");
        productTitle.textContent = product.name;
        productTitle.setAttribute("data-id", product.id);
    
        // Reset quantity and update total price
        quantityInput.value = 1;
        totalAmount.textContent = product.price;
    
        // Hide product list, categories, and show product details
        productList.style.display = "none";
        allProductsSection.style.display = "none"; 
        categoriesSection.style.display = "none"; 
        productViewContainer.style.display = "block"; 
        
        loadSimilarItems(product.category, product.id);

        const addToCartButton = document.getElementById("add-to-cart-button");
        if (addToCartButton) {
            // Remove any existing listeners to prevent duplicates
            addToCartButton.replaceWith(addToCartButton.cloneNode(true));
            
            // Get the freshly cloned button
            const newAddToCartButton = document.getElementById("add-to-cart-button");
            
            // Add event listener to the button
            newAddToCartButton.addEventListener("click", function(event) {
                event.preventDefault();
                console.log("Add to cart clicked"); // Debug line
                
                // Check if user is logged in
                const currentUser = localStorage.getItem("currentUser");
                
                if (!currentUser) {
                    console.log("User not logged in, showing login modal"); // Debug line
                    
                    // Get the login modal
                    const loginModal = document.getElementById("authModal");
                    
                    if (loginModal) {
                        // Ensure any hidden class is removed and show class is added
                        loginModal.classList.remove("hide");
                        loginModal.style.display = ("flex");
                        loginModal.classList.add("show");
                
                        // Reset any form inputs if needed
                        const loginForm = loginModal.querySelector("form");
                        if (loginForm) loginForm.reset();
                    } else {
                        console.error("Auth modal not found in the DOM");
                    }
                    return;
                }
                
                // User is logged in - proceed with adding to cart
                const productData = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: parseInt(document.getElementById("quantity").value || 1)
                };
        
                const overlay = document.createElement("div");
                overlay.classList.add("added-to-cart-overlay");
        
                const modal = document.createElement("div");
                modal.classList.add("added-to-cart-modal");
        
                // Checkmark
                const checkIcon = document.createElement("img");
                checkIcon.src = "/Project/Assets/check.png"; 
                checkIcon.alt = "Success Checkmark";
                checkIcon.classList.add("check-icon");
        
                // Text
                 const messageSpan = document.createElement("span");
                 messageSpan.textContent = "Added to cart successfully!";
        
                // Append elements
                modal.appendChild(checkIcon);
                modal.appendChild(messageSpan);
                overlay.appendChild(modal);
                document.body.appendChild(overlay);
        
                // Fade-In Effect
                setTimeout(() => {
                    overlay.classList.add("show");
                }, 10);
        
                 // Hide After 2 Seconds
                setTimeout(() => {
                    overlay.classList.remove("show");
                     setTimeout(() => {
                         overlay.remove();
                     }, 300);
                 }, 2000);
                        
                // Add to cart
                addProductToCart(productData, currentUser);
                updateCartCount();
                
            });
        }
    }

    function addProductToCart(product, userEmail) {
        // Get existing cart or create new one
        let userCart = JSON.parse(localStorage.getItem(`cart_${userEmail}`)) || [];
        
        // Check if product already exists in cart
        const existingProductIndex = userCart.findIndex(item => item.id === product.id);
        
        if (existingProductIndex >= 0) {
            // Update quantity if product already in cart
            userCart[existingProductIndex].quantity += product.quantity;
        } else {
            // Add new product to cart
            userCart.push(product);
        }
        
        // Save updated cart back to localStorage
        localStorage.setItem(`cart_${userEmail}`, JSON.stringify(userCart));
        console.log("Cart updated:", userCart); // Debug line
        
        updateCartCount();
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

        window.displayProducts = function(productsToShow, category = "All Products") {
            productList.innerHTML = "";
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
    
                // Add product click handler that uses our local loadProductView function
                const productLink = productItem.querySelector(".product-link");
                productLink.addEventListener("click", function(event) {
                    event.preventDefault();
                    const productId = parseInt(this.getAttribute("data-id"));
                    const selectedProduct = products.find(p => p.id === productId);
                    
                    if (selectedProduct) {
                        loadProductView(selectedProduct);
                    }
                });
    
                productList.appendChild(productItem);
            }); 
        }
    
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

    // // Back to Products button functionality
    // document.getElementById("backToProducts").addEventListener("click", () => {
    //     productViewContainer.style.display = "none"; // Hide product view
    //     productList.style.display = "flex"; // Show product list
    //     allProductsSection.style.display = "block"; // Show "All Products" section
    //     categoriesSection.style.display = "block"; // Show Categories
    // });

});

document.getElementById("dashboardBtn").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent any default behavior

    // Show all products again
    document.getElementById("productList").style.display = "flex"; 
    document.querySelector(".all-products").style.display = "block"; 
    document.querySelector(".categories-section").style.display = "block"; 
    document.getElementById("productViewContainer").style.display = "none";
    document.getElementById("cartViewContainer").style.display = "none";
});

document.getElementById("allProductsBtn").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent any default behavior

    // Show all products again
    document.getElementById("productList").style.display = "flex"; 
    document.querySelector(".all-products").style.display = "block"; 
    document.querySelector(".categories-section").style.display = "block"; 
    document.getElementById("productViewContainer").style.display = "none"; 
    document.getElementById("cartViewContainer").style.display = "none";
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


// ===========================
// 🛒 CART & PRODUCT MANAGEMENT 
// ===========================
document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const elements = {
        cartButton: document.querySelector(".a2c-btn"),
        cartViewContainer: document.getElementById("cartViewContainer"),
        productList: document.getElementById("productList"),
        allProductsSection: document.querySelector(".all-products"),
        categoriesSection: document.querySelector(".categories-section"),
        cartContainer: document.getElementById("cartItems"),
        emptyCart: document.getElementById("emptyCart"),
        deleteModal: document.getElementById("deleteModal"),
        cancelDelete: document.getElementById("cancelDelete"),
        confirmDelete: document.getElementById("confirmDelete"),
        shippingForm: document.getElementById("shippingForm"),
        paymentModal: document.getElementById("paymentModal"),
        paymentForm: document.getElementById("paymentForm"),
        closeModal: document.querySelector(".close-modal"),
        continueShopping: document.getElementById("continueShopping"),
    };

    let itemToDelete = null; // Variable to store the ID of the item to delete

    // Function to show the delete modal
    window.showDeleteModal = function(productId) {
        itemToDelete = productId; // Store the product ID
        const deleteModal = document.getElementById("deleteModal");
        deleteModal.showModal(); // Show the modal
    };

    // Event listener for the "Cancel" button
    document.getElementById("cancelDelete").addEventListener("click", () => {
        const deleteModal = document.getElementById("deleteModal");
        deleteModal.close(); // Close the modal
    });

    // Event listener for the "Remove" button
    document.getElementById("confirmDelete").addEventListener("click", () => {
        const currentUser = localStorage.getItem("currentUser");
        if (currentUser) {
            let userCart = JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [];
            userCart = userCart.filter(item => item.id !== itemToDelete); // Remove the item
            localStorage.setItem(`cart_${currentUser}`, JSON.stringify(userCart)); // Update the cart
            renderCart(); // Re-render the cart
            updateCartCount(); // Update the cart count
        }
        const deleteModal = document.getElementById("deleteModal");
        deleteModal.close(); // Close the modal
    });


    // Show cart view
    function showCartView() {
        elements.cartViewContainer.style.display = "block"; // Show cart page
        elements.productList.style.display = "none"; // Hide product list
        elements.allProductsSection.style.display = "none"; // Hide all products
        elements.categoriesSection.style.display = "none"; // Hide categories
        renderCart();
        updateCartCount();
    }

    function updateCartTotals(cartItems) {
        const itemsTotal = cartItems.reduce((total, item) => total + (item.numericPrice * item.quantity), 0);
        const shippingFee = 500; // Fixed shipping fee
        const totalAmount = itemsTotal + shippingFee;
    
        // Update the order summary
        document.getElementById("itemsTotal").textContent = `₱${itemsTotal.toFixed(2)}`;
        document.getElementById("shippingFee").textContent = `₱${shippingFee.toFixed(2)}`;
        document.getElementById("totalAmount").textContent = `₱${totalAmount.toFixed(2)}`;
    }

    // Attach event listener to cart button
    if (elements.cartButton) {
        elements.cartButton.addEventListener("click", (event) => {
            event.preventDefault();
            showCartView();
        });
    }

    function renderCart() {
        const currentUser = localStorage.getItem("currentUser");
        if (!currentUser) return;
        
        const userCart = JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [];
        
        // Get cart elements
        const cartContainer = document.getElementById("cartItems");
        const emptyCartMessage = document.getElementById("emptyCart");
        
        // If the cart is empty, show the message
        if (userCart.length === 0) {
            cartContainer.innerHTML = "";
            emptyCartMessage.classList.remove("hidden");
            
            // Hide order summary if cart is empty
            const summaryEl = document.querySelector(".order-summary");
            if (summaryEl) {
                summaryEl.style.display = "none";
            }
            return;
        }
        
        // Hide empty cart message
        emptyCartMessage.classList.add("hidden");
        
        // Show order summary
        const summaryEl = document.querySelector(".order-summary");
        if (summaryEl) {
            summaryEl.style.display = "block";
        }
        
        // Parse prices properly
        const cartItemsWithParsedPrices = userCart.map(item => {
            // Extract the numeric part of the price string (remove ₱ and commas)
            const priceValue = parseFloat(item.price.replace(/[₱,]/g, ""));
            return {
                ...item,
                numericPrice: priceValue
            };
        });
        
        // Render cart items
        cartContainer.innerHTML = cartItemsWithParsedPrices.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <div class="item-price">₱${item.numericPrice.toFixed(2)}</div>
                </div>
                <div class="quantity-container">
                    <span>Quantity</span>
                    <div class="quantity-controls">
                        <input type="text" value="${item.quantity}" readonly>
                        <div class="quantity-buttons">
                            <button onclick="updateCartQuantity(${item.id}, 1)">▲</button>
                            <button onclick="updateCartQuantity(${item.id}, -1)">▼</button>
                        </div>
                    </div>
                </div>
                <div class="total-amount">
                    <span>Total Amount</span>
                    <div class="amount">₱${(item.numericPrice * item.quantity).toFixed(2)}</div>
                </div>
                <button class="remove-btn" onclick="showDeleteModal(${item.id})">×</button>
            </div>
        `).join('');
        
        updateCartTotals(cartItemsWithParsedPrices);
    }
    

    // Update quantity in cart
    window.updateCartQuantity = (id, change) => {
        const currentUser = localStorage.getItem("currentUser");
        if (!currentUser) return;
        
        const userCart = JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [];
        const item = userCart.find(item => item.id === id);
        
        if (item) {
            item.quantity = Math.max(1, item.quantity + change);
            localStorage.setItem(`cart_${currentUser}`, JSON.stringify(userCart));
            renderCart();
            updateCartCount();
        }
    };


    // Handle checkout
    elements.shippingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get current user and their cart
        const currentUser = localStorage.getItem("currentUser");
        if (!currentUser) {
            alert("Please log in to proceed.");
            return;
        }
        const userCart = JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [];
        
        if (userCart.length === 0) {
            alert('Your cart is empty. Please add items before proceeding to checkout.');
            return;
        }
        
        // Show payment modal
        elements.paymentModal.showModal();
    });

    // In the DOMContentLoaded event listener
    elements.paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get current user
    const currentUser = localStorage.getItem("currentUser");
    
    if (currentUser) {
        // Clear the cart for this user
        localStorage.removeItem(`cart_${currentUser}`);
        
        // Close payment modal
        elements.paymentModal.close();
        
        // Update UI
        renderCart();
        updateCartCount();
        
        // Show confirmation (optional)
        const overlay = document.createElement("div");
                overlay.classList.add("added-to-cart-overlay");
        
                const modal = document.createElement("div");
                modal.classList.add("added-to-cart-modal");
        
                // Checkmark
                const checkIcon = document.createElement("img");
                checkIcon.src = "/Project/Assets/check.png"; 
                checkIcon.alt = "Success Checkmark";
                checkIcon.classList.add("check-icon");
        
                // Text
                 const messageSpan = document.createElement("span");
                 messageSpan.textContent = "Payment Successful!";
        
                // Append elements
                modal.appendChild(checkIcon);
                modal.appendChild(messageSpan);
                overlay.appendChild(modal);
                document.body.appendChild(overlay);
        
                // Fade-In Effect
                setTimeout(() => {
                    overlay.classList.add("show");
                }, 10);
        
                 // Hide After 2 Seconds
                setTimeout(() => {
                    overlay.classList.remove("show");
                     setTimeout(() => {
                         overlay.remove();
                     }, 300);
                 }, 2000);
        // You could also redirect to home page
        // window.location.href = "/";
    }
});

    renderCart();
    updateCartCount();
});


document.querySelector(".a2c-btn").addEventListener("click", () => {
    document.getElementById("productViewContainer").style.display = "none";
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
        console.log("User not logged in, showing login modal"); // Debug line
        
        // Get the login modal
        const loginModal = document.getElementById("authModal");
        
        if (loginModal) {
            // Ensure any hidden class is removed and show class is added
            loginModal.classList.remove("hide");
            loginModal.style.display = ("flex");
            loginModal.classList.add("show");
    
            // Reset any form inputs if needed
            const loginForm = loginModal.querySelector("form");
            if (loginForm) loginForm.reset();
        } else {
            console.error("Auth modal not found in the DOM");
        }
        return;
    }
     // Hide product listings, categories, and product details
     document.getElementById("productList").style.display = "none";
     document.querySelector(".all-products").style.display = "none";
     document.querySelector(".categories-section").style.display = "none";
     // Show the cart view
     document.getElementById("cartViewContainer").style.display = "block";
});

document.getElementById("continueShopping").addEventListener("click", () => {
    // Show products and categories
    document.getElementById("productList").style.display = "flex";
    document.querySelector(".all-products").style.display = "block";
    document.querySelector(".categories-section").style.display = "block";

    // Hide the cart view
    document.getElementById("cartViewContainer").style.display = "none";

    // Reattach product click events
    attachProductClickEvents();
});

// CART THINGS

function updateCartCount() {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) return;
    const userCart = JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [];
    const cartCountElement = document.querySelector(".a2c-btn");
    const totalQuantity = userCart.reduce((total, item) => total + (item.quantity || 1), 0);
    // Calculate total quantity of all items in cart
    if (cartCountElement) {
        cartCountElement.innerHTML = `<img class="cart-icon" src="/Project/Assets/shopping_cart_24dp_F4D35E_FILL0_wght400_GRAD0_opsz24.svg" alt="Cart Icon."> Cart (${totalQuantity})`;
    }
}
