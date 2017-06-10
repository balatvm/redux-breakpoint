var debouncer = function(func, delay) {
  var inDebounce = undefined;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(inDebounce);
    return inDebounce = setTimeout(function() {
      return func.apply(context, args);
    }, delay);
  }
}

export default debouncer;