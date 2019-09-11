const btnStack = document.querySelector('#btnStack');
let countStack = 0;

btnStack.onclick = addStack;

class Stack {
    constructor() {
        this.values = [];
    }
    push(value) {
        this.values.push(value)
    }
    pop() {
        this.values.pop()
    }
};

function addStack () {
    countStack++;
    let stack = new Stack;
    let stackDiv = document.createElement('div');
    stackDiv.className = 'stackDiv';

    stackDiv.innerHTML = 
        `<h1>Stack ${countStack}</h1>
        <div class='stackData' id='stackData'>  </div>
        <div class='control-panel'> 
            <input placeholder='type here...' type="text" id= 'input-stack'>
            <button class="btn btn-primary plus"> + </button>
            <button class="btn btn-primary minus"> - </button>
        </div> `;

    container.append(stackDiv);

    //push and pop stack methods when click btn + and - 
    stackDiv.onclick = () => {
        let target = event.target;
        let stackData = stackDiv.querySelector('#stackData');
        let inputStack = stackDiv.querySelector('#input-stack');
        if (target.className == 'btn btn-primary plus') {
            stack.push(inputStack.value)
            stackData.innerHTML = stack.values
        } else if (target.className == 'btn btn-primary minus') {
            stack.pop()
            stackData.innerHTML = stack.values
        }
    }
};
