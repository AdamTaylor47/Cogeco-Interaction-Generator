//references
const form = document.getElementById('myForm');
const outputDiv = document.getElementById('output');

//submit button functionality
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    
    //grabbing information from the form
    //customer name
    const name = formData.get('name');
    //tech vs self install
    const selfInstall = document.getElementById('self-install').checked ? 'Self-Install' : '';
    const techInstall = document.getElementById('tech-install').checked ? 'Tech-Install' : '';
    //services installed
    const internet = document.getElementById('internet').checked ? 'Internet /' : '';
    const television = document.getElementById('television').checked ? ' TV ' : '';
    const phone = document.getElementById('phone').checked ? '/ Phone' : '';
    
    //Agent offer
    const offer = formData.get('offer');
    const tandc = document.getElementById('tandc').checked ? 'Cx informed of T&C (EG. Rate Increases, ETFs, Install Chargeback)' : 'Not Informed';

    //output / the text being copied, changes to this changes the way the interaction is generated
    const outputHTML = `
        <p>[<strong>Account Holder:</strong> ${name} ]<br>
        [<strong>Install Type:</strong> ${selfInstall}${techInstall} ]<br>
        [<strong>Services: </strong>${internet}${television}${phone}]<br>
        [<strong>Offer:</strong> ${offer} ]<br> 
        [<strong>Terms and Conditions:</strong> ${tandc} ]</p>
    `;
    //changes the div to the output
    outputDiv.innerHTML = outputHTML;

});





