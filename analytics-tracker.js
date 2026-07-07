(function () {
    // If your frontend and Node backend run on the same origin, 
    // you can use a relative URL path. Otherwise, provide your full backend host.
    const ANALYTICS_ENDPOINT = 'https://vtx-industries.onrender.com/api/analytics/visits';

    function getVisitorId() {
        let id = localStorage.getItem('vtx_visitor_id');
        if (!id) {
            id = 'v_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
            localStorage.setItem('vtx_visitor_id', id);
        }
        return id;
    }

    function getSessionId() {
        let id = sessionStorage.getItem('vtx_session_id');
        if (!id) {
            id = 's_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
            sessionStorage.setItem('vtx_session_id', id);
        }
        return id;
    }

    function trackVisit() {
        const payload = {
            visitorId: getVisitorId(),
            sessionId: getSessionId(),
            path: window.location.pathname,
            fullUrl: window.location.href,
            referrer: document.referrer || 'direct',
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            viewportSize: `${window.innerWidth}x${window.innerHeight}`,
            language: navigator.language,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });

        if (navigator.sendBeacon) {
            navigator.sendBeacon(ANALYTICS_ENDPOINT, blob);
        } else {
            fetch(ANALYTICS_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                keepalive: true
            }).catch(err => console.error('Tracking warning:', err));
        }
    }

    if (document.readyState === 'complete') {
        trackVisit();
    } else {
        window.addEventListener('load', trackVisit);
    }
})();