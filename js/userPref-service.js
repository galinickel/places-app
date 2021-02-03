'use strict';


function onSavePrefs(ev) {
    ev.preventDefault();
    let userBgCol = document.querySelector('[name=user-bg-color]').value;
    let userBday = document.querySelector('[name=user-bday]').value;
    let userTxtCol = document.querySelector('[name=user-txt-color]').value;
    createPrefs(userBgCol, userTxtCol, userBday);
    changeCols(userBgCol, userTxtCol);
}

function changeCols(userBgCol, userTxtCol) { 
    let elBody = document.querySelector('body');
    elBody.style.backgroundColor = userBgCol;
    elBody.style.color = userTxtCol;
}