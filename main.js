import './style.css'
import {debounce} from "lodash";
import {largestRect, largestSquare} from "rect-scaler";

document.querySelector('#app').innerHTML = `
    <div id="gallery">
      <div class="video-container">
        <video
          autoplay
          loop
          muted
          src="https://dosant.github.io/video.mp4"
        ></video>
      </div>
      <div class="video-container">
        <video
          autoplay
          loop
          muted
          src="https://dosant.github.io/video.mp4"
        ></video>
      </div>
      <div class="video-container">
        <video
          autoplay
          loop
          muted
          src="https://dosant.github.io/video.mp4"
        ></video>
      </div>
      <div class="video-container">
        <video
          autoplay
          loop
          muted
          src="https://dosant.github.io/video.mp4"
        ></video>
      </div>
      <div class="video-container">
        <video
          autoplay
          loop
          muted
          src="https://dosant.github.io/video.mp4"
        ></video>
      </div>
      <!-- <div class="video-container">
        <video
          autoplay
          loop
          muted
          src="https://dosant.github.io/video.mp4"
        ></video>
      </div> -->
    </div>
`

function recalculateLayout() {
    const gallery = document.getElementById("gallery");
    const screenWidth = document.body.getBoundingClientRect().width;
    const screenHeight = document.body.getBoundingClientRect().height;
    const videoCount = document.getElementsByTagName("video").length;

    const rectWidth = 16;
    const rectHeight = 9;
    const r = largestRect(
        screenWidth,
        screenHeight,
        videoCount,
        rectWidth,
        rectHeight
    );

    gallery.style.setProperty("--width", r.width + "px");
    gallery.style.setProperty("--height", r.height + "px");
    gallery.style.setProperty("--cols", r.cols + "");
}

const debouncedRecalculateLayout = debounce(recalculateLayout, 50);
window.addEventListener("resize", debouncedRecalculateLayout);
debouncedRecalculateLayout();

