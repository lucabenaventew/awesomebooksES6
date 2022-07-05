// create contact page
const contactSection = document.querySelector('.contact');
const contactPage = () => {
  const contactParagraph = document.createElement('p');
  const contactParagraph2 = document.createElement('p');
  const contactUl = document.createElement('ul');
  const contactli1 = document.createElement('li');
  const contactli2 = document.createElement('li');
  const contactli3 = document.createElement('li');
  // contact classes
  contactParagraph.className = 'contact-text';
  contactParagraph2.className = 'contact-text';
  contactUl.className = 'contact-ul';
  contactli1.className = 'contact-li';
  contactli2.className = 'contact-li';
  contactli3.className = 'contact-li';
  // contact set atribute
  contactParagraph.setAttribute('id', 'contact-text');
  contactli1.setAttribute('id', 'contact-mail');
  contactli2.setAttribute('id', 'contact-phone');
  contactli3.setAttribute('id', 'contact-address');
  // contact append child
  contactSection.appendChild(contactParagraph);
  contactSection.appendChild(contactParagraph2);
  contactSection.appendChild(contactUl);
  contactUl.appendChild(contactli1);
  contactUl.appendChild(contactli2);
  contactUl.appendChild(contactli3);
  // contact data text
  contactParagraph.textContent = 'Do have any questions or you just want to say "Hello"?';
  contactParagraph2.textContent = 'You can reach out to us!';
  contactli1.textContent = 'Our e-mail: awesomebooks@mail.com';
  contactli2.textContent = 'Our phone number: 004-358-6534-422';
  contactli3.textContent = 'Our address: Streetname 22, 84503 City, Country.';
};

export default contactPage;