let text = 'I love JavaScript so much'
console.log(text)
/* 
ge this substring from text 
"JavaScript so" and print it in console
*/

let start = text.indexOf('JavaScript'); 
let end = text.indexOf('m') - 1;    

let res = text.substring(start, end);
console.log(res);


let price = 200,
discount = 30,
employeeName = 'Ali',
specialEmployees = ['Ahmed', 'Ali', 'Amr', 'Osama'],
oldEmployee = true,
hasCoupon = true;


/*
    1 - if employee exist in special employess,
        apply discount and add this discount to 20

    2- case 1 is applyed, appy discount and added to 40

    3 - is oldEmployee or hasCopon , apply discount

    4- if none of this situations, price - 10
*/

if (specialEmployees.includes(employeeName)) {
    price -= discount;
    price -= 20;
    price -= 40;
} else if (oldEmployee || hasCoupon) {
    price -= discount;
} else {
    price -= 10;
}

console.log(price);


