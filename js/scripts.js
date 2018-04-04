$(document).ready(function() {
  $("button#cat-btn").click(function() {
    $("ul#cat-list").prepend("<li>Meow</li>");
    $("ul#dog-list").prepend("<li>Woof Woof!</li>");
  });

  $("button#dog-btn").click(function() {
    $("ul#cat-list").prepend("<li>Meooow!</li>");
    $("ul#dog-list").prepend("<li>Woof</li>");
  });
});
