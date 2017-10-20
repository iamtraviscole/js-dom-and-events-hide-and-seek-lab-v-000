function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list li')
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
}

function deepestChild() {
  const grandNodeDivs = document.querySelectorAll('#grand-node div')
  return grandNodeDivs[grandNodeDivs.length-1]
}
