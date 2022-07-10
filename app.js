const fs = require('fs');

const genders = ['Male', 'Female'];
const maleNames = [
  'Adam',
  'Oliver',
  'John',
  'Peter',
  'Mark',
  'Jack',
  'Oscar',
  'Leo',
  'Georg',
  'Harry',
];
const femaleNames = [
  'Eva',
  'Amelia',
  'Mia',
  'Lily',
  'Odetta',
  'Ava',
  'Isla',
  'Ella',
  'Poppy',
  'Vera',
  'Isabella',
];

const lastNames = ['Doe', 'Taylor', 'Jones', 'Smith', 'Thomas','Williams','Evans','Johnson'];

const domainNames = ['gmail.com','hotmail.com','yahoo.com','onet.pl'];

const people = [];

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

for (i = 0; i < 20; i++) {
  let obj = {
    gender: '',
    name: '',
    lastName: '',
    age: '',
    email: '',
  };

  const randGender = randChoice(genders);


  switch (randGender) {
    case 'Male':
      obj.name = randChoice(maleNames);
      obj.gender = 'Male';
      break;
    case 'Female':
      obj.name = randChoice(femaleNames);
      obj.gender = 'Female';
      break;
   }

  obj.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  obj.age = Math.floor(Math.random() * 61) + 18; // 18 do 78
  obj.email =  obj.name.charAt(0).toLowerCase() + '.' + obj.lastName.toLowerCase() +'@'+ randChoice(domainNames);
  people.push(obj);
}

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
  if (err) {
    console.log('Something went wrong');
    throw err;
  }
  console.log('The file has been successfully generated! Check people.json');
});
