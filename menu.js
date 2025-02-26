let userName = prompt("Welcome to EatNow Cafe! Please enter your first name:");


if (!userName || userName.trim() === "") {
    userName = "Guest";
}


alert(`Hello, ${userName}! Welcome to EatNow Cafe. Here's our menu:`);


let menuItems = ["Grilled Chicken", "Pasta Alfredo", "Veggie Burger", "Caesar Salad", "Tandoori Paneer"];


console.log("EatNow Cafe Menu:");
menuItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});


let newDish = prompt("Would you like to suggest a new dish for our menu? Enter the dish name:");


if (newDish && newDish.trim() !== "") {
    menuItems.push(newDish.trim()); 
    console.log(`Thank you for your suggestion, ${userName}! Here's the updated menu:`);

  
    menuItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
} else {
    console.log("No dish was added. Please enter a valid dish name next time.");
}
