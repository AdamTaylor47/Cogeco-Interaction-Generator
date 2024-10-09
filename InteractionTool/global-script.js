//getting references
const copyButton = document.getElementById('copyButton');
const messageContainer = document.getElementById('copyMessage');

//copy button
copyButton.addEventListener('click', function() {
    //create text area with the generated text
    const interactionText = outputDiv.innerText;
    const textarea = document.createElement('textarea');
    textarea.value = interactionText;
    document.body.appendChild(textarea);

    //copy the text to the devices clipboard
    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    //copy text
    messageContainer.textContent = 'Text copied to clipboard!';
    setTimeout(function() {
        messageContainer.textContent = '';
    }, 2000);
});


// function to only display the competetive offer details box when the checkbox is selected
function dynInput(checkBox){
    if(checkBox.checked){
        //create element for the comp offer details textbox
        var input = document.createElement("textarea");
        input.required = true;
        input.placeholder = "Competetive Offer Details"
        input.id = "competetive-offer";
        input.name = "competetive-offer";
        var div = document.createElement("div");
        div.id = "competetive-div";
        div.className = "form-group";
        div.appendChild(input);
        document.getElementById("insertInput").appendChild(div);
    }
    else{
        //if the checkbox for competetive isnt checked, remove the element
        var p = document.createElement("p");
        p.id = ("insertInput");
        document.getElementById("competetive-div").remove();
    }
}

//function to ensure only one checkbox of the same name are checked at once
function selectOnlyOne(checkbox) {
    const checkboxes = document.querySelectorAll(`input[name=${checkbox.name}]`);
    checkboxes.forEach((cb) => {
        cb.checked = false;
    });
    checkbox.checked = true;
}

//functions used for concept if the divs need to be hidden
function showDiv(){
    var d = document.getElementById("disco-policies-div");
    d.style.display = "block";
}

function hideDiv(){
    var d = document.getElementById("disco-policies-div");
    var cb = document.getElementById("disco-checkbox");
    d.style.display = "none";
    cb.checked = false;
}

