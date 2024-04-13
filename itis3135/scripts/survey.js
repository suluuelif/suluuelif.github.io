document.addEventListener('DOMContentLoaded', function() {
    const introForm = document.getElementById('intro-form');
    const addCourseButton = document.getElementById('add-course-button');
    const courseList = document.getElementById('course-list');
    const courseFormTemplate = document.getElementById('course-form-template');
    const submitBtn = document.querySelector('input[type="submit"]');
    const resetBtn = document.querySelector('input[type="reset"]');

    addCourseButton.addEventListener('click', function() {
        addCourseTextBox();
    });

    courseList.addEventListener('click', function(event) {
        if (event.target && event.target.className === 'delete-course-button') {
            event.target.parentElement.remove();
        }
    });

    introForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm();
    });

    resetBtn.addEventListener('click', function(event) {
        event.preventDefault();
        resetForm();
    });

    function addCourseTextBox() {
        const newCourseForm = courseFormTemplate.cloneNode(true);
        newCourseForm.classList.remove('hidden');
        courseList.insertBefore(newCourseForm, addCourseButton);
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

        const courseForms = document.querySelectorAll('.course-form:not(.hidden)');
        courseForms.forEach(form => {
            const courseName = form.querySelector('.course-name').value;
            const courseDescription = form.querySelector('.course-description').value;
            formData.courses.push({ name: courseName, description: courseDescription });
        });

        // Display gathered data instead of the form
        displayFormData(formData);
    }

    function displayFormData(formData) {
        const displayDiv = document.createElement('div');
        displayDiv.innerHTML = `
            <h2>${formData.name}</h2>
            <p><strong>Mascot:</strong> ${formData.mascot}</p>
            <p><strong>Personal Background:</strong> ${formData.personal}</p>
            <p><strong>Professional Background:</strong> ${formData.professional}</p>
            <p><strong>Academic Background:</strong> ${formData.academic}</p>
            <p><strong>Web Development Background:</strong> ${formData.web}</p>
            <p><strong>Primary Computer Platform:</strong> ${formData.environment}</p>
            <p><strong>Funny Thing:</strong> ${formData.funny}</p>
            <p><strong>Anything Else:</strong> ${formData.other}</p>
            <p><strong>Courses Currently Taking:</strong></p>
            <ul>
                ${formData.courses.map(course => `<li>${course.name} - ${course.description}</li>`).join('')}
            </ul>
            <p><strong>Agree:</strong> ${formData.agree ? 'Yes' : 'No'}</p>
        `;
        introForm.replaceWith(displayDiv);
        resetBtn.style.display = 'block';
    }

    function resetForm() {
        introForm.reset();
        const displayedData = document.querySelector('div:not(#course-list)');
        if (displayedData) {
            displayedData.remove();
        }
        resetBtn.style.display = 'none';
    }
});