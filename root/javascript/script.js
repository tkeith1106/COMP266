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
let formValidated = false;
const form_object = document.querySelector('form');
const form_name = document.querySelector('input[name="name"]');
const form_phone = document.querySelector('input[name="phone"]');
const form_email = document.querySelector('input[name="email"]');
const form_message = document.getElementById('msg');

const form_array = [form_name, form_phone, form_email, form_message]

// resets the specified element
const elementReset = (element) => {
    element.classList.remove("invalid");
};

// validator function
const inputValidator = (field) => {
    try {
        elementReset(field);
    }
    catch {
    }
    // check if the name is a number
    //regex source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    if (field.name === "name") {
        if (!form_name.value || !/^[a-z A-Z]+$/.test(form_name.value)) {
            form_name.classList.add("invalid");
        } else {formNameValidated = true;}
    }

    if (field.name === "phone") {
        if (!form_phone.value || !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(form_phone.value)) {
            form_phone.classList.add("invalid")
        } else {formPhoneValidated = true;}
    }

    if (field.name === "email") {
        if (!form_email.value || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form_email.value)) {
            form_email.classList.add("invalid")
        } else {formEmailValidated = true;}
    }

    if (field.id === "msg") {
        if (field.value) {
            formMsgValidated = true;
        }
    }

};


// form name event listeners
for (let i = 0; i < form_array.length; i++) {
    form_object.addEventListener('submit', (e) => {
        e.preventDefault();
        inputValidator(form_array[i]);
        if (formValidated) {
            /// use another function to check if the form can be submitted and return a
            /// message with what needs to be fixed
            console.log("Submitted")
        }
    });
    form_object.addEventListener('input', () => {
        inputValidator(form_array[i]);
    });
}

