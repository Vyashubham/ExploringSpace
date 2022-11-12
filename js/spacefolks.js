const spaceFolks_api_url = "https://api.open-notify.org/astros.json";
const people = ["Cai Xuzhe", "Chen Dong", "Liu Yang", "Sergey Prokopyev", "Dmitry Petelin", "Frank Rubio", "Nicole Mann", "Josh Cassada", "Koichi Wakata", "Anna Kikina" ];
async function pod() {
  try {
    const response = await fetch(spaceFolks_api_url);
    const spaceFolks_data = await response.json();
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
  catch(err) {
    // console.log("yup!");
    split = 5;
    for (let i = 0; i < split; i++) {
      var mydiv = document.getElementById("spacefolks1");
      var aTag = document.createElement("a");
      aTag.setAttribute(
        "href",
        "https://www.google.com/search?q=" + people[i]);
      aTag.innerText = people[i];
      mydiv.appendChild(aTag);
    }

    for (let i = split; i < people.length; i++) {
      // console.log("2nd for");
      var mydiv = document.getElementById("spacefolks2");
      var aTag = document.createElement("a");
      aTag.setAttribute(
        "href",
        "https://www.google.com/search?q=" + people[i]);
      aTag.innerText = people[i];
      mydiv.appendChild(aTag);
    }
  }

}
pod();
