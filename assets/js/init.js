var executed = false;

$('document').ready(() => {
    
    const initScrollTop = (() => {
    

        return () => {
            if (!executed) {
    
                executed = true;
    
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#header").offset().top
                }, 0);
    
            }
        };
    
    })();
    
    initScrollTop();

})
