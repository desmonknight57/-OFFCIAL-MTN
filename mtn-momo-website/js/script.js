// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Country and language detection
    initializeCountryLanguage();
    
    // Mobile menu functionality
    setupMobileMenu();
    
    // Modal functionality
    setupModals();
    
    // Cookie consent
    setupCookieConsent();
}

function initializeCountryLanguage() {
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function getCookie(cname) {
        let name = cname + '=';
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }

    let country = getUrlParameter('country') || 
                  localStorage.getItem('country') || 
                  getCookie('country');

    let lang = getUrlParameter('lang') || 
               getCookie('lang') || 
               'en';

    // Store values
    if (country) {
        localStorage.setItem('country', country);
        document.cookie = `country=${country};path=/;max-age=2592000`; // 30 days
    }
    
    if (lang) {
        localStorage.setItem('lang', lang);
        document.cookie = `lang=${lang};path=/;max-age=2592000`;
    }

    console.log('Country:', country);
    console.log('Language:', lang);
}

function setupMobileMenu() {
    const menuButton = document.getElementById('primary-mobile-menu');
    const menuContainer = document.getElementById('primary-menu-container');
    
    if (menuButton && menuContainer) {
        menuButton.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            menuContainer.style.display = isExpanded ? 'none' : 'block';
        });
    }
}

function setupModals() {
    // Modal functionality will be implemented here
    console.log('Modal setup complete');
}

function setupCookieConsent() {
    const cookieMsg = document.getElementById('cookiemsg');
    const dismissBtn = document.getElementById('dismiss-btn');
    
    if (cookieMsg && dismissBtn && localStorage.getItem('cookiesAccepted') !== 'true') {
        cookieMsg.style.display = 'flex';
        
        dismissBtn.addEventListener('click', function() {
            cookieMsg.style.display = 'none';
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }
}

// Additional utility functions
function showPopup() {
    document.getElementById("contactus").style.display = "block";
}

function checkOsMomo() {
    const OSName = navigator.appVersion;
    if (OSName.indexOf("Win") !== -1) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.consumerug";
    } else if (OSName.indexOf("Mac") !== -1) {
        window.location.href = "https://apps.apple.com/ug/app/mtn-momo/id1474080783";
    } else {
        window.location.href = "https://play.google.com/store/apps/details?id=com.consumerug";
    }
}