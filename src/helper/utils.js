export function debounce(func, timeout = 500) {
  var timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
