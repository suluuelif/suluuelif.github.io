
document.getElementById('addMemberForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var firstName = document.getElementById('firstName').value.trim();
  var lastName = document.getElementById('lastName').value.trim();
  var grade = document.getElementById('grade').value;

  // Create entry with form values and <br> element
  var entry = `${firstName} ${lastName} - ${grade}<br>`;

  // Supposedly adds to the list but I just cannot get this to work
  var memberList = document.getElementById('memberList');
  memberList.innerHTML += entry;

  // Clears the form
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('grade').selectedIndex = 0; 
});