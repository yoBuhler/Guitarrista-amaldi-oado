//$('img').attr("src","https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5c/5cc083be58e93da003cad981f1e11cc345f12d7e_full.jpg").attr("srcset","https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5c/5cc083be58e93da003cad981f1e11cc345f12d7e_full.jpg");

//$(document).ready(function () {
//    //$('img').each(function(){
//    //    $(this).attr("src","https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5c/5cc083be58e93da003cad981f1e11cc345f12d7e_full.jpg").attr("srcset","https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5c/5cc083be58e93da003cad981f1e11cc345f12d7e_full.jpg");
//    //});
//    $('img').attr("src", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5c/5cc083be58e93da003cad981f1e11cc345f12d7e_full.jpg").attr("srcset", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5c/5cc083be58e93da003cad981f1e11cc345f12d7e_full.jpg");
//});

//$(html).on('load', function () {
//    $('img').attr("src", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5c/5cc083be58e93da003cad981f1e11cc345f12d7e_full.jpg").attr("srcset", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5c/5cc083be58e93da003cad981f1e11cc345f12d7e_full.jpg");
//});

$(document).ready(function () {
    setInterval(function () {
        $('img').each(function () {
            if (!$(this).hasClass("maldicao")) {
                var image = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5c/5cc083be58e93da003cad981f1e11cc345f12d7e_full.jpg';
                var width = $(this).width();
                var height = $(this).height();
                $(this).addClass("maldicao");
                $(this).attr("src", image);
                $(this).attr("srcset", image);
                $(this).width(width);
                $(this).height(height);
            }
        });
    }, 3000);
    document.body.innerHTML += '<video autoplay loop src="' + chrome.extension.getURL('maldicao.mp3') + '" id="maldicaoMusic"></video>';
    document.getElementById("maldicaoMusic").load();
    document.getElementById("maldicaoMusic").volume = 100;
    document.getElementById("maldicaoMusic").play();
});