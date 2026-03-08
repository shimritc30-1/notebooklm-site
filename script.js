// Initialize Lucide Icons
lucide.createIcons();

// Copy to Clipboard Functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const text = this.getAttribute('data-prompt');
        const originalContent = this.innerHTML;
        
        navigator.clipboard.writeText(text).then(() => {
            // Show copied state
            this.classList.add('copied');
            this.innerHTML = `<i data-lucide="check-circle-2" class="icon-sm text-yellow"></i><span class="copy-tooltip">הועתק!</span>`;
            lucide.createIcons();
            
            // Revert after 2 seconds
            setTimeout(() => {
                this.classList.remove('copied');
                this.innerHTML = `<i data-lucide="copy" class="icon-sm"></i><span class="copy-tooltip">הועתק!</span>`;
                lucide.createIcons();
            }, 2000);
        });
    });
});

// Extension Expand/Collapse Functionality
window.toggleExtension = function(id) {
    const card = document.getElementById(id);
    if (!card) return;
    
    const details = card.querySelector('.extension-details');
    const btnText = card.querySelector('.btn-text');
    
    // Check if currently open
    const isOpen = details.classList.contains('open');
    
    // Close all extensions first
    document.querySelectorAll('.extension-details').forEach(el => {
        el.classList.remove('open');
        // Reset button text for all
        const parentCard = el.closest('.extension-card');
        if (parentCard) {
            const btn = parentCard.querySelector('.btn-text');
            if (btn) btn.textContent = 'איך זה עובד?';
        }
    });

    // If it wasn't open, open it now
    if (!isOpen) {
        details.classList.add('open');
        btnText.textContent = 'פחות מידע';
    }
};

// Scroll to Top Functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Set Current Year
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Add simple entrance animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.organic-card, .section-title, .subtitle').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});
