export function showNotification(message: string) {
  const element = document.createElement('div');
  element.classList.add('bottom-notification');
  element.textContent = message;
  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 3000);
}
