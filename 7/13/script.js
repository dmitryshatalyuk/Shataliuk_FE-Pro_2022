let mainBox = document.querySelector(".main"),
  formBox = document.querySelector(".form_box"),
  orderInfoBox = document.querySelector(".order_info");

function Product(name, price, imageUrl) {
  this.name = name;
  this.price = price;
  this.imageUrl = imageUrl;
  this.setProductHTML = function (appender) {
    appender.innerHTML = `<div class="product">
      <h4 class="product_title">${this.name}</h4>
      <img class="product_image" src="${this.imageUrl}"/>
      <span class="product_price">$${this.price}</span>
      <button class="buy_now" onClick="setFormHTML(formBox)" data-name="${this.name}" data-price="${this.price}">Buy</button>
    </div>`;
  };
  setFormHTML = function (appender) {
    appender.innerHTML = `<form id="purchase_form" class="purchase_form product" onsubmit="orderSubmit(event)">
      <input type="text" name="FullName" placeholder="Full Name" class="input" required/>
      <select name="City" class="input" required>
        <option value="Choose city" disabled>Choose city</option>
        <option value="Kyiv">Kyiv</option>
        <option value="Kharkiv">Kharkiv</option>
        <option value="Odesa">Odesa</option>
        <option value="Dnipro">Dnipro</option>
        <option value="Lviv">Lviv</option>
        <option value="Mykolaiv">Mykolaiv</option>
      </select>
      <input type="text" name="NewPostNumber" class="input" placeholder="New Post Number" required/>
      <div class="input">
        <input type="radio" name="Payment" value="Now" id="now" required/>
        <label for="now">Pay now</label>
        <input type="radio" name="Payment" value="After" id="after" required/>
        <label for="after">Pay after recieving</label>
      </div>
      <input type="number" name="quantity" class="input" value="1" min="1" required/>
      <textarea name="AdditionalInfo"  class="input" placeholder="Additional info" cols='30' rows="3"></textarea>
      <input type="hidden" name="productName" value="${name}"/>
      <input type="hidden" name="productPrice" value="${price}"/>
      <button type="submit">Buy now</button>
    </form>`;
  };
}

function orderSubmit(event) {
  event.preventDefault();
  let orderInfo = Object.fromEntries(new FormData(event.target).entries());

  orderInfoBox.innerHTML = `<div class="product order-info">
  <div class="ordered_product">
    <h3 class="order_info_title">Your order:</h3>
      <p><b>${orderInfo.productName}</b></p>
      <p>Quantity: ${orderInfo.quantity}</p>
      <h4>Total: $${(orderInfo.quantity * orderInfo.productPrice).toFixed(
        2
      )}</h4>
    </div>
    <div class="person_info">
     <h3 class="order_info_title">Delivery to:</h3>
      <p>${orderInfo.FullName}</p>
      <p>${orderInfo.City}, Nova Poshta #${orderInfo.NewPostNumber}</p>
      <p>Payment: ${orderInfo.Payment}</p>
      <p>Additional information: ${orderInfo.AdditionalInfo}</p>
    </div>
  </div>`;
}

let pillow = new Product(
  "Набор подушек Sleepingg антиаллергенных 50х70 2 шт",
  19.99,
  "https://content2.rozetka.com.ua/goods/images/big/35335206.jpg"
);

pillow.setProductHTML(mainBox);
