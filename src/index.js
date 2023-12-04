const z = document.querySelectorAll('main>div>div>button')
        function _click(e) {
                let x = e.nextElementSibling


                if (x.classList.contains('_block')) {
                        x.classList.remove('_block')
                        x.classList.add('_none')
                } else {
                        x.classList.remove('_none')
                        x.classList.add('_block')
                }


        }