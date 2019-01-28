
var definition = (function() {
    var word;       // stores the name of the town
    var result;   // stores the JSON response data from the API call

    return {
        setWord: function(t, callback) {
            word = t;
            //var url = 'https://api.datamuse.com/words?rel_jjb='+t;
           var url = 'http://router.project-osrm.org/nearest/v1/driving/13.388860,52.517037?number=3&bearings=0,20';
            var xhr = new XMLHttpRequest;
            xhr.open('GET', url, true);
            xhr.onload = function(e) {
                if (xhr.status === 200) {
                    result = JSON.parse(xhr.responseText);
                    callback(result);
                }
            }
            xhr.onerror = function(e) {
                callback(xhr.statusText);
            }
            xhr.send();
        },
        getForecast: function() {
            return result;
        }
    }
}());