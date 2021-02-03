'use strict'
function init() { 
    let userBgCol = loadFromStorage('user-prefs').userBgCol
    let userTxtCol = loadFromStorage('user-prefs').userTxtCol
    changeCols(userBgCol, userTxtCol)
    initMap()
    
}