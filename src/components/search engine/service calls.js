async function handleSearching(searching) {
    const result = await window.electron.search(searching);
    return result; 
}

async function searchMach(text) {
    const result = await window.electron.consult(text);
    return result; 
}

async function searchSimilarWords(text) {
    const result = await window.electron.similars(text);
    return result; 
}

async function getDictionaryNames () {
    const results = await window.electron.dictionaryNames();
    return results;
} 

export { handleSearching, searchMach, searchSimilarWords, getDictionaryNames };