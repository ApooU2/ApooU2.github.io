const x = document.getElementById('myDIV');

const body = document.body;
const isDarkMode = localStorage.getItem('dark') === 'true';

const y = document.getElementById('textmode');
y.textContent = localStorage.getItem("buttonText") || "Dark";

if (isDarkMode) {
    body.classList.add('dark');
}

function myFunction() {
    body.classList.toggle('dark');
    const newTheme = body.classList.contains('dark');
    localStorage.setItem('dark', newTheme);


    if (y.textContent === "Dark") {
        y.textContent  = "Light";
    }else {
        y.textContent  = "Dark";
    }
    localStorage.setItem("buttonText", y.textContent);
};