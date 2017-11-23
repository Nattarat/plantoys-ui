
$.getJSON('../assets/templates/datas/sample.json', function(data) {
    var sampletemplate = "<h1>{{firstName}} {{lastName}}</h1>\
                          <p>{{blogURL}}</p>";
    var html = Mustache.to_html(sampletemplate, sampledata);
    $j('#sampleTemplate').html(html);
});
