

// select the hamburger elements by id
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const cartCount = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn')

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    if(mobileMenu.classList.contains('hidden')){
        hamburgerIcon.innerHTML = `
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>  
        `
    } else{
        hamburgerIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        `
    }
});

let cartItems = 0;

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // increase cart items
        cartItems++;

        cartCount.textContent = cartItems;

        button.textContent = cartItems;

        
        button.textContent = 'Added!';
        button.style.backgroundColor = '#10b981';

        setTimeout(() => {
            button.textContent = 'Added to cart';
            button.style.backgroundColor = '';

        }, 1000);
    });
});

console.log(addToCartButtons);