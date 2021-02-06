// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const total = (price * quantity).toFixed(2);
  // //... your code goes here
  // const subtotal = product.querySelector(".subtotal span");
  // subtotal.innerText = total.toFixed(2);
  product.querySelector(".subtotal span").innerText = total;
  return Number(total);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName("product");
  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }
  console.log(total);

  // ITERATION 3
  const totalSpan = document.querySelector("#total-value span");
  totalSpan.innerHTML = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const td = target.parentNode;
  const tr = td.parentNode;
  tr.remove();
}

// ITERATION 5
function createProduct() {
  //... your code goes here
  console.log("create product called");
  const createTr = document.querySelector(".create-product");
  const inputs = createTr.getElementsByTagName("input");
  const productName = inputs[0].value;
  const productPrice = inputs[1].value;

  // append another tr to the tbody(in addition to copying anything that used to be on the table body)
  document.querySelector("tbody").innerHTML += `<tr class="product">
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${productPrice}</span></td>
  <td class="quantity">
    <input type="number" value="1" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;
  // addRemoveEventListener();
}

window.addEventListener("load", () => {
  // find the button to calculate prices and add event lister to it
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  // addRemoveEventListener();

  // add an event listener to the tbody and listen for events bubbling up
  const tbody = document.querySelector("tbody");
  tbody.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.className.includes("btn-remove")) {
      event.target.parentNode.parentNode.remove();
    }
  });

  // find the create button and add event listener to it
  const createBtn = document.querySelector("#create");
  createBtn.addEventListener("click", createProduct);
});

// function to grab all delete buttons on the page and add event listers to them
function addRemoveEventListener() {
  const removeProductBtn = document.getElementsByClassName("btn btn-remove");
  [...removeProductBtn].forEach((btn) => {
    btn.addEventListener("click", removeProduct);
    // btn.onclick = removeProduct;
  });
}
