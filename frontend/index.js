async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  // 👉 Tasks 1 - 5 go here
  document.getElementById('weatherWidget').style.display = 'none'
  document.querySelector('#citySelect').addEventListener('change', async evt =>{
  console.log('selection Change')
  //  let cityOption = document.getElementById('#citySelect').options[document.getElementById('#citySelect').selectedIndex]
  //   let selectedOption = cityOption.text
  //   console.log('cityOption: ' + selectedOption)
  try {
    evt.target.setAttribute('disabled', 'disabled')
  }
  catch (err){

  }
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
