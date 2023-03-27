$('document').ready(() => {

    const bodyOnLoad = $('body').html()
    
    const checkUnavailable = (passWidth, passHeight) => {
        if (passWidth < 350 || passHeight < 640) { 
            $('body').html('<h1>This client is not supported.</h1>')
            return
        }

        if ($('body').html() === '<h1>This client is not supported.</h1>') {
            // set body to the saved body
               $('body').html(bodyOnLoad)        
        }
    }

    // Check on page load once
    if ($(window).width() < 350 || $(window).height() < 640) {
        checkUnavailable($(window).width(), $(window).height())
    }

    // Check on window resize
    $(window).on('resize', function(){
        let currentWindow = $(this)
        checkUnavailable(currentWindow.width(), currentWindow.height())
    })


})