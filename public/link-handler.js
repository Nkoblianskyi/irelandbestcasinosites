
(function () {
    console.log('[link-handler] init');

    function applyParams(link) {
        let href = link.getAttribute('href') || '';
        const params = new URLSearchParams(window.location.search);
        let utmTerm = params.get('utm_term');
        let gclid = params.get('gclid');

        // зберігаємо, щоб "прилипало"
        if (utmTerm) sessionStorage.setItem('utm_term', utmTerm);
        if (gclid) sessionStorage.setItem('gclid', gclid);

        // якщо URL чистий — беремо з sessionStorage
        utmTerm = utmTerm || sessionStorage.getItem('utm_term');
        gclid = gclid || sessionStorage.getItem('gclid');

        if (href.includes('gbraid') || href.includes('wbraid')) {
            href = href
                .replace(/gbraid=([^&]*)/, 'gclid=$1')
                .replace(/wbraid=([^&]*)/, 'gclid=$1');
        } else if (utmTerm || gclid) {
            const sep = href.includes('?') ? '&' : '?';
            href = `${href}${sep}utm_term=${utmTerm || ''}&gclid=${gclid || ''}`;
        }

        link.setAttribute('href', href);
    }

    // Ця функція обробляє ВСІ лінки
    window.updateLinkParams = function updateLinkParams() {
        document.querySelectorAll('a').forEach(applyParams);
        console.log('[link-handler] updateLinkParams complete');
    };

    // Виконуємо вперше наявні лінки
    window.updateLinkParams();

    console.log('[link-handler] ready');
})();
