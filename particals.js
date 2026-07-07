class Particle {
    constructor(canvas) {
      this.canvas = canvas
      this.ctx = canvas.getContext("2d")
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      }
      this.radius = Math.random() * 2 + 1
      this.color = `rgba(255, 107, 53, ${Math.random() * 0.3 + 0.2})` // Primary color with reduced opacity
    }
  
    draw() {
      this.ctx.beginPath()
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      this.ctx.fillStyle = this.color
      this.ctx.fill()
    }
  
    update() {
      this.x += this.velocity.x
      this.y += this.velocity.y
  
      if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
        this.velocity.x = -this.velocity.x
      }
  
      if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
        this.velocity.y = -this.velocity.y
      }
  
      this.draw()
    }
  }
  
  export function initParticles() {
    const canvas = document.getElementById("particle-canvas")
    const ctx = canvas.getContext("2d")
  
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  
    const particles = []
    const particleCount = 50 // Reduced particle count for better performance
  
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas))
    }
  
    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
  
      particles.forEach((particle) => particle.update())
    }
  
    animate()
  
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })
  }
  
  