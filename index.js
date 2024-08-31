const countValue = document.querySelector("#counter");

const increment = () => {
    // get value from ui by .innerText method which is a string and converted this string by parseInt method
    let value = parseInt(countValue.innerText);
    // increment the value
    value = value + 1;
    // set the value onto ui
    countValue.innerText = value;
}

const decrement = () => {
    // get value from ui by .innerText method which is a string and converted this string by parseInt method
    let value = parseInt(countValue.innerText);
    // deccrement the value
    value = value - 1;
    // set the value onto ui
    countValue.innerText = value;
}