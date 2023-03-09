console.log("läuft");


// lev1_1: length

let firstName = "Paula";
let lastName = "Powerfrau";
console.log(`${firstName}: ` .concat(firstName.length)) ;
console.log(`${lastName}: ` .concat(lastName.length));

let fullName = firstName + lastName;
console.log(`${fullName}: ` .concat(fullName.length));



// lev1_2: indexOf 

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log("h ".concat(txt.indexOf("h")))
console.log("Earth ".concat(txt.indexOf("Earth")))
console.log("Moon ".concat(txt.indexOf("Moon")))



// lev1_4: slice 

const A = 'Susi is going to codingschool';
console.log(A);

let susi = A.slice(0,4);
console.log(A.slice(0,4));

let is = A.slice(5,7);
console.log(A.slice(5,7));

let going = (A.slice(5,17)+ A.slice(23))
console.log(A.slice(5,17));
console.log(A.slice(23));

let school = (A.slice(23));
console.log(A.slice(23));

let susIs = (A.slice(0,8) + A.slice(23));
console.log(A.slice(0,8)); 
console.log(A.slice(23));

document.write(susi + "<br>" + is +"<br>"+ going +"<br>"+ school +"<br>"+ susIs+ "<br>");



// lev1_5: substring 

const text = 'Susi is back from codingschool';

let a = text.substring(0,4); 
let b = text.substring(5,7);
let c = text.substring(text.indexOf("school"));
// console.log(txt.indexOf("school"))
let d = text.substring(0,8) + text.substring(24)

document.write("<br>" + a + "<br>" + b + "<br>" + c + "<br>"+ d+ "<br>");



// lev1_7: replace

const txtOrign = "Sam is good at codingschool";

let samSchool = txtOrign.replace("good", "bad") .replace("codingschool", "school");

let susiSchool = txtOrign.replace ("Sam", "Susi") .replace("codingschool", "school");

let samTennis = txtOrign.replace("codingschool", "Tennis");

document.write("<br>" + samSchool + "<br>" + susiSchool + "<br>" + samTennis + "<br>")




// lev1_8: toLowerCase-toUpperCase

const samCoding = "Sam is going to codingschool";

let newSam = samCoding.replace("codingschool", "school");

let first = newSam.toUpperCase();
let second = newSam.toLowerCase();
console.log(first);
console.log(second);

let third = (newSam.slice(0,3).toUpperCase().concat(newSam.slice(3,16)).concat (newSam.slice(16).toUpperCase()))

// console.log (newSam.slice(0,3).toUpperCase().concat(newSam.slice(3,16)).concat (newSam.slice(16).toUpperCase()));

let fourth = (second.slice(0,4).concat(second.slice(4,15).toUpperCase()).concat(second.slice(15)))

// console.log(second.slice(0,4).concat(second.slice(4,15).toUpperCase()).concat(second.slice(15)))

let fifth = (second.slice(0, 1).toUpperCase().concat(second.slice(1,4)).concat (second.slice(4,5).toUpperCase()).concat(second.slice(5,6)).concat (second.slice(6,8).toUpperCase()).concat(second.slice(8,13)).concat(second.slice(13,14).toUpperCase()).concat(second.slice(14,16)).concat(second.slice(16,17).toUpperCase()).concat(second.slice(17)))

// console.log(second.slice(0, 1).toUpperCase().concat(second.slice(1,4)).concat (second.slice(4,5).toUpperCase()).concat(second.slice(5,6)).concat (second.slice(6,8).toUpperCase()).concat(second.slice(8,13)).concat(second.slice(13,14).toUpperCase()).concat(second.slice(14,16)).concat(second.slice(16,17).toUpperCase()).concat(second.slice(17)))

document.write("<br>" + newSam + "<br>" + first + "<br>" + second + "<br>" + third + "<br>" + fourth + "<br>" + fifth+ "<br>")



// lev1_9: concat

const text1 = "Sam is going to codingschool";
const text2 = "Susi"
const text3 = "and"

let case1 = text1.replace("codingschool", "school").concat (` and to the movie theater`)
console.log (case1)

let case2 = text1.slice(0,15).concat (` the movie theater`)
console.log (case2)

let case3 = `${text2} ${text3} `.concat(text1).replace("codingschool", "school").replace("is", "are");

let case4 = `${text2} ${text3} `.concat(text1).replace("codingschool", "gym").replace("is", "are") + ` and to the movie theater`;

let case5 = `${text2}` + text1.slice(3).replace("codingschool", "school") + ` and to the movie theater`;

document.write("<br>" + case1 + "<br>" + case2 + "<br>" + case3 + "<br>" + case4 + "<br>" + case5 + "<br>"+ "<br>")



// // lev1_1: template-literals

const myFirstName = "Laura-Ann"
const myLastName = "Theißing"
let myAge = 30
const birth = "Niederrhein"
let size = 1.58
let weight = 54
let hobby = "Draußen sein"
let food = "Pizza Melanzane"
let sport = "Ski fahren"
let season = "Winter"
let holiday = "überall wo ich mich wohlfühle"

document.write (`Mein Name ist ${myFirstName} ${myLastName} und ich bin ${myAge} Jahre alt. Meine Größe und mein Gewicht sind ${size}m und ${weight}kg. Mein Lieblingshobby ist ${hobby} und mein Lieblingsessen ist ${food} und als Lieblingssport gehe ich ${sport}. Meine Lieblingsjahreszeit ist ${season} und ich mache gerne Urlaub ${holiday}.`)

// console.log(`Mein Name ist ${myFirstName} ${myLastName} und ich bin ${myAge} Jahre alt. Meine Größe und mein Gewicht sind ${size}m und ${weight}kg. Mein Lieblingshobby ist ${hobby} und mein Lieblingsessen ist ${food} und als Lieblingssport gehe ich ${sport}. Meine Lieblingsjahreszeit ist ${season} und ich mache gerne Urlaub ${holiday}.`);