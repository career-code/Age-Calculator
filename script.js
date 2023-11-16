function calculateAge() {
    // Get the input value
    let dob = document.getElementById("dob").value;

    // Calculate the age
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();

    // Check if birthday has occurred this year
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      age--;
    }

    // Display the result
    document.getElementById("result").innerHTML = "Your age is: " + age + " years";
  }