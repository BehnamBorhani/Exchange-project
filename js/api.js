/* market overview starts */
/* fetch("http://rest.coinapi.io/v1/assets/icons/32?apikey=08F3391E-4647-41E2-A39B-7884EE0EE74D")
   .then((res) => res.json())
   .then((res) => console.log(res)); */
/* market overview ends */

async function fetchData() {
   let tableElem = document.querySelector("table tbody");
   let allCoins = await fetch(
      "https://api.coinlore.net/api/tickers/?start=0&limit=20"
   )
      .then((response) => response.json())
      .then((response) => response.data);
   // console.log(allCoins);

   let filteredCoin = allCoins.filter((coin) => {
      return !["BUSD", "DOGE", "XRP", "STETH", "WBTC"].includes(coin.symbol);
   });

   filteredCoin.forEach((coin, index) => {
      tableElem.insertAdjacentHTML(
         "beforeend",
         `
         <tr>
            <td>${index + 1}</td>
            <td class="name">
               <img src="images/${coin.symbol}.png"/>
               <span>${coin.name}</span>
            </td>
            <td class="symbol">${coin.symbol}</td>
            <td class="price">$${coin.price_usd}</td>
            <td class="change" style="color:${
               coin.percent_change_24h >= 0 ? "green" : "red"
            }">${coin.percent_change_24h}%</td>
            <td class="chart">
               <img src="images/Charts/${index + 1}.svg"/>
            </td>
         </tr>
      `
      );
   });
}

fetchData();
