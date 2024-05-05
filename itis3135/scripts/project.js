
// Member Form 
document.getElementById('addMemberForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var grade = document.getElementById('grade').value;

    
    var li = document.createElement('li');
    li.textContent = 'Name: ' + firstName + ' ' + lastName + ', Grade: ' + grade;

  
    document.getElementById('memberList').appendChild(li);

 
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('grade').value = '';
});