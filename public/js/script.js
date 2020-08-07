console.log('Client side javscript file is loaded');

const weatherForm = document.querySelector('form');
const weatherSearchValue = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
  const location = weatherSearchValue.value;
  console.log(location);
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
      }
    })
  e.preventDefault();
})