document.addEventListener("DOMContentLoaded", () => {
    const backgroundMusic = document.getElementById("background-music")
    const muteButton = document.getElementById("mute-button")
    const navToggle = document.getElementById("nav-toggle")
    const navLinks = document.getElementById("nav-links")
    let isMuted = false
  
    function playAudio() {
      backgroundMusic
        .play()
        .then(() => {
          console.log("Audio started playing automatically.")
        })
        .catch((error) => {
          console.log("Autoplay prevented:", error)
          // Try to play on first user interaction
          document.addEventListener(
            "click",
            () => {
              backgroundMusic.play()
            },
            { once: true },
          )
        })
    }
  
    function updateMuteButton() {
      if (isMuted) {
        muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>'
        muteButton.classList.add("muted")
      } else {
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>'
        muteButton.classList.remove("muted")
      }
    }
  
    muteButton.addEventListener("click", (e) => {
      e.preventDefault() // Prevent the default action
      if (isMuted) {
        backgroundMusic.play()
        isMuted = false
      } else {
        backgroundMusic.pause()
        isMuted = true
      }
      updateMuteButton()
    })
  
    // Toggle mobile menu
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      navToggle.classList.toggle("active")
    })
  
    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active")
        navToggle.classList.remove("active")
      })
    })
  
    // Try to play audio immediately
    playAudio()
  
    // Attempt to play audio again when the document becomes visible
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && backgroundMusic.paused && !isMuted) {
        playAudio()
      }
    })
  
    // Adjust volume (optional)
    backgroundMusic.volume = 0.5 // Set volume to 50%
  
    // Ensure audio restarts when it ends
    backgroundMusic.addEventListener("ended", () => {
      if (!isMuted) {
        backgroundMusic.currentTime = 0
        playAudio()
      }
    })
  })
  
  
  