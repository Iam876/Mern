/*
* We will use the axios for api calling then we will perform our debugging.
*
* */

const axios = require('axios');
let URL = 'https://restcountries.com/v3.1/all?fields=name,flags';
axios.get(URL).then(res => {

    let data = res.data;
    let status = data.status;
    let message = data.message;

    console.log(data);
    console.log(status);
    console.log(message);
}).catch(err => console.log(err));

