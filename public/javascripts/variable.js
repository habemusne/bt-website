//
// background
// --------------------------------------------------
// choose background version for each desktop and mobile :)
//

// for desktop
var _bg_style_desktop =                 1; // 1 = image
                                           // 2 = image (mp3 audio)
                                           // 3 = slideshow
                                           // 4 = slideshow (mp3 audio)
                                           // 5 = slideshow (kenburn)
                                           // 6 = slideshow (kenburn, mp3 audio)
                                           // 7 = html5 video (mute)
                                           // 8 = html5 video (video audio)
                                           // 9 = html5 video (mp3 audio)
                                           // 10 = youtube video (mute)
                                           // 11 = youtube video (video audio)
                                           // 12 = youtube video (mp3 audio)

// for mobile
var _bg_style_mobile =                  1; // 1 = image
                                           // 2 = image (mp3 audio)
                                           // 3 = slideshow
                                           // 4 = slideshow (mp3 audio)
                                           // 5 = slideshow (kenburn)
                                           // 6 = slideshow (kenburn, mp3 audio)
// if _bg_style == 4 - 6 (slideshow)
var _bg_slideshow_image_amount =        3; // slideshow image amount
var _bg_slideshow_duration =            9000; // millisecond

// if _bg_style == 10 - 12 (youtube video)
var _bg_video_youtube_url =             'hthh1PyQ8m4'; // youtube video url id - https://www.youtube.com/watch?v=hthh1PyQ8m4

var _bg_video_youtube_quality =         'hightres'; // hightres, hd1080, hd720, default - youtube video quality
var _bg_video_youtube_start =           1; // seconds - video start time
var _bg_video_youtube_end =             60; // seconds - video end time, 0 to ignored
var _bg_video_youtube_loop =            true; // true, false - video loop

//
// background effect (cloud / star)
// --------------------------------------------------
//

var _bg_effect =                        2; // 0 = disable, 1 = cloud, 2 = star

//
// if _bg_effect == 1 (cloud)
// --------------------------------------------------
//

var _cloud_opacity =                    .3; // [0.1 to 1] - cloud opacity

//
// if _bg_effect == 2 (star)
// --------------------------------------------------
//

var _bg_effect_star_color =             'rgba(255, 255, 255, .9)';// rgba format - star color
var _bg_effect_star_width =             2; // px - star width