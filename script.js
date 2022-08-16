(function() {
    window.addEventListener('load', init);

    function init() {
        console.log('Hover over the Clouds!')
        document.getElementById('intro_text').addEventListener('mouseover', emphasizeText);
    }

    function emphasizeText() {
        let spanArray = document.querySelectorAll('#intro_info span');
        let regularText = document.querySelectorAll('p');
        console.log(spanArray);
        for (let i = 0; i < spanArray.length; i++) {
            spanArray[i].classList.add('blur')
        }
        for (let j = 0; j < regularText.length; j++) {
            regularText[j].classList.add('blur')
        }
        for (let i = 0; i < spanArray.length; i++) {
            spanArray[i].classList.remove('blur');
            spanArray[i].classList.add('emphasis');
        }
        // setTimeout(function() {
        //     let spanArray = document.querySelectorAll('#intro_info span');
        //     console.log(spanArray);
        //     for (let i = 0; i < spanArray.length; i++) {
        //         spanArray[i].classList.remove('emphasis');
        //     }
        // }, 5000);
    }


})();