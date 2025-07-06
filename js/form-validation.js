document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('form-success');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Resetar mensagens de erro
        document.querySelectorAll('.error-message').forEach(msg => {
            msg.style.display = 'none';
        });
        
        // Validar campos
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        if (name.value.trim() === '') {
            showError(name, 'Por favor, insira seu nome');
            isValid = false;
        }
        
        if (email.value.trim() === '') {
            showError(email, 'Por favor, insira seu e-mail');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Por favor, insira um e-mail válido');
            isValid = false;
        }
        
        if (subject.value.trim() === '') {
            showError(subject, 'Por favor, insira um assunto');
            isValid = false;
        }
        
        if (message.value.trim() === '') {
            showError(message, 'Por favor, insira sua mensagem');
            isValid = false;
        } else if (message.value.trim().length < 20) {
            showError(message, 'A mensagem deve ter pelo menos 20 caracteres');
            isValid = false;
        }
        
        // Se tudo estiver válido, mostrar mensagem de sucesso
        if (isValid) {
            contactForm.reset();
            successMessage.style.display = 'block';
            
            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
    
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        input.style.borderColor = '#e74c3c';
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Validação em tempo real
    document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
        input.addEventListener('input', function() {
            const errorElement = this.nextElementSibling;
            errorElement.style.display = 'none';
            this.style.borderColor = '#ddd';
        });
    });
});