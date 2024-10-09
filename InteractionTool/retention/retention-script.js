// Get references to the form and the output div
const form = document.getElementById('myForm');
const outputDiv = document.getElementById('output');

//submit button functionality
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    //information grabbing from the form
    //cx name
    const name = formData.get('name');
    //competetive offer
    const compOffer = formData.get('competetive-offer');
    const competetive = compOffer ? compOffer : 'Non-Competetive';
    //Agent offer
    const offer = formData.get('offer'); 
    const accepted = document.getElementById('accepted').checked ? '<strong>Accepted offer of:</strong> ' +offer : '';
    const declined = document.getElementById('declined').checked ? '<strong>Declined offer of: </strong>' +offer : '';
    const nooffer = document.getElementById('no-offer').checked ? '<strong>No offer required </strong>': '';
    const noreso = document.getElementById('no-resolution').checked ? '<strong>No resolution/Recent offer: </strong>' +offer : '';
    const description = formData.get('description');
    const tandc = document.getElementById('tandc').checked ? 'cx informed of T&C (EG. Rate Increases, ETFs, Install Chargeback)' : 'Not Informed';
    
    //text being copied, changes this changes the way the interaction is displayed
    const outputHTML = `
        <p>[<strong>Spoke With:</strong> ${name} ]<br>
        [<strong>Competetive Offer:</strong> ${competetive} ]<br>
        [${accepted}${declined}${nooffer}${noreso} ]<br>
        [<strong>General Description:</strong> ${description} ]<br> 
        [<strong>Terms and Conditions:</strong> ${tandc} ]<br>
        </p>
    `;
    
    //set the output to the div
    outputDiv.innerHTML = outputHTML;

    //concept idea of the disco policies
    //const equipmentTerms = document.getElementById('disco-checkbox').checked ? '[<strong>Disconnection Terms: </strong> cx Informed of Terms (EG. Final Bill, Equipment Return) ]' : '';
});

//concept function for the disconnection policies
// not in unse
/*
function discoBox(checkBox){
    if(checkBox.checked){
        var label = document.createElement("label");
        label.innerHTML = ("Informed of Terms (EG. Final Bill, Equipment Return)");
        var box = document.createElement("input");
        box.setAttribute("type","checkbox");
        box.setAttribute("id","disco")
        var div = document.createElement("div");
        div.id = "disco-policies-div";
        div.className = "form-group";
        div.appendChild(box);
        div.appendChild(label);
        document.getElementById("disco-checkbox").appendChild(div);
    }
}
*/



