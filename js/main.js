$(document).ready(function(){

  var myArray=["images/jumps.jpg","images/barn1.jpg","images/barn2.jpg","images/barn3.jpg"];

  var textArray=["Outdoor Arena","Barn Entrance","Indoor Stalls","Indoor Arena"];

  var current = 0;

  function updateImage(){
    $(".mySlides img").attr("src",myArray[current]);
    $(".text").html(textArray[current]);
    $(".numbertext span").html(current+1);
  };

  $(".next").on("click",function(){
    console.log("hi");
    current++;
    if(current==4){
      current = 0;
    }
    updateImage();
  });

  $(".prev").on("click",function(){
    current--;
    if(current==-1){
      current = 3;
    }
    updateImage();
  })

//END OF SLIDESHOW
//ARROW NAV

  $(".arrow").on("click",function(e){
    e.preventDefault();
    $("html,body").animate({
      scrollTop: $(".home").offset().top
    });
  });

  $(".arrow-home").on("click",function(e){
    e.preventDefault();
    $("html,body").animate({
      scrollTop: $(".trainers").offset().top
    });
  });

  $(".arrow-lessons").on("click",function(e){
    e.preventDefault();
    $("html,body").animate({
      scrollTop: $(".facility").offset().top
    });
  });

  $(".arrow-facility").on("click",function(e){
    e.preventDefault();
    $("html,body").animate({
      scrollTop: $(".horses").offset().top
    });
  });

  $(".arrow-horses").on("click",function(e){
    e.preventDefault();
    $("html,body").animate({
      scrollTop: $(".programs").offset().top
    });
  });

  $(".arrow-programs").on("click",function(e){
    e.preventDefault();
    $("html,body").animate({
      scrollTop: $(".contact").offset().top
    });
  });

//END OF ARROW NAV

//LESSONS TRAINING SUMMER PROGRAMS

  $("li").on("click",function(){

    var currentlyOpen;
    var extractClass = $(this).attr('class');//get the attribute called class
    var toShow = $(".programs-info").find("."+extractClass);
    $(".programs-info span").hide();
    if(currentlyOpen !== extractClass){ //it WILL be unequal whenever extractClass isn't defined, then currentlyOpen will be defined second,third etc time through
      $(toShow).show();
      $(".programs").css("background-image","none");

    }else{
      $(toShow).hide();
    }

      currentlyOpen = extractClass;

    $("li").removeClass("black-background");
    $(this).addClass("black-background");
    });
});
