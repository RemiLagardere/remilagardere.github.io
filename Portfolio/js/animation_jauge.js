const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const jauge = entry.target.querySelector('.contenu');
  
      if (entry.isIntersecting) {
        jauge.classList.add('slide');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      // jauge.classList.remove('slide');
    });
  });
  
  let items = document.querySelectorAll('.contenant');
  
  items.forEach(function (item) {
      
    observer.observe(item);

  })