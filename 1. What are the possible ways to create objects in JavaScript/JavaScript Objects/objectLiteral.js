// program to create JavaScript object using object literal

const person = {
    name: 'Sandeep Rawat',
    age : 26,
    hobbies: ['reading', 'singing', 'cricket'],
    greet: function() {
            console.log("Hello Everyone!!!");
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); //object

//accessing the object value

console.log(person.name); //Sandeep Rawat
console.log(person.hobbies[2]); // Cricket
person.greet(); // Hello Everyone !!!
console.log(person.score.maths); // 90
