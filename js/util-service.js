'use strict'
function init() { 
    //FIXME: changing color on init not working at themoment
    let userBgCol = loadFromStorage(userPrefs.userBgCol)
    let userTxtCol = loadFromStorage(userPrefs.userTxtCol)
    console.log(loadFromStorage(userPrefs));
    changeCols(userBgCol, userTxtCol)
    initMap()
    
}