$('document').ready(() => {

    const errMsg = "<h1><br>The current window width / height is not suitable to render this website.<br><br>Please readjust the width / height or use another device.</h1>"

    const bodyOnLoad = $('body').html()

    const checkUnavailable = (passWidth, passHeight) => {

        if (passWidth < 340 || passHeight < 520) {
            $('body').html(errMsg)
            return
        }

        if ($('body').html() === errMsg) {
            // set body to the saved body
            $('body').html(bodyOnLoad)
        }

    }

    // Check on page load once
    if ($(window).width() < 340 || $(window).height() < 520) {
        checkUnavailable($(window).width(), $(window).height())
    }

    // Check on window resize
    $(window).on('resize', function(){
        let currentWindow = $(this)
        checkUnavailable(currentWindow.width(), currentWindow.height())
    })


})
