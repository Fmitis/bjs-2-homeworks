function cachingDecoratorNew(func) {
  let cashe = [];
  let counter = 0;

  function wrapper(...args) {

    const hash = args.join(',');

    if (hash in cashe) {
      return "Из кэша: " + cashe[hash];
    }
    if (counter >= 5) {
      delete cashe[Object.keys(cashe)[0]];
    }
    counter++;
    cashe[hash] = func(...args);
    return "Вычисляем: " + cashe[hash];
  }

  return wrapper;
}



function debounceDecoratorNew(func, ms) {

  let timeout = null;;
  let repeatCall = false;

  function wrapper(...rest) {

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      repeatCall = false;
      return func.call(...rest);
    }, delay);
    if (!repeatCall) {
      repeatCall = true;
      func.call(...rest);
    }
  }

  return wrapper;
}

function debounceDecorator2(func, ms) {

  let timer = null;
  let timerStatus = false;
  wrapper.count = 0;

  function wrapper(...rest) {
    ++wrapper.count;
    if (!timerStatus) {
      func.call(this, ...rest);
    };
    timerStatus = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(this, ...rest);
      timerStatus = false;
    }, ms);
  };
  return wrapper;
}
