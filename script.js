// Changing text content dynamically
const changeTextButton = document.getElementById('change-text-button');
const dynamicParagraph = document.getElementById('dynamic-paragraph');

changeTextButton.addEventListener('click', () => {
    dynamicParagraph.textContent = 'The text has been changed dynamically by JavaScript!';
});

// Modifying CSS styles via JavaScript
const changeStyleButton = document.getElementById('change-style-button');
const styledDiv = document.getElementById('styled-div');

changeStyleButton.addEventListener('click', () => {
    styledDiv.style.backgroundColor = 'lightcoral';
    styledDiv.style.color = 'white';
    styledDiv.style.fontWeight = 'bold';
    styledDiv.style.padding = '20px';
    styledDiv.style.borderRadius = '8px';
});

// Adding or removing an element when a button is clicked
const addItemButton = document.getElementById('add-item-button');
const removeItemButton = document.getElementById('remove-item-button');
const itemList = document.getElementById('item-list');

addItemButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});

removeItemButton.addEventListener('click', () => {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    } else {
        alert('The list is empty. Nothing to remove.');
    }
});