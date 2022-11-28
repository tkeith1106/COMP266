/*
Enable and Disable the accordion style box  on FAQ page
*/

let currentPageArray = String(window.location.href).split('/');
const currentPage = currentPageArray[currentPageArray.length - 1].replace(".html", "");
console.log(currentPage)


// SOURCE: https://www.w3schools.com/howto/howto_js_accordion.asp
if (currentPage.includes("faq")) {
    let acc = document.getElementsByClassName("drop_d_box_item");  // get all elements with class name 'drop_d_box_item'
    let i; // init the iterator variable
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
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
}

/*
Form Validation Program
*/

// form help source: https://www.codehim.com/text-input/contact-form-validation-in-javascript/

if (currentPage.includes("contact_page")) {
// init variables that will change
    let formValidated = [false, false, false, false];
    let submitted = false;

//init the constant variables using query selector and the elementbyid
    const formObject = document.querySelector('form');
    const formName = document.querySelector('input[name="name"]');
    const formPhone = document.querySelector('input[name="phone"]');
    const formEmail = document.querySelector('input[name="email"]');
    const formMessage = document.getElementById('msg');
    const formSuccess = document.querySelector('input[name="_next"]');

// init the form array which will be used in a later for-loop
// update this to have form elements you want to validate
    const formArray = [formName, formPhone, formEmail, formMessage];

// function that resets the specified element
    const elementReset = (element) => {
        element.classList.remove("invalid");
        element.nextElementSibling.style.visibility = "hidden"
    };

// validator function that checks the validity of each selected form element
    const inputValidator = (field) => {
        if (submitted) {
            // set the form to validated and any invalidated section will flag this as false
            // try and catch any form without the invalid class (ex. text area element)
            try {
                elementReset(field);
            } catch {
                //do nothing if error is thrown here
            }
            //regex help source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
            // check if the name is a number
            if (field.name === "name") {
                if (!formName.value || !/^[a-z A-Z]+$/.test(formName.value)) {
                    formName.classList.add("invalid");
                    formName.nextElementSibling.style.visibility = "visible";
                    formValidated[0] = false;
                } else {formValidated[0] = true;}
            }

            // check for a variety of valid phone number combo's
            if (field.name === "phone") {
                if (!formPhone.value || !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(formPhone.value)) {
                    formPhone.classList.add("invalid")
                    formPhone.nextElementSibling.style.visibility = "visible";
                    formValidated[1] = false;
                } else {formValidated[1] = true;}
            }

            // check for a variety of valid email combinations
            if (field.name === "email") {
                if (!formEmail.value || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formEmail.value)) {
                    formEmail.classList.add("invalid")
                    formEmail.nextElementSibling.style.visibility = "visible";
                    formValidated[2] = false;
                } else {formValidated[2] = true;}
            }

            // check to see if the text area is empty
            if (field.id === "msg") {
                if (!field.value || field.value.length < 10) {
                    formMessage.nextElementSibling.style.visibility = "visible";
                    formValidated[3] = false;
                } else {formValidated[3] = true;}
            }
        }
    };

// input event listener
    formArray.forEach(input => {
        // input listener event
        formObject.addEventListener('input', () => {
            inputValidator(input);
        });
    })

// for-loop to iterate through the functions to validate the forms
    for (let i = 0; i < formArray.length; i++) {
        // submit listener event
        formObject.addEventListener('submit', (e) => {
            submitted = true;
            // prevent the form from resetting
            e.preventDefault();
            inputValidator(formArray[i]);
        });
    }

    formObject.addEventListener('submit', (e) => {
// check if form is fully validated
        if (formValidated.every(elm => elm === true)) {
            // if submission successful a url path is added into the hidden _next value for formsubmit.co to forward to
            formSuccess.value = (document.location.origin + document.location.pathname).toString()
            formObject.submit()
        }
    });
}

/*
Joke Generator API
*/

// setup variables
const footer_button = document.getElementById('footer_button');
let randoJoke = null;
const url = "https://v2.jokeapi.dev/joke/Programming?type=single"

// source: https://stackoverflow.com/questions/247483/http-get-request-in-javascript
//use a get request to return json object that will be alerted to window.
let xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        randoJoke = xmlHttp.responseText;
}
// gets the first json request before user even asks for it so that it loads instantly when clicked.
xmlHttp.open("GET", url, true); // true for asynchronous
xmlHttp.send(null);

footer_button.addEventListener('click', () => {

    // make sure request is not null
    if (randoJoke != null) {
        let jokeJson = JSON.parse(randoJoke);
        window.alert("Random Joke:\n\n" + jokeJson['joke'].replace('"',''));
        xmlHttp.open("GET", url, true); // true for asynchronous
        xmlHttp.send(null);
    }

});





