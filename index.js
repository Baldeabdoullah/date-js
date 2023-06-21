// rappel des donnnees
let string = "salut";
let number = 23;
let boolean = true;
let maVariable;

// les Tableaux
let array = ["bordeaux", "toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["bordeaux", 24, true, [1, 2], { nom: "denis" }];

// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 23,
  techno: ["javascript", "react", "nodejs"],
  admin: false,
};

// objet.adresse = "22 rue du code";
// objet.age = 45;

// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 23,
    techno: ["javascript", "react", "nodejs"],
    admin: false,
  },

  {
    pseudo: "Samin",
    age: 24,
    techno: ["CSS", "react", "nodejs"],
    admin: false,
  },

  {
    pseudo: "Nikola",
    age: 29,
    techno: ["PHP", "react", "nodejs"],
    admin: true,
  },
];

// console.log(data[2].pseudo[0]);

//les structures de controles
// if (data[0].age > data[1].age) {
//   console.log(data[0].pseudo + " est plus age que " + data[1].pseudo);
// } else {
//   console.log(data[1].pseudo + " est plus age que " + data[0].pseudo);
// }

// while
// let w = 0;
// while (w < 10) {
//   w++;
//   console.log("la valeure de w est de : " + w);
// }

//--------------------------
// do while

// do {
//   console.log(d);
// } while (d < 5);

// les boucles for

for (const user of data) {
  //   document.body.innerHTML += `<li> ${user.pseudo}
  //    - ${user.age} ans </li>`;
}

// console.log(data.length);

//  on declare la valeure de i | o n dit jusqu'ou on boucle
// on incremente i la condition 2 n'est pas remplie

for (i = 0; i < data.length; i++) {
  //console.log(i);
  // console.log(data[i].techno[0]);
  // document.body.innerHTML += "<h2>" + data[i].techno.join(" / ") + " </h2>";
}

document.body.addEventListener("click", (e) => {
  console.log(e.target.id);

  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;

    case "php":
      document.body.style.background = "blue";
      break;

    case "python":
      document.body.style.background = "red";
      break;
    default:
      null;
  }
});

// Methode de string
let string2 = "javascript est un language oriente objet";

// console.log(string2.length);

// console.log(string2.length - 1);

// let newString = string2.slice(5, 17);
// console.log(newString);

// console.log(string2.split(" "));
//------------------------------
let number2 = 42.2536;
let numberString = "42.12 est un chiffre";

// garder des chiffre apres la virgule
// console.log(number2.toFixed(2));

// console.log(parseInt("43"));

// la methode Math
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.pow(2, 7));

//nombre aleatoire entre 0 et 50
// console.log(Math.floor(Math.random() * 50));

//----------------

//Methode arrays
//---------------
let array3 = ["javascript", "php", "python"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);

// console.log(newArray);

// let newArray = [...array3, ...array4];

// console.log(newArray);
// pour joindre les elements du array
// console.log(array3.join(" "));

// console.log(newArray.slice(2, 3));

// console.log(array3.indexOf("python"));

// array3.forEach((languages) => {
//   console.log(languages);
// });

// console.log(array3.every((language) => language === "p"));

// let shift = array3.shift();

// console.log(shift);

// const restArray = array3.splice(1, 1, ...array4);
// console.log(array3);

// important

let arrayNumber = [4, 74, 28, 18, 1];

// console.log(arrayNumber.reduce((x, y) => x + y));

// arrayNumber.push("coucou");
// console.log(arrayNumber);

// FILTER, SORT, MAP
// filter permet de filtrer les elements du tableau
// sort permet de trier les elments en fonction de certaines caracteristiques
//Map permet  permet de lister les element

// le filter
// console.log(arrayNumber.filter((number) => number > 10));

// le SORT
// console.log(arrayNumber.sort((a, b) => b - a));

// LE MAP
// arrayNumber.map(
//   (number) => (document.body.innerHTML += `<li> ${number}</li> `)
// );

//----------------------------------------

// Methodes des  objets
// document.body.innerHTML = data
//   .sort((a, b) => b.age - a.age)

//   .filter((user) => user.pseudo.includes("i"))
//   .map(
//     (user) =>
//       `
//  <div class="user-card">
//  <h2>
//  ${user.pseudo}
//   </h2>

//   <p> Age: ${user.age} ans </p>

//    <p> Status: ${user.admin ? "moderateur" : "menbre"} </p>

//   </div>
//  `
//   )
//   .join("");

//---------------------------------------------------

// les dates
//----------
// Date classiques
let date = new Date();

// Timestamp

let timestamp = Date.parse(date);
// console.log(timestamp);

// IsoString
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  });

  return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

//---------------------------------------------------
//----------
// le Destructuring
// ----------------

let moreData = {
  destVar: ["Element1", "Element2", "Element3"],
};

const { destVar } = moreData;
// signifie que destVar = moreData.destVar

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];

let [x, y, z] = array5;

// console.log(x);
// console.log(y);
// console.log(z);

// console.log(iso);

// const dateDestructuring = (chaine) => {
// //   let newDate = chaine.split("T")[0];

//   let [y, m, d] = newDate.split("-");

//   return [d, m, y].join("/");
// };

// console.log(dateDestructuring(iso));

//------------------------------
// Les datasets
//-----------------------------

const h3js = document.getElementById("javascript");

// console.log(h3js.dataset.lang);

// const h3 = document.querySelectorAll("h3");
// h3.forEach((language) => console.log(language.dataset.lang));

//------------------------------
// Les Regex
//-----------------------------

let mail = "from_scratch33@gmail.com";
// console.log(mail.search(/from/));

//console.log(mail.replace(/from/, "de"));

// console.log(mail.match(/SCratch/));
// console.log(mail.match(/[abc]/));
// console.log(mail.match(/[12]/));

// // matcher tous les chiffres
// console.log(mail.match(/\d/));

// // matcher toutes les lettres

// console.log(mail.match(/[a-z]/));

// controller un mail

// console.log(mail.match(/[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 4637372882;
