$('document').ready(() => {

    const bodyOnLoad = $('body').html()

    $(window).on('resize', function(){
        let win = $(this)

        if (win.width() < 350) { 
            $('body').html('<h1>This client is not supported.</h1>')
            return
        } else {
            if ($('body').html() === '<h1>This client is not supported.</h1>') {
                // set body to the saved body
                $('body').html(bodyOnLoad)
                
            }
        }

    })

})