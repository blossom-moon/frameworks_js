console.log("=== ЗАВДАННЯ 2: Базові типи та змінні ===");

// 1. Оголошення змінних різних типів
const myString: string = "Hello TypeScript!";
const myNumber: number = 42;
const myBoolean: boolean = true;
const myAny: any = "Може бути будь-яким типом 123 true";

// 2. Створення масивів
const stringArray: string[] = ["apple", "banana", "orange"];
const numberArray: number[] = [1, 2, 3, 4, 5];
const mixedArray: any[] = ["text", 123, true];

// Виведення значень у консоль
console.log("Змінні:");
console.log("myString:", myString);
console.log("myNumber:", myNumber);
console.log("myBoolean:", myBoolean);
console.log("myAny:", myAny);

console.log("\nМасиви:");
console.log("stringArray:", stringArray);
console.log("numberArray:", numberArray);
console.log("mixedArray:", mixedArray);

export {};
