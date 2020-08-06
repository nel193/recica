var URLhash = window.location.hash;
// let btnLogin = document.getElementById("btnLogin")
// let btnSignIn = document.getElementById("btnSignIn")

// $(function(){
//     $(".hero-navbar").load("navbar.html")
// })

if (annyang) {
    var commands = {
      'hola': function() {
        alert("Hola mundo!");
      }
    };
    annyang.addCommands(commands);
    annyang.start({ autoRestart: true, continuous: false });
  }

if(URLhash === "#logged"){
  $("#btnLogin").text("Bienvenidx")
  $("#btnSignIn").text("")
}

