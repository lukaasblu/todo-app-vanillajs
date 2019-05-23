import { inputIsValid, getElementsByAttribute } from './utilities';

let mockData = [
  {
    id: '1',
    title: 'Complete the Todo app',
    done: false,
    date: new Date()
  },
  {
    id: '2',
    title: 'Cook dinner',
    done: true,
    date: new Date()
  },
  {
    id: '3',
    title: 'Go to the gym',
    done: false,
    date: new Date()
  }
];

class Todo {
  constructor() {
    let self = this;

    document.querySelector('.edit-popup').className += ' hide';

    this.list = document.querySelector('.items-list');
    this.render();

    document.querySelector('.btn-add').addEventListener('click', this.create.bind(this));

    document.querySelector('.btn-update').addEventListener('click', this.update.bind(this));

    document.addEventListener('click', event => {
      if (event.target.classList.contains('btn-delete')) self.remove(event);

      if (event.target.classList.contains('btn-edit')) self.renderEditForm(event);

      if (event.target.classList.contains('btn-complete')) self.toggleComplete(event);
    });
  }

  render() {
    this.list.innerHTML = '';

    mockData.forEach(item => {
      this.createDomElements(item.id);
      this.li.firstChild.firstChild.firstChild.insertAdjacentHTML('afterbegin', item.title);

      if (item.done) {
        this.li.firstChild.classList.add('done');
        // this.li.classList.add('done');
      }

      this.list.appendChild(this.li);
    });
  }

  renderEditForm(event) {
    let id = event.target.getAttribute('data-id');

    document.querySelector('.edit-popup').classList.remove('hide');
    document.querySelector('.edit-popup').classList.add('show');
    document.querySelector('.btn-update').setAttribute('data-id', id);

    mockData.forEach(item => {
      if (item.id === id) document.querySelector('.edit-input').value = item.title;
    });
  }

  createDomElements(id) {
    this.li = document.createElement('li');
    this.span = document.createElement('span');
    this.btnsDiv = document.createElement('div');
    this.editBtn = document.createElement('button');
    this.deleteBtn = document.createElement('button');
    this.completeBtn = document.createElement('button');

    this.btnsDiv.classList.add('btns-container');
    this.editBtn.className = 'btn-edit fas fa-pen';
    this.deleteBtn.className = 'btn-delete fas fa-trash-alt';
    this.completeBtn.className = 'btn-complete fas fa-check';

    this.editBtn.setAttribute('data-id', id);
    this.deleteBtn.setAttribute('data-id', id);
    this.completeBtn.setAttribute('data-id', id);

    this.btnsDiv.appendChild(this.editBtn);
    this.btnsDiv.appendChild(this.completeBtn);
    this.btnsDiv.appendChild(this.deleteBtn);

    // this.li.appendChild(this.span);
    // this.li.appendChild(this.btnsDiv);

    /* Flip completed todo */
    this.span.className = 'item-title';
    this.li.className = 'item';

    this.frontDiv = document.createElement('div');
    this.backDiv = document.createElement('div');
    this.innerDiv = document.createElement('div');

    this.frontDiv.className = 'item-front';
    this.backDiv.className = 'item-back';
    this.innerDiv.className = 'item-inner';

    this.frontDiv.appendChild(this.span);
    this.frontDiv.appendChild(this.btnsDiv);

    this.innerDiv.appendChild(this.frontDiv);
    this.innerDiv.appendChild(this.backDiv);

    this.li.appendChild(this.innerDiv);

    this.li.setAttribute('data-id', id);
    /* End flip completed todo */
  }

  create() {
    let todoTitle = document.querySelector('.add-input').value;

    if (inputIsValid(todoTitle)) {
      let newItem = {
        id: Date.now().toString(),
        title: todoTitle,
        done: false,
        date: new Date()
      };

      mockData.push(newItem);

      document.querySelector('.add-input').value = '';

      this.render();
    }
  }

  remove(event) {
    let id = event.target.getAttribute('data-id');

    mockData = mockData.filter(item => item.id !== id);

    this.render();
  }

  update(event) {
    let id = event.target.getAttribute('data-id');
    let updatedTitle = document.querySelector('.edit-input').value;

    if (inputIsValid(updatedTitle)) {
      mockData = mockData.map(item => {
        if (item.id === id) item.title = updatedTitle;

        return item;
      });

      document.querySelector('.edit-popup').classList.remove('show');
      document.querySelector('.edit-popup').classList.add('hide');

      this.render();
    }
  }

  toggleComplete(event) {
    let id = event.target.getAttribute('data-id');

    // mockData = mockData.map(item => {
    //   if (item.id === id) item.done = !item.done;

    //   return item;
    // });

    let element;
    for (let i = 0; i < mockData.length; i++) {
      if (mockData[i].id === id) {
        mockData[i].id = id;
        element = getElementsByAttribute(document, 'li', 'data-id', id);
        element[0].classList.toggle('done');
        console.log('Completed todo', element);
      }
    }

    // this.render();
  }
}

export default Todo;
