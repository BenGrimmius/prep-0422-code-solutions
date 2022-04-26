const person = {
  firstName: 'Hulk ',
  lastName: 'Hogan',
  hobby: 'Gardening'
};
console.log('Person', person);

person.job = 'Wrestling';
console.log("The person's current job is", person.job);

person.previousJob = 'Figure skater';
console.log("The person's previous job was", person.previousJob);

const fullName = person.firstName + person.lastName;
console.log("The person's full name is", fullName);
console.log('The complete person', person);
