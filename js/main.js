AOS.init();

function openSideMenu() {
    document.getElementById('side-menu').style.width='160px';
    document.getElementById('side-menu').style.fontSize='60%';
    document.getElementById('content').style.marginLeft = '160px';
}
function closeSideMenu() {
    document.getElementById('content').style.marginLeft = '64px';
    document.getElementById('side-menu').style.fontSize = '0px';
    document.getElementById('side-menu').style.width = '0px';
}