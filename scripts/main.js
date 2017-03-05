    var url = "http://localhost:3005/posts"
    // var url = "server/entries.json"

$(document).ready(function(){
    $("#btnLoad").on('click', loadPosts);
    $('#btnAdd').on('click', savePost)
});

function savePost(e) {
    e.preventDefault();
    var postObj = $('#frm').serialize();

    $.post(url, postObj, function(result){
        loadPosts();
    });
}

function loadPosts(){
    $.get(url, function(result){
       
        var templateHtml = $("#entry-template").html();
        var hbs = Handlebars.compile(templateHtml);
        
        var obj = {
            entry: result
        };

        var html = hbs(obj);

        $('#main').append(html);
    });
}