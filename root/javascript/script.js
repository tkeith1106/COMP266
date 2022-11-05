/*
Enable and Disable the accordion style box  on FAQ page
*/

// SOURCE: https://www.w3schools.com/howto/howto_js_accordion.asp
let acc = document.getElementsByClassName("drop_d_box_item");  // get all elements with class name 'drop_d_box_item'
let i; // init the iterator variable
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


/*
Form Validation
*/
// form help source: https://www.codehim.com/text-input/contact-form-validation-in-javascript/

// init all variables
let formValidated = false;
let submitted = false;
const formObject = document.querySelector('form');
const formName = document.querySelector('input[name="name"]');
const formPhone = document.querySelector('input[name="phone"]');
const formEmail = document.querySelector('input[name="email"]');
const formMessage = document.getElementById('msg');
const formSuccess = document.querySelector('.submitted');

const formArray = [formName, formPhone, formEmail, formMessage]

// resets the specified element
const elementReset = (element) => {
    element.classList.remove("invalid");
    element.nextElementSibling.style.visibility = "hidden"
};

// validator function
const inputValidator = (field) => {
    if (submitted) {
        formValidated = true;
        try {
            elementReset(field);
        } catch {
        }
        // check if the name is a number
        //regex source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        if (field.name === "name") {
            if (!formName.value || !/^[a-z A-Z]+$/.test(formName.value)) {
                formName.classList.add("invalid");
                formName.nextElementSibling.style.visibility = "visible";
                formValidated = false;
            } else {
            }
        }

        if (field.name === "phone") {
            if (!formPhone.value || !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(formPhone.value)) {
                formPhone.classList.add("invalid")
                formPhone.nextElementSibling.style.visibility = "visible";
                formValidated = false;
            } else {
            }
        }

        if (field.name === "email") {
            if (!formEmail.value || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formEmail.value)) {
                formEmail.classList.add("invalid")
                formEmail.nextElementSibling.style.visibility = "visible";
                formValidated = false;
            } else {
            }
        }

        if (field.id === "msg") {
            if (!field.value) {
                formMessage.nextElementSibling.style.visibility = "visible";
                formValidated = false;
            }
        }
    }
};

// form name event listeners
for (let i = 0; i < formArray.length; i++) {
    formObject.addEventListener('submit', (e) => {
        submitted = true;
        e.preventDefault();
        inputValidator(formArray[i]);
        if (formValidated) {
            formObject.remove();
            formSuccess.style.visibility = "visible";
        }
    });
    formObject.addEventListener('input', () => {
        inputValidator(formArray[i]);
    });
}

