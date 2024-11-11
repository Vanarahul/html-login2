document.getElementById("registerBtn").addEventListener("click", () => {
    document.getElementById("container").classList.add("register-mode");
});

document.getElementById("signInBtn").addEventListener("click", () => {
    document.getElementById("container").classList.remove("register-mode");
});
