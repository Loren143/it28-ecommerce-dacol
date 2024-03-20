// Function to add product to cart
function addToCart(productName, price) {
    // Retrieve existing cart data from localStorage
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = {}; // If cart data does not exist, create a new empty object
    } else {
        cart = JSON.parse(cart); // Parse cart data from JSON string to JavaScript object
    }
    
    // Increment quantity if product already exists in cart, otherwise set quantity to 1
    cart[productName] = (cart[productName] || 0) + 1;

    // Save updated cart data back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count display (you can implement this part)
    updateCartCount();

    // Optionally, display a confirmation message
    alert(`Added ${productName} to cart! Price: $${price}`);
}
// Function to update cart count display (you can implement this part)
function updateCartCount() {
    // Get cart data from localStorage
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = {}; // If cart data does not exist, create a new empty object
    } else {
        cart = JSON.parse(cart); // Parse cart data from JSON string to JavaScript object
    }

    // Calculate total quantity of items in cart
    let totalCount = Object.values(cart).reduce((acc, val) => acc + val, 0);

    // Update cart count display (you can implement this part)
    document.getElementById('cartCount').textContent = `Products in Cart: ${totalCount}`;
}

// Call updateCartCount() function to display initial cart count when page loads
updateCartCount();