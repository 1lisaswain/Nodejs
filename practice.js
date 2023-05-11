let person={
    name:'lisa'
};
Object.freeze(person);
person.name='seli'
console.log(person.name);

let people={
    name:'lisa'
};
Object.seal(people);
people.name='seli'
console.log(people.name);


const object2={
    property:42
};
Object.isFrozen(object2);
object2.property=30;
console.log(object2.property);

const object3={
    property:56
};
Object.isSealed(object3);
object3.property=30;
console.log(object3.property);
