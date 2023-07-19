const dict = [
  {
    id: "teddy",
    video: teddyVideo,
  },
  {
    id: "b",
    video: "video2",
  },
  {
    id: "c",
    video: "video3",
  },
];
for (const element of dict) {
  console.log(element.id);
  console.log(element.video);
  document.getElementById(element.id).addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${element.video} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
}
