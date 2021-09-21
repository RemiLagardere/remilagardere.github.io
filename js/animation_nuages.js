

const nuages_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const nuage = entry.target.querySelector('img');
  
      if (entry.isIntersecting) {
        nuage.classList.add('zoom');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      // nuage.classList.remove('zoom');
    });
  });
  
  let nuages_items = document.querySelectorAll('.logo_image');
  
  nuages_items.forEach(function (item) {
      
    nuages_observer.observe(item);

  })