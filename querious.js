/* Querious Element Query Demo: https://github.com/tomhodgins/querious */

var querious = (function(){
  var queries = [
    ['data-width','tag.offsetWidth'],
    ['data-height','tag.offsetHeight'],
    ['data-characters','(tag.value||tag.innerHTML).length'],
    ['data-words','var c=0,t=tag.value||tag.innerHTML;t.replace(/\\w\\b/g,function(){c++});c'],
    ['data-children','tag.querySelectorAll("*").length']
  ]
  function scanQueries(){
    for (var i=0; i<queries.length; i++){
      if (document.querySelector('['+queries[i][0]+']')){
        scanTags(i)
      }
    }
  }
  function scanTags(query){
    var tag = document.querySelectorAll('['+queries[query][0]+']')
    for (var i=0; i<tag.length; i++){
      processTag(query,tag[i])
    }
  }
  function processTag(query,tag){
    var unit = tag.getAttribute(queries[query][0]).split(','),
        condition = queries[query][0],
        test = queries[query][1],
        min = unit[0],
        max = unit[1]
    if (
      ((unit.length === 1) && (min <= eval(test)))
      || ((unit.length === 2) && ((min <= eval(test)) && (eval(test) <= max)))
    ){
      tag.classList.add(condition)
    } else {
      tag.classList.remove(condition)
    }
  }
  window.addEventListener('load',scanQueries)
  window.addEventListener('resize',scanQueries)
  document.addEventListener('keyup',scanQueries)
  document.addEventListener('click',scanQueries)
})();