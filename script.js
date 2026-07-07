document.addEventListener('DOMContentLoaded', () => {
  const muteUnmuteBtn = document.getElementById('muteUnmuteBtn');
  const soundEffect = document.getElementById('soundEffect');
  const icon = document.getElementById('icon');
  let isMuted = false;

  // Attempt to play the sound once the page loads
  soundEffect.play().then(() => {
    console.log('Sound is playing automatically. true');
  }).catch((error) => {
    console.warn('Autoplay failed:', error);
  });

  muteUnmuteBtn.addEventListener('click', () => {
    if (isMuted) {
      soundEffect.muted = false;
      soundEffect.play(); // Play the sound again if unmuted
      icon.textContent = '🔊'; // Speaker icon
      muteUnmuteBtn.setAttribute('aria-label', 'Mute Sound');
      isMuted = false;
    } else {
      soundEffect.muted = true;
      icon.textContent = '🔇'; // Muted speaker icon
      muteUnmuteBtn.setAttribute('aria-label', 'Unmute Sound');
      isMuted = true;
    }
  });
});




 
gsap.utils.toArray('.page').forEach((section, i) => {
  gsap.fromTo(section, 
    { opacity: 0, scale: 0.8 }, 
    { 
      opacity: 1, scale: 1, 
      duration: 1.5, 
      ease: 'power4.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: "restart none none none" 
        
      }
    }
  );
});
 
 
 


 // aboust us 
 
 
window.addEventListener('scroll', function() {
  const image = document.querySelector('.girl');
  const rect = image.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      image.classList.add('scrolled');
  } else {
      image.classList.remove('scrolled');
  }
});
window.addEventListener('scroll', function() {
  const image = document.querySelector('.sqad');
  const rect = image.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      image.classList.add('scrolled');
  } else {
      image.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function () {
  const image = document.querySelector('.info');
  const rect = image.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    image.classList.add('scrolled'); // Add the class when visible
  } else {
    image.classList.remove('scrolled'); // Remove the class when out of view
  }
});

window.addEventListener('scroll', function () {
  const boxes = document.querySelectorAll('.black-box, .black-box2');
  boxes.forEach((box) => {
    const rect = box.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      box.classList.add('scrolled'); // Add the class when visible
    } else {
      box.classList.remove('scrolled'); // Remove the class when out of view
    }
  });
});

// Section 3

window.addEventListener('scroll', function() {
  const gamersElement = document.querySelector('.gamers');
  const rect = gamersElement.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    gamersElement.classList.add('scrolled');
  } else {
    gamersElement.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function() {
  const battelElement = document.querySelector('.battel');
  const rect = battelElement.getBoundingClientRect(); 
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    battelElement.classList.add('scrolled');
  } else {
    battelElement.classList.remove('scrolled');
  }
});




// footer

document.getElementById('scroll-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}
loaderAnimation()