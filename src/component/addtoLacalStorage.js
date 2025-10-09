// getStoreApp: localStorage থেকে data নেওয়া
const getStoreApp = () => {
  const storedApp = localStorage.getItem("Installapp");
  if (storedApp) {
    return JSON.parse(storedApp);
  } else {
    return [];
  }
};


const addToLocalStorage = (id) => {
  const storeappData = getStoreApp();
  if (storeappData.includes(id)) {
    alert("This app already exists");
  } else {
    storeappData.push(id);
    localStorage.setItem("Installapp", JSON.stringify(storeappData));
  }
};

const removeFromLocalStorage = (id) => {
  const storeappData = getStoreApp();
  const updatedData = storeappData.filter((appId) => parseInt(appId) !== id);
  localStorage.setItem("Installapp", JSON.stringify(updatedData));
};

export { addToLocalStorage, getStoreApp, removeFromLocalStorage };
