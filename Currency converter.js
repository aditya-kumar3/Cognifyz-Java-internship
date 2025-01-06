console.log("Main.js working")

const populate = async (value, currency) => {
    let myStr = ""
   // url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_dlYXpmngcEZvlJ1iuD0NQ6tU8mXcUohHcRxyuYXD&currencies=EUR%2CUSD%2CCAD" + currency
    //let response = await fetch(url)
    //let rJson = await response.json()
    let rJson=JSON.parse(`{
  "meta": {
    "last_updated_at": "2025-01-04T23:59:59Z"
  },
  "data": {
    "CAD": {
      "code": "CAD",
      "value": 1.4445901533
    },
    "EUR": {
      "code": "EUR",
      "value": 0.9697401463
    },
    "USD": {
      "code": "USD",
      "value": 1
    }
  }
} `)
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)
})
