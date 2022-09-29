const newQuote = () => {
  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then((data) => {
      let quoteData = data[Math.ceil(Math.random() * 1643)]
      let quote = quoteData.text
      let author = quoteData.author
      document.getElementById(`quote`).innerText = quote
      document.getElementById(`author`).innerText = author == null ? `--Anonymous` : `--${author}`
    })
    .catch(() => {
      document.getElementById(`quote`).innerText = `Oops... Error.`;
      document.getElementById(`author`).innerHTML = `Something Went Wrong <br>Check Your Connection.`
    });
}
newQuote();