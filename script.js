$("html").mouseup( function() {
  $("html").addClass("cursorStuff").removeClass("mouseDown");
});

$("html").mousedown( function() {
  $("html").removeClass("cursorStuff").addClass("mouseDown");
});


