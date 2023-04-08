let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let rock = document.querySelector("#rockBtn");
let paper = document.querySelector("#paperBtn");
let scissor = document.querySelector("#scissorBtn");
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let gameResult = document.querySelector("#gameResult");
let modal =document.querySelector("#modal");
let endGameReult = document.querySelector("#endGameResult");
let gif = document.querySelector("#gif");
let arrList = ["rock-2.png","paper-2.png","scissor-2.png"];
let x = 0;
let y = 0;


rock.addEventListener('click', function () {
    let randomNun = Math.round(Math.random() * 2 );
    player.style.animationDuration = ".3s";
    computer.style.animationDuration = ".3s";

    setTimeout(function() {
        player.style.animationDuration = "2s";
        computer.style.animationDuration = "2s";
        player.setAttribute("src", "assets/image/rock-1.png");
        computer.setAttribute("src", `assets/image/${arrList[randomNun]}`);

    if (randomNun == 0) {
        gameResult.innerHTML = "Draw!";
        gameResult.style.display = "block";
    }
    else if (randomNun == 1) {
        gameResult.style.display = "block";
        gameResult.innerHTML = "Computer Win!";
        computerScore.innerHTML = ++y;
    }
    else {
        gameResult.style.display = "block";
        gameResult.innerHTML = "You Win!";
        playerScore.innerHTML = ++x;
    }

    if (x == 3) {
        setTimeout(function() {
            document.querySelector(".body-container").style.filter = "blur(10px)";
            modal.style.visibility = "visible";
            endGameReult.innerHTML = "You Win The Match!";
            gif.setAttribute("src", "assets/image/win.gif")
        }, 1000)
    }
    else if (y == 3) {
        setTimeout(function() {
            document.querySelector(".body-container").style.filter = "blur(10px)";
            modal.style.visibility = "visible";
            endGameReult.innerHTML = "You Lose The Match!";
            gif.setAttribute("src", "assets/image/lose.gif")
        }, 1000)
    }   
    },2000)

    setTimeout(function() {
        player.setAttribute("src", "assets/image/rock-1.png");
        computer.setAttribute("src", "assets/image/rock-2.png");
        gameResult.style.display = "none";
    },5000)
})

paper.addEventListener('click', function () {
    let randomNun = Math.round(Math.random() * 2 );
    player.style.animationDuration = ".3s";
    computer.style.animationDuration = ".3s";

    setTimeout(function() {
        player.style.animationDuration = "2s";
        computer.style.animationDuration = "2s";
        player.setAttribute("src", "assets/image/paper-1.png");
        computer.setAttribute("src", `assets/image/${arrList[randomNun]}`);

    if (randomNun == 0) {
        gameResult.style.display = "block";
        gameResult.innerHTML = "You Win!";
        playerScore.innerHTML = ++x;
    }
    else if (randomNun == 1) {
        gameResult.innerHTML = "Draw!";
        gameResult.style.display = "block";
    }
    else {
        gameResult.style.display = "block";
        gameResult.innerHTML = "Computer Win!";
        computerScore.innerHTML = ++y;
    }

    if (x == 3) {
        setTimeout(function() {
            document.querySelector(".body-container").style.filter = "blur(10px)";
            modal.style.visibility = "visible";
            endGameReult.innerHTML = "You Win The Match!";
            gif.setAttribute("src", "assets/image/win.gif")
        }, 1000)
    }
    else if (y == 3) {
        setTimeout(function() {
            document.querySelector(".body-container").style.filter = "blur(10px)";
            modal.style.visibility = "visible";
            endGameReult.innerHTML = "You Lose The Match!";
            gif.setAttribute("src", "assets/image/lose.gif")
        }, 1000)
    }
    },2000)

    setTimeout(function() {
        player.setAttribute("src", "assets/image/rock-1.png");
        computer.setAttribute("src", "assets/image/rock-2.png");
        gameResult.style.display = "none";
    },5000)
})

scissor.addEventListener('click', function () {
    let randomNun = Math.round(Math.random() * 2 );
    player.style.animationDuration = ".3s";
    computer.style.animationDuration = ".3s";

    setTimeout(function() {
        player.style.animationDuration = "2s";
        computer.style.animationDuration = "2s";
        player.setAttribute("src", "assets/image/scissor-1.png");
        computer.setAttribute("src", `assets/image/${arrList[randomNun]}`);

    if (randomNun == 0) {
        gameResult.style.display = "block";
        gameResult.innerHTML = "Computer Win!";
        computerScore.innerHTML = ++y;
    }
    else if (randomNun == 1) {
        gameResult.style.display = "block";
        gameResult.innerHTML = "You Win!";
        playerScore.innerHTML = ++x;
    }
    else {
        gameResult.innerHTML = "Draw!";
        gameResult.style.display = "block";
    }

    if (x == 3) {
        setTimeout(function() {
            document.querySelector(".body-container").style.filter = "blur(10px)";
            modal.style.visibility = "visible";
            endGameReult.innerHTML = "You Win The Match!";
            gif.setAttribute("src", "assets/image/win.gif")
        }, 1000)
    }
    else if (y == 3) {
        setTimeout(function() {
            document.querySelector(".body-container").style.filter = "blur(10px)";
            modal.style.visibility = "visible";
            endGameReult.innerHTML = "You Lose The Match!";
            gif.setAttribute("src", "assets/image/lose.gif")
        }, 1000)
    }
    },2000)

    setTimeout(function() {
        player.setAttribute("src", "assets/image/rock-1.png");
        computer.setAttribute("src", "assets/image/rock-2.png");
        gameResult.style.display = "none";
    },5000)
})

