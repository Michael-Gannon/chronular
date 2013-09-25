var Chronular = {
  example: function() {
    var examples = $('#examples tr');
    var example = $('code', examples[Math.floor(Math.random() * examples.length)]);
    window.location = "http://chronular.com/chronic/do_test?time=" + example.text();
  },
  clearFields: function() {
    $('#time')[0].value = '';
    $('#result .time').text('Enter a time expression above');
  },
  init: function() {
    $("a#copy_link").on('click', function (e) {
       e.preventDefault();
    }).zclip({
       path:'/swf/ZeroClipboard.swf',
       copy: function () {
         return "http://chronular.com/chronic/do_test?time=" + $('#time')[0].value;
       },
       afterCopy: function() {
        //dont show the defualt alertbox
       }
    });
  }
}