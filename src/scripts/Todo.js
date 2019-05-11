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
    this.list = document.querySelector('.items-list');
    this.render();

    document.querySelector('.btn-add').addEventListener('click', this.create.bind(this));
  }

  render() {
    this.list.innerHTML = '';

    mockData.forEach(item => {
      this.createDomElements(item.id);
      this.li.insertAdjacentHTML('afterbegin', item.title);

      if (item.done) this.li.classList.add('done');

      this.list.appendChild(this.li);
    });
  }

  createDomElements(id) {
    this.li = document.createElement('li');
    this.edit = document.createElement('button');
    this.delete = document.createElement('button');
    this.complete = document.createElement('button');

    this.edit.classList.add('btn-edit');
    this.delete.classList.add('btn-delete');
    this.complete.classList.add('btn-complete');

    this.edit.setAttribute('data-id', id);
    this.delete.setAttribute('data-id', id);
    this.complete.setAttribute('data-id', id);

    this.edit.innerHTML = 'Edit';
    this.delete.innerHTML = 'Delete';
    this.complete.innerHTML = 'Complete';

    this.li.appendChild(this.edit);
    this.li.appendChild(this.complete);
    this.li.appendChild(this.delete);
  }

  create() {
    let todoTitle = document.querySelector('.add-input').value;

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

export default Todo;
