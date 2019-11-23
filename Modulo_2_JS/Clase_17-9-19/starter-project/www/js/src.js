'use strict';

const names = ['Ivan', 'Lucía', 'Antonio'];
const ages = [23, 14, 78];

const users = names.map((nameValue, index) => {
  return { name: nameValue, age: ages[index] };
});

console.log(users);

const adultUsers = user.map((user) => {
  user.isAdult = user.age >= 18 ? true : false;
  return user;
});
const filteredAdults = adultUsers.filter((user) => {
  return user.isAdult;
});
console.log(adultUsers)

const totalAge = filteredAdults.reduce((accumulator, currentUser) => {
  return accumulator + currentUser.age;
}, 0);

console.log(totalAge);
