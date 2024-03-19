var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
{
    var age = 20;
    console.log(age);
    var coder = "matt";
    console.log(name);
    var incrementAge = function (age) {
        return age + 1;
    };
    var printAge = function (age) {
        console.log(age);
    };
    console.log(incrementAge(age));
    var roomname = void 0;
    roomname = 801;
    roomname = "abc";
    console.log(roomname);
    var dhoniAge = null;
    console.log(incrementAge(dhoniAge !== null && dhoniAge !== void 0 ? dhoniAge : 25)); //null coelescing
    console.log(incrementAge(dhoniAge)); //null coelescing
    //Optional parameters
    var incrementage2 = function (age) {
        var _a;
        return (_a = age + 1) !== null && _a !== void 0 ? _a : 21;
    };
    var incrementage3 = function (age) {
        return age !== null && age !== void 0 ? age : 21;
    };
    var incrementage4 = function (age) {
        if (age === void 0) { age = 21; }
        return age;
    };
    //Classes
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.active = false;
            this.name = name;
            this.age = age;
        }
        Object.defineProperty(Person.prototype, "changed", {
            get: function () {
                return this._changed;
            },
            set: function (value) {
                this._changed = value;
            },
            enumerable: false,
            configurable: true
        });
        Person.prototype.celebrateBirthDay = function () {
            if (this.age !== undefined)
                this.age++;
        };
        return Person;
    }());
    //another better way less code to declare class
    var Person1 = /** @class */ (function () {
        function Person1(name, age) {
            this.name = name;
            this.age = age;
        }
        Person1.prototype.celebrateBirthDay = function () {
            if (this.age !== undefined)
                this.age++;
        };
        return Person1;
    }());
    var person1 = new Person('virat', 43);
    var Person2 = new Person('anouska');
    console.log(person1, Person2);
    console.log(person1.changed); //changed getter
    person1.changed = true;
    console.log(person1.changed);
    //Inheritance
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child(name, toys, age) {
            var _this = _super.call(this, name, age) || this;
            _this.toys = toys;
            return _this;
        }
        return Child;
    }(Person));
    var child1 = new Child('taimur', ["car", "start paraents"], 5);
    console.log(child1);
    var CheckingAccount = /** @class */ (function () {
        function CheckingAccount(id, balance, transactions) {
            this.id = id;
            this.balance = balance;
        }
        CheckingAccount.prototype.addBalance = function (newBaalance) {
            this.balance += newBaalance;
        };
        return CheckingAccount;
    }());
    // export {}
    var account = { id: 34, balance: 8000, transactions: [100, 200] };
    //Combining Types
    var x = void 0;
    var s1 = { name: "ABC", role: "teacher", id: 1, salary: 2000 };
    console.log(s1);
    var t1 = 23;
    var t2 = true;
    // 2nd Day
    //GENERICS
    function convertNumToArray(x, y) {
        return [x, y];
    }
    function convertNumToArrayGenerics(x, y) {
        return [x, y];
    }
    //arrow function
    var cToA = function (x, y) {
        return [x, y];
    };
    console.log(convertNumToArray(10, 20));
    //Below works for num and strings both
    console.log(convertNumToArrayGenerics(10, 20));
    console.log(convertNumToArrayGenerics("test abhishek", "test 2"));
    var AccountManager = /** @class */ (function () {
        function AccountManager(account) {
            this.account = account;
        }
        return AccountManager;
    }());
    var checkingAcctManager = new AccountManager(new CheckingAccount(1, 100, [1, 2, 3]));
    var ttype = 0 /* TransactionType.Deposit */;
    console.log(ttype); //prints index of the Type
    console.log("D" /* TransactionType2.Deposit */);
    var user = { name: "Zuckerberg", active: true };
    console.log(((_a = user.password) === null || _a === void 0 ? void 0 : _a.length) || "no password set");
    //Typecasting
    var description = document.getElementById('description');
    description.value;
}
