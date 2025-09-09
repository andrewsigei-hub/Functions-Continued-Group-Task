//Question 1

function introducePerson(name, age) {
  return `Hi, I am  ${name} and I am ${age} years old!`;
}

console.log(introducePerson("Alice", 25)); //Hi, I am  Alice and I am 25 years old!'

console.log(introducePerson("Bob", 30)); //'Hi, I am  Bob and I am 30 years old!'

//Question 2

function createProfile(username, role = "user", isActive = true) {
  return {
    username,
    role,
    isActive,
  };
}
const profile1 = createProfile("john123");
console.log(profile1);

const profile2 = createProfile("admin456", "administrator");
console.log(profile2);

const profile3 = createProfile("guest789", "guest", false);
console.log(profile3);

// Defaults replace undefined values when nothing has been entered for example here role is set to user and isActive to true
// When middle parameters are skipped the default value is displayed
// Default values enhance function flexibility by allowing parameters to have pre-defined values that are used if no argument is explicitly provided when the function is called.


