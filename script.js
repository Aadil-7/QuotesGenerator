const newQuote = () => {
  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then((data) => {

      let quoteData = data[Math.ceil(Math.random() * 1643)]
      let quote = quoteData.text
      let author = quoteData.author
      document.getElementById(`quote`).innerText = quote
      document.getElementById(`author`).innerText = author == null ? `-- Anonymous` : `--${author}`
    })
    .catch(() => {
      document.getElementById(`quote`).innerText = `Oops... Error.`;
      document.getElementById(`author`).innerHTML = `Something Went Wrong <br>Check Your Connection.`
    });
}

newQuote();

window.addEventListener("orientationchange", function () {
  oriDetection();
});
let intervalId
let timeoutId
let secs = 5
function oriDetection() {
  if (window.orientation == 90) {
    document.getElementsByClassName(`container`)[0].classList.add(`displayNone`)
    document.getElementsByClassName(`rotateMess`)[0].classList.add(`displayBlock`)
    intervalId = setInterval(() => {
      document.getElementById(`timer`).innerText = `${secs}`
      secs -= 1
      if (secs < 1) { secs = 5 }
    }, 1000);
    timeoutId = setTimeout(autoDisplay, 6000)
  } else if (window.orientation == 0) {
    document.getElementsByClassName(`container`)[0].classList.remove(`displayNone`)
    document.getElementsByClassName(`rotateMess`)[0].classList.remove(`displayBlock`)
    clearInterval(intervalId)
    clearTimeout(timeoutId)
    secs = 5
  }
}

function autoDisplay() {
  document.getElementsByClassName(`container`)[0].classList.remove(`displayNone`)
  document.getElementsByClassName(`rotateMess`)[0].classList.remove(`displayBlock`)
  clearInterval(intervalId)
  clearTimeout(timeoutId)
  secs = 5
}
oriDetection();