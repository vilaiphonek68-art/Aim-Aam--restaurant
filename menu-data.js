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
