function getJSON(url) {
  $.ajaxSetup({
    async: false,
  });

  var jsonCall = $.getJSON(url, function (result) {
    out = result;
  });

  return out;

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
function cutout(dataAlsArray, tage) {
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

    beginn = (tagDesHochpunkts - 60) * -1;

    for(i = 0; i < dataAlsArray.length; i++){
      var nummer = beginn + i;
      dataAlsArray[i].x = "" + nummer + "";
    }

    console.log(dataAlsArray);

  }else {

    beginn = tagDesHochpunkts - 60;

    for (i = 0; i < beginn; i++) {
      dataAlsArray.splice(0, 1);
    }

    for (i = 0; i < dataAlsArray.length; i++) {
      dataAlsArray[i].x = "" + i + "";
    }
    
  }


  if (dataAlsArray.length - tage > 0) {
    var laenge = dataAlsArray.length - tage;
    for (i = 0; i < laenge; i++) {
      dataAlsArray.splice(tage, 1);
    }
  }

  return dataAlsArray;
}
function getData(url, tage) {
  var json = getJSON(url);
  var dataAlsArray = getFilteredData(json).items;
  var dataErgebnis = cutout(dataAlsArray, tage);

  return dataErgebnis;
}
