export function debounce(fn, time) {
  let startTime, interval = time || 300, clock;
  return function(e) {
    let  targetValue = e.target.value;
    if (clock) {
      if ((new Date()).getTime - startTime > interval) {
        clearTimeout(clock);
      }
    }
    startTime = (new Date()).getTime();
    clock = setTimeout(() => {
      fn(targetValue);
      clearTimeout(clock);
    }, interval);
  }
}