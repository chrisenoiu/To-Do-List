let myArrayList = [];

// Start page! Hiden content.

let showStart = document.querySelector("#letsStart");
let startButton = document.querySelector("#showStart");
let hidenStart = document.querySelector("#content");

function contentShow() {
  hidenStart.classList.remove("hide");
}

// Let's Start!
startButton.addEventListener("click", () => {
  showStart.remove();
  contentShow();
});

// Primary List Container
let container = document.querySelector("#container");
let containerNewList = document.querySelector("#container-new-list");

// List Title Input
let listNameContainer = document.querySelector("#titleContainer");
let listName = document.querySelector("#listTitle");
let newButton = document.querySelector("#new-button");

// List Content
let containerList = document.querySelector("#container-list");

// Function to add Name to the list.
function addList() {
  let inputName = document.querySelector("#new-input");

  // Added a function that names the list as "Random List"
  // when no name is given.
  if (inputName.value === "") {
    let random = "Random List";
    listNameInput = document.createTextNode(random);
    listName.appendChild(listNameInput);
  } else {
    listNameInput = document.createTextNode(inputName.value);
    listName.appendChild(listNameInput);
  }
  inputName.value = "";
  ulList();
}

// Function that creates a "ul" list.
function ulList() {
  let ulContainer = document.createElement("div");
  ulContainer.setAttribute("id", "ulContainer");

  let ulList = document.createElement("ul");
  ulList.setAttribute("id", "ulList");
  ulList.setAttribute("style", "padding:0;");

  ulContainer.appendChild(ulList);
  containerList.appendChild(ulContainer);
}

// List Creation Action - Event Listener on button "#new-button".
newButton.addEventListener("click", () => {
  myArrayList.length === 0 ? createAction() : false;
});

function createAction() {
  addList();
  hideList();
  showInput();
  showDelete();
}

// Item Section
let newItemButton = document.querySelector("#item-button");

// Function that creates a "li" item.
function listItem() {
  let listItem = document.createElement("li");
  listItem.classList.add("container-between", "mt10", "mb10");
  ulList.appendChild(listItem);
}

// Function to create new inputs in the list.
function itemInput() {
  let ulList = document.querySelector("#ulList");

  //Creates a "li" item into the "ul".
  let listItem = document.createElement("li");

  let indexValue = myArrayList.length;
  let itemValue = "item" + indexValue;
  let checkValue = "chk" + indexValue;

  listItem.classList.add("container-between", "mt10", "mb10");
  listItem.setAttribute("id", "item" + indexValue);

  //Debug Area:
  console.log("");
  console.log("New Array index: " + indexValue);
  console.log("New List id value: " + itemValue);
  console.log("New Checkbox id value: " + checkValue);

  //Pushing in "myArrayList" the name of the "id" by doing a concat between "item" and the lenght of the actual array.
  myArrayList.push(itemValue);

  ulList.appendChild(listItem);

  //Creates a new "div" under the "li" item.
  let divList = document.createElement("div");
  listItem.appendChild(divList);

  //Creates a checkmark input in front of the text.
  let checkMark = document.createElement("input");

  checkMark.classList.add("item-check");
  checkMark.setAttribute("id", checkValue);
  checkMark.setAttribute("type", "checkbox");
  checkMark.setAttribute("unchecked", "");

  //Verifies if it's checked and marks the text.
  checkMark.addEventListener("click", () => {
    if (document.querySelector("#chk" + indexValue).checked) {
      document
        .querySelector("#item" + indexValue)
        .setAttribute("style", "text-decoration:line-through");
    } else {
      document
        .querySelector("#item" + indexValue)
        .removeAttribute("style", "text-decoration:line-through");
    }
  });

  divList.appendChild(checkMark);

  //Creates text generated from the input.
  let listItemInput = document.createTextNode(
    " " + document.querySelector("#item-input").value
  );
  divList.appendChild(listItemInput);

  //Creates a close button after the text.
  let closeItem = document.createElement("button");
  let closeItemText = document.createTextNode("X");
  closeItem.classList.add("button-close");
  closeItem.addEventListener("click", () => {
    document.querySelector("#item" + indexValue).remove();
    //Debug Area.
    console.log(
      "The content from id " +
        "item" +
        indexValue +
        " has been removed by the user!"
    );
  });
  closeItem.appendChild(closeItemText);
  listItem.appendChild(closeItem);

  //Clear Input after action.
  document.querySelector("#item-input").value = "";

  // Debug Area
  console.log("");
  console.log("A new item has been added with the id of: " + itemValue);
  console.log("The secret array is filled with: " + myArrayList);
}

// Action Button to create new items.

// newItemButton.addEventListener("click", itemInput);
newItemButton.addEventListener("click", () => {
  if (document.querySelector("#item-input").value === "") {
    alert("Please type in the box!");
  } else {
    itemInput();
  }
});

// List Delete Section
let containerDeleteList = document.querySelector("#container-delete-list");
let deleteButton = document.querySelector("#delete-button");

// This Action allows to delete the entire list and resets the array.
deleteButton.addEventListener("click", () => {
  document.querySelector("#ulContainer").remove(); // <---- Add function to remove lists from "listUL"
  showList();
  hideDelete();
  hideInput();
  myArrayList = [];

  //Debug Area
  console.log("");
  console.log("The list is DELETED! The Array is RESETED.");
});

// Show/Hide List Input
function showList() {
  document.querySelector("#container-new-list").classList.remove("hide");
  listName.textContent = "";
}
function hideList() {
  document.querySelector("#container-new-list").classList.add("hide");
}

// Show/Hide Item Input
function showInput() {
  document.querySelector("#container-group-list").classList.remove("hide");
}
function hideInput() {
  document.querySelector("#container-group-list").classList.add("hide");
}

// Show/Hide Delete Option
function showDelete() {
  document.querySelector("#container-delete-list").classList.remove("hide");
}
function hideDelete() {
  document.querySelector("#container-delete-list").classList.add("hide");
}
