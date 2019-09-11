
const btnBst = document.querySelector('#btnBst');
let countBst = 0;

btnBst.onclick = addBst;

  //Binary Search Tree classes

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

//add Binary search tree function
function addBst() {
    countBst++;
    let binarySearchTree = new BST(23);
    let bstDiv = document.createElement('div');
    bstDiv.className = 'bstDiv';

    bstDiv.innerHTML = 
        `<h1>Binary tree ${countBst}</h1>
        <div class='bstData' id='bstData'>  </div>
        <div class='control-panel'> 
            <input placeholder='type here...' type="text" id='input-bst'>
            <button class="btn btn-warning plus"> + </button>
            <button class="btn btn-warning contain"> <i id='contain' class="fas fa-search"></i> </button>
            <button class="btn btn-warning search"> <i id ='search' class="far fa-eye"></i> </button>
        </div> `;

    container.append(bstDiv);
    bstData.innerHTML =`<p> <span>${binarySearchTree.root.value}</span> is a root node</p>`;

    //add node, contains and search methods when click  
    bstDiv.onclick = () => {
        let target = event.target;
        let bstData = bstDiv.querySelector('#bstData');
        let inputBst = bstDiv.querySelector('#input-bst');
         //add node method
        if (target.className == 'btn btn-warning plus') {
            //check if number in input
            if( Number(inputBst.value)) {
            binarySearchTree.add(inputBst.value)
            bstData.innerHTML = `${inputBst.value} was added to the tree`
            } else {
              bstData.innerHTML = "It's possible to add only numbers"
            }
        }
        //search node is in the tree - contain method
        else if (target.className == 'btn btn-warning contain' || target.id == 'contain') {
            if(binarySearchTree.contains(inputBst.value) == true || inputBst.value == binarySearchTree.root.value ) {
              bstData.innerHTML = `True! ${inputBst.value} is in the tree`
            } else {
              bstData.innerHTML = `False! ${inputBst.value}  is not in the tree`
            }
        } 

        //show all nodes - search method
        else if (target.className == 'btn btn-warning search' || target.id == 'search') {
          bstData.innerHTML = binarySearchTree.search();
        }
    };
}; 