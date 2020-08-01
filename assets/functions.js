$(function(){
    $(".hero-navbar").load("navbar.html")
})()
if (annyang) {
    var commands = {
      'hola': function() {
        alert("Hola mundo!");
      }
    };
    annyang.addCommands(commands);
    annyang.start({ autoRestart: true, continuous: false });
  }

