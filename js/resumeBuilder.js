//json's with info
var bio = {
  "name" : "Pedro Henrique Alvim Paradella",
  "role" : "Web Developer",
  "skills" : ["Html5", "Css3", "Javascript", "SQL", "Python", "JQuery","JSLink", "C", "C#", "VisualStudio 2018", "GameMaker", "Git", "GitHub",
  "Tortoise","Montagem e Manutenção de Computadores", "Redes", "Dreamweaver"," Atom", "Adobe Muse", "Adobe Photoshop", "Adobe Flash", "Pacote Office", "CorelDraw", "GIMP"],
  "biopic" : "./img/bioPic.jpg"
};

var education = {
  "schools" : [
    {
      "name" : "Universidade Veiga de Almeida",
      "location" : "Tijuca, Rio de Janeiro",
      "desc" : "Bacharelado em Ciência da Computação (Cursando)",
      "dates" : "Previsão 2019.1",
      "url" : "https://uva.br/"
    },
    {
      "name" : "Udacity",
      "location" : "Online",
      "desc" : "Desenvolvedor Web Full Stack Nanodegree (Cursando)",
      "dates" : "2019",
      "url" : "https://br.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    },
    {
      "name" : "Udacity",
      "location" : "Online",
      "desc" : "Desenvolvedor Web Front-End Nanodegree (Cursando)",
      "dates" : "2018",
      "url" : "https://br.udacity.com/nanodegree"
    },
    {
      "name" : "Col. Est. Pedro Álvares Cabral ",
      "location" : "Copacabana, Rio de Janeiro",
      "desc" : "Ensino Medio.",
      "dates" : "2007",
      "url" : ""
    },
    {
      "name" : "Liceu de artes e oficios",
      "location" : "Centro, Rio de Janeiro",
      "desc" : "Ensino Medio Técnico em informática.",
      "dates" : "2006",
      "url" : "http://www.liceudearteseoficios.com.br/"
    },
    {
      "name" : "Advanced InfoTech School",
      "location" : "Copacabana, Rio de Janeiro",
      "desc" : "Técnico em Informática.",
      "dates" : "2005",
      "url" : ""
    }
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "Metatron",
      "title" : "Estagiário de Desenvolvimento",
      "location" : "Centro, Rio de Janeiro, RJ",
      "dates" : "2018",
      "desc" : "Utilizo javascript, jquery, jslink, css, C# e outras API's para criar produtos novos e melhorar a experiência do usuário com o sharepoint."
    },
    {
      "employer" : "Freelancer",
      "title" : "Desenvolvedor Front-end",
      "location" : "Rio de Janeiro, RJ",
      "dates" : "2007-2018",
      "desc" : "Desenvolvi websites/portifólios responsivos."
    },
    {
      "employer" : "Protomni Multimedia",
      "title" : "Game Developer",
      "location" : "Rio de Janeiro, RJ",
      "dates" : "2012-2018",
      "desc" : "Implementei tudo que um jogo precisa, desde a criação de sprites(especializado em pixel-art) até a codificação do jogo."
    },
    {
      "employer" : "Golden Tulip Hotel",
      "title" : "Estágio em TI",
      "location" : "Copacabana, Rio de Janeiro, RJ",
      "dates" : "2010",
      "desc" : "Dei suporte de TI para os funcionários e os hospedes do hotel."
    },
    {
      "employer" : "Ocean Air Linhas Aéreas",
      "title" : "Airline Agent",
      "location" : "Praça XV, Rio de Janeiro, RJ",
      "dates" : "2009-2010",
      "desc" : "Fiz check-in de passageiros, embarque e desembarque nas aeronaves e sua devida supervisão."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Currículo Online",
      "dates" : "2018",
      "description" : "Meu currículo online feito para mostrar minhas habilidades e meu portifólio.",
      "images" : ["./img/curriculo.png"],
      "url" : ["https://pparadella.github.io/new-resume/","https://github.com/pparadella/new-resume"]
    },
    {
      "title" : "Sql log-analyzer",
      "dates" : "2018",
      "description" : "Uma ferramenta de relatórios que imprime relatórios (em texto sem formatação) com base nos dados do banco de dados. Esta ferramenta de relatórios é um programa de Python usando o módulo psycopg2 para se conectar ao banco de dados. Feito para o nanodegree Udacity Web full-stack.",
      "images" : [""],
      "url" : ["https://github.com/pparadella/sql-log-analyzer"]
    },
    {
      "title" : "Site feito em python",
      "dates" : "2018",
      "description" : "Um site gerado por código python feito para o nanodegree Udacity Web full-stack.",
      "images" : [""],
      "url" : ["https://github.com/pparadella/MovieSitePython"]
    },
    {
      "title" : "Meu site responsivo",
      "dates" : "2017",
      "description" : "Um simples e responsivo site feito para praticar.",
      "images" : ["./img/website.png"],
      "url" : ["https://pparadella.github.io/", "https://github.com/pparadella/pparadella.github.io"]
    },
    {
      "title" : "Arcade Game",
      "dates" : "2017",
      "description" : "Jogo feito para o nanodegree Udacity Front-end em html5 usando canvas e javascript.",
      "images" : ["./img/arcade.png"],
      "url" : ["https://pparadella.github.io/frontend-nanodegree-arcade-game/", "https://github.com/pparadella/frontend-nanodegree-arcade-game"]
    },
    {
      "title" : "Web site responsivo",
      "dates" : "2017",
      "description" : "Web site criado para o nanodegree Udacity Front-end.",
      "images" : ["./img/webresponsive.png"],
      "url" : ["https://pparadella.github.io/responsive-project/", "https://github.com/pparadella/responsive-project"]
    },
    {
      "title" : "Bernie Needs Love",
      "dates" : "2015",
      "description" : "A retro platformer game about an old man who collects blue pills amidst urban dangers and bird poop in a desperate effort to reach his girlfriend before he is himself reached by the ever-approaching Grim Reaper.",
      "images" : ["./img/bernie1.jpg"],
      "url" : ["https://store.steampowered.com/app/373120/Bernie_Needs_Love/"]
    },
    {
      "title" : "Meatballphobia",
      "dates" : "2013",
      "description" : "Meatballphobia is a 2D physics puzzle game about flesh and meat, about the enslavement of both the consumed and the consumer, about life and the systems built around it. It is also a game about making a meatball hit an unfortunate hysterical head.",
      "images" : ["./img/meatball1.jpg"],
      "url" : ["http://www.protomnimultimedia.com/meatballphobia.html"]
    },
    {
      "title" : "Villa Carpe Diem",
      "dates" : "2007",
      "description" : "Web site elaborado em flash para uma pousada.",
      "images" : [""],
      "url" : ["https://pparadella.github.io/sites/villa/in.htm"]
    }
  ]
};

bio.display = function (){
  //display name and role
  $('.header-item').eq(0).find('article').append('<h1>'+bio.name+'</h1>'+bio.role);

  //display skills
  for (var each in bio.skills){
    $('.header-skills ul').append('<li>'+bio.skills[each]+'</li>');
  }

  //display pic
  $('.header-img img').attr('src',bio.biopic);

};

education.display = function (){

  for (var each in education.schools){
    //display education name
    $('.education-item').append('<div class="item-title">'+'<a target="_blank" href="'+ education.schools[each].url +'">'+education.schools[each].name+'</a></div>');

    //display date
    $('.education-item').append('<div class="item-year">'+education.schools[each].dates+'</div>');

    //display location
    $('.education-item').append('<div class="item-location">'+education.schools[each].location+'</div>');

    //display desc
    $('.education-item').append('<div class="item-desc">'+education.schools[each].desc+'</div>');
  }

}

work.display = function (){
  for (var each in work.jobs){
    //display education name
    $('.workExperience-item').append('<div class="item-title">'+work.jobs[each].employer+ ' - ' + work.jobs[each].title +'</div>');

    //display date
    $('.workExperience-item').append('<div class="item-year">'+work.jobs[each].dates+'</div>');

    //display location
    $('.workExperience-item').append('<div class="item-location">'+work.jobs[each].location+'</div>');

    //display desc
    $('.workExperience-item').append('<div class="item-desc">'+work.jobs[each].desc+'</div>');
  }
};

projects.display = function () {
  for (var each in projects.projects){
    //display education name
    $('.projects-item').append('<div class="item-title">'+projects.projects[each].title +'</div>');

    //display date
    $('.projects-item').append('<div class="item-year">'+projects.projects[each].dates+'</div>');

    //display desc
    $('.projects-item').append('<div class="item-desc">'+projects.projects[each].description+'</div>');

    //display image
    for (var image in projects.projects[each].images){
      if (projects.projects[each].images[image] != ""){
          $('.projects-item .item-desc').eq(each).append('<br><img src="'+ projects.projects[each].images[image] +'">');
      }
    }
    $('.projects-item .item-desc').eq(each).append('<br>');
    //display url
    for (var url in projects.projects[each].url){
      if (projects.projects[each].url[url] != ""){
        $('.projects-item .item-desc').eq(each).append('<br><a target="_blank" href="'+ projects.projects[each].url[url] +'">'+ projects.projects[each].url[url] +'</a><br>');
      }
    }
  }
};

bio.display();

education.display();

work.display();

projects.display();
