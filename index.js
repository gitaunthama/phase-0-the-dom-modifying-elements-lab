// Write your code here!

var elementToRemove= document.getElementById('main');

var parentElement= elementToRemove.parentNode;

parentElement.removeChild(elementToRemove);


var newHeader = document.createElement('h1');
newHeader.textContent = 'This is a new header';
newHeader.id = 'victory';
document.body.appendChild(newHeader);

var newHeader = document.createElement('h1');
newHeader.textContent = 'Grace is the champion'; 
newHeader.id = 'victory';
document.body.appendChild(newHeader);


