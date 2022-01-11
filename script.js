let arrow = document.querySelectorAll('.arrow');


for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', function(e) {
        let arrowParent = e.target.parentElement.parentElement;
        console.log(arrowParent);
        arrowParent.classList.toggle('showMenu')
    });
}

let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.bx-menu');
console.log(sidebar, sidebarBtn);
sidebarBtn.addEventListener('click', function() {
    sidebar.classList.toggle('close');
});