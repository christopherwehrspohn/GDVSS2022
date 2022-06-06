function getDataURL(url){
    //STOP asynchronous mist
    $.ajaxSetup({
    async: false
    });
  
    var jsonCall = $.getJSON(url,function(result){
        out = result;
    });
    //Return Dataset
    return out
    
    //START asynchronous mist
    $.ajaxSetup({
    async: true
    });
  }

    var data = getDataURL("https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Afghanistan/daily/20200101/20220509");
