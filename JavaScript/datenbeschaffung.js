function getDataURL(url) {
  //STOP asynchronous mist
  $.ajaxSetup({
    async: false,
  });

  var jsonCall = $.getJSON(url, function (result) {
    out = result;
  });
  //Return Dataset
  return out;

  //START asynchronous mist
  $.ajaxSetup({
    async: true,
  });
}

function getFilteredData(data) {
  for (i = 0; i < data.items.length; i++) {
    delete data.items[i].project;
    delete data.items[i].granularity;
    delete data.items[i].article;
    delete data.items[i].agent;
    delete data.items[i].access;

    data.items[i].x = data.items[i].timestamp;
    delete data.items[i].timestamp;

    data.items[i].y = data.items[i].views;
    delete data.items[i].views;
  }
  return data;
}
function cutout(dataAlsArray) {
  var hoechsterPunkt = 0;
  var tagDesHochpunkts = 0;
  var beginn = 0;
  for (i = 0; i < dataAlsArray.length - 1; i++) {
    if (dataAlsArray[i].y > hoechsterPunkt) {
      hoechsterPunkt = dataAlsArray[i].y;
      tagDesHochpunkts = i;
    }
  }
  if (tagDesHochpunkts < 60) {
    beginn = 0;
  } else {
    beginn = tagDesHochpunkts - 60;
  }
  for (i = 0; i < beginn; i++) {
    dataAlsArray.splice(0, 1);
  }

  if (dataAlsArray.length - 200 > 0) {
    var laenge = dataAlsArray.length - 200;
    for (i = 0; i < laenge; i++) {
      dataAlsArray.splice(200, 1);
    }
  }
  for (i = 0; i < dataAlsArray.length; i++) {
    dataAlsArray[i].x = "" + i + "";
  }
  return dataAlsArray;
}
function getData(url) {
  var data = getDataURL(url);
  var dataAlsArray = getFilteredData(data).items;
  var dataErgebnis = cutout(dataAlsArray);

  return dataErgebnis;
}