const api_url = 'https://newsapi.org/v2/everything?q=space&apiKey=5589b7cfbd824b56b3f7122db64fc56d&pageSize=10&sortBy=popularity';
async function news(){
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  console.log(data.status); // working
  console.log(data.articles); //working
  console.log(data.articles[0].urlToImage);
  document.getElementById('title1').textContent = data.articles[0].title;
  document.getElementById('img1').src = data.articles[0].urlToImage;

}
news();
