function main() {
    //== variabels ===================================
    var _wheel = document.querySelector("#wheel");
    var _arrow = document.querySelector("#arrow");
    var _jackpotDisp = document.querySelector("#jackpot");
    var _jackpot = 0;
    var _scoreDisp = document.querySelector("#score");
    // var _score = 0;
    var _deg = 7.5;
    var _position = _deg%360;
    
    //== functions ===================================
    //random number function
     function random(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    
    //spin teh wheel
    _arrow.addEventListener("click", spin);
    function spin(evt){
        //remove click event
        _arrow.removeEventListener("click", spin);
        
        //aniamtion arrow
        _arrow.classList.add("arrowanimation");
        
        //new position wheel
        _deg = _deg + 1080 + (15 * random(0,8));
        
        //give wheel position
        _wheel.style.transform = "rotate(" + _deg + "deg)";
        
        //chec position
        var _position = _deg%360;
        console.log(_position + " position");
        
        
        
        //after spin
        setTimeout(function() {
            //make clickebel again
            _arrow.addEventListener("click", spin);
            //remove arrow animation
            _arrow.classList.remove("arrowanimation");
            //update score and jackpot
            _scoreDisp.innerHTML = "Score = $" + _score;
            _jackpotDisp.innerHTML = "Jackpot = $" + _jackpot;
        }, 5000);
    }
}


window.onload = function() {
    main();
}