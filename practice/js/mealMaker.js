const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizersIn) {
        this._courses.appetizers = appetizersIn;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(mainsIn) {
        this._courses.mains = mainsIn;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        if (courseName === 'appetizers') {
            this.appetizers.push(dish);
        } 
        else if (courseName === 'mains') {
            this.mains.push(dish);
        } 
        else if (courseName === 'desserts') {
            this.desserts.push(dish);
        }
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name} and a very tasty ${dessert.name}. The total price is $${totalPrice}.`;
    }
};

menu.addDishCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishCourse('appetizers', 'Four Cheese Garlic Bread', 5);
menu.addDishCourse('appetizers', 'French Fries', 7);
menu.addDishCourse('appetizers', 'Fried Calamari', 8);
menu.addDishCourse('appetizers', 'Stuffed Mushrooms', 9);
menu.addDishCourse('mains', 'Pork Chops', 12.65);
menu.addDishCourse('mains', 'Steak Pie', 10.5);
menu.addDishCourse('mains', 'Haddock & Chips', 12.45);
menu.addDishCourse('mains', 'Chicken Balmoral', 11.95);
menu.addDishCourse('mains', 'Pan Fried Salmon', 14.55);
menu.addDishCourse('desserts', 'Cheesecake', 5);
menu.addDishCourse('desserts', 'Lemon Cake', 4);
menu.addDishCourse('desserts', 'Snickers Pie', 5) ;
menu.addDishCourse('desserts', 'Key Lime Pie', 5);
menu.addDishCourse('desserts', 'Texas Chocolate Cake', 6);

const meal = menu.generateRandomMeal();
console.log(meal);