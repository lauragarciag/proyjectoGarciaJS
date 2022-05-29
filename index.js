const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_zgv076e';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mensaje';
      alert('¡Mensaje enviado con éxito!');
    }, (err) => {
      btn.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
    });
});