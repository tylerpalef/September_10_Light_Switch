document.body.querySelector('button').addEventListener("click", function(lightOff){
    var element = document.body;
    element.classList.add("dark");

    if (element.classList.contains('light')) {
      text = element.querySelector('h1');{
        text.innerHTML = 'Lights off';
      }
      element.classList.replace('light', 'dark')
    }
    else if (element.classList.contains('dark')){
      element.classList.replace('dark', 'light')
        text.innerHTML = 'Lights on';
    }
 /*/ if
always need the in parenthsis
/*/

});
