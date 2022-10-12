function animateValue(obj, start, end, duration) {
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const random_num = Math.floor(Math.random() * 500)

  const obj = document.getElementById("value");
  animateValue(obj, random_num, 8, 1000);

  const obj1 = document.getElementById("value1");
  animateValue(obj1, random_num, 3743, 1000);

  
  const obj2 = document.getElementById("value2");
  animateValue(obj2, random_num, 220, 1000);


  const obj3 = document.getElementById("value3");
  animateValue(obj3, 112000, 113527, 1000);
