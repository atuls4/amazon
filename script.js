var toggleButton = document.getElementById('mobileMenu');
     toggleButton.addEventListener('click', toggleMobileMenu);

    var closeButton = document.getElementById('mobileMenu');
     closeButton.addEventListener('click', closeMenu);

   function toggleMobileMenu() {

     closeButton.style.display='block';
     document.body.classList.toggle('no-scroll');
     }

     function closeMenu() {
        mobileMenu.style.display = 'none';
        document.body.classList.remove('no-scroll');
     }