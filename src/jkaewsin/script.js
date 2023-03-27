let active = 'home';

$('document').ready(() => {

    if ($('body').html() === '<h1>This client is not supported.</h1>') {
        return
    }

    const navitem = $('#nav').children()

    navitem[0].className = 'active'

    navitem[0].onclick = () => {
        navitem[0].className = 'active'
        navitem[1].className = ''
        navitem[2].className = ''
    }
    
    navitem[1].onclick = () => {
        navitem[0].className = ''
        navitem[1].className = 'active'
        navitem[2].className = ''
    }
    
    navitem[2].onclick = () => {
        navitem[0].className = ''
        navitem[1].className = ''
        navitem[2].className = 'active'
    }
    
    window.addEventListener('scroll', () => {
        
        if (window.scrollY < $('#about').offset().top) {
            navitem[0].className = 'active'
            navitem[1].className = ''
            navitem[2].className = ''
        }
        
        else if (window.scrollY >= $('#about').offset().top && window.scrollY < $('#contact').offset().top - 10) {
            navitem[0].className = ''
            navitem[1].className = 'active'
            navitem[2].className = ''
        }

        else if (window.scrollY >= $('#contact').offset().top - 10) {
            navitem[0].className = ''
            navitem[1].className = ''
            navitem[2].className = 'active'
        }

    })

})
