  const button = document.getElementById('noButton');
  const image = document.getElementById("image");
  const buttonYES = document.getElementById('yesButton');
  const h1 = document.getElementById("question");



  var prompt = ["No", "Lho gitu mainnya??😱", "Dingin kamuu🥲", "Yakin gamau jadi prom ku?🫡😏😏", 
    "Are you sureee??😉", "REALLY SUREEE?🤩🤩", "REALLY REALLY REALLY REAAALLLY SUREEEE????👀👀", 
    "😧😧", "pls accept"];
  var count = 0;
  var yesbutton_clicked = false;



  function acceptLove() {
    yesbutton_clicked = true;
    window.location.href = 'success.html';
    
  }

  function rejectLove() {
    if(yesbutton_clicked){
      
    }else{
      count++;
      if (count >= prompt.length) {
        count = prompt.length - 1;
      }
      


      const randomX = Math.random() * (window.innerWidth - 125);
      const randomY = Math.random() * (window.innerHeight - 125);
      
      button.style.position = 'absolute';
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
      
      button.innerText = prompt[count];



      let yesWidth = buttonYES.offsetWidth;
      let yesHeight = buttonYES.offsetHeight;
      

      yesWidth *= 1.3;
      yesHeight *= 1.3;

      buttonYES.style.width = `${yesWidth}px`;
      buttonYES.style.height = `${yesHeight}px`;




      if(button.innerText == "Yakin gamau jadi prom ku?🫡😏😏")
        image.src = "Src/jerryhehe.gif";
      }
      if(button.innerText == "😧😧"){
        image.src = "Src/tomshocked.gif";
      }

  }

