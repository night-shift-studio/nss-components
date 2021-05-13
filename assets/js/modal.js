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

//this sets the cookie stored to be 'viewed'
const storageType = cookieStorage;
const modalPropertyName = 'viewed';

const shouldShowPopup = () => !storageType.getItem(modalPropertyName);
const saveToStorage = () => storageType.setItem(modalPropertyName, true );


//this gets the nss modal and hides it on page load
window.onload = () => {
  const nssModal = document.getElementById('nss-modal');
  const closeBtn = document.getElementById('close'); 
  
  const closeFn = event => {
    saveToStorage(storageType);
    nssModal.classList.add('hidden');
  };
  
  closeBtn.addEventListener('click', closeFn);
  
  
//this shows the modal after 2 seconds  
  if (shouldShowPopup(storageType)) {
    setTimeout(() => {
      nssModal.classList.remove('hidden');
    }, 2000);
  }
}; 