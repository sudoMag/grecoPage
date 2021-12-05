export const setInLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}
  
export const getFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}

export const getJsonFromLocalStorage = (key) => {
    const result = JSON.parse(getFromLocalStorage(key));
    return result;
}

export const getEnabledDictionaryNamesFromLocalStorage = () => {
    const result = getJsonFromLocalStorage('enabledCardsGroup');
    return result;
}