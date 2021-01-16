var person = {
  firstName: 'Andy',
  lastName: 'Duenas',
  hobby: 'Video games'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log(fullName);

person.job = 'Student';

console.log(person.job);

person.previousJob = 'Construction';

console.log(person.previousJob);

console.log(person);

var myCar = {
  make: 'Ford',
  model: 'Focus',
  year: '2017'
};

console.log(myCar);

myCar['owner'] = fullName;

console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model']);

myCar['color'] = 'grey';

console.log(myCar);
