"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "harkiart", age: 30 }, { name: "vishnu pad", age: 21 });
console.log(age);
