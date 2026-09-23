class BankManagementSystem{

    constructor(accountHolderName,Balance){
        this.accountHolderName = accountHolderName;
        this.Balance=Balance;

    }
    deposit(amount){
        if(amount<0){
            return "Invalid amount";
        }
        this.Balance=this.Balance+amount;
    }
    withdraw(amount){
        if(amount>this.Balance){
            return "Insufficient Balance";
        }
        this.Balance=this.Balance-amount;
    }

    getBalance(){
        return this.Balance;
    }

    getAccountType(){
        console.log("This is Simple bank account");
    }
}
class SavingBankAccount extends BankManagementSystem{
    constructor(accountHolderName,Balance,interestRate){
        super(accountHolderName,Balance);
        this.interestRate=interestRate;
    }

    getAccountType(){
        console.log("This is Saving bank account");
    }


}

let nikhilSBI=new BankManagementSystem("Nikhil",11000);
// console.log(nikhilSBI);

// nikhilSBI.#Balance=0;

// nikhilSBI.deposit(22000);
// console.log(nikhilSBI.getBalance());

let vinayPNB=new SavingBankAccount("Vinay",15000,8);
console.log(vinayPNB.accountHolderName);
console.log(vinayPNB.Balance);

// In javascript there is only runtime polymorphism use Method Overriding to achieve runtime polymorphism
console.log(nikhilSBI.getAccountType());
console.log(vinayPNB.getAccountType());