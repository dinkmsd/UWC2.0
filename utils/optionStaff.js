const editStaffBtn = document.querySelectorAll('table tbody #edit-btn');
const profileStaffBtn = document.querySelectorAll('table tbody #profile-btn');
const deleteStaffBtn = document.querySelectorAll('table tbody #delete-btn');

const editStaffInterface = document.querySelector('.edit-staff-interface')
const viewStaffInterface = document.querySelector('.info-staff-interface')

const deleteStaffInterface = document.querySelector('.delete-staff-interface')
const viewInfoInterface = document.querySelector('.info-staff-interface')

const inputTextEle = document.querySelectorAll('.detail-staff-info p input');
const labelEle = document.querySelectorAll('.detail-staff-info p label');
const pEle = document.querySelectorAll('.detail-staff-info p');
const btnSaveStaff = document.getElementById('save-edit-staff');
const editDialog = document.querySelector('.edit-staff-dialog');
const closeDialogEle = document.getElementById('close-dialog-edit');
const closeDialogView = document.getElementById('close-dialog-view');


const confirmDeleteBtn = document.getElementById('confirm-delete');
const cancelDeleteBtn = document.getElementById('cancel-delete');
const successfulDelete = document.querySelector('.successful-save-2');
const textSuccessfulDel = document.querySelector('.successful-save-2 p');
// console.log(pEle);

const idInfo = document.getElementById('id-info');
const nameInfo = document.getElementById('name-info');
const genderInfo = document.getElementById('gender-info');
const emailInfo = document.getElementById('email-info');
const positionInfo = document.getElementById('position-info');

const idText = document.getElementById('id-text');
const nameText = document.getElementById('name-text');
const emailText = document.getElementById('email-text');
const genderText = document.getElementsByName('gender');
const positionText = document.getElementsByName('position');

editStaffBtn.forEach((ele) => {
    ele.addEventListener('click', () => {
        btnSaveStaff.style.display = "block";
        editStaffInterface.style.display = "block";
        btnSaveStaff.addEventListener('click', () => {
            const rows = ele.parentElement.parentElement.getElementsByTagName("th");
            if (idText.value != '')
                rows[0].innerText = idText.value;
            if (nameText.value != '')
                rows[1].innerText = nameText.value;
            var i = 0;
            for (i = 0; i < 3; i++) {
                if (genderText[i].checked) {
                    break;
                }
            }
            switch (i) {
                case 0:
                    rows[2].innerText = "Nam";
                    break;
                case 1:
                    rows[2].innerText = "Nữ";
                    break;
                case 2: 
                    rows[2].innerText = "Other"
                    break;
                default:
                    break;
            }
            if (emailText.value != '')
                rows[3].innerText = emailText.value;
            i = 0;
            for (i = 0; i < 3; i++) {
                if (positionText[i].checked) {
                    break;
                }
            }
            switch (i) {
                case 0:
                    rows[4].innerText = "Back Officer";
                    break;
                case 1:
                    rows[4].innerText = "Tài xế";
                    break;
                case 2: 
                    rows[4].innerText = "Người lao công"
                    break;
                default:
                    break;
            }
            editStaffInterface.style.display = "none";
        })
    })
})

profileStaffBtn.forEach((ele) => {
    ele.addEventListener('click', () => {
        const rows = ele.parentElement.parentElement.getElementsByTagName("th");
        idInfo.innerText = rows[0].innerText; 
        nameInfo.innerText = rows[1].innerText;
        genderInfo.innerText = rows[2].innerText;
        emailInfo.innerText = rows[3].innerText;
        positionInfo.innerText = rows[4].innerText;
        viewInfoInterface.style.display = "block";
    })
})

deleteStaffBtn.forEach((e) => {
    e.addEventListener('click', () => {
        console.log("HELLO")
        deleteStaffInterface.style.display = "block";
        confirmDeleteBtn.addEventListener('click', () => {
            e.parentElement.parentElement.remove();

            // let changee = e.parentElement.parentElement.getElementsByTagName("th");
            // changee[0].innerHTML = "Mot hai ba";

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

closeDialogView.addEventListener('click', () => {
    viewStaffInterface.style.display = "none";
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
