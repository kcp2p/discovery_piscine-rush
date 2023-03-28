$('document').ready(() => {

    const errMsg = '<h1><br>The current device screen width/height is not compatable to render this website.<br><br>Please adjust the width/height of your screen or use another device.</h1>'

    const bodyOnLoad = $('body').html()

    const checkUnavailable = (minWidth, minHeight) => {

        if (minWidth < 340 || minHeight < 520) {
            $('body').html(errMsg)
            return
        }

        if ($('body').html() === errMsg) {
            $('body').html(bodyOnLoad)
        }

    }

    if ($(window).width() < 350 || $(window).height() < 640) {
        checkUnavailable($(window).width(), $(window).height())
    }

    $(window).on('resize', function(){
        let currentWindow = $(this)
        checkUnavailable(currentWindow.width(), currentWindow.height())
    })

})
