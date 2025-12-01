document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if(mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });

        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Reservations Modal
    const reservationsBtn = document.getElementById('reservations-btn');
    const reservationsBtnMobile = document.getElementById('reservations-btn-mobile');
    const reservationModal = document.getElementById('reservation-modal');
    const modalCancelBtn = document.getElementById('modal-cancel-btn');

    const openModal = () => {
        if(reservationModal) reservationModal.classList.remove('hidden');
    }
    const closeModal = () => {
        if(reservationModal) reservationModal.classList.add('hidden');
    }

    if(reservationsBtn) reservationsBtn.addEventListener('click', openModal);
    if(reservationsBtnMobile) reservationsBtnMobile.addEventListener('click', openModal);
    if(modalCancelBtn) modalCancelBtn.addEventListener('click', closeModal);
    if(reservationModal) reservationModal.addEventListener('click', (e) => {
        if (e.target === reservationModal) {
            closeModal();
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation
    const reservationForm = document.getElementById('reservation-form');
    const reservationModalForm = document.getElementById('reservation-modal-form');

    const validateForm = (form) => {
        let isValid = true;
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.classList.add('border-red-500');
            } else {
                input.classList.remove('border-red-500');
            }
        });
        return isValid;
    }

    if(reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            if (!validateForm(reservationForm)) {
                e.preventDefault();
                alert('Please fill out all fields.');
            }
        });
    }

    if(reservationModalForm) {
        reservationModalForm.addEventListener('submit', (e) => {
            if (!validateForm(reservationModalForm)) {
                e.preventDefault();
                alert('Please fill out all fields.');
            }
        });
    }
});