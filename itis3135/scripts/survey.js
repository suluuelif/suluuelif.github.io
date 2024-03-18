const addCourseBtn = document.getElementById(add-course-button);
const courseForm = document.getElementById(course-form);

addCourseBtn.addEventListener("click", () =>
courseForm.classList.toggle("hidden")
);
// addCourseBtn.addEventListener(click, function(){
//     courseForm.classList.toggle('hidden');
// })