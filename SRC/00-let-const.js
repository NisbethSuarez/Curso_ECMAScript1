var lastname= 'David';
Lastname = 'Oscar';
console.log(Lastname);

let fruit = 'Apple';
fruit='Kiwi';
console.log(fruit);

const animal = 'dog';
animal='Cat';
console.log(animal);

const fruits =() => {
    if (true){
        var fruit1= 'apple';
        let fruit2= 'Kiwi'
        const fruit3= 'Banana';
    }

    console.log(fruit1); //function scope
    console.log(fruit2); // block scope
    console.log(fruit3); // block scope

}

fruits();