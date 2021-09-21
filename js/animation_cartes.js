const options = {
  rootMargin: '-30% 0px -40% 0px',
  threshold: 0.5 // half of item height
}

const points_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const point = entry.target.querySelector('.carte');
  
      if (entry.isIntersecting) {
        point.classList.add('light');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      point.classList.remove('light');
    });
  }, options);
  
  let points_items = document.querySelectorAll('.cartes');
  
  
  points_items.forEach(function (item) {
      
    points_observer.observe(item);

  })

  const cartes_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const carte = entry.target.querySelector('.carte');
  
      if (entry.isIntersecting) {
        carte.classList.add('display');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      // carte.classList.remove('display');
    });
  });

  let cartes_items = document.querySelectorAll('.cartes');

  cartes_items.forEach(function (item) {
      
    cartes_observer.observe(item);

  })