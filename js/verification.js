const form = document.querySelector(".from_container form"),
    continueBtn = form.querySelector("input[type='submit']"),
    errorText = form.querySelector(".error_text");


form.onsubmit = (e) => {
    e.preventDefault();
}
continueBtn.onclick = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/verification.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                if (data == "success") {
                    location.href = "../home.html";
                } else {
                    errorText.textContent = data;
                    errorText.style.display = "block";

                }
            }
        }

    }
    let formData = new FormData(form);
    xhr.send(formData);
}