console.log("test");
//this is the function where we store the cookies 
const cookieStorage = {
  getItem: (key) => {
    const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value}), {});
    return cookies[key];  
  },
  setItem: (key, value) => {
    document.cookie = `${key}=${value}`
  },
};    

const storageType = cookieStorage;
const consetPropertyName = 'consent';


const shouldShowPopup = () => !storageType.getItem(consetPropertyName);
const saveToStorage = () => storageType.setItem(consetPropertyName, true );

window.onload = () => {
  if (shouldShowPopup()) {
    const consent = confirm('agree to contions');
    if (consent) {
      saveToStorage();
    }
  }
}; 