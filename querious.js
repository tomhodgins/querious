/* Querious Element Query Demo: https://github.com/tomhodgins/querious */

function eq(){
  var queries = [
    ['data-width','tag[j].offsetWidth'],
    ['data-height','tag[j].offsetHeight'],
    ['data-characters','((tag[j].value||tag[j].innerHTML).length)'],
    ['data-children','tag[j].querySelectorAll("*").length'],
    ['data-words','var c=0,t=tag[j].value||tag[j].innerHTML;t.replace(/\\w\\b/g,function(){c++});c']
  ]
  for (var i=0; i<queries.length; i++){
    var condition = queries[i][0],
        test = queries[i][1],
        tag = document.querySelectorAll('['+condition+']')
    for (var j=0; j<tag.length; j++){
      var unit = tag[j].getAttribute(condition).split(','),
          min = unit[0],
          max = unit[1]
      if (
        ((unit.length === 1) && (min <= eval(test)))
        || ((unit.length === 2) && ((min <= eval(test)) && (eval(test) <= max)))
      ){
        tag[j].classList.add(condition)
      } else {
        tag[j].classList.remove(condition)
      }
    }
  }
}
window.addEventListener('load',eq)
window.addEventListener('resize',eq)
window.addEventListener('scroll',eq)
document.addEventListener('keyup',eq)
document.addEventListener('click',eq)