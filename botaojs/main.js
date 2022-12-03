const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.addEventListener('click', remove)
function remove(){
    modalWrapper.classList.remove('invisible')

}
//buttonOpenModal.onclick = function () {
//    modalWrapper.classList.remove('invisible')
//}

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'
    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
    else(alert("voce clicou errado"))
}) 