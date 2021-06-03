var arrSuit = ["&#9829", "&#9830", "&#9827", "&#9824"]
var check = document.getElementById("inp")
var tern = document.getElementsByClassName("tern")
var allside = document.getElementsByClassName("allside")
var front = document.getElementsByClassName("front")
var switchVar = 0;

var balance = 1000;
//document.getElementById('data').innerHTML = balance;
//var bal = balanсe+100;
//document.getElementById('datta').innerHTML = bal;


check.addEventListener("click", function(){

    if (switchVar === 0){
        switchVar = 1
        for (var i = 0; i < 6; i++){
            var temp = Math.floor(Math.random() * 4)

            allside[i].innerHTML = arrSuit[temp]

            if (arrSuit[temp] == "&#9829" ||
                arrSuit[temp] == "&#9830"){
                allside[i].style.color = "red"
            }else{
                allside[i].style.color = "black"
            }
        }

        for (var i = 0; i < 3; i++){
            tern[i].style.transform = "rotateX(7200deg)"
        }

    }else {

        if (switchVar === 1){
            switchVar = 0
            for (var i = 0; i < 6; i++){
                var temp = Math.floor(Math.random() * 4)

                allside[i].innerHTML = arrSuit[temp]

                if (arrSuit[temp] == "&#9829" ||
                    arrSuit[temp] == "&#9830"){
                    allside[i].style.color = "red"
                }else{
                    allside[i].style.color = "black"
                }
            }
            for (var i = 0; i < 3; i++){
                tern[i].style.transform = ""
            }
        }
    }
    if (front[0].textContent === front[1].textContent
        && front[1].textContent === front[2].textContent){
        balance += 50
    }else{
        balance -= 25
    }
    data.innerHTML = balance;
});


