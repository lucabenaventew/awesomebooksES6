// create add book page
const formSection = document.querySelector('.add-form');
const addBookForm = () => {
  const formContainer = document.createElement('form');
  const bookTitleImput = document.createElement('input');
  const bookAuthorInput = document.createElement('input');
  const addBtnForm = document.createElement('button');
  // set classes
  formContainer.className = 'form-class';
  bookTitleImput.className = 'title-book';
  bookAuthorInput.className = 'author-name';
  addBtnForm.className = 'add-btn';
  // set atributes
  formContainer.setAttribute('id', 'form');
  formContainer.setAttribute('action', 'add-book');
  formContainer.setAttribute('name', 'form');
  bookTitleImput.setAttribute('id', 'title-book');
  bookTitleImput.setAttribute('type', 'text');
  bookTitleImput.setAttribute('name', 'title');
  bookTitleImput.setAttribute('placeholder', 'Title');
  bookTitleImput.setAttribute('maxlength', 60);
  bookAuthorInput.setAttribute('id', 'author-name');
  bookAuthorInput.setAttribute('type', 'text');
  bookAuthorInput.setAttribute('name', 'author');
  bookAuthorInput.setAttribute('placeholder', 'Author');
  bookAuthorInput.setAttribute('maxlength', 30);
  addBtnForm.setAttribute('type', 'button');
  addBtnForm.textContent = 'Add';
  // add book append child system
  formSection.appendChild(formContainer);
  formContainer.appendChild(bookTitleImput);
  formContainer.appendChild(bookAuthorInput);
  formContainer.appendChild(addBtnForm);
};
export default addBookForm;
