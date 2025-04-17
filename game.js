const gameOverSong = new Audio('./assets/audio2.mp3'); // 🔊 
gameOverSong.volume = 1.0;

var teksSekarang = 1;
const body = document.querySelector("body");
audio = new Audio('' + linkmp3.src);

var swiper = new Swiper(".mySwiper", {
  pagination: { el: ".swiper-pagination", dynamicBullets: false },
  on: {
    slideChange: function () {
      teksSekarang++;
      teksScale = document.querySelector('#teks' + teksSekarang);
      stikerScale = document.querySelector('#stiker' + teksSekarang);

      setTimeout(function () {
        if (teksSekarang < 3) {
          teksScale.classList.add("scale1");
          stikerScale.classList.add("scale1");
        } else {
          teksScale.classList.add("scale1");
          setTimeout(startGame, 100);
        }
      }, 50);
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

initeks = teks4.innerHTML;
teks4.innerHTML = "";

function katanimasi() {
  teks4.innerHTML = "";
  new TypeIt("#teks4", {
    strings: ["" + initeks],
    startDelay: 10,
    speed: 25,
    cursor: true,
    afterComplete: function () {
      teks4.innerHTML = initeks;

      setTimeout(function () {
        teksScale.classList.remove("scale1");
        teksScale.classList.add("scale0");
        stikerScale.classList.remove("scale1");
        stikerScale.classList.add("scale0");

        setTimeout(function () {
          teksScale.innerHTML = "";
          stikerAkhir1.src = stikerAkhir2.src;
        }, 400);
        setTimeout(function () {
          setTimeout(katanimasi2, 100);
          teksScale.classList.remove("scale0");
          stikerScale.classList.remove("scale0");
          teksScale.classList.add("scale1");
          stikerScale.classList.add("scale1");
        }, 550);
      }, 1100);
    },
  }).go();
}

function katanimasi2() {
  teks4.innerHTML = "";
  teks4.style = "font-size:19px;font-weight:400;text-align:center;line-height:1.5em";

  new TypeIt("#teks4", {
    speed: 50,
    deleteSpeed: 20,
    cursor: true
  })
    .type('According to <b>coding logic</b>, you are<br> <b><span class="pink">100%</span> full-stack talent</b>~')
    .pause(800)
    .delete(78)
    .pause(400)
    .type('According to <b>development algorithms</b>, you are<br> <b><span class="pink">70%</span> code and <span class="pink">30%</span> coffee</b>~')
    .pause(800)
    .delete()
    .pause(400)
    .type('According to <b>debugging principles</b>, you are<br> <b><span class="pink">99%</span> clean code and <span class="pink">1%</span> bug fixes</b>~')
    .pause(800)
    .delete()
    .pause(400)
    .exec(() => {
      teks4.style = "font-size:18px;font-weight:400;text-align:left;line-height:1.4em";
    })
    .type('But <b>on your birthday</b>, you are<br><b><span class="pink">1000%</span> the reason for joy!</b> 🎉🎂')
    .exec(() => {
      teks4.innerHTML = 'But <b>on your birthday</b>, you are<br><b><span class="pink">1000%</span> the reason for joy!</b> 🎉🎂' + `<br><br><span id="teksLove"></span>`;
      setTimeout(katanimasi3, 200);
    })
    .go();
}

function katanimasi3() {
  initeksAkhir = `ᯓᡣ𐭩<br><b>Happy Birthday, dear!</b>,<br>may this year bring you<br><b>health, happiness, and laughter!</b> 🎁🎈🎉`;
  new TypeIt("#teksLove", {
    strings: ["" + initeksAkhir],
    startDelay: 1,
    speed: 25,
    cursor: true,
    afterComplete: function () {
      teksLove.innerHTML = initeksAkhir;

      setInterval(falling, 200);
      setTimeout(function () { clearInterval(scrollInterval) }, 500);
      stiker4.classList.remove("scale1");
      stiker4.classList.add("scale0");
      setTimeout(function () {
        stikerAkhir1.src = stikerAkhir100.src;
        stiker4.classList.remove("scale0");
        stiker4.classList.add("scale1");
      }, 400);
      const nextBtn = document.getElementById("nextPageBtn");
      nextBtn.style.display = "block";
      setTimeout(() => {
        nextBtn.style.opacity = 1;
      }, 50);
    },
  }).go();
}

var sudahKlik = true;
var fungsiBerfungsi = false;

document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Touch to Start!</p>';

document.getElementById("loveIn").onclick = function () {
  if (sudahKlik) {
    audio.play();
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".swiper-pagination").style.display = "block";

    stiker1.classList.add("scale1");
    teks1.classList.add("scale1");
    wallpaper.style = "transform:scale(1)";

    setTimeout(function () { fungsiBerfungsi = true }, 300);
  } else {
    sudahKlik = true;
    document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Touch the LOVE!</p>';
  }
}

function falling() {
  const heart = document.createElement("div");
  heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100;stroke:#FFC2B8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
  heart.className = "heart-icon";
  heart.style.left = (Math.random() * 95) + "vw";
  heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
  document.body.appendChild(heart);
}
setInterval(function () {
  var heartArr = document.querySelectorAll(".heart-icon");
  if (heartArr.length > 100) { heartArr[0].remove(); }
}, 100);

const scrollContainer = document.getElementById("scroll-container");

const scrollInterval = setInterval(() => { scrollContainer.scrollTop += 10; }, 50);

jumlahKlik = 0; sudah = false;

function fungsibaru(btn) {
  var tombol = document.getElementById("" + btn);
  var tombolParent = tombol.parentNode;
  var tombolPosisiX = Math.floor(Math.random() * 50) + 1;
  var tombolPosisiY = Math.floor(Math.random() * 75) + 1;
  var rotasiAcak = Math.floor(Math.random() * 360);

  tombol.style.position = "relative";
  tombol.style.left = tombolPosisiX + "px";
  tombol.style.top = tombolPosisiY + "px";
  tombol.style.transform = "rotate(" + rotasiAcak + "deg)";
  tombolParent.appendChild(tombol);

  jumlahKlik++;
  if (jumlahKlik == 3) {
    swiper.slideNext();
    jumlahKlik = 0;
  }
}

function fungsiTerima() {
  Swal.fire({
    title: '' + teksTerima.innerHTML,
    imageUrl: '' + stikerTerima.src,
    imageWidth: 90,
    imageHeight: 90,
    imageAlt: 'by Feeldream.id',
    confirmButtonText: 'OK',
    allowOutsideClick: false,
  });
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space' || event.code === 'ArrowRight') {
    swiper.slideNext();
  }
});

document.addEventListener('click', function () {
  if (teksSekarang < 3 && fungsiBerfungsi === true) {
    swiper.slideNext();
  }
});

const cards = document.querySelectorAll(".card");
const gameBoard = document.querySelector(".game-board");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;

function startGame() {
  cards.forEach(card => {
    card.style.animation = "appear .9s forwards";
  });
  shuffle();
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");
  this.textContent = this.dataset.emoji;

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  matchedPairs++;
  if (matchedPairs === 8) {
    endGame();
  }

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    firstCard.textContent = "";
    secondCard.textContent = "";

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function endGame() {
  setTimeout(() => {
    document.querySelector(".main-card").style = "transform:scale(0);opacity:0 !important;transition:all .7s ease";
    stikerScale = document.querySelector('#stiker4');
    teksScale = document.querySelector('#teks4');

    setTimeout(() => {
      document.querySelector(".main-card").style.display = "none";
      scrollContainer.classList.remove("abs");
      scrollContainer.classList.remove("scale0");
      scrollContainer.classList.add("scale1");

      setTimeout(() => {
        stikerScale.classList.remove("abs");
        stikerScale.classList.remove("scale0");
        stikerScale.classList.add("scale1");

        setTimeout(() => {
          katanimasi();
          gameOverSong.play(); // 🔊 Play the game-over song here!
        }, 100);

        swiper.slideNext();
      }, 200);
    }, 400);
  }, 400);
}

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    //card.style.order = randomPos;
  });
}

cards.forEach(card => card.addEventListener("click", flipCard));

document.addEventListener("click", function (e) {
  const circle = document.createElement("div");
  circle.classList.add("click-effect");
  circle.style.left = `${e.pageX}px`;
  circle.style.top = `${e.pageY}px`;
  document.body.appendChild(circle);
  circle.addEventListener("animationend", () => {
    circle.remove();
  });
});
