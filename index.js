// Scope 
{
    var x = 1;
    x;
    {
        let x = 2;
        x = 3;
        x;
    }
}

if(true) {
    x;
}

// Arrow function 

var obj = {
    value : 0,
    increment: function () {
        setTimeout(() => {
            this.value++;
            console.log(this.value);
        }, 1000);
    }
};

obj.increment();

// rest operators
function print(firstParm, secondParm, ...arrParm) {
    // var arr = Array.prototype.slice.call(arguments);
    console.log(firstParm)
    console.log(secondParm)
    console.log(arrParm);
}

print(1, 5, 7, "Hello", "world", {});


//spread operators
function print_spread(...args) {
    // ES5
    // var args = Array.prototype.slice.call(arguments);
    // args = ["<br>"].concat(args).concat(["<br>"]);

    // ES6
    args = ['<br>', ...args, '<br>']
    console.log(args.join(" "))
}

print_spread("Hello", "world");

var message = 'Hello world';
const chars = [...message]
console.log(chars)

function add(a, b) {
    return a + b;
}
var arr = [5, 15];
console.log(add(...arr))

// String interpolation

var age = 28;
var name = 'Sathish'
var msg = `My name is ${name} and age is ${age}`;
console.log(msg)

// property shorthand

var firstName = 'satz';
var lastName = 'k';
var age = 28;
var person = {
    firstName,
    lastName,
    age
};

person;
