function cachingDecoratorNew(func) {
  function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
      const hash = args.join(',') // получаем правильный хэш
      let idx = cache.findIndex((cacheRecord) => cacheRecord.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
      if (idx !== -1) { // если элемент не найден
        console.log("Из кэша: " + cache[idx].result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + cache[idx].result;
      }

      let result = func.call(this, ...args); // в кэше результата нет - придётся считать
      cache.push({ hash, result }); // добавляем элемент с правильной структурой
      if (cache.length > 5) {
        cache.push({ hash, result }); // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
    return wrapper;

  }
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
