let forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (form.checkValidity()) {
        event.preventDefault()
      }
      else if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })()

  const contraseña1 = document.getElementById("password1").value;
  const contraseña2 = document.getElementById("password2").value;
  const feedback = document.getElementById("feedback");

  const password = () => {
    if(contraseña1==contraseña2){
        console.log(contraseña1)
        feedback.classList.add('was-validated');
    }
  } 

