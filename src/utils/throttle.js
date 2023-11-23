export default function throttle(callback, delay) {
  let timer = null;

  return function decorator(...args) {
    if (timer) return;

    timer = setTimeout(function () {
      callback(...args);

      clearTimeout(timer);
      timer = null;
    }, delay);
  };
}
