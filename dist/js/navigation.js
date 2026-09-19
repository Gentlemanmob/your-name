document.addEventListener('DOMContentLoaded', () => {
    const mobileBreakpoint = window.matchMedia('(max-width: 768px)');

    document.querySelectorAll('header').forEach((header, index) => {
        const nav = header.querySelector('nav');
        if (!nav) return;

        const navId = nav.id || `site-navigation-${index + 1}`;
        nav.id = navId;

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'nav-toggle';
        toggle.setAttribute('aria-controls', navId);
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', '打开导航菜单');
        toggle.innerHTML = '<span class="nav-toggle__icon" aria-hidden="true"></span>';

        header.insertBefore(toggle, nav);
        header.classList.add('nav-ready');

        const closeMenu = () => {
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', '打开导航菜单');
        };

        toggle.addEventListener('click', () => {
            const shouldOpen = !nav.classList.contains('is-open');
            nav.classList.toggle('is-open', shouldOpen);
            toggle.setAttribute('aria-expanded', String(shouldOpen));
            toggle.setAttribute('aria-label', shouldOpen ? '关闭导航菜单' : '打开导航菜单');
        });

        nav.addEventListener('click', event => {
            if (event.target.closest('a')) closeMenu();
        });

        document.addEventListener('click', event => {
            if (!header.contains(event.target)) closeMenu();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                closeMenu();
                toggle.focus();
            }
        });

        mobileBreakpoint.addEventListener('change', event => {
            if (!event.matches) closeMenu();
        });
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.setAttribute('aria-current', 'page');
        }
    });
});
