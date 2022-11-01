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
Search bar js  tool
*/

// init a blank array that the page values will reside in
let search_content = [];

// init the window root variable
const root = window.location.origin;

/*
init the page array that the get requests are off of. This could most likely be dynamic but I hardcoded since I do not
know how to go about that at this point
 */
const page_array = ["contact_page", "faq", "index",
    "portfolio_main", "portfolio_1", "portfolio_2",
    "portfolio_3", "portfolio_4", "resume_main", "sitemap"];

// a function used to return the string of the url response
function getResponse(urlResp) {
    var data;
    if (!urlResp.responseType || urlResp.responseType === 'text') {
        data = urlResp.responseText;
    } else {
        data = urlResp.response
    }
    return data;
}

// a for loop that get each page and adds the text result into the search_content array
for (i=0; i<page_array.length; i++) {
    let get_req = new XMLHttpRequest();
    get_req.onreadystatechange = function() {
        if (get_req.readyState === 4) {
            search_content.push(getResponse(get_req));
        }
    }
    get_req.open('GET', root.toString().concat('/Unit2/root/html/', page_array[i], '.html'))
    get_req.send()
}


