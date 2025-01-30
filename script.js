// Handle course enrollment
function enroll(courseName) {
    alert(You have enrolled in ${courseName}!);
  }
  
  // Handle form submission
  document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
  
    alert(Thank you for registering, ${name}! You have been enrolled in the ${course} course.);
    this.reset(); // Reset form fields
  });