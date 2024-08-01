let allbuttons = document.getElementsByClassName("clickButton");

let i;


for (i = 0; i < allbuttons.length; i++) {
    allbuttons[i].addEventListener("click", function() {

        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}