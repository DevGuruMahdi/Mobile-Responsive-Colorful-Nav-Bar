const tglBtn = document.querySelector('.tgl_btn')
const tglBtnIcon = document.querySelector('.tgl_btn i')
const dropDown = document.querySelector('.dropdown')


tglBtn.onclick = function () {
    dropDown.classList.toggle('open')
    const isOpen = dropDown.classList.contains('open')
    tglBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
    
}