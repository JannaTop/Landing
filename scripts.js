//wait for page to load before running script 2 seconds
setTimeout(function() {
  var iframe = document.getElementById('targetframe');

  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

  innerDoc.querySelector('.grid .grid-cols-2 .gap-4 .sm:flex .w-full').style.display = 'none';
  
  
  console.log(innerDoc);
  console.log(iframe);
}, 2000);