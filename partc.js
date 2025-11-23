const counter = () =>{
    let count = 0;
    return() =>{
        count++;
        return count;
    };
};

const c = counter();
console.log(c());
console.log(c());
console.log(c());

 function createWallet(){
    let balance = 0;
    return{
        addMoney(amount){
            balance += amount;
        };
        checkBalance(){
            console.log(balance);
            return balance;
        }
    };
 }
