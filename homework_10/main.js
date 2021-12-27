

const generateBlocksInterval = function () {
  for(let i = 0; i < 25; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style = "background-color: " + 
      '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    ;
    document.getElementById("container").appendChild(div);

    setInterval(function () {
      div.style = "background-color: " + 
      '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    }, 1000);
  }

}


console.log(generateBlocksInterval());