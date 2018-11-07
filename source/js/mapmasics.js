var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.938631, 30.323055], // Большая Конюшенная 19/8
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.behaviors.disable('scrollZoom'), // Отключение скрола колесом мыши

    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
          type: "Point",
          coordinates: [59.938631, 30.323055]
      },
  }, {
      // Метку можно перемещать.
      draggable: false
  })

      myMap.geoObjects
      .add(myGeoObject)
}
