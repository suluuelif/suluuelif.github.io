
function validateEmail(email) {
    // Regular expression for validating email address
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function submitForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Validate email address
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Display form data
    var formData = {
      name: name,
      email: email,
      message: message
    };

    alert('Form Data:\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
  }