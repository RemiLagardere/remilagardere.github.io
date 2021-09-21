const titres_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const titre = entry.target.querySelector('h1');
  
      if (entry.isIntersecting) {
        titre.classList.add('slide');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      // titre.classList.remove('slide');
    });
  });
  
  let titres_items = document.querySelectorAll('.section-title');
  
  titres_items.forEach(function (item) {
      
    titres_observer.observe(item);

  })