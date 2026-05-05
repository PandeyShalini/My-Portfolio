/* assets/js/components/contact.js */

export const initContact = () => {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const statusDiv = document.getElementById('form-status');

    if (!form || !submitBtn) return;

    // Initialize EmailJS with Public Key
    if (window.emailjs) {
        window.emailjs.init("tjaMPjseOkK3UFYbh");
    }

    form.onsubmit = async (e) => {
        e.preventDefault();
        
        const serviceID = 'service_ckkszje';
        const templateID = 'template_xtf3svk';

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending...`;
        
        try {
            const result = await window.emailjs.sendForm(serviceID, templateID, form);
            
            console.log('EmailJS Success:', result.text);
            
            statusDiv.textContent = "Message delivered perfectly! I will reach out soon.";
            statusDiv.className = "p-4 rounded-2xl text-center font-bold text-sm bg-green-500/10 text-green-400 border border-green-500/20";
            statusDiv.classList.remove('hidden');
            form.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            statusDiv.textContent = "Transmission failed. Please check your EmailJS Service/Template IDs.";
            statusDiv.className = "p-4 rounded-2xl text-center font-bold text-sm bg-red-500/10 text-red-400 border border-red-500/20";
            statusDiv.classList.remove('hidden');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message ⚡";
            setTimeout(() => statusDiv.classList.add('hidden'), 5000);
        }
    };
};

