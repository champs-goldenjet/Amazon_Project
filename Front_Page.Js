// Dispalaying products on the front page
const productsData = [ 

    { image : 'BAmazonImages/products/athletic-cotton-socks-6-pairs.jpg',
      id : 1,
      name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',  
      rating : { stars : 45, count : 87 } ,
      price : 1090    },

    { image : 'BAmazonImages/products/intermediate-composite-basketball.jpg',
      id : 2,
      name : 'size 5 basketball',
      rating : { stars : 45, count : 127 } ,
      price : 2095     } ,

    { image : 'BAmazonImages/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
      id : 3,
      name : 'Adults Plain Cotton T-Shirt 2 Pack',
      rating : { stars : 45, count : 56 } ,  
      price : 799    } ,

    { image : 'BAmazonImages/products/black-2-slot-toaster.jpg',
      id : 4,
      name : 'Black 2-Slot Toaster',
      rating : { stars : 50, count : 2197 } ,  
      price : 1899    } ,

    { image : 'BAmazonImages/products/6-piece-white-dinner-plate-set.jpg',
      id : 5,
      name : '6-Piece White Dinner Plate Set',
      rating : { stars : 40, count : 37 } ,  
      price : 2067    } ,
    
    { image : 'BAmazonImages/products/luxury-tower-set-6-piece.jpg',
      id : 6,
      name : 'Luxury Towel Set - Graphite Grey',
      rating : { stars : 45, count : 144 } ,  
      price : 3599    }
];

let productsHTML = '';

productsData.forEach((product) => {
    productsHTML +=
     `<div class="productContainer">
          <div class="PimageDiv">
            <img
              src="${product.image}"
              alt=""
              class="productImage"
            />
          </div>

          <div class="name-of-product">${product.name}</div>

          <div class="ratings">
            <img
              src="BAmazonImages/ratings/rating-${product.rating.stars}.png"
              alt=""
              class="ratingStars"
            />
            <div class="ratingsCount">${product.rating.count}</div>
          </div>

          <div class="price">$${(product.price / 100).toFixed(2)}</div>

          <select name="quantity" id="" class="how-many-DUW">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <div class="add2CartButtonDiv">
            <div class="checkMarkDiv">
              <img src="BAmazonImages/icons/checkmark.png" alt="" class="checkMark" />
              Added
            </div>
            <button class="add2CartButton" data-product-id="${product.id}">Add to cart</button>
          </div>
      </div>`;
});

document.querySelector('.jsProductsGrid').innerHTML = productsHTML;

// Add to cart button functionality

const cartBasket = [];

document.querySelectorAll('.add2CartButton').forEach((buttonItem) => {
  buttonItem.addEventListener('click', () => {

    const selectedProductId = buttonItem.dataset.productId;

    const selectedProductCheckMarkDiv = buttonItem
      .closest('.productContainer')
      .querySelector('.checkMarkDiv'); // Selects the checkmark div of the product that was added to the cart

    let matchingCartItem ;

    cartBasket.forEach((cartItem) => { 
      if (cartItem.productId === selectedProductId) { matchingCartItem = cartItem; } });
    
    if (matchingCartItem) {  matchingCartItem.quantity ++;  }

    else {  cartBasket.push({ productId: selectedProductId , quantity: 1 });  } 
      console.log(cartBasket); 
            
      // Displaying cartquantity on the cart icon
      let cartQuantity = 0;
      cartBasket.forEach((goods) => { cartQuantity += goods.quantity; });
      document.querySelector('.cartCount').innerHTML = cartQuantity;

      selectedProductCheckMarkDiv.classList.add('showCheckMark'); // Displays the checkmark when the product is added to the cart
    }); 
    
  }); 

  