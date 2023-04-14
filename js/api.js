/* market overview starts */
/* fetch("http://rest.coinapi.io/v1/assets/icons/32?apikey=08F3391E-4647-41E2-A39B-7884EE0EE74D")
   .then((res) => res.json())
   .then((res) => console.log(res)); */
/* market overview ends */

fetch("https://api.coinlore.net/api/tickers/")
   .then((response) => response.json())
   .then((data) => console.log(data.data));
