async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if ( email && password) {
        const response = await fetch("/api/users/login", {
            method: "post",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: { "Context-Type": "application/json" },
        });
        if (response.ok) {
            console.log(response, " Logged in.");
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }

}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);