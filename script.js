// =====================================
// AIM AAM - COMPLETE MENU & CART SYSTEM
// =====================================


// =====================================
// MENU DATA
// =====================================

const menuData = {

    // =====================================
    // ASIAN CUISINE
    // =====================================

    asian: {
        title: "Asian Cuisine",
        description: "Discover the wonderful flavors of Asia.",
        foods: [
            {
                name: "Pad Kra Pao Chicken",
                price: 129,
                description: "Thai stir-fried chicken with holy basil and rice.",
                image: "images/Pad Kar Pao Chicken.jpeg"
            },
            {
                name: "Tom Yum Goong",
                price: 189,
                description: "Spicy and sour Thai soup with fresh prawns.",
                image: "images/Tom Yum Goong.jpeg"
            },
            {
                name: "Pad Thai",
                price: 149,
                description: "Stir-fried rice noodles with tamarind sauce and peanuts.",
                image: "images/Pad Thai.jpeg"
            },
            {
                name: "Green Curry Chicken",
                price: 159,
                description: "Creamy Thai green curry with chicken and vegetables.",
                image: "images/Green Curry Chicken.jpeg"
            },
            {
                name: "Chicken Satay",
                price: 119,
                description: "Grilled chicken skewers served with peanut sauce.",
                image: "images/Chicken Satay.jpeg"
            },
            {
                name: "Japanese Sushi Set",
                price: 229,
                description: "A selection of fresh Japanese sushi rolls.",
                image: "images/Japanese Sushi Set.jpeg"
            },
            {
                name: "Chicken Katsu Curry",
                price: 179,
                description: "Crispy Japanese chicken with rich curry and rice.",
                image: "images/Chicken Katsu Curry.jpeg"
            },
            {
                name: "Beef Bulgogi",
                price: 199,
                description: "Korean marinated beef served with steamed rice.",
                image: "images/Beef Bulgogi.jpeg"
            },
            {
                name: "Yangzhou Fried Rice",
                price: 139,
                description: "Chinese-style fried rice with egg and vegetables.",
                image: "images/Yangzhou Fried Rice.jpeg"
            },
            {
                name: "Fresh Spring Rolls",
                price: 99,
                description: "Vietnamese fresh rolls with vegetables and dipping sauce.",
                image: "images/Fresh Spring Rolls.jpeg"
            },
            {
                name: "Mango Sticky Rice",
                price: 119,
                description: "Sweet mango served with coconut sticky rice.",
                image: "images/Mango Sticky Rice.jpeg"
            },
            {
                name: "Thai Milk Tea",
                price: 69,
                description: "Classic Thai tea with creamy milk.",
                image: "images/Thai Milk Tea.jpeg"
            }
        ]
    },


    // =====================================
    // EUROPEAN CUISINE
    // =====================================

    european: {
        title: "European Cuisine",
        description: "Enjoy timeless European classics and comforting flavors.",
        foods: [
            {
                name: "Spaghetti Carbonara",
                price: 189,
                description: "Creamy Italian pasta with cheese and crispy bacon.",
                image: "images/Spaghetti Carbonara.jpeg"
            },
            {
                name: "Margherita Pizza",
                price: 229,
                description: "Classic pizza topped with tomato, mozzarella and basil.",
                image: "images/Margherita Pizza.jpeg"
            },
            {
                name: "Grilled Beef Steak",
                price: 329,
                description: "Juicy grilled beef steak served with seasonal sides.",
                image: "images/Grilled Beef Steak.jpeg"
            },
            {
                name: "Fish and Chips",
                price: 219,
                description: "Crispy battered fish served with golden fries.",
                image: "images/Fish and Chips.jpeg"
            },
            {
                name: "Chicken Alfredo",
                price: 199,
                description: "Pasta with grilled chicken in a creamy Alfredo sauce.",
                image: "images/Chicken Alfredo.jpeg"
            },
            {
                name: "Classic Lasagna",
                price: 219,
                description: "Traditional baked pasta layered with meat sauce and cheese.",
                image: "images/Classic Lasagna.jpeg"
            },
            {
                name: "Caesar Salad",
                price: 149,
                description: "Fresh lettuce with Caesar dressing, croutons and cheese.",
                image: "images/Caesar Salad.jpeg"
            },
            {
                name: "Croissant Sandwich",
                price: 139,
                description: "Buttery croissant filled with fresh ingredients.",
                image: "images/Croissant Sandwich.jpeg"
            },
            {
                name: "Ratatouille",
                price: 169,
                description: "French vegetable dish with a rich tomato and herb sauce.",
                image: "images/Ratatouille.jpeg"
            },
            {
                name: "French Onion Soup",
                price: 129,
                description: "Traditional French onion soup topped with melted cheese.",
                image: "images/French Onion Soup.jpeg"
            },
            {
                name: "Tiramisu",
                price: 119,
                description: "Italian coffee-flavored dessert with creamy mascarpone.",
                image: "images/Tiramisu.jpeg"
            },
            {
                name: "Creme Brulee",
                price: 129,
                description: "Silky vanilla custard with a caramelized sugar topping.",
                image: "images/Creme Brulee.jpeg"
            }
        ]
    },


    // =====================================
    // AFRICAN CUISINE
    // =====================================

    african: {
        title: "African Cuisine",
        description: "Explore the rich and diverse flavors of Africa.",
        foods: [
            {
                name: "Nigerian Jollof Rice",
                price: 179,
                description: "Flavorful rice cooked in a rich tomato and pepper sauce.",
                image: "images/Nigerian Jollof Rice.jpeg"
            },
            {
                name: "Beef Suya",
                price: 189,
                description: "Grilled beef skewers seasoned with aromatic spices.",
                image: "images/Beef Suya.jpeg"
            },
            {
                name: "Egusi Soup",
                price: 199,
                description: "Traditional Nigerian soup made with melon seeds and vegetables.",
                image: "images/Egusi Soup.jpeg"
            },
            {
                name: "Fufu with Soup",
                price: 179,
                description: "Soft traditional fufu served with flavorful African soup.",
                image: "images/Fufu-Soup.jpeg"
            },
            {
                name: "South African Bunny Chow",
                price: 189,
                description: "A hollowed loaf of bread filled with aromatic curry.",
                image: "images/South African Bunny Chow.jpeg"
            },
            {
                name: "South African Bobotie",
                price: 219,
                description: "A traditional South African baked minced meat dish topped with egg custard.",
                image: "images/South African Bobotie.jpeg"
            },
            {
                name: "Ethiopian Doro Wat",
                price: 229,
                description: "Spicy Ethiopian chicken stew with traditional spices.",
                image: "images/Ethiopian Doro Wat.jpeg"
            },
            {
                name: "Moroccan Chicken Tagine",
                price: 229,
                description: "Slow-cooked chicken with Moroccan spices and vegetables.",
                image: "images/Moroccan Chicken Tagine.jpeg"
            },
            {
                name: "Moroccan Couscous",
                price: 179,
                description: "Steamed couscous served with vegetables and aromatic spices.",
                image: "images/Moroccan Couscous.jpeg"
            },
            {
                name: "Egyptian Koshari",
                price: 159,
                description: "A traditional mix of rice, lentils, pasta and tomato sauce.",
                image: "images/Egyptian Koshari.jpeg"
            },
            {
                name: "African Chapati",
                price: 99,
                description: "Soft and lightly crispy flatbread.",
                image: "images/African Chapati.jpeg"
            },
            {
                name: "Mandazi",
                price: 89,
                description: "Sweet East African fried bread.",
                image: "images/Mandazi.jpeg"
            }
        ]
    }

};


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
            <img src="${food.image || 'images/hero-food.jpeg'}" alt="${food.name}">

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
// =====================================
// AIM AAM - CUSTOMER REVIEWS
// =====================================

let selectedRating = 0;
let customerReviews = [];

const ratingStars = document.querySelectorAll(
    "#ratingStars button"
);

const reviewName = document.getElementById("reviewName");
const reviewComment = document.getElementById("reviewComment");
const submitReview = document.getElementById("submitReview");
const reviewsList = document.getElementById("reviewsList");
const reviewAverage = document.getElementById("reviewAverage");
const reviewCount = document.getElementById("reviewCount");

// SELECT STAR RATING

ratingStars.forEach(star => {

    star.addEventListener("click", function () {

        selectedRating = Number(this.dataset.rating);

        ratingStars.forEach(button => {
            button.classList.toggle(
                "active",
                Number(button.dataset.rating) <= selectedRating
            );
        });

    });

});

// SUBMIT REVIEW

submitReview.addEventListener("click", function () {

    const name = reviewName.value.trim();
    const comment = reviewComment.value.trim();

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    if (selectedRating === 0) {
        alert("Please select a star rating.");
        return;
    }

    if (!comment) {
        alert("Please write your review.");
        return;
    }

    const review = {
        name: name,
        rating: selectedRating,
        comment: comment
    };

    customerReviews.unshift(review);

    renderCustomerReviews();

    // RESET FORM

    reviewName.value = "";
    reviewComment.value = "";
    selectedRating = 0;

    ratingStars.forEach(button => {
        button.classList.remove("active");
    });

    alert("Thank you for sharing your experience!");

});

// DISPLAY REVIEWS

function renderCustomerReviews() {

    reviewsList.innerHTML = "";

    if (customerReviews.length === 0) {
        reviewsList.innerHTML = `
            <p class="no-reviews">
                Be the first to share your experience.
            </p>
        `;
        return;
    }

    customerReviews.forEach(review => {

        const reviewCard = document.createElement("div");

        reviewCard.className = "customer-review-card";

        const stars = "★".repeat(review.rating) +
                      "☆".repeat(5 - review.rating);

        reviewCard.innerHTML = `
            <div class="customer-review-stars">
                ${stars}
            </div>

            <h4></h4>
            <p class="customer-review-comment"></p>
        `;

        reviewCard.querySelector("h4").textContent = review.name;
        reviewCard.querySelector(
            ".customer-review-comment"
        ).textContent = review.comment;

        reviewsList.appendChild(reviewCard);

    });

    const totalRating = customerReviews.reduce(
        (total, review) => total + review.rating,
        0
    );

    const average = totalRating / customerReviews.length;

    reviewAverage.textContent = average.toFixed(1);

    reviewCount.textContent =
        `${customerReviews.length} customer review(s)`;

}
