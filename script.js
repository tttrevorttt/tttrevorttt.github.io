document.addEventListener('DOMContentLoaded', () => {

  // Contact form submission
  const contactForm = document.querySelector('#contact form');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitContactForm(contactForm);
  });

  // Animate products
  const productGrids = document.querySelectorAll('.product-grid');
  const observer = new IntersectionObserver(animateProducts, {
    root: null,
    threshold: 0.25
  });

  productGrids.forEach(productGrid => {
    productGrid.querySelectorAll('.product').forEach(product => {
      observer.observe(product);
    });
  });
});

function submitContactForm(form) {
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  // You can replace this with code to send the data to your backend or a third-party service
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Clear the form after submission
  form.reset();
}

function animateProducts(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}
