/* destacar visualmente o item do menu que está atualmente selecionado. */
const allSideMenu = document.querySelectorAll('#sidebar .side-menu-top li a, #sidebar .side-menu-bottom li a');

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
const menuBar = document.querySelector('#content nav i.bx.bx-list-ul');
const sideBar = document.getElementById('sidebar');
const sideText = document.querySelectorAll('#sidebar .side-menu .text');

menuBar.addEventListener('click', function () {
    sideBar.classList.toggle('hide');
})

if(window.innerWidth < 768) {
    sideBar.classList.add('hide');
}
/* TOGGLE SIDEBAR END*/

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');
searchButton.addEventListener('click', function(e){
    if(window.innerWidth < 576){
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }        
    }
})


if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
}

window.addEventListener('resize', function(){
        if (window.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
})