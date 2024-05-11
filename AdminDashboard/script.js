/* destacar visualmente o item do menu que está atualmente selecionado. */
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i=> {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

/* TOGGLE SIDEBAR */
const menuBar = document.querySelectorAll('#content nav i.bx.bx-list-ul');
const sideBar = document.getElementById(sidebar);
menuBar.addEventListener('click', function (){
    sideBar.classList.toggle('hide');
})