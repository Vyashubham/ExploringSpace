const api_url = 'https://newsapi.org/v2/everything?q=astronomy&apiKey=5589b7cfbd824b56b3f7122db64fc56d&pageSize=10&sortBy=recent';
async function news(){
  const response = await fetch(api_url);
  const data = await response.json();
  // console.log(data);
  // console.log(data.status); // working
  // console.log(data.articles); //working
  // console.log(data.articles[0].urlToImage);
  // document.getElementById('title1').textContent = data.articles[0].title;
  document.getElementById('recentNewsImg0').src = data.articles[0].urlToImage;
  document.getElementById('recentNewsTitle0').textContent = data.articles[0].title;
//   document.getElementById('recentNewsSource').textContent = data.articles[0].source;
  document.getElementById('recentNewsDesc0').textContent = data.articles[0].description;
  document.getElementById('recentNewsReadNow0').href = data.articles[0].url;
  
  document.getElementById('recentNewsImg1').src = data.articles[1].urlToImage;
  document.getElementById('recentNewsTitle1').textContent = data.articles[1].title;
  document.getElementById('recentNewsDesc1').textContent = data.articles[1].description;
  document.getElementById('recentNewsReadNow1').href = data.articles[1].url;
  
  document.getElementById('recentNewsImg2').src = data.articles[2].urlToImage;
  document.getElementById('recentNewsTitle2').textContent = data.articles[2].title;
  document.getElementById('recentNewsDesc2').textContent = data.articles[2].description;
  document.getElementById('recentNewsReadNow2').href = data.articles[2].url;

}
news();
