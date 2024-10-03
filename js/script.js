document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const burgerMenuButton = document.querySelectorAll('.burger')
    const navBar = document.querySelectorAll('.navbar')
    const burgerItem = document.querySelectorAll('.burger-item')
    const openModalButton = document.querySelectorAll('.open-modal')
    const closeModalButton = document.querySelectorAll('.close-button')
    const modalBody = document.querySelectorAll('.modal-body')

    let isBurgerOpen = false
    let isOpenModal = false

    const toggleModal = () => {

        modalBody.forEach((modal)=> {
                if(isOpenModal){
                modal.classList.add('flex')
                modal.classList.remove('hidden')
                }else{
                    modal.classList.add('hidden')
                }
            })

    }
    const handleCloseNavBar = () => {
        isBurgerOpen = false
        navBar.forEach((nav)=> {
            nav.classList.remove('absolute', 'top-0', 'left-0','flex-col', 'flex', 'w-full', 'h-full')
            nav.style.position = 'relative'
            nav.style = ''
            nav.classList.add('hidden', 'justify-between','mt-[15px]')
        })
    }
    const highlightLink = () => {
        links.forEach((link) => {
            if (link.href === window.location.href) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    };

    const crossAnimation = () =>{
        burgerItem.forEach((element, index)=> {
            if(isBurgerOpen){
                element.classList.add('rotate-45', 'duration-300', 'ease-in-out')
                if(index === 0) element.style.transform = 'rotate(45deg) translate(11px, 10px)'
                if(index === 1) element.style.opacity = '0'
                if(index === 2) element.style.transform = 'rotate(-45deg) translate(4px, -3px)'
            }
            else {
                element.style = ''
                element.style.background = '#b4af91'
            }


        })
    }

    const toggleBurgerMenu = () => {

        navBar.forEach((nav) => {
            isBurgerOpen=!isBurgerOpen
            if(isBurgerOpen){
                nav.classList.add('absolute', 'top-0', 'left-0','flex-col', 'flex', 'w-full', 'h-full', 'p-2', 'items-center', 'z-50')
                nav.style.position = 'absolute'
                nav.style.background = '#222222'
                nav.style.justifyContent = 'center'
                nav.classList.remove('hidden', 'justify-between','mt-[15px]')
            }else{
                nav.classList.remove('absolute', 'top-0', 'left-0','flex-col', 'flex', 'w-full', 'h-full')
                nav.style.position = 'relative'
                nav.style = ''
                nav.classList.add('hidden', 'justify-between','mt-[15px]')
            }
        })
        crossAnimation()

    }

    burgerMenuButton.forEach((burger) =>{
        burger.addEventListener('click', ()=>{
            toggleBurgerMenu()
        })
    })

    openModalButton.forEach((modalButton) => {
        modalButton.addEventListener('click', ()=> {
            isOpenModal=!isOpenModal
            toggleModal()
        })
    })

    closeModalButton.forEach((closeButton) => {
        closeButton.addEventListener('click', ()=> {
            isOpenModal=!isOpenModal
            toggleModal()
        })
    })

    links.forEach((link) => {
        link.addEventListener('click', () => {
            handleCloseNavBar()
            crossAnimation()
            setTimeout(highlightLink, 100);
        });
    });

    highlightLink();
});