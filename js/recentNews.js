const api_url = 'https://newsapi.org/v2/everything?q=space&apiKey=5589b7cfbd824b56b3f7122db64fc56d&pageSize=10&sortBy=popularity';
async function news(){
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  console.log(data.status); // working
  console.log(data.articles); //working
  console.log(data.articles[0].urlToImage);
//   document.getElementById('title1').textContent = data.articles[0].title;
  document.getElementById('recentNewsImg').src = data.articles[1].urlToImage;
  document.getElementById('recentNewsTitle').textContent = data.articles[1].title;
//   document.getElementById('recentNewsSource').textContent = data.articles[0].source;
  document.getElementById('recentNewsDesc').textContent = data.articles[1].description;
  document.getElementById('recentNewsReadNow').href = data.articles[1].url;
  


}
news();
