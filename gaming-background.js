class Particle {
    constructor(canvas, color) {
      this.canvas = canvas
      this.ctx = canvas.getContext("2d")
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 3 + 1
      this.baseSize = this.size
      this.speedX = Math.random() * 2 - 1
      this.speedY = Math.random() * 2 - 1
      this.color = color
    }
  
    update() {
      this.x += this.speedX
      this.y += this.speedY
  
      if (this.size > this.baseSize) {
        this.size -= 0.1
      }
  
      if (this.x < 0 || this.x > this.canvas.width) {
        this.speedX = -this.speedX
      }
      if (this.y < 0 || this.y > this.canvas.height) {
        this.speedY = -this.speedY
      }
    }
  
    draw() {
      this.ctx.fillStyle = this.color
      this.ctx.beginPath()
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      this.ctx.fill()
    }
  
    spread() {
      this.size = this.baseSize * 3
      this.speedX = (Math.random() - 0.5) * 8
      this.speedY = (Math.random() - 0.5) * 8
    }
  }
  
  export function initGamingBackground() {
    const canvas = document.createElement("canvas")
    document.body.insertBefore(canvas, document.body.firstChild)
    const ctx = canvas.getContext("2d")
  
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.zIndex = "-1"
  
    const particleArray = []
    const colors = ["#ffffff", "#ff6b35"] // White and Orange
  
    function createParticles() {
      particleArray.length = 0
      for (let i = 0; i < 150; i++) {
        particleArray.push(new Particle(canvas, colors[Math.floor(Math.random() * colors.length)]))
      }
    }
  
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update()
        particleArray[i].draw()
      }
      requestAnimationFrame(animateParticles)
    }
  
    function spreadParticles(x, y) {
      for (let i = 0; i < particleArray.length; i++) {
        const dx = particleArray[i].x - x
        const dy = particleArray[i].y - y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          particleArray[i].spread()
        }
      }
    }
  
    canvas.addEventListener("mousemove", (e) => {
      spreadParticles(e.clientX, e.clientY)
    })
  
    canvas.addEventListener("touchmove", (e) => {
      e.preventDefault()
      const touch = e.touches[0]
      spreadParticles(touch.clientX, touch.clientY)
    })
  
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
    })
  
    createParticles()
    animateParticles()
  }
  
  