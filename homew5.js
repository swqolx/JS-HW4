//=======завдання 1

let bool
const first = (prompt("напишить шось"))
const secondBool = (prompt("знову напишить шось"))

if (Boolean(first) === true && Boolean(secondBool) === true){
    bool = "Обидва поля заповнені"

} else {
    bool = "Обидва поля пусті"
}
console.log(bool);
//==================


//======================завдання 2
let number;
const firstNumber = Number(prompt("напишить будь яке число"));

const secondNumber = Number(prompt("напишить ще одне число"));

if ((firstNumber + secondNumber) > 10){
    number = "Сума більша за 10";
} else if((firstNumber + secondNumber) <= 10) {
number = "Сума менша або дорівнює 10";
}
console.log(number);

//==================================

//====================завдання 3
let message;
const infoMessage = String(prompt("Уведіть текст")).toUpperCase();
if (infoMessage !== null && infoMessage.includes("JAVASCRIPT")) {
    message = "Текст містить слово Javascript";
} else {
    message = "Текст не містить слово JavaScript";
}
console.log(text);
//==================================


//=================================завдання 4
let number2;
const randomNumber = Number(prompt("Уведіть своє улюблену цифру"));
if (randomNumber > 10 && randomNumber < 20) {
    number2 = "Число входить в діапазон від 10 до 20";
} else if (userNumber > 20) {
    number2 = "Число не входить в діапазон від 10 до 20"
} 
console.log(number2);
//==============================================


//============================================завдання 5

let text
const userName = prompt("Напишить ваше ім'я").toUpperCase()
const email = prompt("Напишить вашу електрону адресу").toUpperCase()
const password = prompt("Напишить пароль(мінімум 6 символів)")
if (userName.length > 3 && userEmail.includes("@.") && userPassword.length > 6) {
    data = "Перенаправлення на іншу сторінку";
} else {
    data = "Помилка: неправильне заповнення";
}
console.log(text);
//========================================