const textAnim = document.getElementById("textAnim");
let array = [
  "a Sound Designer",
  "a cinematographer",
  "creative",
  "dynamic",
  "enthusiast",
  "a cinephile",
  "a video games lover",
  "a musician",
  "a technician",
];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  textAnim.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2400);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2400);
    }
  }, 55);
};
loop();

const unmute = () => {
  mute.innerHTML = '<i class="fa-solid fa-volume-high fa-lg"></i>';
};
const muted = () => {
  mute.innerHTML = '<i class="fa-solid fa-volume-xmark fa-lg"></i>';
};

let muteState = true;
mute.addEventListener("click", () => {
  if (muteState === true) {
    unmute();
    muteState = false;
    introVideo.muted = false;
  } else {
    muted();
    muteState = true;
    introVideo.muted = true;
  }
});

//===============================//
const workAccess = document.body.querySelector(".workAccess");
const aboutAccess = document.body.querySelector(".aboutAccess");
const cinemaAccess = document.body.querySelector(".cinemaAccess");
const wallAccess = document.body.querySelector(".wallAccess");

workAccess.addEventListener("click", () => {
  afterWork.style.background = "rgb(142, 231, 142)";
  afterAbout.style.background = "transparent";
  afterCinema.style.background = "transparent";
  afterWall.style.background = "transparent";
});

aboutAccess.addEventListener("click", () => {
  afterWork.style.background = "transparent";
  afterAbout.style.background = "rgb(142, 231, 142)";
  afterCinema.style.background = "transparent";
  afterWall.style.background = "transparent";
});

cinemaAccess.addEventListener("click", () => {
  afterWork.style.background = "transparent";
  afterAbout.style.background = "transparent";
  afterCinema.style.background = "rgb(142, 231, 142)";
  afterWall.style.background = "transparent";
});

wallAccess.addEventListener("click", () => {
  afterWork.style.background = "transparent";
  afterAbout.style.background = "transparent";
  afterCinema.style.background = "transparent";
  afterWall.style.background = "rgb(142, 231, 142)";
});

const featuresPage = document.body.querySelector(".features");
const documentaryPage = document.body.querySelector(".documentary");
const andMorePage = document.body.querySelector(".andMore");

featuresAccess.addEventListener("click", () => {
  featuresPage.style.visibility = "visible";
  documentaryPage.style.visibility = "hidden";
  andMorePage.style.visibility = "hidden";
  afterFeatures.style.background = "rgb(142, 231, 142)";
  afterDocumentary.style.background = "transparent";
  afterMore.style.background = "transparent";
});

documentaryAccess.addEventListener("click", () => {
  featuresPage.style.visibility = "hidden";
  documentaryPage.style.visibility = "visible";
  andMorePage.style.visibility = "hidden";
  afterFeatures.style.background = "transparent";
  afterDocumentary.style.background = "rgb(142, 231, 142)";
  afterMore.style.background = "transparent";
  workContainer.style.height = "25rem";
});

moreAccess.addEventListener("click", () => {
  featuresPage.style.visibility = "hidden";
  documentaryPage.style.visibility = "hidden";
  andMorePage.style.visibility = "visible";
  afterFeatures.style.background = "transparent";
  afterDocumentary.style.background = "transparent";
  afterMore.style.background = "rgb(142, 231, 142)";
});

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjlkZTg1Mzg0YzYwZTljYzE0ZTE2YjIwMjliNjc5MiIsInN1YiI6IjY0YjY4MDZjYWM0MTYxMDBhZDllMmM4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PBwlEog0O74R4dbUp5gOOQtc40AwQAihpJTqpDsl8G0",
//   },
// };

// let survivantsTrailer = "https://www.youtube.com/watch?v=vY1kqd1Dk5Q";

const survivorsVideo =
  "https://res.cloudinary.com/dzq7b6tce/video/upload/v1689685868/Projet_SoundDesigner/OnceUponATime/Bande-annonce/LES_SURVIVANTS_Bande-annonce_nuhp0u.mp4";

// survivors.addEventListener("click", () => {
//   workContainer.innerHTML += `<video class="featureVideo" src=${survivorsVideo} controls autoplay type="video.mp4"></video>`;
// });
// const test = () => {
//   survivorsImg.style.background = "red";
// };
