var PRICES = {
    small: 10,
    large: 25,
    chocolate: 5,
    caramel: 6,
    berries: 10,
    marshmallow: 5
};
// Функція розрахунку вартості морозива
function calculateIceCreamCost(size, toppings, addMarshmallow) {
    if (addMarshmallow === void 0) { addMarshmallow = false; }
    var total = PRICES[size];
    toppings.forEach(function (t) { return total += PRICES[t]; });
    if (addMarshmallow)
        total += PRICES.marshmallow;
    return total;
}
// Виклик через prompt
var sizeInput = prompt("Оберіть розмір морозива (small/large):");
var toppingsInput = prompt("Введіть начинки через кому (chocolate, caramel, berries):");
var toppings = toppingsInput
    ? toppingsInput.split(",").map(function (t) { return t.trim(); })
    : [];
var marshmallowInput = prompt("Додати маршмелоу? (yes/no):");
var addMarshmallow = (marshmallowInput === null || marshmallowInput === void 0 ? void 0 : marshmallowInput.toLowerCase()) === "yes";
var total = calculateIceCreamCost(sizeInput, toppings, addMarshmallow);
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C: ".concat(total, " \u0433\u0440\u043D"));
