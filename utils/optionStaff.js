const editStaffBtn = document.querySelectorAll('table tbody #edit-btn');
const profileStaffBtn = document.querySelectorAll('table tbody #profile-btn');
const deleteStaffBtn = document.querySelectorAll('table tbody #delete-btn');

const editStaffInterface = document.querySelector('.edit-staff-interface')
const deleteStaffInterface = document.querySelector('.delete-staff-interface')

const inputTextEle = document.querySelectorAll('.detail-staff-info p input');
const labelEle = document.querySelectorAll('.detail-staff-info p label');
const pEle = document.querySelectorAll('.detail-staff-info p');
const btnSaveStaff = document.getElementById('save-edit-staff');
const editDialog = document.querySelector('.edit-staff-dialog');
const closeDialogEle = document.getElementById('close-dialog');

const confirmDeleteBtn = document.getElementById('confirm-delete');
const cancelDeleteBtn = document.getElementById('cancel-delete');
const successfulDelete = document.querySelector('.successful-save-2')
const textSuccessfulDel = document.querySelector('.successful-save-2 p');
// console.log(pEle);


editStaffBtn.forEach((ele) => {
    ele.addEventListener('click', () => {
        btnSaveStaff.style.display = "";
        editStaffInterface.style.display = "block";
    })
})

profileStaffBtn.forEach((ele) => {
    ele.addEventListener('click', () => {
        pEle.forEach((e) => {
            const spanOfp = document.querySelector('.detail-staff-info p span');
            if (spanOfp){
                spanOfp.remove();
            }
        })
        btnSaveStaff.style.display = "none";
        editDialog.style.height = "370px";
        inputTextEle.forEach((e) => {
            e.style.display = "none";
        })
        labelEle.forEach((e) => {
            e.style.display = "none";
        })
        for (let i = 0; i < pEle.length; i++){
            const addSpan = document.createElement("span");
            let textInSpan = document.createTextNode("Nam");
            addSpan.appendChild(textInSpan);
            let calpx = pEle[i].innerText.length;
            if (i == 3){
                calpx = calpx - 174;
            }
            else if (i == 8){
                calpx = calpx - 197;
            }
            addSpan.style.left = calpx * 8 + "px";
            pEle[i].insertAdjacentElement("beforeend",addSpan);
        }
        editStaffInterface.style.display = "block";
    })
})

deleteStaffBtn.forEach((e) => {
    e.addEventListener('click', () => {
        
        deleteStaffInterface.style.display = "block";
        confirmDeleteBtn.addEventListener('click', () => {
            e.parentElement.parentElement.remove();
            deleteStaffInterface.style.display = "none";
            successfulDelete.style.display = "block";
            textSuccessfulDel.innerText = "Xóa thành công";
            autoClose();
        })
    })
})



cancelDeleteBtn.addEventListener('click', () => {
    deleteStaffInterface.style.display = "none";
})


closeDialogEle.addEventListener('click', () => {
    editStaffInterface.style.display = "none";
})

// When the user clicks anywhere outside of the dialog, close it
window.onclick = function(event) {
    if (event.target == editStaffInterface) {
        editStaffInterface.style.display = "none";
    }
}

function autoClose(){
    timeout = setTimeout(() => {
        successfulDelete.style.display = "none";
    }, 3000);
}
