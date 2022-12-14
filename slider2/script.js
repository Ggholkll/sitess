jQuery(function ($) {
  function assignSlidesOrigin() {
    $(this)
      .find(".slick-slide")
      .each(function (_, slide) {
        let rect = slide.getBoundingClientRect();
        slide = $(slide);
        slide.removeClass("firster laster");
        if (rect.left < rect.width) {
          slide.addClass("firster");
        } else if (rect.right > window.innerWidth - rect.width) {
          slide.addClass("laster");
        }
      });
  }

  function mobilePauseVideo() {
    if (window.innerWidth <= 480) {
      $(".slick-current video")[0].pause();
    }
  }
  function yususus() {
    $("video").prop("muted", true);
  }

  $(".flickfeed").on("init", yususus);
  $(".flickfeed").on("init", assignSlidesOrigin);
  $(".flickfeed").on("afterChange", assignSlidesOrigin);
  $(".flickfeed").on("beforeChange", mobilePauseVideo);
  $(".flickfeed2").on("init", assignSlidesOrigin);
  $(".flickfeed2").on("afterChange", assignSlidesOrigin);
  $(".flickfeed2").on("beforeChange", mobilePauseVideo);
  $(".flickfeed4").on("init", assignSlidesOrigin);
  $(".flickfeed4").on("afterChange", assignSlidesOrigin); 
  $(".flickfeed4").on("beforeChange", mobilePauseVideo);
  $(".flickfeed3").on("init", assignSlidesOrigin);
  $(".flickfeed3").on("afterChange", assignSlidesOrigin);
  $(".flickfeed3").on("beforeChange", mobilePauseVideo);
  $(".slick-current video").addClass("mpp-hidden");
  $(".slick-current  .mpp-playlist-item-ready").removeClass(
    "mpp-playlist-item-active"
  );
  function getSliderSettings() {
    console.log("calling sliderSetting");
    return {
      dots: true,
      centerMode: true,
      centerPadding: "40px",
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      forceSlidesToScroll: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
  }

  $(".flickfeed").slick(getSliderSettings());

  /*$( ".slick-slide" ).on("mouseenter touchstart", function() {
              
       if ($(this).hasClass("firster")) {
         //  console.log('firster');
           var hoverslide = $(this);
            $(hoverslide).nextAll().addClass('furthernextslides');
          //  $(hoverslide).prevAll().addClass('prevslides'); 
        
       }else if ($(this).hasClass("laster")){
           var hoverslide = $(this);
            $(hoverslide).prevAll().addClass('furtherprevslides');
        }else{
             var hoverslide = $(this);
            $(hoverslide).nextAll().addClass('nextslides');
            $(hoverslide).prevAll().addClass('prevslides'); 
        }
        
      
    });
	
	
    
    $( ".slick-slide" ).on("mouseleave touchend", function() {
      $(this).parent().find( ".slick-slide" ).removeClass('nextslides');
    $(this).parent().find( ".slick-slide" ).removeClass('prevslides');
      $(this).parent().find( ".slick-slide" ).removeClass('furthernextslides');
      $(this).parent().find( ".slick-slide" ).removeClass('furtherprevslides');
    });*/
  var allVideoss = document.querySelectorAll("video");
  allVideoss.forEach((vidElement) => {
    vidElement.addEventListener(
      "ended",
      (event) => {
        vidElement.classList.add("mpp-hidden1");
        // vidElement.classList.add("mpp-hidden");
      },
      false
    );
  });
});

function getSliderSettings() {
  console.log("calling sliderSetting");
  return {
    dots: true,
    centerMode: true,
    centerPadding: "40px",
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    forceSlidesToScroll: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },

      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
}

let seasonOne = [
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "1",
    videoSrc: "./02.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "2",
    videoSrc: "src/S1-2.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Title2Season One E2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "3",
    videoSrc: "src/S1-3.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "4",
    checked: false,
    videoSrc: "src/S1-3.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "Season One E4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    id: "5",
    checked: false,
    videoSrc: "src/S2-1.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 1",
    episodeTime: "1:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "6",
    videoSrc: "src/S2-2.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 2",
    episodeTime: "2:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "7",
    videoSrc: "src/S2-3.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E3",
    episodeTime: "3:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  },
  {
    percentage: 0,
    progress: 0,
    checked: false,
    id: "8",
    videoSrc: "src/S2-4.mp4",
    imgSrc: "./03.jpg",
    episodeTitle: "season 2 E 4",
    episodeTime: "4:00min",
    desc: 'April 5, 2022 - Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giants") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities',
  }
];
let favVideos = [];
let historyLists = [];
let completeList = [];
let lastIndex = 0;

function endvid(eleee) {
  if (!$(eleee).parents(".slick-slide").hasClass("pupo")) {
    $(eleee).parents(".slick-slide")[0].classList.add("pupo");
    console.log("yessssssssss");
  }
  if (!eleee.classList.contains("mpp-hidden")) {
    eleee.classList.add("mpp-hidden");
  }

  $(eleee)
    .parents(".favi")
    .find(".mpp-playlist-item-ready")
    .removeClass("mpp-playlist-item-active");
}

function closebackele(ellee) {
  if ($(ellee).parents(".slick-slide").hasClass("pupo")) {
    $(ellee).parents(".slick-slide").removeClass("pupo");
  }
}

function insertToHTML(index, season, elem) {
  console.log(elem.id, "insert");
  $(".homeSlider").append(`<article class="mpp-playlist-content card yuii favi">
                <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="02.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner">
                      <div class="mpp-content"> 
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${elem.imgSrc}" src="${elem.imgSrc}">
                         <div class="mpp-media">
                            <video class="mpp-video mpp-hidden iolla plyyer" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback"  muted="">
                               <source src="${elem.videoSrc}">
                            </video>
                         </div>
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                            <div class="mute-video" onclick= "addmutes()"></div>
                         </div>
                      </div>
                      <div class="back d-flex flex-column cont">
                         <div class="back-content">
                            <div class="mpp-controls mpp-block">
                              <div class="mpp-contr-btn mpp-link-icon mpp-buttons" data-tooltip="Играть сейчас">
                              <svg key="src/S1-2.mp4" class="mpp-button" onclick="playPauseVideo(this); runVideo(this);">
                              <use xlink:href="#svg-link"></use>
                              </svg>
                              <span key="2" style="display: none;">2</span>
                              </div>
                              <div key="main-2" id="mainVideo-2" class="mpp-contr-btn mpp-lightbox -icon" data-tooltip="Добавил">
                              <svg class="plus" key="src/S1-2.mp4" onclick="getVideoKey(this)">
                              <use id="iconAdded" href="# svg-зум"></use>
                              </svg>
                              </div>
                              <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                              <svg>
                              <use xlink:href="#svg-share" ></использовать>
                              </svg>
                              </div>
                              </div>
                            <h1 class="h4">${elem.episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                   </div>
                </div>

             </article>
`); 
  // initVideos()
}

 
function run() {
 for (let i = 0 ; i < seasonOne.length ; i++) { 
  insertToHTML(i, 1, seasonOne[i]); 
}
  $(".flickfeed4").slick(
    "slickAdd", 
    "",
    $(".flickfeed4").slick(getSliderSettings()) - 1 
  );
  $(".flickfeed2").slick(
    "slickAdd",
    "", 
    $(".flickfeed2").slick(getSliderSettings()) - 1
  );
  $(".flickfeed3").slick(
    "slickAdd",
    "",
    $(".flickfeed3").slick(getSliderSettings()) - 1
  );
  $(".flickfeed2").slick("refresh");
  JSON.parse(window.localStorage.getItem("favVideos")).forEach(
    (element, index) => {
      // $(".flickfeed2").slick("slickRemove", slideIndex - 1);
      console.log(element, "element");
      if (element.checked) {
        
        $(".flickfeed2").slick("unslick");
        insertToFav(index + 1, 1, element);
        $(".flickfeed2").slick(
          "slickAdd",
          "",
          $(".flickfeed2").slick(getSliderSettings()) - 1
        );
        document.querySelector(`[key=main-${element.id}]`).children[0].remove();
        $(`[key=main-${element.id}]`).find(".plus").remove();
        $(`[key=main-${element.id}]`).append(
          '<img class="chckedd" style="height:20px;filter:invert(100);top: 3px;position: absolute;right: 3px;" src="src/checked.png"/>'
        );
      }
    }
  );
  favVideos = JSON.parse(window.localStorage.getItem("favVideos")); 
  console.log(favVideos, "favVideojs");
}

// Run Video Button that show the main div for video
function runVideo(elem) {
  let player = document.getElementById("gossVideo");
  $("#btnTrigger").click();
  var id = $(elem).attr("key");
  var ido = $(elem).next().attr("key");
  console.log(id, "video id");
  $(player).get(0).load();
  $(player).get(0).play();
  $(player).attr("src", id);
  //   seasonOne.forEach((row)=>{
  //     if(row.videoSrc === id){

  //

  //

  let listys = completeList.map((ioi) => {
    return ioi.id;
  });

  console.log(ido, "kdfi");
  console.log(listys, "listys");
  console.log(completeList, "complate");
  console.log(historyLists, "historyLists");
  historyLists = [
    ...historyLists,
    // ...historyLists.filter((iop) => {
    //   return listys.includes(iop.id) ? null : iop;
    // }),
    ...seasonOne.filter((row) => {
      let exist = false;
      if (row.videoSrc === id) {
        historyLists.forEach((e) => {
          if (e.videoSrc === id) {
            exist = true;
          }
        });
        return !exist;
      }
    }),
  ];

  if (historyLists.length >= 1) {
    let slideIndex = historyLists.length;
    historyLists.forEach(() => {
      $(".flickfeed4").slick("slickRemove", slideIndex - 1);
      if (slideIndex !== 0) {
        slideIndex--;
      }
    });

    $(".flickfeed4").slick("refresh");
    historyLists.forEach((row) => {
      console.log(historyLists, "row");
      $(".flickfeed4").slick("unslick");
      insertToHistoryOrCompleted("#historySlider", 0, row);
      $(".flickfeed4").slick(
        "slickAdd",
        "",
        $(".flickfeed4").slick(getSliderSettings()) - 1
      );
    });
  }
}

function runv(eleo) {
  let player = document.getElementById("gossVideo");
  $("#btnTrigger").click();
  var id = $(eleo).attr("key");
  console.log(id, "video id");
  $(player).get(0).load();
  $(player).get(0).play();
  $(player).attr("src", id);
}

$("#closeButton").click(function () {
  $(".videoContainer").css("display", "none");
  console.log("closing", "closing");
  $("#videoPlayer").get(0).pause();
});

// Add Video To favorite
function getVideoKey(elem, videoSource) {
  console.log(favVideos, "favorite");
  let parent = elem.parentElement;
  let itemId = $(parent).attr("key").slice(5);
  $(elem).remove();
  if (videoSource) {
    var id = videoSource;
  } else {
    var id = $(elem).attr("key");
  }
  // favVideos = [
  //   ...favVideos,
  //   ...seasonOne.filter((row) => {
  //     let exist = false;
  //     if (row.videoSrc === id) {
  //       favVideos.forEach((e) => {
  //         if (e.videoSrc === id) {
  //           exist = true;
  //         }
  //       });
  //       return !exist;
  //     }
  //   }),
  // ];
  console.log("element", elem, itemId, "id", parent);
  seasonOne.forEach((element, index) => {
    console.log(element.id, "sss", itemId);
    if (element.id === itemId) {
      if (!favVideos.includes(element)) {
        favVideos.push(element);
        Object.assign(favVideos[favVideos.length - 1], { checked: true });
      }
    }
  });

  favVideos.forEach((element, index) => {
    $(".flickfeed2").slick("refresh");
    if (videoSource) {
      var id = videoSource;
    } else {
      var id = $(elem).attr("key");
    }
    if (itemId === element.id) {
      $(".flickfeed2").slick("unslick");
      insertToFav(index + 1, 1, element);
      $(".flickfeed2").slick(
        "slickAdd",
        "",
        $(".flickfeed2").slick(getSliderSettings()) - 1
      );
      $(`[key=main-${itemId}]`).append(
        '<img class="chckedd" style="height:20px;filter:invert(100);top: 3px;position: absolute;right: 3px;" src="src/checked.png"/>'
      );
      $(`[key=main-${itemId}]`).find(".plus").remove();
      $(parent).attr("data-tooltip", "Added");
      $(parent).attr("key", `main-${element.id}`);
    }
  });

  window.localStorage.setItem("favVideos", JSON.stringify(favVideos));
  $("#alertMsg")
    .css("display", "flex")
    .fadeIn("slow", function () {
      $(this).delay(3000).fadeOut("slow");
    });
}
const undoRemoval = (elem, removedVideoId) => {
  console.log(elem, removedVideoId, "removedVideoId");
  console.log(favVideos, "favorite");
  let parent = $(`#mainVideo-${removedVideoId}`);
  // $(elem).remove();
  // if(videoSourceId){
  // var id = videoSource
  // }
  // else{
  // var id = $(elem).attr("key");
  // }
  // favVideos = [
  //   ...favVideos,
  //   ...seasonOne.filter((row) => {
  //     let exist = false;
  //     if (row.videoSrc === id) {
  //       favVideos.forEach((e) => {
  //         if (e.videoSrc === id) {
  //           exist = true;
  //         }
  //       });
  //       return !exist;
  //     }
  //   }),
  // ];

  console.log("element", elem, "id", parent);
  seasonOne.forEach((element) => {
    if (element.id === removedVideoId) {
      if (!favVideos.includes(element)) {
        console.log(!favVideos.includes());
        favVideos.push(element);
        Object.assign(favVideos[favVideos.length - 1], { checked: true });
        favVideos.forEach((element, index) => {
          $(".flickfeed2").slick("refresh");
          // if(videoSource){
          // var id = videoSource
          // }
          // else{
          // var id = $(elem).attr("key");
          // }
          if (removedVideoId === element.id) {
            $(".flickfeed2").slick("unslick");
            insertToFav(index + 1, 1, element);
            $(".flickfeed2").slick(
              "slickAdd",
              "",
              $(".flickfeed2").slick(getSliderSettings()) - 1
            );
            $(parent).append(
              '<img class="chckedd" style="height:20px;filter:invert(100);top: 3px;position: absolute;right: 3px;" src="src/checked.png"/>'
            );
            $(parent).attr("data-tooltip", "Added");
            $(parent).attr("key", `main-${element.id}`);
          }
        });
        window.localStorage.setItem("favVideos", JSON.stringify(favVideos));
        $("#alertMsg")
          .css("display", "flex")
          .fadeIn("slow", function () {
            $(this).delay(3000).fadeOut("slow");
          });
      }
    }
  });
};
// change SVG Add Icon when the specific video exists in Favorite>> it should run on add and remove from list
// insertToFavortiteHTML Page with the SVG Icon Remove From List and give it a title remove from a list
function insertToFav(index, season, elem) {
  console.log(elem, "slsl");
  console.log(favVideos, "Salls");
  $("#favSlider").append(`<article class="mpp-playlist-content card favi">
                <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="02.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner">
                      <div class="mpp-content">
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${
                           elem.imgSrc
                         }" src="${elem.imgSrc}">
                         <div class="mpp-media">
                            <video onended="endvid(this)" onmouseenter="closebackele(this)" class="mpp-video mpp-hidden iolla" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" ${
                              $(".mute-video").hasClass("unmute-video")
                                ? null
                                : (muted = "false")
                            }>
                            
                                <sourse src="${elem.videoSrc}">
                            </video>
                            <i 
                            key="${elem.videoSrc}"
                            id="removeId-${elem.id}"
                            style="font-size: 3em;
                            position: absolute;
                            top: 39%;
                            z-index:1000;
                            cursor: pointer;
                            right: 43%;" class="fas fa-times-circle fa-2xl removeIcon"                              onclick="removeFromCart(this)">
                            </i>
                         </div>
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                         <div class="mute-video ${
                           $(".mute-video").hasClass("unmute-video")
                             ? "unmute-video"
                             : " "
                         }" onclick="addmutes();">
                         </div>
                         </div>
                      </div>
                      <div class="back flex-column favback" style="display: none">
                         <div class="back-content">
                            <div class="mpp-controls">
                               <div class="mpp-contr-btn mpp-link-icon mpp-top mpp-tope" data-tooltip="Play Now">
                                  <svg key="src/S1-2.mp4" onclick="playPauseVideo(this); runVideo(this);">
                                     <use xlink:href="#svg-link"></use>
                                  </svg>
                                  <span key="${
                                    elem.id
                                  }" style="display: none;" >${elem.id}</span>
                               </div>
                               <div class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Remove From List">
                                  <svg key="src/S1-2.mp4" id="removeId-${
    elem.id
  }" onclick="removeFromCart(this)">
                                     <use xlink:href="#svg-delete"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${elem.episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                   </div>
                </div>
             </article>
`);
  if ($(".mute-video").hasClass("unmute-video")) {
    $("video").prop("muted", false);
  } else {
    $("video").prop("muted", true);
  }
  // initVideos()
}
// Show and hide => home and favorite Screens
window.addEventListener('resize' , function () {
  let Width2 = Math.max(document.documentElement.offsetWidth , window.innerWidth) ; 
  if (Width2 > 1400 && Width2 < 1600) {
    location.reload() ; 
  } else if (Width2 > 1024) {
    location.reload() ; 
  } else if (Width2 > 768 ) {
    location.reload() ; 
  } else if (Width2 > 480 ) {  
    location.reload() ; 
  }
})
function onHomeClick() {
  $("#HomeScreen").css("display", "block");
  $(".wraphome").css("display", "block");
  $(".completehome").css("display", "block");
  $(".historyhome").css("display", "block");
  // $("#FavoriteScreen").css("display", "none");
  //remove the Slick for a temporary time if the user Gonna
  // $(".flickfeed2").slick("unslick");
}
function onFavoriteClick() {
  $(".wraphome").css("display", "none");
  $(".completehome").css("display", "none");
  $(".historyhome").css("display", "none");
  $("#FavoriteScreen").css("display", "block");
  $(".flickfeed2").slick("refresh");
  $(".flickfeed2").slick("unslick");
  $(".flickfeed2").slick(
    "slickAdd",
    "",
    $(".flickfeed2").slick(getSliderSettings()) - 1
  );
}

function onLandingClick() {
  window.location.href = "./landing/index.html";
}

// remove from a list popUp a modal , that verify user action => Delete , cancel : on Cancel DO Nothing and hide the modal
let tagElement = "";
let tagId = "";
let removedImage = "";
let removedVideo = "";
let removedVideoId = "";
let removedVideoTitle = "";

function removeFromCart(elem) {
  var id = $(elem).attr("key");
  console.log(id.replace("mp4", "png"), "remove");
  removedImage = id.replace("mp4", "png");
  removedVideo = id;
  removedVideoId = $(elem).attr("id").slice(9);
  seasonOne.forEach((elem) => {
    console.log(removedVideoId, elem.id, elem, "sskiwo");
    if (removedVideoId === elem.id) {
      removedVideoTitle = elem.episodeTitle;
    }
  });
  console.log(removedImage, "removedImage");
  $("#modalImage").attr("src", removedImage);
  $("#modalDivTitle").text(removedVideoTitle);
  console.log(removedVideoTitle, "Ssa");
  tagElement = elem;
  tagId = id;
  $(".modal1").css("display", "flex");
}

function removeFromHistory(elem) {
  var id = $(elem).attr("key");
  console.log(elem, "Ssaw");

  tagElement = elem;
  tagId = id;
  $(elem).parents("article").remove();
  historyLists = historyLists.filter((row) => {
    return row.videoSrc !== tagId;
  });
  $(".flickfeed4").slick(
    "slickRemove",
    $(tagElement).parents(":eq(5)").attr("data-slick-index")
  );

  $(".modal").css("display", "none");
  window.localStorage.setItem("historyVideos", JSON.stringify(historyLists));
}

function onRemove(elem, id) {
  console.log(elem, "hhkfthkl");
  console.log(id, "hhkfthkl");
  $(".modal1").css("display", "none");
  console.log(elem);
  favVideos = favVideos.filter((row) => {
    console.log(row.videoSrc, id);
    if (id !== row.videoSrc) {
      console.log(row, "row");
      return row;
    } else {
      Object.assign(row, { checked: false });
      document.querySelector(`[key=main-${row.id}]`).children[0].remove();
      $(`[key=main-${row.id}]`).find(".plus").remove();
      $(`[key=main-${row.id}]`).find(".chckedd").remove();
      $(`[key=main-${row.id}]`)
        .append(`<svg class="plus" key="${row.videoSrc}"  onclick="getVideoKey(this)">
                    <use id="iconAdded" href="#svg-zoom"></use>
                </svg>`);
    }
  });

  if ($(elem).parents(":eq(8)").attr("data-slick-index") == undefined) {
    $(".flickfeed2").slick(
      "slickRemove",
      $(elem).parents(":eq(6)").attr("data-slick-index")
    );
  } else {
    $(".flickfeed2").slick(
      "slickRemove",
      $(elem).parents(":eq(8)").attr("data-slick-index") 
    );
  }

  console.log($(elem).parents(":eq(6)").attr("data-slick-index"), "sopppa");
  console.log(favVideos, "Favorite");
  $(".modal").css("display", "none");
  window.localStorage.setItem("favVideos", JSON.stringify(favVideos));
}

function cancel() {
  $(".modal1").css("display", "none");
}
// On delete , hide the modal and remove the video from favorite [] ,
// ===============================================================================================
// ==================================History And Complete Sliders=================================
// function insertToHistoryOrCompleted(slider, season, elem) {
//   $(slider).append(
//     `<article class="mpp-playlist-content card" key="article-${elem.id}">
//                 <div class="mpp-playlist-item mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="03.jpg" data-hover-path="02.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
//                    <div class="mpp-inner">
//                       <div class="mpp-content">
//                          <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${elem.imgSrc}" src="${elem.imgSrc}">
//                          <i
//                          style="font-size: 3em;
//                          position: absolute;
//                          top: 39%;
//                          z-index:1000;
//                          right: 43%;" class="fas fa-times-circle fa-2xl" id="removeIcon" key="${elem.videoSrc}" onclick="removeFromHistory(this)"></i>
//                          <div class="mpp-media">
//                             <video class="mpp-video mpp-hidden" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback"  muted="">
//                                <source src="${elem.videoSrc}">
//                             </video>
//                          </div>
//                          <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
//                             <div class="mute-video"></div>
//                          </div>
// <div class="back d-flex flex-column">
//                        <div class="parent">
//                          <div class="bs-example" style="min-width:100%;">
//                            <div class="item">
//                              <div class="watched" id="watched">
//                               <span class="status"></span>
//                           <span style="padding:5px"></span>
//                               <span class="statusCount"></span>
//                              </div>
//                            </div>
//                            <div class="item">
//                              <button   id="PlayButton" style="min-width: 100%;" class="mybutton  border-gradient border-gradient-purple" data-toggle="modal"
//                                data-target="#homeVideo" data-backdrop="static" data-keyboard="false" onclick="playPauseVideo(this)" key='${elem.id}'>
//                                <i id="PlayButtonIcon" class="fas fa-play"> keep Watching</i></button>
//                            </div>

//                          </div>
//                       </div>
//                       </div>

//                    </div>
//                 </div>
//              </article>
// `
//   );
// }

// top-progress-bar
// <div class="item">
//  <progress id='Top-progress-bar${
//     elem.id
//   }' style="min-width:100%;" max='100' value='${
//    elem.progress
//   }'>50% played</progress>
// </div>

function insertToHistoryOrCompleted(slider, season, elem) {
  window.localStorage.setItem("historyVideos", JSON.stringify(historyLists));
  $(slider).append(
    `<article class="mpp-playlist-content card favi complea" key="article-${
      elem.id
    }">

                  <div class="mpp-playlist-item  mpp-playlist-item-ready mpp-visible" data-hover-type="video" data-thumb="04.jpg" data-hover-path="04.mp4#t=2" data-target="_blank" data-title="Neon Sign Kit">
                   <div class="mpp-inner">
                      <div class="mpp-content">
                         <img class="mpp-thumb" alt="Neon Sign Kit" data-thumb-src="${
                           elem.imgSrc
                         }" src="${elem.imgSrc}">
                         <div class="mpp-media"> 
                            <video onended="endvid(this)" onmouseenter="closebackele(this)" class="mpp-video mpp-hidden iolla closehid" preload="metadata" playsinline="" controlslist="nofullscreen nodownload noremoteplayback" ${
                              $(".mute-video").hasClass("unmute-video")
                                ? null
                                : (muted = "false")
                            }>
                               <source src="${elem.videoSrc}">
                            </video>
                         </div>
                         <i 
                          style="font-size: 3em;
                          position: absolute;
                          top: 39%;
                          z-index:1000;
                          cursor: pointer;
                          right: 43%;" class="fas fa-times-circle fa-2xl removeIcon" id="removeIcon" key="${
                            elem.videoSrc
                          }" onclick="removeFromHistory(this)">
                          </i>
                         <div class="mpp-contr-btn mpp-sound-toggle" data-tooltip="Muted">
                            <div class="mute-video ${
                              $(".mute-video").hasClass("unmute-video")
                                ? "unmute-video"
                                : " "
                            }" onclick= "addmutes()"></div>
                             
                         </div>
                      </div>
                      <div class="item closeprog">
                      <progress id='bottom-progress-bar${
                        elem.id
                      }' style="min-width:100%;" max='100' value='${
      elem.progress
    }'>50% played</progress>
                    </div>
                      <div class="back flex-column contt">                         
                      <div class="back-content">
                            <div class="mpp-controls">
                               <div class="mpp-contr-btn mpp-link-icon mpp-top" data-tooltip="Play Now">
                               <svg key="src/S1-2.mp4" onclick="playPauseVideo(this); runVideo(this);" class="mpp-buttons-top">
                               <use xlink:href="#svg-link"></use>
                            </svg>
                            <span key="${elem.id}" style="display: none;" >${
      elem.id
    }</span>
                               </div>
                               <div key="main-${
                                 elem.id
                               }" class="mpp-contr-btn mpp-lightbox-icon" data-tooltip="Added It">
                                  <svg class="plus"  key="src/S1-2.mp4"  onclick="getVideoKey(this)">
                                     <use id="iconAdded" href="#svg-zoom"></use>
                                  </svg>
                               </div>
                               <div class="mpp-contr-btn mpp-share-toggle" data-tooltip="Landing">
                                  <svg>
                                     <use xlink:href="#svg-share"></use>
                                  </svg>
                               </div>
                            </div>
                            <h1 class="h4">${elem.episodeTitle}</h1>
                            <p class="Episode">E1 "Getting Started"</p>
                         </div>
                      </div>
                   </div>
                </div>
             </article>
`
  );

  if ($(".mute-video").hasClass("unmute-video")) {
    $(".video").prop("muted", false);
  } else {
    $("video").prop("muted", true);
  }
}
const openHistoryModal = () => {
  console.log(1);
  let div = $("#gossHistory");
  console.log(div);
  appendToModal(historyLists);
};
const openCompletedModal = () => {
  console.log(1);
  let div = $("#gossHistory");
  console.log(div);
 appendToModal(completeList);
};
const openFavoriteModal = () => {
  console.log(1);
  let div = $("#gossHistory");
  console.log(div);
  appendToModal(favVideos);
};

// // ====================Progress And Video Player=============================
var player = document.getElementById("gossVideo");
var btnPlayPause = document.getElementById("btnPlayPause");
var btnMute = document.getElementById("btnMute");
var topProgressBar = document.getElementById("top-progress-bar");
var edited = false;
localStorage.setItem(
  "endBtn",
  `<i id="PlayButtonIcon" class="fas fa-redo-alt" aria-hidden="true"></i> &nbsp; Watch Again`
);
localStorage.setItem(
  "pauseBtn",
  `<i id="PlayButtonIcon" class="fas fa-play" aria-hidden="true"></i> keep Watching `
);
localStorage.setItem(
  "playBtn",
  `<i id="PlayButtonIcon" class="fas fa-pause" aria-hidden="true"></i> &nbsp; You're Watching `
);
localStorage.setItem(
  "initialBtn",
  `<i id="PlayButtonIcon" class="fas fa-play"></i> &nbsp;Play Video`
);
var canvas = document.getElementById("canvasId");
let currentSelectedId = "";

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);
  return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}
function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}
function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
}

const onEditClick = () => {
  console.log("clicked");
  if (!edited) {
    $(".flickfeed4 .removeIcon.fas").css("display", "flex");
    edited = true;
  } else {
    $(".flickfeed4 .removeIcon.fas").css("display", "none");
    edited = false;
  }
};

const onEditClickcom = () => {
  console.log("clicked");
  if (!edited) {
    $(".flickfeed3 .removeIcon.fas").css("display", "flex");
    edited = true;
  } else {
    $(".flickfeed3 .removeIcon.fas").css("display", "none");
    edited = false;
  }
};

const onEditClickfav = () => {
  console.log("clicked");
  if (!edited) {
    console.log("clickedgghhfh");
    $(".flickfeed2 .removeIcon.fas").css("display", "flex");
    edited = true;
  } else {
    console.log("clickccccccccccccc");
    $(".flickfeed2 .removeIcon.fas").css("display", "none");
    edited = false;
  }
};

window.addEventListener("load", function () {});

// player.addEventListener(
//   "play",
//   function () {
//     // let PlayButton = document.getElementById("PlayButton");
//     player.onended = function () {
//       // console.log(player, "player");

//       if (document.querySelector("#watched .statusCount").innerText == "") {
//         document.querySelector("#watched .statusCount").innerHTML = 0;
//         document.querySelector("#watched .status").innerHTML = "watched";
//       }
//       document.querySelector("#watched .statusCount").innerHTML =
//         parseInt(document.querySelector("#watched .statusCount").innerHTML) + 1;
//       localStorage.setItem(
//         "watchCount",
//         document.querySelector("#watched .statusCount").innerText
//       );
//     };

//     // if (PlayButton) {
//     // PlayButton.innerHTML = localStorage.getItem("playBtn");
//     // }
//     if (player.ended) {
//       console.log("videoEnded");
//       historyLists.filter((element) => element.id !== currentSelectedId);
//     }
//   },
//   false
// );


function playvid(els) {
  els.play();
}

function pusevid(els) {
  els.pause();
}

const dismissModal = () => {
  $(".modal").modal("hide");
};
// player.addEventListener(
//   "pause",
//   // function () {
//   //   let PlayButton = document.getElementById("PlayButton");
//   //   PlayButton.innerHTML = localStorage.getItem("pauseBtn");
//   // },
//   false
// );

player.addEventListener( 
  "ended",
  function () {
    // seasonOne.forEach((ele)=>{
    //     if(currentSelectedId === ele.id){
    //       completeList.push(ele)
    //     }
    //   })
    historyLists.filter((row) => currentSelectedId === row.id);
    // Remove From Histroy List slider
    let selectedId = "";
    historyLists.forEach((row) => {
      if (currentSelectedId === row.id) {
        // document.querySelector(`[key=article-${row.id}]`).remove()
        let elem = $(`[key=article-${row.id}]`);
        selectedId = row.id;
        // console.log(elem.parent().parent().attr('data-slick-index'),'element')
        $(".flickfeed4").slick(
          "slickRemove",
          elem.parent().parent().attr("data-slick-index")
        );
        // $('.flickfeed3').slick('unslick');
        //  insertToHistoryOrCompleted('#completedSlider',0,row)
        //  $('.flickfeed3').slick('slickAdd','', $('.flickfeed3').slick(getSliderSettings())-1);
      }
    });
    historyLists = historyLists.filter((row) => {
      return row.id !== currentSelectedId;
    });

    // Add To Complete List  slider
    completeList = [
      ...completeList,
      ...seasonOne.filter((row) => {
        let exist = false;
        if (row.id === selectedId) {
          completeList.forEach((e) => {
            if (e.id === selectedId) {
              exist = true;
            }
          });
          return !exist;
        }
      }),
    ];

    if (completeList.length >= 1) {
      console.log(completeList, "completeList");
      let slideIndex = completeList.length;
      completeList.forEach(() => {
        $(".flickfeed3").slick("slickRemove", slideIndex - 1);
        if (slideIndex !== 0) {
          slideIndex--;
        }
      });

      completeList.forEach((row) => {
        $(".flickfeed3").slick("unslick");
        insertToHistoryOrCompleted("#completedSlider", 0, row);
        $(".flickfeed3").slick(
          "slickAdd",
          "",
          $(".flickfeed3").slick(getSliderSettings()) - 1
        );
      });
    }

    // intialize new Flickfeed

    // if (PlayButton) {
    //   // PlayButton.innerHTML = localStorage.getItem("endBtn");
    // }
    this.pause();
  },
  false
);

$(player).on(
  "ended",
  function () {
    console.log("jquery");
    player.load();
  },
  false
);

function pauseVid() {
  var percentage = Math.floor((100 / player.duration) * player.currentTime);
  if (percentage > 0 && percentage < 100) {
    // var element = document.getElementById("PlayButtonIcon");
    // var isClassExist = hasClass(element, "fa-pause");
    // console.log(isClassExist);
  }

  player.pause();
}

var playerss = document.getElementById("gossVideo");
playerss.addEventListener("ended", () => {
  document.querySelector(".closeexit").click();
  playerss.currentTime = 0;
});
let index11 = 0 ; 

document.addEventListener('click' , function (e) {
  if (e.target.closest('.mpp-buttons-top')) { 
   index11++ ;  
  } 
  
})
// Update the Icons for this specific video
function playPauseVideo(el) {
  // let PlayButton = document.getElementById("PlayButton");
  let id = $(el).next().attr("key");
  console.log(id, "hjhj");
  // element = PlayButton.children[0];
  console.log(player, "playButton", id, "id");
  let videoSrc = "";

  seasonOne.forEach((element) => {
    if (element.id === id) {
      videoSrc = element.videoSrc;
      currentSelectedId = element.id;
    }
  });

  $(player).get(0).load();
  $(player.children[0]).attr("src", videoSrc);
  console.log(videoSrc, "gg");
  if (player.paused || player.ended) {
    // var isClassExist = hasClass(element, "fa-play");
    if (isClassExist === true) {
      // removeClass(element, "fa-play");
      // addClass(element, "fa-pause");
      // console.log(element);
    }
    seasonOne.forEach((ele) => {
      if (ele.videoSrc === videoSrc) {
        player.currentTime = parseFloat(ele.progress);
      }
    });
    player.play();
  } else {
    var isClassExist = hasClass(element, "fa-pause");
    if (isClassExist === true) {
      removeClass(element, "fa-pause");
      addClass(element, "fa-play");
      // PlayButton.innerHTML = localStorage.getItem("pauseBtn");
    }
    seasonOne.forEach((ele) => {
      if (ele.videoSrc === videoSrc) {
        player.currentTime = parseFloat(ele.progress);
      }
    });
    // player.currentTime = parseFloat(localStorage.getItem("VideoEndedTime"))
    player.pause();
  }
}
let booleans1 = 'trues' ; 
document.addEventListener('click' , function (e) {
  if (e.target.closest('.mpp-buttons-top') || e.target.closest('.mpp-top')) {
    booleans1 = true  ; 
     
  } 
  if (e.target.closest('.mpp-buttons')) { 
    booleans1 = false ;   
   
  }
  if (e.target.closest('#PlayButton')) { 
    booleans1 =  false  ;   
   
  }


})
function updateProgressBar() {
  if (index11 > 0) {
   if (booleans1)  {
      let bottomProgressBar = document.getElementById(  
   
    `${"bottom-progress-bar" + currentSelectedId}`
  );

  

  console.log(bottomProgressBar, currentSelectedId, "updateProgressBar");

  let percentage = Math.floor((100 / player.duration) * player.currentTime); 
  console.log("percentage", percentage, player.duration, player.currentTime); 

  localStorage.setItem("VideoWatchPercentage", percentage);

  localStorage.setItem("VideoEndedTime", player.currentTime);
  seasonOne.forEach((element) => { 
    if (element.id === currentSelectedId) {
      if (bottomProgressBar) {
        bottomProgressBar.value = percentage ; 
        bottomProgressBar.innerHTML = percentage  + "% played";
      }
      
      element.progress = player.currentTime; 
      element.percentage = percentage;
    }
  });

  }
    
    
  }
}
player.addEventListener("timeupdate", updateProgressBar, false);

function updateVideoTimeWithBar(nu) {
  var player = document.getElementById("gossVideo");
  // topProgressBar.value = localStorage.getItem("VideoWatchPercentage");
  // topProgressBar.innerHTML = localStorage.getItem("VideoWatchPercentage") + '% played';
  historyLists.forEach((element) => {
    let bottomProgressBar = document.getElementById(
      `bottom-progress-bar${element.id}`
    );
   

    if (bottomProgressBar) {
      seasonOne.forEach((element) => {
        if (currentSelectedId === element.id) {
          bottomProgressBar.value = nu;
          bottomProgressBar.innerHTML = element.percentage + "% played";
        }
      });
    }
    if (TopProgressBar) {
      seasonOne.forEach((element) => {
        if (currentSelectedId === element.id) {
          
        }
      });
    }
    seasonOne.forEach((element) => {
      if (currentSelectedId === element.id) { 
        player.currentTime = parseFloat(element.progress); 
      }
    });
  });
}

updateVideoTimeWithBar();

////////////Toast

const button = document.querySelector("#onRemove"),
  toast = document.querySelector(".toast1");
(closeIcon = document.querySelector(".close1")),
  (progress = document.querySelector(".progress"));
let timer1, timer2;
button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");
  console.log(toast, button, "fired");
  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});

function addmutes() {
  console.log("hello ");
  if ($(".mute-video").hasClass("unmute-video")) {
    console.log("yes");
    $("video").prop("muted", true);
    $(".mute-video").removeClass("unmute-video");
  } else {
    console.log("no");
    $("video").prop("muted", false);
    $(".mute-video").addClass("unmute-video");
  }
}

$(document).ready(function () {
  var colsebackall = document.querySelectorAll(".flickfeed video");
  colsebackall.forEach((vidElement) => {
    vidElement.addEventListener(
      "ended",
      (event) => {
        if (!vidElement.classList.contains("mpp-hidden")) {
          vidElement.classList.add("mpp-hidden"); 
        }
        $(vidElement).parents(".slick-slide").addClass("pupo"); 
        $(vidElement)
          .parents(".favi") 
          .find(".mpp-playlist-item-ready") 
          .removeClass("mpp-playlist-item-active"); 
      },
      false
    );
  });

  document.querySelectorAll(".slick-slide").forEach((aaaaaoo) => {
    aaaaaoo.addEventListener("mouseenter", () => {
      if ($(aaaaaoo).hasClass("pupo")) { 
        $(aaaaaoo).removeClass("pupo"); 
      }
    });
  });

  $(".chckedd").parent().find("plus").css("display", "none");
});
