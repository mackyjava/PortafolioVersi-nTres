(function () {
  var app = angular.module('portafolio', []);

  app.controller('PortfolioController', function () {
    this.informacion = {
      tecnico:["Front End Developer", "Buena léctura de comprensión","Pensamiento lógico", "Enfocada en desarrollarme como Full Stack developer a mediano plazo"],
      personal:["Ama de casa", "Trabajadora", "Responsable ", "Mamá", "Buena Cocinera", "Aprendiendo cosas nuevas para darle un mejor futuro a mis hijas" ],
       skills: {
        html: 70+"%",
        css: 70+"%",
        javascript: 70+"%",
        jquery: 65+"%",
        bootstrap: 65+"%",
        materialize: 65+"%",
        sass: 60+"%",
        github: 60+"%",
        angular:30+"%"
      },
      proyectos: [ "Lab-Car", "ColorPick", "Google Design" ]
    };

  });

  app.controller('TabsController', function () {
    this.tab = 1;

    this.selectTab = function (tab) {
      this.tab = tab;
    };
  });
  
  app.controller('CommentsController', function(){
    this.comments = [];
    this.show = false;

    this.toggle = function(){
      this.show = !this.show;

    };

  });

  // app.filter('imageify', function () {
  //   return function (input) {
  //     var url = "img/pokemons/" + input.toLowerCase() + ".jpg";
  //     return url;
  //   };
  // });

})();
