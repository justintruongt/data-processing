//alert("test");

/*  //use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

urlParams.forEach(function(value, key) {
    console.log(value, key);
  });
 */

  document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);

  document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 

  //manages mobile nav

  function myFunction() { 
    var x = document.getElementById("MyTopnav");
    if (x.className === "topnav") {
      x.classname += " responsive";
    } else {
      x.className = "topnav";
    }
    
  }