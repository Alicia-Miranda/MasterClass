export const domUtils = {
    showMessage: (message, type = "success") => {
      alert(message); // Pode ser substituído por um sistema de notificação avançado
    },
  
    clearContainer: (container) => {
      container.innerHTML = "";
    },
  
    toggleElementDisplay: (element, displayStyle) => {
      element.style.display = displayStyle;
    },
  };
  