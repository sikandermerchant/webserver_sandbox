console.log("Client side javscript file is loaded");

const weatherForm = document.querySelector("form");
const weatherSearchValue = document.querySelector("input");
const result = document.getElementById("result");
const loading = document.getElementById("loading");

weatherForm.addEventListener("submit", (e) => {
  const location = weatherSearchValue.value;
  console.log(location);
  loading.textContent = `Loading...`;
  result.textContent = "";
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
        loading.textContent = "";
        result.textContent = data.error;
      } else {
        console.log(data.location);
        console.log(data.forecast);
        loading.textContent = `Loading...`;
        result.textContent = `${data.forecast}`;
        loading.textContent = "";
      }
    });

  e.preventDefault();
});
