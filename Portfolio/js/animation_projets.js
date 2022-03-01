const options_projets = {
  rootMargin: '-30% 0px -20% 0px',
  threshold: 0.5 // half of item height
}

const projets_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const projet = entry.target.querySelector('.blur_background');
  
      if (entry.isIntersecting) {
        projet.classList.add('zoom');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      projet.classList.remove('zoom');
    });
  }, options_projets);
  
  let projets_items = document.querySelectorAll('.projet');
  
  projets_items.forEach(function (item) {
      
    projets_observer.observe(item);

  })