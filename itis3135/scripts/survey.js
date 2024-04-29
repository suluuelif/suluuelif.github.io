    const submitBtn = document.querySelector('input[type="submit"]');
    const resetBtn = document.querySelector('input[type="reset"]');
    var count = 0;

    introForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm();
    });

    resetBtn.addEventListener('click', function(event) {
        event.preventDefault();
        resetForm();
    });
    function resetForm() {
        introForm.reset();
        const displayedData = document.querySelector('div:not(#course-list)');
        if (displayedData) {
            displayedData.remove();
        }
        resetBtn.style.display = 'none';
    }

    
    function submitForm() {
        const formData = {
            name: document.getElementById('name').value,
            mascot: document.getElementById('mascot').value,
            image: document.getElementById('image').value,
            personal: document.getElementById('personal').value,
            professional: document.getElementById('professional').value,
            academic: document.getElementById('academic').value,
            web: document.getElementById('web').value,
            environment: document.getElementById('environment').value,
            funny: document.getElementById('funny').value,
            other: document.getElementById('other').value,
            agree: document.getElementById('agree').checked,
            courses: []
        };

    }

const courseInfo = document.getElementById("courseInfo");
const currentCourseBtn = document.getElementById("currentCourseBtn");
const currentCourses = document.getElementById("currentCourses");
var count = 0;

currentCourses.addEventListener("click", addCourseInfo); 

function addCourseInfo() {
    instantiateDelete();
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'newCourse';
    newInput.className = 'newCourse';
    courseInfo.appendChild(newInput);
    var lineBreak = document.createElement('br');
    courseInfo.appendChild(lineBreak);
    count++;
}
function displayCourses() {
    let coursesListHTML = ''; 
    for(let x = 0; x < courseInfo.children.length; x++) {
        if(courseInfo.children[x].value){
            coursesListHTML += `<li>${courseInfo.children[x].value}</li>`;
        }
    }
    return coursesListHTML;
}
function instantiateDelete() {
    if (!document.getElementById('deleteButton') && count >= 1) {
        var deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.id = 'deleteButton';
        deleteButton.className = 'deleteButton';
        deleteButton.value = 'Delete';
        coursesButton.appendChild(deleteButton);
        var spacing = document.createElement('br');
        coursesButton.appendChild(spacing);

        deleteButton.addEventListener("click", () => {
            if (courseInfo.lastElementChild) {
                courseInfo.removeChild(courseInfo.lastElementChild);
                courseInfo.removeChild(courseInfo.lastElementChild);
                count--; 
                if (count === 0) {
                    deleteButton.remove();
                }
            }
        });
    }    
}


