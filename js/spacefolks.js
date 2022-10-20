const spaceFolks_api_url = 'http://api.open-notify.org/astros.json';
async function pod(){
  const response = await fetch(spaceFolks_api_url);
  const spaceFolks_data = await response.json();

  // console.log(spaceFolks_data);
  const split = (spaceFolks_data.people.length)/2;

  for (let i = 0; i < split ; i++) {
    // console.log(spaceFolks_data.people[i].name);
    // const para = document.createElement("p");
    // const node = document.createTextNode(spaceFolks_data.people[i].name);
    // // console.log(spaceFolks_data.people[i].name);
    // para.appendChild(node);
    // const element = document.getElementById("spacefolks1");
    // element.appendChild(para);
    var mydiv = document.getElementById("spacefolks1");
    var aTag = document.createElement('a');
    aTag.setAttribute('href',"https://www.google.com/search?q="+spaceFolks_data.people[i].name);
    aTag.innerText = spaceFolks_data.people[i].name;
    mydiv.appendChild(aTag);
     
  }

  for (let i = split; split < spaceFolks_data.people.length ; i++) {
    // console.log(spaceFolks_data.people[i].name);
    // const para = document.createElement("a");
    // const node = document.createTextNode(spaceFolks_data.people[i].name);
    // aTag.setAttribute('href',"yourlink.htm");
    // node.setAttribute('href', 'https://www.google.com/search?q=shubham+vyas+asu');
    // node.innerText = "link text";
    // aTag.innerText = "link text";
    // console.log(spaceFolks_data.people[i].name);
    var mydiv = document.getElementById("spacefolks2");
  var aTag = document.createElement('a');
  aTag.setAttribute('href',"https://www.google.com/search?q="+spaceFolks_data.people[i].name);
  aTag.innerText = spaceFolks_data.people[i].name;
  mydiv.appendChild(aTag);
    // para.appendChild(node);
    // const element = document.getElementById("spacefolks2");
    // element.appendChild(para);
  }
    
// for (let i = 0; i < spaceFolks_data.people.length ; i++) {
//         // console.log(spaceFolks_data.people[i].name);
//         const para = document.createElement("p");
//         const node = document.createTextNode(spaceFolks_data.people[i].name);
//         // console.log(spaceFolks_data.people[i].name);
//         para.appendChild(node);
//         const element = document.getElementById("spacefolks1");
//         element.appendChild(para);
//       }
    
}
pod();
