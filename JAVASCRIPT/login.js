function showTab(tab) {
  // Update tab styles
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (tab === 'login') {
      loginTab.classList.add('border-b-2', 'border-purple-500', 'text-purple-600');
      registerTab.classList.remove('border-b-2', 'border-purple-500', 'text-purple-600');
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
  } else {
      registerTab.classList.add('border-b-2', 'border-purple-500', 'text-purple-600');
      loginTab.classList.remove('border-b-2', 'border-purple-500', 'text-purple-600');
      registerForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
  }
}

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (this.querySelector('#confirmPassword')) {
          const password = document.getElementById('registerPassword').value;
          const confirmPassword = document.getElementById('confirmPassword').value;

          if (password !== confirmPassword) {
              alert('Las contraseñas no coinciden');
              return;
          }
      }

      console.log('Formulario enviado');
  });
});