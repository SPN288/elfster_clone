i=4;
function createNewElement() {
    // First create a DIV element.
    i++;
	var txtNewInputBox = document.createElement('div');

    // Then add the content (a new input box) of the element.
	txtNewInputBox.innerHTML = `<div class='input-field field'><input type='text' required placeholder='Enter Name ${i}' class='item'></div>`;

    // Finally put it where it is supposed to appear.
	document.getElementById("newElementId").appendChild(txtNewInputBox);
}