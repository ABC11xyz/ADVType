// interface User {
//   name : String;
//   age : number;
// };

// function sumOfAge(user1 : User , user2 : User) {
//   return user1.age + user2.age;
// }

// const age  = sumOfAge({name :"harkiart" , age : 30 } , {name  : "vishnu pad" , age : 21});
// console.log(age);


interface User {
  id : String;
  name : String;
  age : number;
  email : String;
  password : String;
};

type UpdateProps = Pick<User , 'name' | 'age' | 'email' >
  type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updateParams : UpdatePropsOptional){

}

updateUser({
  name : "Vishhnu Pad"
})