document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordian");
  // const accordions = document.querySelectorAll(".accordian");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      // Remove active class from all accordions and hide their videos
      accordions.forEach((item) => {
        const video = item.querySelector(".accordian-video");
        const playButton = item.querySelector(".play-button");
        const pauseButton = item.querySelector(".pause-button");

        if (video) {
          video.pause();
          video.style.display = "none";
          pauseButton.style.display = "none";
          playButton.style.display = "inline-block";
        }

        item.classList.remove("active");
      });

      // If the current accordion was not active, activate it
      if (!isActive) {
        this.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".play-button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const video =
        this.closest(".accordian").querySelector(".accordian-video");
      const pauseButton = this.nextElementSibling;
      video.style.display = "block";
      video.play();

      this.style.display = "none"; // Hide the play button
      pauseButton.style.display = "inline-block"; // Show the pause button
    });
  });
  document.querySelectorAll(".pause-button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      const video =
        this.closest(".accordian").querySelector(".accordian-video");
      video.pause();
      const playButton = this.previousElementSibling;
      video.style.display = "none";
      this.style.display = "none"; // Hide the pause button
      playButton.style.display = "inline-block"; // Show the play button
    });
  });
});
