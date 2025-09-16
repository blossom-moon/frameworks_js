export function processData(text: string, count: number = 1): string {
    return text.repeat(count);
}

console.log(processData("Hello")); // Hello
console.log(processData("Hi", 3)); // HiHiHi
