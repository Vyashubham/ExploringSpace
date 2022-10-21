async function planetData() {
  const planet_api_url = "https://api.le-systeme-solaire.net/rest/bodies/";

  const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];
  const planets_endpoints = [];
  const html_id_temp = "avg-temp";
  const html_id_gravity = "planet-gravity";
  const html_id_density = "planet-density";
  const html_id_tilt = "planet-axialTilt";

  for (let i = 0; i < planets.length; i++) {
    const final_endpoint = planet_api_url + planets[i];
    planets_endpoints.push(final_endpoint);
  }

  for (let i = 0; i < planets.length; i++) {
    let avg_temp = html_id_temp.concat(i);
    let gravity = html_id_gravity.concat(i);
    let density = html_id_density.concat(i);
    let tilt = html_id_tilt.concat(i);
    // console.log(result);
    const response = await fetch(planets_endpoints[i]);
    const planetData = await response.json();
    // console.log(planetData);
    // console.log(planetData.avgTemp);

    const para = document.createElement("p");
    const node = document.createTextNode(planetData.avgTemp);
    // console.log(planetData.avgTemp);
    para.appendChild(node);
    const element = document.getElementById(avg_temp);
    element.appendChild(para);

    const para1 = document.createElement("p");
    const node1 = document.createTextNode(planetData.gravity);
    // console.log(planetData.gravity);
    para1.appendChild(node1);
    const element1 = document.getElementById(gravity);
    element1.appendChild(para1);

    const para2 = document.createElement("p");
    const node2 = document.createTextNode(planetData.density);
    // console.log(planetData.gravity);
    para2.appendChild(node2);
    const element2 = document.getElementById(density);
    element2.appendChild(para2);

    const para3 = document.createElement("p");
    const node3 = document.createTextNode(planetData.axialTilt);
    // console.log(planetData.gravity);
    para3.appendChild(node3);
    const element3 = document.getElementById(tilt);
    element3.appendChild(para3);
  }
}
planetData();
