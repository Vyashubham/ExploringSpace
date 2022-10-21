const api_url =
  "https://newsapi.org/v2/everything?q=astronomy&apiKey=5589b7cfbd824b56b3f7122db64fc56d&pageSize=10&SortBy=popularity";
  // "https://newsapi.org/v2/everything?q=astronomy&apiKey=5589b7cfbd824b56b3f7122db64fc56d&pageSize=10&sortBy=recent"
async function news() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  var random_num1 = Math.floor(Math.random() * 10);
  var random_num2 = Math.floor(Math.random() * 10);
  var random_num3 = Math.floor(Math.random() * 10);
  // console.log(data.status); // working
  // console.log(data.articles); //working
  // console.log(data.articles[0].urlToImage);
  // document.getElementById('title1').textContent = data.articles[0].title;
  document.getElementById("recentNewsImg0").src = data.articles[random_num1].urlToImage;
  // if(document.getElementById("recentNewsImg0").style.src = "null"){
  //   document.getElementById("recentNewsImg0").src = "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
  // }
  document.getElementById("recentNewsTitle0").textContent =
    data.articles[random_num1].title;
    // document.getElementById('recentNewsSource').textContent = data.articles[0].source.name;
    // console.log(data.articles[0].source.name);
  document.getElementById("recentNewsDesc0").textContent =
    data.articles[0].description;
  document.getElementById("recentNewsReadNow0").href = data.articles[random_num1].url;

  document.getElementById("recentNewsImg1").src = data.articles[random_num2].urlToImage;
  // if(document.getElementById("recentNewsImg1").style.src = "null"){
  //   document.getElementById("recentNewsImg0").src = "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
  // }
  document.getElementById("recentNewsTitle1").textContent =
    data.articles[random_num2].title;
  document.getElementById("recentNewsDesc1").textContent =
    data.articles[random_num2].description;
  document.getElementById("recentNewsReadNow1").href = data.articles[random_num2].url;

  document.getElementById("recentNewsImg2").src = data.articles[random_num3].urlToImage;
  // if(document.getElementById("recentNewsImg2").style.src = "null"){
  //   document.getElementById("recentNewsImg0").src = "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
  // }
  document.getElementById("recentNewsTitle2").textContent =
    data.articles[random_num3].title;
  document.getElementById("recentNewsDesc2").textContent =
    data.articles[random_num3].description;
  document.getElementById("recentNewsReadNow2").href = data.articles[random_num3].url;
}
news();
