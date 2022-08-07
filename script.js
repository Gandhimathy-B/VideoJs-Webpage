var url_string = window.location.href;

  var url = new URL(url_string);
  var link = url.searchParams.get("link");

  var video = videojs("my-video");
  video.src(link);