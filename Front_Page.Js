const productsData = [ 

    { image : 'frontPageAssets/athletic-cotton-socks-6-pairs.jpg',
      name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',  
      rating : { stars : 45, count : 87 } ,
      price : 1090    },

    { image : 'frontPageAssets/intermediate-composite-basketball.jpg',
      name : 'size 5 basketball',
      rating : { stars : 45, count : 127 } ,
      price : 2095     } ,

    { image : 'frontPageAssets/adults-plain-cotton-tshirt-2-pack-teal.jpg',
      name : 'Adults Plain Cotton T-Shirt 2 Pack',
      rating : { stars : 45, count : 56 } ,  
      price : 799    } ,

    { image : 'frontPageAssets/black-2-slot-toaster.jpg',
      name : 'Black 2-Slot Toaster',
      rating : { stars : 50, count : 2197 } ,  
      price : 1899    } ,

    { image : 'frontPageAssets/6-piece-white-dinner-plate-set.jpg',
      name : '6-Piece White Dinner Plate Set',
      rating : { stars : 40, count : 37 } ,  
      price : 2067    } ,
    
    { image : 'frontPageAssets/luxury-tower-set-6-piece.jpg',
      name : 'Luxury Towel Set - Graphite Grey',
      rating : { stars : 45, count : 144 } ,  
      price : 3599    }
];

let productsHTML = '';

productsData.forEach((product) => {
    productsHTML += `        <div class="productContainer">
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

          <button class="add2CartButton">Add to cart</button>
        </div>`;
});

document.querySelector('.jsProductsGrid').innerHTML = productsHTML;