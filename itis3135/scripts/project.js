
function addItem() {
  var input = document.getElementById('memberName');
  var inputValue = input.value.trim();

  if (inputValue !== '') {
    var itemList = document.getElementById('memberList');
    var listItem = document.createElement('ul');
    listItem.textContent = inputValue;
    itemList.appendChild(listItem);
    input.value = ''; // Clear the input field
  }
}