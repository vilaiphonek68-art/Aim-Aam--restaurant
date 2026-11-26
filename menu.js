// =====================================
// HTML ELEMENTS
// =====================================

const regionSelection = document.getElementById("regionSelection");
const regionContent = document.getElementById("regionContent");
const regionTitle = document.getElementById("regionTitle");
const regionFoodGrid = document.getElementById("regionFoodGrid");
const backToRegions = document.getElementById("backToRegions");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");
const checkoutSection = document.getElementById("checkout");

const orderType = document.getElementById("orderType");

const dineInDetails = document.getElementById("dineInDetails");
const takeawayDetails = document.getElementById("takeawayDetails");
const deliveryDetails = document.getElementById("deliveryDetails");


// =====================================
// SHOPPING CART DATA
// =====================================

let cart = [];


// =====================================
// DISPLAY FOOD MENU
// =====================================

function showRegionMenu(region) {

    const selectedRegion = menuData[region];

    if (!selectedRegion) return;

    regionSelection.style.display = "none";
    regionContent.style.display = "block";

    regionTitle.innerHTML = `
        <h2>${selectedRegion.title}</h2>
        <p>${selectedRegion.description}</p>
    `;

    regionFoodGrid.innerHTML = "";

    selectedRegion.foods.forEach((food, index) => {

        const foodCard = document.createElement("div");

        foodCard.className = "food-card";

        foodCard.innerHTML = `
           <img 
    src="${food.image || 'images/hero-food.jpeg'}" 
    alt="${food.name}"
    onerror="console.log('Image failed:', this.src, 'Food:', this.alt)"
>

            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <span>฿${food.price}</span>

                <button
                    class="add-cart-button"
                    data-region="${region}"
                    data-index="${index}">
                    Add to Cart
                </button>
            </div>
        `;

        regionFoodGrid.appendChild(foodCard);

    });

    regionContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =====================================
// CLICK REGION CARDS
// =====================================

const regionCards = document.querySelectorAll(".region-card");

regionCards.forEach(card => {

    card.addEventListener("click", function () {

        const selectedRegion = this.dataset.region;

        showRegionMenu(selectedRegion);

    });

});


// =====================================
// BACK TO REGION SELECTION
// =====================================

backToRegions.addEventListener("click", function () {

    regionContent.style.display = "none";
    regionSelection.style.display = "grid";

    regionSelection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// =====================================
// ADD FOOD TO CART
// =====================================

regionFoodGrid.addEventListener("click", function (event) {

    if (!event.target.classList.contains("add-cart-button")) {
        return;
    }

    const region = event.target.dataset.region;
    const index = Number(event.target.dataset.index);

    const food = menuData[region].foods[index];

    const foodId = `${region}-${index}`;

    const existingItem = cart.find(item => item.id === foodId);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            id: foodId,
            name: food.name,
            price: food.price,
            quantity: 1
        });

    }

    renderCart();

    event.target.textContent = "Added!";

    setTimeout(() => {
        event.target.textContent = "Add to Cart";
    }, 800);

});


// =====================================
// DISPLAY SHOPPING CART
// =====================================

function renderCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is currently empty.
            </p>
        `;

        cartTotal.textContent = "฿0";
        checkoutButton.disabled = true;

        return;
    }

    cart.forEach(item => {

        const itemElement = document.createElement("div");

        itemElement.className = "cart-item";

        itemElement.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>฿${item.price} each</p>
            </div>

            <div class="cart-item-controls">

                <button
                    class="quantity-button"
                    data-action="decrease"
                    data-id="${item.id}">
                    −
                </button>

                <span>${item.quantity}</span>

                <button
                    class="quantity-button"
                    data-action="increase"
                    data-id="${item.id}">
                    +
                </button>

                <button
                    class="remove-button"
                    data-action="remove"
                    data-id="${item.id}">
                    Remove
                </button>

            </div>

            <strong>฿${item.price * item.quantity}</strong>
        `;

        cartItems.appendChild(itemElement);

    });

    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    cartTotal.textContent = `฿${total.toLocaleString("en-US")}`;

    checkoutButton.disabled = false;

}


// =====================================
// CART QUANTITY AND REMOVE BUTTONS
// =====================================

cartItems.addEventListener("click", function (event) {

    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const action = button.dataset.action;
    const id = button.dataset.id;

    const item = cart.find(product => product.id === id);

    if (!item) return;

    if (action === "increase") {

        item.quantity++;

    } else if (action === "decrease") {

        item.quantity--;

        if (item.quantity <= 0) {
            cart = cart.filter(product => product.id !== id);
        }

    } else if (action === "remove") {

        cart = cart.filter(product => product.id !== id);

    }

    renderCart();

});


// =====================================
// OPEN CHECKOUT SECTION
// =====================================

checkoutButton.addEventListener("click", function () {

    if (cart.length === 0) return;

    checkoutSection.style.display = "block";

    checkoutSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// =====================================
// CHECKOUT - ORDER TYPE SELECTION
// =====================================

orderType.addEventListener("change", function () {

    dineInDetails.style.display = "none";
    takeawayDetails.style.display = "none";
    deliveryDetails.style.display = "none";

    if (this.value === "dine-in") {

        dineInDetails.style.display = "block";

    } else if (this.value === "takeaway") {

        takeawayDetails.style.display = "block";

    } else if (this.value === "delivery") {

        deliveryDetails.style.display = "block";

    }

});


// =====================================
// PLACE ORDER - VALIDATION & CONFIRMATION
// =====================================

const placeOrderButton = document.getElementById("placeOrderButton");

const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");

const tableNumber = document.getElementById("tableNumber");
const pickupTime = document.getElementById("pickupTime");
const deliveryAddress = document.getElementById("deliveryAddress");


placeOrderButton.addEventListener("click", function () {

    // Check customer information

    if (customerName.value.trim() === "") {
        alert("Please enter your full name.");
        customerName.focus();
        return;
    }

    if (customerPhone.value.trim() === "") {
        alert("Please enter your phone number.");
        customerPhone.focus();
        return;
    }

    const phonePattern = /^\+?[0-9\s-]{8,15}$/;

    if (!phonePattern.test(customerPhone.value.trim())) {
        alert("Please enter a valid phone number.");
        customerPhone.focus();
        return;
    }


    // Check order type

    if (orderType.value === "") {
        alert("Please select your order type.");
        orderType.focus();
        return;
    }


    // Check additional information

    if (orderType.value === "dine-in" && tableNumber.value.trim() === "") {
        alert("Please enter your table number.");
        tableNumber.focus();
        return;
    }

    if (orderType.value === "takeaway" && pickupTime.value === "") {
        alert("Please select your pickup time.");
        pickupTime.focus();
        return;
    }

    if (orderType.value === "delivery" && deliveryAddress.value.trim() === "") {
        alert("Please enter your delivery address.");
        deliveryAddress.focus();
        return;
    }


    // Calculate total

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);


    // Order confirmation

    alert(
        "Thank you for ordering from Aim Aam!\n\n" +
        "Customer: " + customerName.value.trim() + "\n" +
        "Phone: " + customerPhone.value.trim() + "\n" +
        "Order Type: " + orderType.options[orderType.selectedIndex].text + "\n" +
        "Total: ฿" + total.toLocaleString("en-US") + "\n\n" +
        "Your order has been confirmed!"
    );


    // Clear cart after confirmation

    cart = [];
    renderCart();


    // Reset checkout fields

    customerName.value = "";
    customerPhone.value = "";
    orderType.value = "";
    tableNumber.value = "";
    pickupTime.value = "";
    deliveryAddress.value = "";

    dineInDetails.style.display = "none";
    takeawayDetails.style.display = "none";
    deliveryDetails.style.display = "none";

    checkoutSection.style.display = "none";

    document.getElementById("cart").scrollIntoView({
        behavior: "smooth"
    });

});
