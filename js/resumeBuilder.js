//json's with info
var bio = {
  "name" : "Pedro Henrique Alvim Paradella",
  "role" : "Web Developer",
  "skills" : ["Html5", "Css3", "Javascript", "C", "C#", "GameMaker", "SQL"],
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
    }
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "Freelancer",
      "title" : "Front-end Developer",
      "location" : "Rio de Janeiro, RJ",
      "dates" : "2007-2017",
      "desc" : "Develop websites."
    },
    {
      "employer" : "Protomni Multimedia",
      "title" : "Game Developer",
      "location" : "Rio de Janeiro, RJ",
      "dates" : "2012-2017",
      "desc" : "Implement everything a game requires, create Sprites(specialized in 8-bit generation) and 3D models."
    },
    {
      "employer" : "Golden Tulip Hotel",
      "title" : "IT Trainee",
      "location" : "Copacabana, Rio de Janeiro, RJ",
      "dates" : "2010",
      "desc" : "Support for employees and employers, machine repair, private network repair and servers."
    },
    {
      "employer" : "Ocean Air Linhas Aéreas",
      "title" : "Airline Agent",
      "location" : "Praça XV, Rio de Janeiro, RJ",
      "dates" : "2009-2010",
      "desc" : "Check-in of passengers, sell tickets, boarding/unboarding airplanes and their supervision."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Bernie Needs Love",
      "dates" : "2015",
      "description" : "A retro platformer game about an old man who collects blue pills amidst urban dangers and bird poop in a desperate effort to reach his girlfriend before he is himself reached by the ever-approaching Grim Reaper.",
      "images" : ["./img/bernie1.jpg"]
    },
    {
      "title" : "Meatballphobia",
      "dates" : "2013",
      "description" : "Meatballphobia is a 2D physics puzzle game about flesh and meat, about the enslavement of both the consumed and the consumer, about life and the systems built around it. It is also a game about making a meatball hit an unfortunate hysterical head.",
      "images" : ["./img/meatball1.jpg"]
    },
    {
      "title" : "SindiBebRj",
      "dates" : "2017",
      "description" : "Website for a beverage transportation union.",
      "images" : [""]
    },
    {
      "title" : "Prime",
      "dates" : "2014",
      "description" : "Website for a company.",
      "images" : [""]
    },
    {
      "title" : "Villa Carpe Diem",
      "dates" : "2007",
      "description" : "Website for a hostel.",
      "images" : [""]
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
      $('.projects-item .item-desc').eq(each).append('<br><img src="'+ projects.projects[each].images[image] +'">');
    }
  }
};

bio.display();

education.display();

work.display();

projects.display();
