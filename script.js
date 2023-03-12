/*let userPassword;
for (let index = 0; index < 4; index++) {
  userPassword = prompt("enter password");
  console.log(index);
  if (userPassword === "1234") {
    alert("log in");
    break;
  } else if (index >= 3) {
    alert("you shall not pass"); // נבדק שאינדקס מגיע מקסימום ל3 ועדיין לא מקפיץ את ההודעה לאחר הנסיונות אלא מקפיץ בכל נסיון
  }
}
*/
/*
let userPassword;
for (let i = 0; i < 4; i++) {
  userPassword = prompt("please enter your password");
  if (userPassword === "1234") {
    alert("good gor you");
    break;
  } else if (i === 3) {
    alert("you shall not pass");
  }
  console.log(i);
}
console.log("loop ended");
*/
/*
// 2///////////////////
let userInput = prompt("please choose number");
for (i = 0; i <= userInput; i += 2) {
  console.log(i);
}
*/
//3 ////////////////
let accounts = [
  {
    balance: "$1,107.16",
    age: 36,
    name: "Cantu Mckenzie",
  },
  {
    balance: "$1,608.24",
    age: 25,
    name: "Schultz Sears",
  },
  {
    balance: "$1,266.22",
    age: 37,
    name: "Lana Key",
  },
  {
    balance: "$1,728.23",
    age: 24,
    name: "Maggie Blanchard",
  },
  {
    balance: "$1,412.79",
    age: 33,
    name: "Julianne Curry",
  },
];
for (let i in accounts) {
  console.log(
    `${accounts[i].name} (${accounts[i].age}) - ${accounts[i].balance}`
  );

  //  console.log(i);
}
let accountsOf = [
  //  דוגמא להבנה מה ההבדל בין פור אי לפור אוף. פור אין מריץ לולאה שמראה רק את מספר האינדקס עצמו ואם רוצים להיכנס לתוך האינדקס יש לשנות את הסינטקס כמו שנעשה בשורה 65
  // פור אוף לעומת זאת מציג לי את מלוא הנתונים שבאינדקס
  {
    balance: "$1,107.16",
    age: 36,
    name: "Cantu Mckenzie",
  },
  {
    balance: "$1,608.24",
    age: 25,
    name: "Schultz Sears",
  },
  {
    balance: "$1,266.22",
    age: 37,
    name: "Lana Key",
  },
  {
    balance: "$1,728.23",
    age: 24,
    name: "Maggie Blanchard",
  },
  {
    balance: "$1,412.79",
    age: 33,
    name: "Julianne Curry",
  },
];
for (const accounts of accountsOf) {
  console.log(accounts);
}

//4 ///////////////////////////////////
let randomData = {
  _id: "63f3b7cadf9d3ea073e07d6f",
  index: 0,
  guid: "1741cd60-75c7-496e-b880-0e3e5adfd1d5",
  isActive: true,
  balance: "$1,412.34",
  picture: "http://placehold.it/32x32",
  age: 28,
  eyeColor: "brown",
  name: "Mcintosh Mills",
  gender: "male",
  company: "BOINK",
  email: "mcintoshmills@boink.com",
  phone: "+1 (874) 488-2691",
  address: "480 Amity Street, Byrnedale, Tennessee, 8254",
  about:
    "Cillum nisi officia qui dolore dolor non nisi. Irure velit proident nisi duis voluptate. Velit Lorem anim veniam aute id officia et enim consequat aliquip. Lorem proident officia Lorem sit anim laborum non esse irure occaecat.\r\n",
  registered: "2015-10-09T02:34:25 -03:00",
  latitude: -86.307639,
  longitude: 31.864756,
  tags: ["irure", "minim", "consequat", "ipsum", "Lorem", "labore", "non"],
  friends: [
    {
      id: 0,
      name: "Teresa Horn",
    },
    {
      id: 1,
      name: "Tanner Nguyen",
    },
    {
      id: 2,
      name: "Shelby Gates",
    },
  ],
  greeting: "Hello, Mcintosh Mills! You have 3 unread messages.",
  favoriteFruit: "strawberry",
};

let allData = "";
for (let key in randomData) {
  //   console.log(key);

  allData += `${key} => ${randomData[key]}. \n\r`;
}
console.log(allData);

/*


1. ask the user for a password and keep asking until he enters 1234 or tried 4 times
    - on success show logged in
    - after 4 times show you shall not pass
2. receive from the user a number and show all even numbers until that number in console
3. show the following template "name (age) - balance" 
[
  {
    "balance": "$1,107.16",
    "age": 36,
    "name": "Cantu Mckenzie"
  },
  {
    "balance": "$1,608.24",
    "age": 25,
    "name": "Schultz Sears"
  },
  {
    "balance": "$1,266.22",
    "age": 37,
    "name": "Lana Key"
  },
  {
    "balance": "$1,728.23",
    "age": 24,
    "name": "Maggie Blanchard"
  },
  {
    "balance": "$1,412.79",
    "age": 33,
    "name": "Julianne Curry"
  }
]
4. log the following  object "key => value, key => value" in one string


{
    "_id": "63f3b7cadf9d3ea073e07d6f",
    "index": 0,
    "guid": "1741cd60-75c7-496e-b880-0e3e5adfd1d5",
    "isActive": true,
    "balance": "$1,412.34",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": "Mcintosh Mills",
    "gender": "male",
    "company": "BOINK",
    "email": "mcintoshmills@boink.com",
    "phone": "+1 (874) 488-2691",
    "address": "480 Amity Street, Byrnedale, Tennessee, 8254",
    "about": "Cillum nisi officia qui dolore dolor non nisi. Irure velit proident nisi duis voluptate. Velit Lorem anim veniam aute id officia et enim consequat aliquip. Lorem proident officia Lorem sit anim laborum non esse irure occaecat.\r\n",
    "registered": "2015-10-09T02:34:25 -03:00",
    "latitude": -86.307639,
    "longitude": 31.864756,
    "tags": [
      "irure",
      "minim",
      "consequat",
      "ipsum",
      "Lorem",
      "labore",
      "non"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Teresa Horn"
      },
      {
        "id": 1,
        "name": "Tanner Nguyen"
      },
      {
        "id": 2,
        "name": "Shelby Gates"
      }
    ],
    "greeting": "Hello, Mcintosh Mills! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  }
*/
