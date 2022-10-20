const iss_api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
var lat, lon, speed = 0;
async function iss(){
  const response = await fetch(iss_api_url);
  const issData = await response.json();
  console.log(issData);
  console.log(issData.url)
  
//   const para = document.createElement("p");
//   const node = document.createTextNode(issData.name);
//   const node1 = document.createTextNode(issData.latitude);
//   // console.log(spaceFolks_data.people[i].name);
//   para.appendChild(node);
//   para.appendChild(node1);
//   const element = document.getElementById("iss");
//   element.appendChild(para);
//   element.appendChild(para1);

  console.log("YEYEYEY");
  console.log("Lat");
  lat = issData.latitude;
  console.log(lat);

  lon = issData.longitude
  console.log("Lon");
  console.log(issData.longitude);

  speed = issData.velocity;
  console.log("velocity");
  console.log(issData.velocity);

//   point_to_map(issData.latitude, issData.longitude);
  const map_api_url = 'https://maps.googleapis.com/maps/api/staticmap?center='+lat+','+lon+'&zoom=3&size=800x800&markers=size:large%7Ccolor:blue%7Clabel:ISS%7C'+lat+','+lon+'&maptype=satellite&key=AIzaSyAtIfPCwFuYFkPCHY65nv5EHwQJDz6IKJo';
    document.getElementById('issnow').src = map_api_url;
  console.log(map_api_url);
  console.log("YOO");
//   console.log(Math.round((lat + Number.EPSILON) * 100) / 100);
lat = +lat.toFixed(5);
lon = +lon.toFixed(5);
speed = +speed.toFixed(4)
console.log(lat);
  document.getElementById("iss-lat").innerHTML = lat;
  document.getElementById("iss-lon").innerHTML = lon;
  document.getElementById("iss-speed").innerHTML = speed;
}

// async function point_to_map(lon, lan){
//     // const map_api_url = 'https://api.opencagedata.com/geocode/v1/json?q=q='+ lan +','+ lon +'&key=13784334c5d14486afa7d49f2731e95d&pretty=1';
//     const map_api_url = 'https://maps.googleapis.com/maps/api/staticmap?center='+lat+','+lon+'&zoom=12&size=400x400&key=AIzaSyAtIfPCwFuYFkPCHY65nv5EHwQJDz6IKJo';
//     console.log(map_api_url);
    
//     const response = await fetch(map_api_url);
//      const mapData = await response.json();
//     console.log(mapData);
//     console.log(mapData.results[0].annotations.OSM.url);

//     document.getElementById('issnow').src = mapData.results[0].annotations.OSM.url;

  

// }
iss();
// point_to_map();
