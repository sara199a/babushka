const endpoint = "https://babushka-dd8a.restdb.io/rest/menu";
const mereData = {
  headers: {
    "x-apikey": "600ec2fb1346a1524ff12de4",
  },
};

async function hentData() {
  const response = await fetch(endpoint, mereData);
  const galleri = await response.json();
  console.log("GALLERI", galleri);
  vis(galleri);
}
function vis(galleri) {
  const holder = document.querySelector("#holder");
  const skabelon = document.querySelector("template").content;
  galleri.forEach((person) => {
    const klon = skabelon.cloneNode(true);
    klon.querySelector(".billede").src = "img/" + person.billede;
    klon.querySelector(".navn").textContent = person.navn;
    klon.querySelector(".kortbeskrivelse").textContent = person.kortbeskrivelse;
    klon.querySelector(".pris").textContent = person.pris;
    holder.appendChild(klon);
  });
}
hentData();
