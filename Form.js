const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission

    // get values
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const cpassword = document.querySelector('#cpassword').value.trim();

    // check if fields are empty
    if (username === "" || email === "" || password === "" || cpassword === "") {
        alert("Please fill in all fields");
        return; // stop submission
    }

    // check if passwords match
    if (password !== cpassword) {
        alert("Passwords do not match");
        return; // stop submission
    }

    // if everything is fine
    alert("Form submitted successfully!");
    form.submit(); // submit the form
});
