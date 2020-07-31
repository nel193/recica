if (annyang) {
    var commands = {
      'hola': function() {
        alert("Hola mundo!");
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }

