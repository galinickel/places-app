'use strict';
const userPrefs = 'user-prefs';
var gPrefs;


function createUserPrefs(userBgCol, userTxtCol, bDay) {
    var userPrefs = {
        userBgCol,
        userTxtCol,
        bDay,
    };
    return userPrefs;
}

function saveUsersToStorage() {
    saveToStorage(userPrefs, gPrefs);
}

function loadUserFromStorage() {
    var res = loadFromStorage(userPrefs);
    return res;
}
function createPrefs(userBgCol, userTxtCol, bDay) {
    gPrefs = createUserPrefs(userBgCol, userTxtCol, bDay);
    saveUsersToStorage();
    return gPrefs;
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}
