const spaceFolks_api_url = "http://api.open-notify.org/astros.json";
async function pod() {
  const response = await fetch(spaceFolks_api_url);
  const spaceFolks_data = await response.json();

  // console.log(spaceFolks_data);
  const split = spaceFolks_data.people.length / 2;

  for (let i = 0; i < split; i++) {
    var mydiv = document.getElementById("spacefolks1");
    var aTag = document.createElement("a");
    aTag.setAttribute(
      "href",
      "https://www.google.com/search?q=" + spaceFolks_data.people[i].name
    );
    aTag.innerText = spaceFolks_data.people[i].name;
    mydiv.appendChild(aTag);
  }

  for (let i = split; split < spaceFolks_data.people.length; i++) {
    var mydiv = document.getElementById("spacefolks2");
    var aTag = document.createElement("a");
    aTag.setAttribute(
      "href",
      "https://www.google.com/search?q=" + spaceFolks_data.people[i].name
    );
    aTag.innerText = spaceFolks_data.people[i].name;
    mydiv.appendChild(aTag);
  }
}
pod();
