//references
const form = document.getElementById('myForm');
const outputDiv = document.getElementById('output');

//submit button functionality
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    
    //grabbing the form information
    //Auth users
    const verifiedAH = document.getElementById('verified-ah').checked ? 'Account Holder Verified ' : '';
    const verifiedAU = document.getElementById('verified-au').checked ? 'Authorized User Verified' : '';
    const contact = document.getElementById('contact').checked ? 'Yes' : 'No';
    const name = formData.get('name');
    //Comp Details
    const compOffer = formData.get('competetive-offer');
    const competetive = compOffer ? compOffer : 'Non-Competetive';
    //Agent offer
    const offer = formData.get('offer');
    const accepted = document.getElementById('accepted').checked ? '<strong>Accepted offer of:</strong> ' +offer : '';
    const declined = document.getElementById('declined').checked ? '<strong>Declined offer of: </strong>' +offer : '';
    const description = formData.get('description');
    const tandc = document.getElementById('tandc').checked ? 'Cx informed of T&C (EG. Rate Increases, ETFs, Install Chargeback)' : 'Not Informed';

    //output / the text being copied, changes to this changes how the interaction is generated
    const outputHTML = `
        <p>[<strong>Verified:</strong> ${verifiedAH} ${verifiedAU} ]<br>
        [<strong>Contact Details Updated:</strong> ${contact} ]<br>
        [<strong>Spoke With:</strong> ${name} ]</strong><br>
        [<strong>Competetive Offer:</strong> ${competetive} ]<br>
        [${accepted}${declined} ]<br>
        [<strong>General Description:</strong> ${description} ]<br> 
        [<strong>Terms and Conditions:</strong> ${tandc} ]</p>
    `;
    
    //change the div to display the output
    outputDiv.innerHTML = outputHTML;

});





