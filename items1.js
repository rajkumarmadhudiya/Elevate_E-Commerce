
let bagitemobject;
onload();
function onload() {
  loadbagitem();
  displaybagitem();
  summary();

}
function summary() {
  let summary = document.querySelector('.bag-summary');
  let totalitem = bagitemobject.length;
  let totalmrp = 0;
  let totaldiscount = 0;

  bagitemobject.forEach(items => {
    totalmrp += items.original_price;
    totaldiscount += items.original_price - items.current_price;
  });
  let finalpayment = totalmrp - totaldiscount + 99;
  summary.innerHTML = ` <div class="bag-item-container"> 
  <div class="price-header">PRICE DETAILS (${totalitem}) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">Rs${totalmrp}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-Rs${totaldiscount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">Rs 99</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">Rs ${finalpayment}</span>
  </div>
</div>
 <button class="btn-place-order">PLACE ORDER </button>`;
}



function loadbagitem() {

  bagitemobject = bagitems.map((itemid) => {
    for (let i = 0; i < items1.length; i++) {
      if (itemid == items1[i].id) {
        console.log(itemid)
        return items1[i];
      }
    }
  })
  console.log(bagitemobject)
}
function displaybagitem() {
  let containerelement = document.querySelector('.bag-items-container');
  let innerhtml = "";
  bagitemobject.forEach(item => {
    innerhtml += generate(item);
  });
   containerelement.innerHTML = innerhtml;
}
function remove(itemid) {

  bagitems = bagitems.filter(bagitems => bagitems != itemid);
  localStorage.setItem('bagitems', JSON.stringify(bagitems))
  console.log(bagitems);
  loadbagitem();
  dispalybagicon();
  displaybagitem();
  summary();

}
function generate(item) {
  return `  <div class="bag-item-container">
        <div class="item-left-part">
      <img class="bag-item-img" src="${item.image}">
      </div>
      <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">${item.current_price}</span>
        <span class="original-price">${item.original_price}</span>
        <span class="discount-percentage">${item.discount_percentage}% OFF</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period}</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>
    
    <div class="remove-from-cart" onclick="remove(${item.id})" >X</div>
    </div >`;

}

function checkout(){
   window.location.href="checkout.html";
}