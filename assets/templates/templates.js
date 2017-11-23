
var test = "<ul class='list'>{{>listItems}}</ul>";

var test2 = "<li class='list-item'>{{firstName}} {{lastName}}</li>";


// $j.getJSON('../assets/templates/datas/sample.json', function(data) {
//     var sampleTemplate = test;
//     var sampleTemplatePartial = {listItems: test2};
//     // ต้องเรียง parameters ตามลำดับ sampleTemplate > data > sampleTemplatePartial
//     var html = Mustache.to_html(sampleTemplate, data, sampleTemplatePartial);
//     $j('#sample-template').html(html);
// });

function tote555 (jsonPath, template1, template2, target) {
    $j.getJSON(jsonPath, function(data) {
        var sampleTemplate = template1;
        var sampleTemplatePartial = {listItems: template2};
        // ต้องเรียง parameters ตามลำดับ sampleTemplate > data > sampleTemplatePartial
        var html = Mustache.to_html(sampleTemplate, data, sampleTemplatePartial);
        target.html(html);
    });
}

tote555('../assets/templates/datas/sample.json', test, test2, $j('#sample-template'));

// ===========================================

$j.getJSON('../assets/templates/datas/sample-objects.json', function(data) {
    var sampleTemplate = "<ul class='list'>{{>listItems}}</ul>";
    var sampleTemplatePartial = {listItems: "<li class='list-item'>{{firstName}} {{lastName}}</li>"};
    // ต้องเรียง parameters ตามลำดับ sampleTemplate > data > sampleTemplatePartial
    var html = Mustache.to_html(sampleTemplate, data, sampleTemplatePartial);
    $j('#sample-template-objects').html(html);
});
