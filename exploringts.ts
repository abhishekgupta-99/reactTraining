{let age:number=20;
console.log(age);

let coder:string = "matt";
console.log(name);

const incrementAge= (age: number | undefined): number => {
    return age+1;

}

const printAge= (age: number): void => {
    console.log(age);


}
console.log(incrementAge(age));
let roomname : number | string;
roomname = 801;
roomname = "abc";
console.log(roomname);

let dhoniAge:number = null;
console.log(incrementAge(dhoniAge?? 25)); //null coelescing
console.log(incrementAge(dhoniAge!)); //null coelescing


//Optional parameters
const incrementage2 = (age:null|number): number =>{
    return age!+1 ?? 21;
}

const incrementage3 = (age?:number): number =>{
    return age ?? 21;
}

const incrementage4 = (age:number =21): number =>{ //provide a default value

    return age;
}

//Classes
class Person{
    name: string;
    age?:number;
    active:boolean=false;
    private _changed:boolean

    constructor(name:string, age?:number)
    { this.name= name;
        this.age = age;
    }

    
    public get changed():boolean{
        return this._changed;
    }

    public set changed(value:boolean){
        this._changed = value;
    }



    celebrateBirthDay():void{
        if(this.age!==undefined)
        this.age++;

    }
}

//another better way less code to declare class
class Person1{

    constructor(public name:string, public age?:number)
    {

    }

    celebrateBirthDay():void{
        if(this.age!==undefined)
        this.age++;

    }

}

const person1 = new Person('virat', 43);
const Person2 = new Person('anouska');
console.log(person1, Person2);

console.log(person1.changed); //changed getter
person1.changed = true;
console.log(person1.changed);

//Inheritance
class Child extends Person{
    toys: string[];

    constructor(name: string, toys:string[], age?:number)
    {super(name, age);
        this.toys = toys;

    }
}

let child1 = new Child('taimur', ["car", "start paraents"], 5)
console.log(child1);

//interfaces
interface Account{
    id: number;
    balance: number;
    transactions: number[];
}

class CheckingAccount implements Account{
    id:number;
    balance: number;
    transactions:number[];
    
    constructor(id:number, balance:number, transactions:number[])
    {
        this.id =id;
        this.balance = balance;

    }
    public addBalance(newBaalance:number):void{
        this.balance+=newBaalance;
    }
}
// export {}

let account: Account ={id:34, balance:8000, transactions:[100,200]};

//Combining Types
let x: number | string;
type Teacher = {name: string, role: string}
type Employee = {id:number, salary:number}
type SchoolEmployee = Teacher & Employee;
let s1: SchoolEmployee ={name: "ABC", role:"teacher", id:1, salary:2000};
console.log(s1);

//warning
type type1 = string | number| boolean;
type type2 = Teacher | Number | Boolean;
type type3 = type1 &  type2; //type3 will be intersection of 1 and two and not union therefore. no. and boolean
let t1: type3=23;
let t2: type3 = true;


// 2nd Day

//GENERICS
function convertNumToArray(x:number, y:number):number[]{
    return [x,y];
}

function convertNumToArrayGenerics<Type>(x:Type, y:Type):Type[]{
    return [x,y];
}

//arrow function
let cToA = <T>(x:T, y:T):T[] =>{
    return [x,y];
}
console.log(convertNumToArray(10,20));

//Below works for num and strings both
console.log(convertNumToArrayGenerics(10,20));
console.log(convertNumToArrayGenerics("test abhishek","test 2"));

class AccountManager<T>{
    account: T;
    constructor(account: T)
    {
        this.account = account;
    }

}

const checkingAcctManager = new AccountManager<CheckingAccount>(new CheckingAccount(1, 100, [1,2,3]));

//Enums
const enum TransactionType{Deposit, Withdrawal, Transfer}
const ttype:TransactionType = TransactionType.Deposit;

console.log(ttype); //prints index of the Type
const enum TransactionType2{Deposit='D', Withdrawal='2', Transfer='3'}
console.log(TransactionType2.Deposit);


//optional paramter and optionaml parameters need to be defined at the end in a construction not in a map/dictionary since sequence doesn't matter here
type User = {name:string, password?:string, active: boolean}
const user: User = {name: "Zuckerberg", active: true};
console.log(user.password?.length || "no password set");


//Typecasting

const description = document.getElementById('description') as HTMLInputElement;
description.value;












}