var RedirectTo = window.location.href;

RedirectTo = RedirectTo.replace("en.","");
RedirectTo = RedirectTo.replace("wikipedia.org", "infogalactic.com");
RedirectTo = RedirectTo.replace("/wiki", "/info");

window.location.replace(RedirectTo)
