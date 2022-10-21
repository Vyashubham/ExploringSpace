const pod_api_url =
  "https://api.nasa.gov/planetary/apod?api_key=SVKO0rHRkpGdQ3zYjuWGvIXzjbKeICyjBRcJCBFZ";
async function pod() {
  const response = await fetch(pod_api_url);
  const podData = await response.json();
  // console.log(podData);
  // console.log(podData.url)
  //   const imgUrl = data.url
  document.getElementById("podImg").src = podData.url;
  document.getElementById("podImgTitle").textContent = podData.title;
  document.getElementById("podDesc").textContent = podData.explanation;
}
pod();
