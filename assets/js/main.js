/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== ABOUT TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach((tab) =>{
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('tab__active');
            });

            target.classList.add('tab__active');

            tabs.forEach((tab) => {
                tab.classList.remove('tab__active');
            });

            tab.classList.add('tab__active');

        });
    })



/*=============== CONTACT FORM =============== */

const contactForm= document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail= document.getElementById('contact-email'),
    contactSubject= document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessage.value === ''
    )   {
        errorMessage.textContent = 'Write all the input fields'
    }
    else {
        emailjs.sendForm('service_5tjqfph','template_b54xe3l','#contact-form','nK732mfKmCJbU0Dhl')
        .then(()=>{
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message Sent ✓';

            //remove message after 5 seconds 
            setTimeout(()=>{
                errorMessage.textContent = '';
            },5000);
        }, (error) => { alert('OOPs! Something Went Wrong...', error) }
        
        );

        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value ='';
        contactMessage.value ='';
    }
};

contactForm.addEventListener('submit',sendEmail);

