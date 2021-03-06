function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
};
var google = document.getElementById('google');
var json = document.getElementById('json');
var result = document.getElementById('yaml');
var meta = document.getElementById('html');
var config = q2o(window.location.search);
if (window.location.search) {
  var jsonreplace = JSON.stringify(config, null, 2);
  var jsonresult = jsonreplace.replace(/\+/g, ' ');
  var title = config.title;
  var description = config.description;
  var date = config.date;
  var header = config.header;
  var author = config.author;
  var lead = config.lead;
  var slug = config.slug;
  var br = "<br>";
  var ystart = "---";
  var ytitle = "title: ";
  var ydescription = "description: ";
  var ydate = "date: ";
  var yheader = "header: ";
  var yauthor = "author: ";
  var ylead = "lead: ";
  var yslug = "slug: ";
  var yend = "...";
  var yreplace = ystart + br + ytitle + title + br + ydescription + description + br + ydate + date + br + yheader + header + br + yauthor + author + br + ylead + lead + br + yslug + slug + br + yend;
  var yamlresult = yreplace.replace(/\+/g, ' ');
  var mtitle = '&lt;title&gt;' + title + '&lt;/title&gt;';
  var mdescription = '&lt;meta ' + 'content="' + description + '"' + ' name="description">';
  var mdate = '&lt;meta ' + 'content="' + date + '"' + ' name="date">';
  var mheader = '&lt;meta ' + 'content="' + header + '"' + ' name="subject">';
  var mauthor = '&lt;meta ' + 'content="' + author + '"' + ' name="author">';
  var mlead = '&lt;meta ' + 'content="' + lead + '"' + ' name="lead">';
  var mslug = '&lt;meta ' + 'content="' + slug + '"' + ' name="canonical">';
  var htmlreplace = mtitle + br + mdescription + br + mdate + br + mheader + br + mauthor + br + mlead + br + mslug;
  var htmlresult = htmlreplace.replace(/\+/g, ' ');
  var gtitle = '<p><strong>' + ytitle + '</strong>' + br + br + '<a href="https://google.com/search?q=' + title + '" target="_blank">' + title + '</a></p>';
  var gdescription = '<p><strong>' + ydescription + '</strong>' + br + br + '<a href="https://google.com/search?q=' + description + '" target="_blank">' + description + '</a></p>';
  var gdate = '<p><strong>' + ydate + '</strong>' + br + br + '<a href="https://google.com/search?q=' + date + '" target="_blank">' + date + '</a></p>';
  var gheader = '<p><strong>' + yheader + '</strong>' + br + br + '<a href="https://google.com/search?q=' + header + '" target="_blank">' + header + '</a></p>';
  var gauthor = '<p><strong>' + yauthor + '</strong>' + br + br + '<a href="https://google.com/search?q=' + author + '" target="_blank">' + author + '</a></p>';
  var glead = '<p><strong>' + ylead + '</strong>' + br + br + '<a href="https://google.com/search?q=' + lead + '" target="_blank">' + lead + '</a></p>';
  var gslug = '<p><strong>' + yslug + '</strong>' + br + br + '<a href="https://google.com/search?q=' + slug + '" target="_blank">' + slug + '</a></p>';
  var greplace = gtitle + gdescription + gdate + gheader + gauthor + glead + gslug;
  var googleresult = greplace.replace(/\+/g, ' ');
  json.innerHTML = jsonresult;
  yaml.innerHTML = yamlresult;
  meta.innerHTML = htmlresult;
  google.innerHTML = googleresult;
}