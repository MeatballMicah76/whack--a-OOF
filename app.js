window.onload = function() {
    var dirt = document.getElementsByClassName("dirt");
    var sound = document.getElementById("whack");
    var grid = document.getElementById("dirt-box");
    var score = 0;
    for (let i = 0; i < dirt.length ; i++ ){
        dirt[i].addEventListener("click", function(){
            if(dirt[i].innerHTML){
                score = score+1;
                dirt[i].innerHTML = "";
                document.getElementById("score").innerHTML = "Score : " + score;
                sound.play();
            } else {
                console.log("Nothing There");
            }
     })
    }

setInterval(function (){
    var mole = document.createElement("div");
    mole.setAttribute("class", "mole");
    var random = Math.floor(Math.random() * Math.floor(dirt.length));

    if (dirt[random].innerHTML === ""){
       dirt[random].appendChild(mole);
    }
}, 900);    
}
