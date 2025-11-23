const arr1 = [10,20,30];
const arr2 = [40,50];
const comibined = [...arr1, ...arr2];
console.log('Combined Array: ${combined}');

const person = {name:"Venu", age: 25};
const extra = {city:"Bengaluru"};
const profile = {...person,...extra};
console.log(profile);

const sumAll = (...numbers)=>{return numbers.reduce((total,num) => total + num,0);
};
console.log(sumAll(1,2,3,4));

const numbers = [10,20,30,40,50];
const [a, ...remaining]= numbers;
console.log(a);
console.log(remaining);

const user = {
    name:"Alice",
    address: {
        city: "Bengaluru",
        pin: 560001,
        geo:{ lat:11.22, lng:77.33}
    }
};
const {
    address:{
        city,
        geo:{lat, lng}
    }
} = user;
console.log(city);
console.log(lat);
console.log(lng);

const multiply = (a,b) => a*b;

const emp = {
    name: "Prakash",
    details:{
        department:"IT",
        profile:{ role: "Developer"}
    }
};
const role = emp?.details?.profile?.role;
console.log(role);


