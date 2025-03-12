document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [
        { id: 1, name: 'MSI MPG 321URXW', price: 61495.00, quantity: 1, image: 'Assets/MSI MPG 321 URXW.webp' },
        { id: 2, name: 'Corsair 5000D', price: 8650.00, quantity: 1, image: 'Assets/Corsair 5000D.webp' },
        { id: 3, name: 'Intel Core i7-14700', price: 20995.00, quantity: 1, image: 'Assets/Intel Core i7-14700.webp' },
        { id: 4, name: 'G.Skill Ripjaws V 32GB', price: 3350.00, quantity: 1, image: 'Assets/G.Skill Ripjaws V 32GB.webp' }
    ];

    const elements = {
        deleteModal: document.getElementById('deleteModal'),
        paymentModal: document.getElementById('paymentModal'),
        profileDropdown: document.querySelector('.profile-dropdown'),
        dropdownContent: document.querySelector('.dropdown-content'),
        cartContainer: document.getElementById('cartItems'),
        emptyCart: document.getElementById('emptyCart'),
        cancelDelete: document.getElementById('cancelDelete'),
        confirmDelete: document.getElementById('confirmDelete'),
        shippingForm: document.getElementById('shippingForm'),
        paymentForm: document.getElementById('paymentForm'),
        closeModal: document.querySelector('.close-modal')
    };
    
    let itemToDelete = null;

    function renderCart() {
        if (cartItems.length === 0) {
            elements.cartContainer.innerHTML = '';
            elements.emptyCart.classList.remove('hidden');
            return;
        }

        elements.emptyCart.classList.add('hidden');
        elements.cartContainer.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <div class="item-price">₱${item.price.toFixed(2)}</div>
                </div>
                <div class="quantity-container">
                    <span>Quantity</span>
                    <div class="quantity-controls">
                        <input type="text" value="${item.quantity}" readonly>
                        <div class="quantity-buttons">
                            <button onclick="updateQuantity(${item.id}, 1)">▲</button>
                            <button onclick="updateQuantity(${item.id}, -1)">▼</button>
                        </div>
                    </div>
                </div>
                <div class="total-amount">
                    <span>Total Amount</span>
                    <div class="amount">₱${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <button class="remove-btn" onclick="showDeleteModal(${item.id})">×</button>
            </div>
        `).join('');
        
        updateTotals();
    }

    window.updateQuantity = (id, change) => {
        const item = cartItems.find(item => item.id === id);
        if (item) {
            item.quantity = Math.max(1, item.quantity + change);
            renderCart();
        }
    };

    window.showDeleteModal = (id) => {
        itemToDelete = id;
        elements.deleteModal.showModal();
    };

    elements.cancelDelete.addEventListener('click', () => {
        elements.deleteModal.close();
        itemToDelete = null;
    });

    elements.confirmDelete.addEventListener('click', () => {
        if (itemToDelete !== null) {
            cartItems.splice(cartItems.findIndex(item => item.id === itemToDelete), 1);
            renderCart();
            elements.deleteModal.close();
            itemToDelete = null;
        }
    });

    elements.shippingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (cartItems.length === 0) {
            alert('Your cart is empty. Please add items before proceeding to checkout.');
            return;
        }
        elements.paymentModal.showModal();
    });

    elements.closeModal.addEventListener('click', () => {
        elements.paymentModal.close();
    });

    elements.paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Payment processed successfully!');
        elements.paymentModal.close();
        cartItems.length = 0;
        renderCart();
    });

    function updateTotals() {
        const itemsTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shippingFee = cartItems.length > 0 ? 500.00 : 0.00;
        const total = itemsTotal + shippingFee;
        
        const totals = {
            itemsTotal: itemsTotal,
            shippingFee: shippingFee,
            totalAmount: total,
            paymentAmount: total
        };
        
        Object.keys(totals).forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = `₱${totals[id].toFixed(2)}`;
        });
        
        const cartCountElement = document.querySelector('.a2c-btn');
        if (cartCountElement) {
            cartCountElement.innerHTML = `<img class="cart-icon" src="Assets/shopping_cart_24dp_F4D35E_FILL0_wght400_GRAD0_opsz24.svg" alt="Cart Icon."> Cart (${cartItems.length})`;
        }
        
        const summaryEl = document.querySelector('.order-summary');
        if (summaryEl) {
            summaryEl.style.display = cartItems.length === 0 ? 'none' : 'block';
        }
    }

    elements.profileDropdown.addEventListener('click', function(e) {
        elements.dropdownContent.style.display = elements.dropdownContent.style.display === 'block' ? 'none' : 'block';
        e.stopPropagation();
    });

    document.addEventListener('click', () => {
        elements.dropdownContent.style.display = 'none';
    });

    renderCart();
});
