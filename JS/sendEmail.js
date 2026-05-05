

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

        const params = {
            name    : document.getElementById("contactName").value,
            email   : document.getElementById("contactEmail").value,
            title   : document.getElementById("contactSubject").value,
            message : document.getElementById("contactMessage").value
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