document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        var form = this;
        var formData = new FormData(form);

        // Send the form data using Fetch API
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            },
        }).then(response => {
            if (response.ok) {
                // Show the confirmation message
                document.getElementById('confirmationMessage').style.display = 'block';
                // Optionally, hide the form
                form.style.display = 'none';
                // Redirect back to the homepage or a specific URL after 3 seconds
                setTimeout(function() {
                    window.location.href = '/'; // Adjust the URL as needed
                }, 3000);
            } else {
                response.json().then(data => {
                    if (data.error) {
                        alert("There was an error sending your message: " + data.error);
                    } else {
                        alert("There was an error sending your message. Please try again.");
                    }
                });
            }
        }).catch(error => {
            alert("There was an error sending your message. Please try again.");
        });
    });
});

