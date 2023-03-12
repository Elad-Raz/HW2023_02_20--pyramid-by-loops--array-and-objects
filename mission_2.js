/*1. get from the user a number and count 1 to the number chosen
2. get from the user two numbers and count untill the number chosen in steps of the second number
3. multiplaction table
4. pyramid - the user sets a number of levels 
4.1 base on top levels to the side
4.2. base on bottom
4.3 centered*/
/*
//1 //////////////
let userNum = prompt("enter number");
for (let index = 0; index <= userNum; index++) {
  console.log(index);
}
console.log("end of loop");

let userNum1 = prompt("enter num");
for (let i = 0; i === userNum1; i++) { //  ===קוד לא עובד עם === 
  console.log(i);
}
console.log("end of loop
*/
//  2         /////////////////////
/*

let userNum = prompt("enter first number");
let userSecondaryNum = prompt("enter second number");
for (let i = userSecondaryNum; i < userNum; i += userSecondaryNum) {
  console.log(i);
}

console.log("end of loop");
*/

// //////////////////3
// let maxNumber = 10;
// for (let x = 1; x <= 10; x++) {
//   let newRow = "";
//   for (let y = 1; y <= 10; y++) {
//     newRow += x * y + "\t";
//   }
//   console.log(newRow);
// }
//       4.2 pyramid  base on bottom///////////////
/*
//let levels = 10;// בניגוד לשאלה 3 אין צורך בפרמטר "מסגרת" ששווה 10
let symbol = "**";
//for (let x = 1; x <= 1; x++) {// אין טעם בשתי לולאות: אם איקס שווה 10 מקבלים 10 פירמידות אם איקס מתוקן לשווה 1 מקבלים פרמידה אחת לכן אין שום טעם בשתי לולאות.
let row = "";
for (y = 1; y <= 10; y++) {
  console.log((row += symbol));
}
//}
*/
/*
/// 4/// levels by user input ////////
let levels = Number(prompt("enter levels:"));
let symbol = "**";
let row = "";

for (let x = 1; x <= levels; x++) {
  console.log((row += symbol));
  //}
}
*/
/*
// 4.1 base on top levels
let levels = Number(prompt("enter levels:"));
for (let x = levels; x > 0; x--) {
  let row = "";
  let symbol = "*";
  console.log(symbol.repeat(x));
}*/
// 4.3 centered ////////
// let userLevels = Number(prompt("enter levels:"));
// let symbol = "**";
// let space = " "; // 1 note of space
// for (let x = 1; x <= userLevels; x++) {
//   let row = "";
//   console.log(+space + (row += symbol.repeat(x)) + space);
//   for (let y = 1; y <= userLevels; y++) {}
// }

// let Symbol = "*";
// for (let x = 1; x <= 10; x++) {
//   let row = "";

//   console.log((row += Symbol.repeat(x)));
// }

// let Symbol = "*";
// for (let x = 10; x >= 1; x--) {
//   let row = "";

//   console.log(Symbol.repeat(x));
// }

// let levels = 5; // מספר השורות שאני רותה
// let symbol = "*"; // תו שישמש בבניה של הפירמידה
// for (let x = 1; x <= levels; x++) {
//   // kללואה רגילה שרצה בהדרגה עד מספר השורות שבחרתי
//   let row = ""; // יצירת משתנה רגיל שייצר לי שורה
//   row = " ".repeat(levels - x) + symbol.repeat(x * 2 - 1); // הגדרה של שורה שמכילה בתוכה רווח שחוזר על עצמו מספר הושרות מינוס המשתנה של הלולאה  - כך יהיה לי רווח גדול יותר בהתחלה ואז מספר התווים בחישוב מיוחד
//   console.log(row); // החישוב של איקס כפול 2 מינוס אחד מאפשר לי התאמה יחסית בין האיקס למספר הרמות.
// }
/*
for (x = 1; x <= 10; x++) {
  let newSymbol = "*";
  let newRow = "";
  console.log((newRow += newSymbol));
}

for (x = 1; x <= 10; x++) {
  let newSymbol = "*";
  let newRow = "";
  console.log((newRow += newSymbol.repeat(x)));
}

let newSymbol = "*";
let newRow = "";
for (x = 1; x <= 10; x++) {
  console.log((newRow += newSymbol));
}
// שני הפירמידות האחרונות זהות. ההבדל הוא שבפירמידה העליונה הסימבול צריך להיות כפוף לאיקס
// מפני שאם המשתנים הם בתוך הלולאה ואינם מוצמדים למשתנה בעל ערך שגובר מסיבוב לסיבוב, אז הלולאה אומרת בעצם תדפיס 10 פעמים את המשתנה כמי הוא מופיע...כמו בקוד הראשון מבין השלושה, שם מודפס סה"כ המשתנים 10 פעמים בצורתם המקורית
// בפירמידה השניה ההדפסה הוצמדה לאיקס כך שבכל סיבוב של הלולאה תיהיה שורה נוספת בה התו מוצמצד למספר הלולאה.
// בפירמידה התחתונה, המשתנים מוגדרים מחוץ ללולאה אז הם לא מאפסים את עצמם, אלא ממשיכים לפי ההגדרה של += ומוסיפים על התצורה האחרונה שלהם סיבוב נוסף
*/
