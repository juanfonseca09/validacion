(function () {
    'use strict'
    let forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  const contraseña1 = document.getElementById("password1");
  const contraseña2 = document.getElementById("password2");
  const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    if(contraseña1.value==contraseña2.value){
        
        contraseña2.classList.add('is-valid');
    } else {
        contraseña2.classList.add('is-invalid');
    }
  } 
)
