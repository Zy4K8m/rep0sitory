const form = document.getElementById('tourism-membership-form');

        form.addEventListener('submit', function(event) {
            let isValid = true;

          
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

          
            const firstName = document.getElementById('first-name');
            if (!firstName.value.trim()) {
                document.getElementById('first-name-error').textContent = 'First name is required.';
                isValid = false;
            }

            
            const lastName = document.getElementById('last-name');
            if (!lastName.value.trim()) {
                document.getElementById('last-name-error').textContent = 'Last name is required.';
                isValid = false;
            }

         
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address.';
                isValid = false;
            }

           
            const phone = document.getElementById('phone');
            const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
            if (!phoneRegex.test(phone.value)) {
                document.getElementById('phone-error').textContent = 'Please enter a valid phone number in the format 123-456-7890.';
                isValid = false;
            }

            
            if (!isValid) {
                event.preventDefault();
            }
        });