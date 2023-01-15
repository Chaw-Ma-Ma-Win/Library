let myLibrary = [];

function Book() {
  // the constructor...
}
let body = document.getElementsByTagName('body')[0];
let div = document.createElement('div');
function addBookToLibrary() {
  var x = document.getElementById('name').value;
  var y = document.getElementById('author').value;
  let div = document.createElement('div');
  let bookName = document.createElement('p');
  bookName.innerHTML = x;
  let authorName = document.createElement('p');
  authorName.innerHTML = y;
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', removeAll);
  function removeAll() {
    bookName.remove();
    authorName.remove();
    deleteButton.remove();
  }
  div.append(bookName, authorName, deleteButton);
  body.append(div);
  var getValue = document.getElementById('name');
  var getValue1 = document.getElementById('author');
  if (getValue.value != '') {
    getValue.value = '';
  }
  if (getValue1.value != '') {
    getValue1.value = '';
  }
  //deleteButton.addEventListener('click', (div.innerHTML = ''));
  myLibrary.push(x);
  console.log(myLibrary);
}
