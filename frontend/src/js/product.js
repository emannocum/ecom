const ULProduct = document.querySelector('#ulProducts');

const AddToCart = async (product) => {
  console.log(product);
  const data = {'_idUser': localStorage.getItem('sessionID'), '_idProduct': product}
  try{
    const request = await fetch('http://localhost:3000/add-to-cart', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        data: JSON.stringify(data)
    })

    const response = await request.json()

    console.log(response)
  }catch(e){
    console.error(e)
  }
};

//get products
const GetProducts = async () => {
  let content = '';
  try {
    const request = await fetch('http://localhost:3000/products');
    const response = await request.json();

    if (response) {
      // Create a new list item
      response.forEach((product) => {
        console.log(product);
        content += `<li>
          <a href="#" class="block overflow-hidden group">
            <img
              src="${product.image_url}"
              alt=""
              class="h-[350px] w-[350px] object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative pt-3 bg-white">
              <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                ${product.name}
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>
                <span class="tracking-wider text-gray-900">₱${product.price} PHP</span>
              </p>
              <button onClick="AddToCart('${product._id}')">Add to Cart</button>

            </div>
          </a>
        </li>`;
      });

      ULProduct.innerHTML = content;
    }
  } catch (e) {
    console.error(e);
  }
};

window.addEventListener('load', () => {
  GetProducts();
});
