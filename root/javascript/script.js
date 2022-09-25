// SOURCE: https://www.w3schools.com/howto/howto_js_accordion.asp
let acc = document.getElementsByClassName("drop_d_box_item");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // uses a click type to turn the content on or off
        this.classList.toggle("active");
        // turns the content either to block or to none
        let drop_d_box_content = this.nextElementSibling;
        if (drop_d_box_content.style.display === "block") {
            drop_d_box_content.style.display = "none";
        } else {
            drop_d_box_content.style.display = "block";
        }
    });
}