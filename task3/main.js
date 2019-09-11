// stack

const stack = [];

//push value on top
stack.push(5,4,3);

//remove value from top
let value = stack.pop();

//show stack size
let length = stack.length;


// queue

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

// priority queue

class PrQueue extends Queue {

  addItem(el) {
    if( typeof el !== 'object'){
      throw new Error(`Sorry, but type of element is ${typeof el}. It must be object`)
    };
    if(el.priority == undefined) {
      throw new Error(`Object must have a field "priority" to be added to the queue`)
    };
    super.addItem(el);
  };

  delItem() {
    let priority = this.data[0].priority;
    let position = 0;
    this.data.forEach((obj, i) => {
      if(obj.priority > priority) {
        priority = obj.priority;
        position = i;
      }
    });

    return this.data.splice(position, 1)
  };
};

//Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.right = null; //указыает на(point to)rigth node
    this.left = null;  //указыает на(point to)left node
  }
};

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1 //keep track how many nodes in the tree
  };
  
  // size method
  size() {
    return this.count
  }

  // add node method
  add(value) {
    this.count++
    let newNode = new Node(value);

    //recursive function that calls itself when it see another node
    const searchTree = function(node) {
      //if value < node.value, go left
      if (value < node.value) {
        //if no left child, append new node
        if (!node.left) {
          node.left = newNode
        }
        //if left child, look left again
        else {
          searchTree(node.left)
        }
      } 
        //if value > node.value, go right
        else if (value > node.value) {
          if (!node.right) {
            node.right = newNode
          }
          //if right child, look right
          else {
            searchTree(node.right)
          }
        }
      }
      searchTree(this.root)
    };

    // contains method
    contains(value) {
      let currentNode = this.root;

      while(currentNode) {
        if(value ===currentNode.value) {
          return true 
        }
        if (value < currentNode.value) {
          currentNode = currentNode.left
        } else {
          currentNode = currentNode.right
        }
      }
      return false;
    }

  // search method  (left - root -right)
   search() {
     let result = [];

     const traverse = (node) => {
       if (node.left) {
         traverse(node.left)
       }
       result.push(node.value)
       if (node.right) {
         traverse(node.right)
       }
     }
     traverse(this.root)
     return result
   }
 };