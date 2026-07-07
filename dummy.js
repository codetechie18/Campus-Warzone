import { initGamingBackground } from "./gaming-background.js"

document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen")
  const cursor = document.getElementById("cursor")

  // Simulating loading time
  setTimeout(() => {
    loadingScreen.style.opacity = "0"
    setTimeout(() => {
      loadingScreen.style.display = "none"
    }, 500)
  }, 2000)

  initGamingBackground()

  // Custom cursor
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  })

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)"
  })

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)"
  })

  // Mobile navigation
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li")

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active")

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
      }
    })

    burger.classList.toggle("toggle")
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Countdown timer
  const countdownElement = document.getElementById("countdown")
  const eventDate = new Date("July 29, 2023 16:00:00").getTime()

  const countdownTimer = setInterval(() => {
    const now = new Date().getTime()
    const distance = eventDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

    if (distance < 0) {
      clearInterval(countdownTimer)
      countdownElement.innerHTML = "Event has started!"
    }
  }, 1000)

  // Form submission
  const form = document.getElementById("registration-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const teamName = document.getElementById("team-name").value
    const phone = document.getElementById("phone").value

    // Here you would typically send this data to a server
    console.log("Registration submitted:", { name, email, teamName, phone })
    alert("Registration successful! We'll contact you soon with more details.")
    form.reset()
  })

  // GSAP ScrollTrigger animations
  gsap.registerPlugin(ScrollTrigger)

  // Animate sections on scroll
  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
  })

  // Animate timeline items
  gsap.utils.toArray(".timeline-item").forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      x: item.classList.contains("left") ? -50 : 50,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
  })

  // Animate prize cards
  gsap.utils.toArray(".prize-card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
  })

  // Animate gallery images
  gsap.utils.toArray(".gallery-grid img").forEach((img) => {
    gsap.from(img, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      scrollTrigger: {
        trigger: img,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
  })

  // Animate organizer and volunteer cards
  gsap.utils.toArray(".organizer-card, .volunteer-card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
  })
})

