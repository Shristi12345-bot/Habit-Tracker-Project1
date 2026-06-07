document.addEventListener('DOMContentLoaded', () => {
    // Password visibility toggle handler
    const toggleButtons = document.querySelectorAll('.toggle-password');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                button.style.color = '#1E293B';
            } else {
                passwordInput.type = 'password';
                button.style.color = '#64748B';
            }
        });
    });

    // Handle Form Processing
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Direct programmatic navigation to dashboard module
        window.location.href = 'progress.html';
    });
});
