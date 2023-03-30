
$('document').ready(() => {

    let executed = false;

    const initScrollTop = (() => {

        return () => {
            if (!executed) {

                executed = true;
                const navitem = $('#nav').children()

                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#header").offset().top
                }, 0);

                navitem[0].className = 'active'
                navitem[1].className = ''
                navitem[2].className = ''

            }
        };
    })();

    initScrollTop();

})
