// Mendapatkan elemen keranjang
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let totalPrice = 0;

// Fungsi untuk menambahkan item ke keranjang
function addToCart(productName, productPrice) {
    // Membuat elemen list baru untuk item keranjang
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - Rp ${productPrice}`;

    // Menambahkan item ke dalam list keranjang
    cartItems.appendChild(cartItem);

    // Menambah harga produk ke total
    totalPrice += parseInt(productPrice);
    cartTotal.textContent = totalPrice;
}

// Menambahkan event listener ke semua tombol "Add to Cart"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.getAttribute('data-product');
        const productPrice = event.target.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});