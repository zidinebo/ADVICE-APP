let adviceID = document.querySelector(".adv");
let adviceContent = document.querySelector(".quo");
let loading = document.querySelector(".loading");
let button = document.querySelector(".glow");

// FETCHING AND CONVERTING DATA TO JSON.
let adviceData = async () => {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  console.log(data);
  loading.classList.add("d-none");
  //   ===========================
  adviceID.textContent = `ADVICE #${data.slip.id}`;
  adviceContent.textContent = `${data.slip.advice}`;
};
button.addEventListener("click", () => {
  location.reload();
});
setTimeout(() => {
  adviceData();
}, 3000);

// // let datta = {slip: {
// id : 260,
// advice : mfgvfcfxvcbg}, };
