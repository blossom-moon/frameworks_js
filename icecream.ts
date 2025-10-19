import promptSync from 'prompt-sync';
const prompt = promptSync();

type IceCreamSize = 'small' | 'large';

type Topping = 'chocolate' | 'caramel' | 'berries';

const PRICES = {
    small: 10,
    large: 25,
    chocolate: 5,
    caramel: 6,
    berries: 10,
    marshmallow: 5
};

// Функція розрахунку вартості морозива
function calculateIceCreamCost(
    size: IceCreamSize,
    toppings: Topping[],
    addMarshmallow: boolean = false
): number {
    let total = PRICES[size];
    toppings.forEach(t => total += PRICES[t]);
    if (addMarshmallow) total += PRICES.marshmallow;
    return total;
}

// Виклик через prompt
const sizeInput = prompt("Оберіть розмір морозива (small/large):") as IceCreamSize;

const toppingsInput = prompt("Введіть начинки через кому (chocolate, caramel, berries):");
const toppings: Topping[] = toppingsInput
    ? toppingsInput.split(",").map(t => t.trim() as Topping)
    : [];

const marshmallowInput = prompt("Додати маршмелоу? (yes/no):");
const addMarshmallow = marshmallowInput?.toLowerCase() === "yes";

const total = calculateIceCreamCost(sizeInput, toppings, addMarshmallow);

console.log(`Загальна вартість: ${total} грн`);
