// mengambil elemen todoInput
const todoInput = document.querySelector('input[name=todoInput]');

// mengambil button add item
const addItem = document.querySelector('.addItem');

// membuat eventlistener terhadap button add item
addItem.addEventListener('click', function () {
  // str menampung value dari todo input
  let str = todoInput.value;

  // membuat element input baru
  const newInput = document.createElement('input');
  // memberi attribute value untuk newInput
  newInput.setAttribute('value', str);

  // membuat button baru
  const newButton = document.createElement('button');
  // membuat text remove untuk button baru
  const textNewButton = document.createTextNode('remove');
  // memasukkan text remove ke dalam button
  newButton.appendChild(textNewButton);
  newButton.style.backgroundColor = 'red';

  // mengambil elemen ul
  const ul = document.querySelector('ul');
  // membuat element li baru
  const newLi = document.createElement('li');
  // memasukkan input baru dan button baru ke dalam li baru
  newLi.appendChild(newInput);
  newLi.appendChild(newButton);

  // memasukkan li diakhir ul
  ul.appendChild(newLi);

  // memberi event listener ke button baru
  newButton.addEventListener('click', function () {
    // jika diklik remove maka hilangkan li baru
    ul.removeChild(newLi);
  });
});
