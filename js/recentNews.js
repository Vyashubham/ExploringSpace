// const api_url =
//   "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=JsJPEf4gWQvKglg8tsbejALPU2TuQ8Y9";
//   // "https://newsapi.org/v2/everything?q=astronomy&nasa&apiKey=5589b7cfbd824b56b3f7122db64fc56d&pageSize=10&SortBy=popularity";
//   // "https://newsapi.org/v2/everything?q=astronomy&apiKey=5589b7cfbd824b56b3f7122db64fc56d&pageSize=10&sortBy=recent"
// async function news() {
//   const response = await fetch(api_url);
//   const data = await response.json();
//   console.log(data);
//   var random_num1 = Math.floor(Math.random() * 9);
//   var random_num2 = Math.floor(Math.random() * 9);
//   var random_num3 = Math.floor(Math.random() * 9);
//   // console.log(data.status); // working
//   // console.log(data.articles); //working
//   // console.log(data.articles[0].urlToImage);
//   // document.getElementById('title1').textContent = data.articles[0].title;
//   document.getElementById("recentNewsImg0").src = data.articles[random_num1].urlToImage;
//   // if(document.getElementById("recentNewsImg0").style.src = "null"){
//   //   document.getElementById("recentNewsImg0").src = "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
//   // }
//   document.getElementById("recentNewsTitle0").textContent =
//     data.articles[random_num1].title;
//     // document.getElementById('recentNewsSource').textContent = data.articles[0].source.name;
//     // console.log(data.articles[0].source.name);
//   document.getElementById("recentNewsDesc0").textContent =
//     data.articles[random_num1].description;
//   document.getElementById("recentNewsReadNow0").href = data.articles[random_num1].url;

//   document.getElementById("recentNewsImg1").src = data.articles[random_num2].urlToImage;
//   // if(document.getElementById("recentNewsImg1").style.src = "null"){
//   //   document.getElementById("recentNewsImg0").src = "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
//   // }
//   document.getElementById("recentNewsTitle1").textContent =
//     data.articles[random_num2].title;
//   document.getElementById("recentNewsDesc1").textContent =
//     data.articles[random_num2].description;
//   document.getElementById("recentNewsReadNow1").href = data.articles[random_num2].url;

//   document.getElementById("recentNewsImg2").src = data.articles[random_num3].urlToImage;
//   // if(document.getElementById("recentNewsImg2").style.src = "null"){
//   //   document.getElementById("recentNewsImg0").src = "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
//   // }
//   document.getElementById("recentNewsTitle2").textContent =
//     data.articles[random_num3].title;
//   document.getElementById("recentNewsDesc2").textContent =
//     data.articles[random_num3].description;
//   document.getElementById("recentNewsReadNow2").href = data.articles[random_num3].url;
// }
// news();






const api_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=astronomy&api-key=JsJPEf4gWQvKglg8tsbejALPU2TuQ8Y9";
async function news() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  

  const nytime_str = "https://www.nytimes.com/";
  // console.log(data.response.docs[0].multimedia[4].url);
  // var ths = nytime_str + data.response.docs[0].multimedia[0].url;
  // console.log(ths);
  // console.log(data.response.docs[0].byline.original);

  var random_num = [];
  while(random_num.length < 3){
    var r = Math.floor(Math.random() * 9) + 1;
    if(random_num.indexOf(r) === -1) random_num.push(r);
}
// console.log(random_num);
//   var random_num1 = Math.floor(Math.random() * 3);
//   console.log(random_num1);
//   var random_num2 = Math.floor(Math.random() * 7);
//   var random_num3 = Math.floor(Math.random() * 9);

    document.getElementById("recentNewsImg0").src = nytime_str + data.response.docs[random_num[0]].multimedia[random_num[0]].url;
    document.getElementById("recentNewsTitle0").textContent = data.response.docs[random_num[0]].headline.main;
    document.getElementById("recentNewsDesc0").textContent = data.response.docs[random_num[0]].abstract;
    document.getElementById("recentNewsReadNow0").href = data.response.docs[random_num[0]].web_url;

    document.getElementById("recentNewsImg1").src = nytime_str + data.response.docs[random_num[1]].multimedia[random_num[1]].url;
    document.getElementById("recentNewsTitle1").textContent = data.response.docs[random_num[1]].headline.main;
    document.getElementById("recentNewsDesc1").textContent = data.response.docs[random_num[1]].abstract;
    document.getElementById("recentNewsReadNow1").href = data.response.docs[random_num[1]].web_url;

    document.getElementById("recentNewsImg2").src = nytime_str + data.response.docs[random_num[2]].multimedia[random_num[2]].url;
    document.getElementById("recentNewsTitle2").textContent = data.response.docs[random_num[2]].headline.main;
    document.getElementById("recentNewsDesc2").textContent = data.response.docs[random_num[2]].abstract;
    document.getElementById("recentNewsReadNow2").href = data.response.docs[random_num[2]].web_url;

  
}
news();
