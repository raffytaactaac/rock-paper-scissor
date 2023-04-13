let playNow = document.querySelector('#playNow');
let playerName = document.querySelector('#playerName');
let homeContainer = document.querySelector('.home-container');
let gameContainer = document.querySelector('.game-container');
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let displayName = document.querySelector('#disName');
let rock = document.querySelector("#rockBtn");
let paper = document.querySelector("#paperBtn");
let scissor = document.querySelector("#scissorBtn");
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let historyContainer = document.querySelector('.history-container');
let history = document.querySelector('#history');
let modal =document.querySelector("#modal");
let endGameReult = document.querySelector("#endGameResult");
let playAgain = document.querySelector('#playAgain');
let gif = document.querySelector("#gif");
let arrList = ["rock-2.png","paper-2.png","scissor-2.png"];
let x = 0;
let y = 0;

// hide game-container
gameContainer.classList.add('hide');

// events
playNow.addEventListener('click', function() {
    if (playerName.value == "") {
        alert("Enter A Valid Name!");
    } else {
        homeContainer.classList.add('hide');
        gameContainer.classList.remove('hide');
        displayName.innerHTML = playerName.value;
    }  
})



// events
rock.addEventListener('click', function () {
    let randomNun = Math.round(Math.random() * 2 );
    player.style.animationDuration = ".3s";
    computer.style.animationDuration = ".3s";

    setTimeout(function() {
        let newList = document.createElement('li');
        player.style.animationDuration = "2s";
        computer.style.animationDuration = "2s";
        player.setAttribute("src", "assets/image/rock-1.png");
        computer.setAttribute("src", `assets/image/${arrList[randomNun]}`);

    if (randomNun == 0) {
        newList.textContent = "Draw!";
        newList.className = "draw";
        history.appendChild(newList);
    }
    else if (randomNun == 1) {
        computerScore.innerHTML = ++y;
        newList.textContent = "Computer win this round!";
        newList.className = "lose";
        history.appendChild(newList);
    }
    else {
        playerScore.innerHTML = ++x;
        newList.textContent = "You win this round!";
        newList.className = "win";
        history.appendChild(newList);
    }

    if (x == 3) {
        setTimeout(function() {
            document.querySelector(".body-container").style.filter = "blur(10px)";
            modal.style.visibility = "visible";
            endGameReult.innerHTML = "You Win The Match!";
            gif.setAttribute("src", "assets/image/win.gif");
        }, 1000)
    }
    else if (y == 3) {
        setTimeout(function() {
            document.querySelector(".body-container").style.filter = "blur(10px)";
            modal.style.visibility = "visible";
            endGameReult.innerHTML = "You Lose The Match!";
            gif.setAttribute("src", "assets/image/lose.gif");
        }, 1000)
    }   
    },2000)

    setTimeout(function() {
        player.setAttribute("src", "assets/image/rock-1.png");
        computer.setAttribute("src", "assets/image/rock-2.png");
    },5000)
})

paper.addEventListener('click', function () {
    let randomNun = Math.round(Math.random() * 2 );
    player.style.animationDuration = ".3s";
    computer.style.animationDuration = ".3s";

    setTimeout(function() {
        let newList = document.createElement('li');
        player.style.animationDuration = "2s";
        computer.style.animationDuration = "2s";
        player.setAttribute("src", "assets/image/paper-1.png");
        computer.setAttribute("src", `assets/image/${arrList[randomNun]}`);

    if (randomNun == 0) {
        playerScore.innerHTML = ++x;
        newList.textContent = "You win this round!";
        newList.className = "win";
        history.appendChild(newList);
    }
    else if (randomNun == 1) {
        newList.textContent = "Draw!";
        newList.className = "draw";
        history.appendChild(newList);
    }
    else {
        computerScore.innerHTML = ++y;
        newList.textContent = "Computer win this round!";
        newList.className = "lose";
        history.appendChild(newList);
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
    },5000)
})

scissor.addEventListener('click', function () {
    let randomNun = Math.round(Math.random() * 2 );
    player.style.animationDuration = ".3s";
    computer.style.animationDuration = ".3s";

    setTimeout(function() {
        let newList = document.createElement('li');
        player.style.animationDuration = "2s";
        computer.style.animationDuration = "2s";
        player.setAttribute("src", "assets/image/scissor-1.png");
        computer.setAttribute("src", `assets/image/${arrList[randomNun]}`);

    if (randomNun == 0) {
        computerScore.innerHTML = ++y;
        newList.textContent = "Computer win this round!";
        newList.className = "lose";
        history.appendChild(newList);
    }
    else if (randomNun == 1) {
        playerScore.innerHTML = ++x;
        newList.textContent = "You win this round!";
        newList.className = "win";
        history.appendChild(newList);
    }
    else {
        newList.textContent = "Draw!";
        newList.className = "draw";
        history.appendChild(newList);
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
    },5000)
})


// modal play again
playAgain.addEventListener('click', function() {
    document.querySelector(".body-container").style.filter = "none";
    modal.style.visibility = "hidden";
    x = 0;
    y = 0;
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    history.innerHTML = "";
})
