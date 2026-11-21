// Edit this file to change the menu. vegan: true shows a leaf tag. soldOut: true dims the item.
var MENU = [
  { id: "appetizers", label: "Appetizers", items: [
    { name: "Beef Empanada (Vegan)", vegan: true, soldOut: true, price: 4.99, description: "Cuban-style fried empanada filled with seasoned vegan beef and served with our homemade sauce." },
    { name: "Tofu Empanada (Vegan)", vegan: true, price: 4.99, description: "Cuban-style fried empanada filled with seasoned tofu scramble and served with our homemade sauce." },
    { name: "Chicken Empanada", promo: true, price: 4.49, description: "Cuban-style fried empanada filled with seasoned chicken and served with our homemade sauce." },
    { name: "Beef Empanada", promo: true, price: 4.49, description: "Cuban-style fried empanada filled with seasoned beef and served with our homemade sauce." },
    { name: "Guava & Cheese Empanada", price: 4.49, description: "Cuban-style fried empanada filled with sweet guava and creamy cheese." },
    { name: "Ham Croqueta", price: 2.49, description: "Cuban-style fried croquettes filled with savory ham." },
    { name: "Cuban Tostada", price: 3.49, description: "Toasted Cuban bread with butter." },
    { name: "Tequeños (5 Pieces)", price: 8.49, description: "Crispy, golden-fried cheese sticks served with our homemade cilantro sauce." },
    { name: "Yuca Fries", price: 5.49, description: "Fried until golden and crispy, served with our homemade sauce." },
    { name: "Tostones", price: 5.49, description: "Crispy fried green plantain slices, lightly salted and served with our homemade garlic mojo sauce." },
    { name: "French Fries", price: 5.49, description: "Golden and crispy, lightly seasoned with salt and pepper." },
    { name: "Maduritos", price: 5.49, description: "Fried sweet plantains, golden and caramelized, offering a balance of natural sweetness and soft texture." },
    { name: "Queso Blanco Bites", price: 8.49, description: "Golden-fried white cheese bites served with our sweet guava sauce." },
    { name: "Cuban Tamal", price: 8.49, description: "Traditional corn dough filled with roasted pork and topped with crispy mini chicharrón." },
    { name: "Chicharrón", price: 8.49, description: "Crispy, golden-fried pork chunks." },
    { name: "Quad Combo (Shareable)", price: 24.99, description: "A Cuban street-food sampler featuring four fan-favorite appetizers, perfect for sharing and enjoying a little taste of everything." },
    { name: "House Salad", price: 5.49, description: "Fresh lettuce, tomatoes, onions, and crunchy croutons, served with oil and vinegar." },
    { name: "Avocado Salad", price: 5.49, description: "Fresh avocado slices served with oil and vinegar on the side." },
    { name: "Charcuterie Meats", soldOut: true, price: 10.0 },
    { name: "Charcuterie Fruits", soldOut: true, price: 7.0 },
    { name: "Charcuterie Meat & Fruit Deal", soldOut: true, price: 15.0 }
  ]},
  { id: "sandwiches", label: "Sandwiches", items: [
    { name: "Pan con Bistec", price: 16.99, description: "Cuban bread filled with tender steak, lettuce, tomatoes, onions, and crispy potato sticks. Served with your choice of fries or salad." },
    { name: "Pan con Lechon", price: 15.99, description: "Cuban bread filled with tender roasted pork and onions. Served with your choice of fries or salad." },
    { name: "Sandwich de Pollo", price: 16.99, description: "Cuban bread filled with juicy grilled chicken, lettuce, tomatoes, onions, cilantro sauce, and crispy potato sticks. Served with your choice of fries or a side salad." },
    { name: "Hamburguesa", price: 15.99, description: "Homemade beef and pork patty served on a bun with American cheese, lettuce, tomatoes, onions, crispy potato sticks, and our homemade cilantro sauce. Served with your choice of fries or salad." },
    { name: "Tostone Burger", price: 16.99, description: "Juicy homemade beef and pork patty served between two crispy fried plantains, topped with American cheese, lettuce, tomatoes, onions, cilantro sauce, and potato sticks. Served with your choice of fries or a side salad." },
    { name: "Pan con Croqueta", price: 13.99, description: "Cuban bread layered with crispy croquetas, fried cheese, and homemade cilantro sauce. Served with fries or salad." },
    { name: "Pan con Tofu Scramble", vegan: true, soldOut: true, price: 16.99, description: "Cuban bread filled with seasoned tofu scramble, lettuce, tomatoes, onions, crispy potato sticks, and vegan mayo. Served with your choice of fries or salad." }
  ]},
  { id: "plates", label: "Plates", items: [
    { name: "Masitas de Puerco", price: 19.99, description: "Crispy fried pork chunks topped with our homemade onion mojo sauce and served with your choice of two sides." },
    { name: "Bistec Encebollado", price: 19.99, description: "Juicy steak topped with sautéed onions and served with your choice of two sides." },
    { name: "Pollo a la Plancha", price: 19.99, description: "Grilled chicken breast seasoned with mojo and served with your choice of two sides." },
    { name: "Ground Beef (Vegan)", vegan: true, soldOut: true, price: 18.99, description: "Delicious homemade seasoned tofu beef, served with your choice of two sides." }
  ]},
  { id: "sides", label: "Extra Sides", items: [
    { name: "White Rice", price: 5.49, description: "Perfectly steamed, fluffy white rice." },
    { name: "Black Beans", price: 5.49, description: "Slow-simmered black beans seasoned with our homemade blend of spices and herbs." },
    { name: "Maduritos", price: 5.49, description: "Fried sweet plantains, golden and caramelized, offering a balance of natural sweetness and soft texture." },
    { name: "Tostones", price: 5.49, description: "Crispy fried green plantain slices, lightly salted and served with our homemade garlic mojo sauce." },
    { name: "Yuca Fries", price: 5.49, description: "Fried until golden and crispy, served with our homemade sauce." },
    { name: "French Fries", soldOut: true, price: 5.49, description: "Golden and crispy, lightly seasoned with salt and pepper." },
    { name: "House Salad", price: 5.49, description: "Fresh lettuce, tomatoes, onions, and crunchy croutons, served with oil and vinegar." }
  ]},
  { id: "sauces", label: "Sauces", items: [
    { name: "Cilantro Sauce Cup", price: 1.49, description: "Homemade creamy sauce made with fresh cilantro, mayo, garlic, lime, salt, and pepper." },
    { name: "Guava Sauce Cup", price: 1.49, description: "Homemade with guava and honey for a creamy, sweet, and perfectly balanced flavor." },
    { name: "Garlic Sauce Cup", price: 1.49 },
    { name: "Spicy Sauce Cup", price: 1.49, description: "Homemade creamy sauce made with mayo and sriracha for the perfect spicy kick." },
    { name: "Cilantro Sauce Cup (Vegan)", vegan: true, price: 1.49, description: "Homemade creamy sauce made with fresh cilantro, vegan mayo, garlic, lime, salt, and pepper." },
    { name: "Spicy Sauce Cup (Vegan)", vegan: true, soldOut: true, price: 1.49, description: "Homemade creamy sauce made with vegan mayo and sriracha for the perfect spicy kick." }
  ]},
  { id: "kids", label: "Kids' Meal", items: [
    { name: "Burger", price: 8.99, description: "A classic burger served on a plain bun with a side of fries." },
    { name: "Cheeseburger", price: 8.99, description: "A classic burger topped with American cheese on a plain bun. Served with fries." },
    { name: "Chicken Tenders", price: 8.99, description: "Seasoned, breaded, and fried until golden and crispy. Served with fries." }
  ]},
  { id: "desserts", label: "Desserts", items: [
    { name: "Cuban Flan", soldOut: true, price: 5.99, description: "Homemade, silky-smooth caramel custard topped with a rich caramel sauce." },
    { name: "Bread Pudding", price: 5.99, description: "Our homemade bread pudding is baked to perfection with cinnamon, sweet vanilla, and a soft, rich center. A comforting dessert in every bite!" },
    { name: "Arroz con Leche", soldOut: true, price: 5.99, description: "Homemade creamy rice pudding topped with cinnamon." },
    { name: "Arroz con Leche (Vegan)", vegan: true, price: 6.49, description: "Homemade creamy vegan rice pudding topped with cinnamon." },
    { name: "Flan (Vegan)", vegan: true, soldOut: true, price: 6.49, description: "Homemade, silky-smooth vegan caramel custard topped with a rich caramel sauce." },
    { name: "Maddy's Lemon Blueberry Cupcake", soldOut: true, price: 4.0 },
    { name: "Maddy's Stuffed Apple Pie Cupcake", soldOut: true, price: 4.0 },
    { name: "Maddy's Pumpkin Spice Cupcake", soldOut: true, price: 4.0 },
    { name: "Maddy's Cupcakes, 2 for $7", soldOut: true, price: 7.0 }
  ]},
  { id: "drinks", label: "Drinks", items: [
    { name: "Colada", price: 2.49, description: "Café Bustelo." },
    { name: "Cortadito", price: 2.49, description: "Made with your choice of whole milk, evaporated milk, or almond milk." },
    { name: "Café con Leche", price: 2.75, description: "Made with your choice of whole milk or almond milk." },
    { name: "Coca Cola", price: 2.0 },
    { name: "Sprite", price: 2.0 },
    { name: "Coke Zero", price: 2.0 },
    { name: "Jupiña", price: 2.0 },
    { name: "Iron Beer", price: 2.0 },
    { name: "Canada Dry", price: 2.0 },
    { name: "Pure Life Water Bottle", price: 2.0 },
    { name: "Vita Coconut Water", price: 2.99 },
    { name: "S.Pellegrino Water", price: 3.5 },
    { name: "Gatorade Fruit Punch", soldOut: true, price: 2.99 },
    { name: "Gatorade Lemon Lime", price: 2.99 },
    { name: "Gatorade Cool Blue", soldOut: true, price: 2.99 },
    { name: "Natural Juices", price: 6.49, description: "Pure, refreshing, and made to order with the freshest fruits. No artificial flavors, just nature's goodness." }
  ]}
];
if (typeof module !== "undefined") module.exports = { MENU: MENU };
