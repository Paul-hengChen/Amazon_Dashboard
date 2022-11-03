export const readFile = (path) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', path, false);
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200 || xhr.status !== 0) return;
    document.write(xhr.responseText);
  });
  xhr.send();
};
