const iss_api_url = "https://api.wheretheiss.at/v1/satellites/25544";
var lat,
  lon,
  speed = 0;
async function iss() {
  const response = await fetch(iss_api_url);
  const issData = await response.json();
  // console.log(issData);
  // console.log(issData.url);

  // console.log("YEYEYEY");
  // console.log("Lat");
  lat = issData.latitude;
  // console.log(lat);

  lon = issData.longitude;
  // console.log("Lon");
  // console.log(issData.longitude);

  speed = issData.velocity;
  // console.log("velocity");
  // console.log(issData.velocity);

  //   point_to_map(issData.latitude, issData.longitude);
  const map_api_url =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    lat +
    "," +
    lon +
    "&zoom=2&size=800x800&markers=size:large%7Ccolor:blue%7Clabel:ISS%7C" +
    lat +
    "," +
    lon +
    "&maptype=satellite&key=AIzaSyAtIfPCwFuYFkPCHY65nv5EHwQJDz6IKJo";
  document.getElementById("issnow").src = map_api_url;
  // console.log(map_api_url);
  // console.log("YOO");

  lat = +lat.toFixed(5);
  lon = +lon.toFixed(5);
  speed = +speed.toFixed(4);
  // console.log(lat);
  document.getElementById("iss-lat").innerHTML = lat;
  document.getElementById("iss-lon").innerHTML = lon;
  document.getElementById("iss-speed").innerHTML = speed;
}
iss();

