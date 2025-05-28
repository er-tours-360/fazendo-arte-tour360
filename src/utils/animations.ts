export const setupScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with the fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
};

export const createParticles = (count: number) => {
  const container = document.querySelector('.particles');
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random size
    const size = Math.random() * 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random opacity
    particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
    
    // Random animation
    particle.style.animation = `pulse ${Math.random() * 8 + 4}s infinite`;
    
    container.appendChild(particle);
  }
};