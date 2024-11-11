 // Actualizar el valor mostrado cuando se mueve el slider
 const slider = document.getElementById('length');
 const lengthValue = document.getElementById('lengthValue');
 
 slider.oninput = function() {
     lengthValue.textContent = this.value;
 }

 function generatePassword() {
     const length = document.getElementById('length').value;
     const uppercase = document.getElementById('uppercase').checked;
     const lowercase = document.getElementById('lowercase').checked;
     const numbers = document.getElementById('numbers').checked;
     const symbols = document.getElementById('symbols').checked;

     if (!uppercase && !lowercase && !numbers && !symbols) {
         alert('Por favor seleccione al menos un tipo de carácter');
         return;
     }

     let chars = '';
     if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
     if (numbers) chars += '0123456789';
     if (symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

     let password = '';
     for (let i = 0; i < length; i++) {
         const randomIndex = Math.floor(Math.random() * chars.length);
         password += chars[randomIndex];
     }

     document.getElementById('passwordDisplay').textContent = password;
 }

 function copyToClipboard() {
     const password = document.getElementById('passwordDisplay').textContent;
     if (password === 'La contraseña aparecerá aquí') {
         alert('Primero genera una contraseña');
         return;
     }

     navigator.clipboard.writeText(password)
         .then(() => alert('Contraseña copiada al portapapeles'))
         .catch(err => alert('Error al copiar la contraseña'));
 }