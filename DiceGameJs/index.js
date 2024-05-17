//soo this thing runs on its own when i roload to js okayyy!!
    //code it all together
    var n = Math.floor(Math.random() * 6) + 1
    var img = "./images/dice" + n + ".png"
    document.querySelectorAll("img")[0].setAttribute("src", img)
    // document.querySelectorAll("p")[0].innerHTML = n
    //code it all together
    var k = Math.floor(Math.random() * 6) + 1
    var img2 = "./images/dice" + k + ".png"
    document.querySelectorAll("img")[1].setAttribute("src", img2)
    // document.querySelectorAll("p")[1].innerHTML = k
    //code it all together
    if (n > k) {
      document.querySelector("h1").innerHTML = "🏆 Player-1 Wins!"
    }
    else if (k > n) {
      document.querySelector("h1").innerHTML = "Player-2 Wins! 🏆"
    } else {
      document.querySelector("h1").innerHTML = "Try again!"
    }

  