/* destaca o elemento do menu sidebar selecionado no momento . */
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
/* AND */ 


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

/* Quando o usuário clica no link Settings, mostrar o conteúdo do menu suspenso */

/* função fechar o submenu drop ao clicar */
  
    const closeButton = document.querySelector('.drop i.bx-x'); // Seleciona o ícone de fechamento  
    const submenu = document.querySelector('.drop'); // Seleciona o submenu que será fechado
    const openSubmenu = document.querySelector('.btt-openSubmenu'); // Seleciona o elemento responsavel em abrir o submenu settings
    const cleseSubmenu = document.querySelector('.side-menu-top li, .side-menu-top li a ');
    // Inicializa o submenu como fechado  
    submenu.style.display = 'none'; // Opção para garantir que o submenu esteja inicialmente fechado  

    // Funcionalidade para abrir o submenu ao clicar no botão de abrir  
    if (openSubmenu) {  
        openSubmenu.addEventListener('click', (event) => {  
            event.preventDefault(); // Previne o comportamento padrão do link  
            // Verifica se o submenu está fechado e alterna a visibilidade  
            if (submenu.style.display === 'none' || submenu.style.display === '') {  
                submenu.style.display = 'block'; // Abre o submenu  
            } else {  
                submenu.style.display = 'none'; // Fecha o submenu se já estiver aberto  
            }
        });  
    }  

    if (closeButton) {  
        closeButton.addEventListener('click', () => {  
            submenu.style.display = 'none'; // Fecha o submenu definindo o estilo como 'none'  
            
        });  
    }  
   // Adiciona o evento de clique a todos os elementos li do .side-menu-top  
    const sideMenuItems = document.querySelectorAll('.side-menu-top li');  
    sideMenuItems.forEach(item => {  
        item.addEventListener('click', () => {  
        submenu.style.display = 'none'; // Fecha o submenu ao clicar em um li do side-menu-top 
        });  
    }); 

/* DROPDOWN END */

// FUNCTION NIGHT MODE 
const body = document.body;  
const iconButtonDark = document.querySelector('.btt-darkmode img');  
const darkModeImg = "https://cdn3.iconfinder.com/data/icons/user-interface-black-edition/128/dark_mode-256.png";  
const lightModeImg = "https://cdn1.iconfinder.com/data/icons/simple-and-color-24px/24/Moon-Dark_mode-256.png";  

document.querySelector('.btt-darkmode').addEventListener('click', function() {  
    // Alternar classes de modo  
    body.classList.toggle('dark-mode');  
    body.classList.toggle('light-mode');  

    // Trocar a imagem do botão  
    if (body.classList.contains('dark-mode')) {  
        iconButtonDark.src = darkModeImg;  // Altere para imagem do modo escuro  
    } else {  
        iconButtonDark.src = lightModeImg;  // Altere para imagem do modo claro  
    }  
});

/* SearchButton e SearchForm */
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
/* SearchButton e SearchForm END */

