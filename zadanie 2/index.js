const startButton1 = document.getElementById("button1");
const submitButton = document.getElementById("button2");
const endButton1 = document.getElementById("endButton1");
const endButton2 = document.getElementById("endButton2");
const screen2 = document.getElementById("screen2");
const phoneNumber = document.getElementById("phoneNumber");
const packageKod = document.getElementById("packageKod");
const phoneNumberError = document.querySelector(".spanError");
const packageKodError = document.getElementById("packageKodError");
const modalWindow = document.getElementById("modalWindow");

let kodReg = /^[0-9]{4}$/
let phoneReg = /^[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/

screen2.style.display = "none";
startButton1.style.display = "block";

startButton1.addEventListener("click", () => {
    screen2.style.display = "block";
    startButton1.style.display = "none";
});

phoneNumber.addEventListener("input", (e) => {
    e.target.value = e.target.value.substr(0, 11)
});

packageKod.addEventListener("input", (e) => {
    e.target.value = e.target.value.substr(0, 4);
});

submitButton.addEventListener("click", () => {
    if (!phoneReg.test(phoneNumber.value)) {
        phoneNumberError.classList.remove("hide");
    } else {
        phoneNumberError.classList.add("hide");
    }

    if (!kodReg.test(packageKod.value)) {
        packageKodError.classList.remove("hide");
    } else {
        packageKodError.classList.add("hide");
    }

    if (phoneReg.test(phoneNumber.value)) {
        if (kodReg.test(packageKod.value)) {
            phoneNumberError.classList.add("hide");
            packageKodError.classList.add("hide");

            submitButton.innerText = 'Loading...'
            phoneNumber.disabled = true;
            packageKod.disabled = true;
            setTimeout(() => {
                submitButton.innerText = 'Odbierz paczkę'
                modalWindow.style.display = "block";
                phoneNumber.value = ''
                packageKod.value = ''
                phoneNumber.disabled = false;
                packageKod.disabled = false;
            }, 2000)
        }
    }
});

endButton1.addEventListener("click", () => {
    modalWindow.style.display = "none";
    screen2.style.display = "none";
    startButton1.style.display = "block";
});

endButton2.addEventListener("click", () => {
    modalWindow.style.display = "none";
});


