// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // Log to console (for demonstration)
      console.log('Form submitted with data:', formData);
      
      // Show success message
      alert('Thank you for contacting Haven Health! We will get back to you within 24 hours.');
      
      // Reset form
      contactForm.reset();
      
      // TODO: Replace this with actual form submission to your backend
      // Example:
      // fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      //   alert('Message sent successfully!');
      //   contactForm.reset();
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      //   alert('An error occurred. Please try again.');
      // });
    });
  }
});
