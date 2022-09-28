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
      document.getElementById(`quote`).innerText = `Difference between who we are and who we want to be is what we do.`;
      document.getElementById(`author`).innerHTML = `<p>Anonymous</p><br><small>Something Went Wrong Check Your Connection</small>`
    });
}
newQuote();
window.scrollBy(0,100)
