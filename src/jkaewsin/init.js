$('document').ready(() => {

    const bodyOnLoad = $('body').html()

    $(window).on('resize', () => {

        let screen = $(this)

        if (screen.width() < 350 || screen.height() < 640) { 
            $('body').html('<h1>This client is not supported.</h1>')
            return
        } 
        
        if ($('body').html() === '<h1>This client is not supported.</h1>') {
            $('body').html(bodyOnLoad)
        }

    })

})