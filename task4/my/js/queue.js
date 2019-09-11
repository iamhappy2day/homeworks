const btnQueue = document.querySelector('#btnQueue');
let countQueue = 0;

btnQueue.onclick = addQueue;

class Queue {
    constructor() {
      this.data = [];
    }
    addItem(...el) {
      this.data.push(...el);
    }
    delItem () {
      this.data.shift();
    }
    isEmpty() {
      console.log(this.data.length === 0);
    }
    size() {
      console.log(this.data.length);
    }
    clear() {
      this.data.length = 0
    }
  };

  function addQueue() {
    countQueue++;
    let queue = new Queue;
    let queueDiv = document.createElement('div');
    queueDiv.className = 'queueDiv';

    queueDiv.innerHTML = 
        `<h1>Queue ${countQueue}</h1>
        <div class='queueData' id='queueData'>  </div>
        <div class='control-panel'> 
            <input placeholder='type here...' type="text" id='input-queue'>
            <button class="btn btn-secondary plus"> + </button>
            <button class="btn btn-secondary minus"> - </button>
        </div> `;

    container.append(queueDiv);

    //addItem and delItem queue methods when click btn + and - 
    queueDiv.onclick = () => {
        let target = event.target;
        let queueData = queueDiv.querySelector('#queueData');
        let inputQueue = queueDiv.querySelector('#input-queue');
        if (target.className == 'btn btn-secondary plus') {
            queue.addItem(inputQueue.value)
            queueData.innerHTML = queue.data
        } else if (target.className == 'btn btn-secondary minus') {
            queue.delItem()
            queueData.innerHTML = queue.data
        }
    }
  };