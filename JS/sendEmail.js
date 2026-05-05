

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "vF8SSfV_s0t1ozMRy",
    });
})();


window.onload = function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // preven reload page

        const nameInput  = document.getElementById("contactName").value;
        const emailInput = document.getElementById("contactEmail").value;
        const titleInput = document.getElementById("contactSubject").value;
        const textInput  = document.getElementById("contactMessage").value;

        if((nameInput === "") || (emailInput === "") || (titleInput === "") || (textInput === "")){
            alert("Error: Invalid Inputs");
            return;
        }

        const params = {
            name    : nameInput,
            email   : emailInput,
            title   : titleInput,
            message : textInput
        };

        // these IDs from the previous steps
        emailjs.send('service_p8k8ide', 'template_q9hj8ur', params)
            .then(() => {
                alert("Email Sent Successfully!.");
                // console.log('SUCCESS!');
                document.getElementById("contactName").value = "";
                document.getElementById("contactEmail").value = "";
                document.getElementById("contactSubject").value = "";
                document.getElementById("contactMessage").value = "";
            }, (error) => {
                alert("Fail To Send Email!");
                // console.log('FAILED...', error);
            });
    });
}