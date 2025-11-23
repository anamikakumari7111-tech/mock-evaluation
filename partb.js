const squares = numbers.map(n=> n * n);
console.log("Squares:", squares);

const isPrime = num => {
    if(num< 2) return false;
    for(let i = 2; i<= Math.sqrt(num); i++){
        if(num%i === 0) return false;
    }
    return true;
};
const primes = numbers.filter(isPrime);
console.log("Prime Numbers:", primes);

const sum = numbers.reduce((acc, val) => acc+val; 0);
console.log("Sum:", sum);

const descending =[...nums].sort((a,b)=> b-a);
console.log("Descending Order:", descending);

function displayCar(){
    console.log("This is a Car");
}
function displayTruck(){
    console.log("This is a Truck");
}
function displayBike(){
    console.log("This is a Bike");
}

function vehicleInfo(vehicleCategory, callbackFn){
    console.log('Vehicle Category: ${vehicleCategory}');
    callbackFn();
}

vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);



