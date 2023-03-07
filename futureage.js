// Create two variables called `yearOfBirth` and `yearFuture`. 
// Assign these your own age and a future year. 
// What type will these two variables be? 
// Using `yearOfBirth` and `yearFuture` calculate the age 
// and store that in a variable called `age`.
// Log out this string: "You will be 40 years old in 2027". 
// With 40 being the result of the `age` variable 
// and 2027 being the `yearFuture` variable. (Hint use string concatenation)


var yearOfBirth = document.getElementById('yearBirth');

var yearFuture = document.getElementById('yearFuture')

var calculate = document.getElementById('calculate');

function calculateAge () {
    var yearOfBirth = document.getElementById('yearBirth').value;
    var yearFuture = document.getElementById('yearFuture').value;
    var age = yearFuture - yearOfBirth;
    var age = age.toString();
    document.getElementById('age').innerHTML = "You will be " + age + " years old in " + yearFuture;
    }

