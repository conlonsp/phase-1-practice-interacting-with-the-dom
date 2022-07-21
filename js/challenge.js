//////////////////////////// Interacting With the DOM /////////////////////////

// Variable List //////////////////////////////////////////////////////////////

const counter = document.getElementById('counter')
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const heartButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')
const submitButton = document.getElementById('submit')
const likes = document.querySelector('ul.likes')
const commentList = document.getElementById('list')
const commentForm = document.querySelector('form')
let interval = setInterval(usePlus, 1000)
let trackCounts = {}

// Functions List /////////////////////////////////////////////////////////////

function usePlus(event) {
  return counter.innerText = parseInt(counter.innerText) + 1
}

function useMinus() {
  return counter.innerText = parseInt(counter.innerText) - 1
}

function usePause() {
  if(pauseButton.innerText === 'pause') {
    clearInterval(interval)
    pauseButton.innerText = 'resume'
    minusButton.disabled = true
    plusButton.disabled = true
    heartButton.disabled = true
    submitButton.disabled = true
  } else {
    interval = setInterval(usePlus, 1000)
    pauseButton.innerText = 'pause'
    minusButton.disabled = false
    plusButton.disabled = false
    heartButton.disabled = false
    submitButton.disabled = false
  }
}

function getLikes() {
  let num = counter.innerText
  trackCounts[num] = trackCounts[num] || 0
  trackCounts[num] += 1
  commentLikes()
}

function commentLikes() {
  likes.innerHTML = ''
  for(let key in trackCounts) {
    const li = document.createElement('li')
    li.textContent = `${key} has been liked ${trackCounts[key]} times!`
    likes.append(li)
  }
}

function addComment(event) {
  event.preventDefault()
  const p = document.createElement('p')
  let input = document.getElementById('comment-input')
  p.textContent = input.value
  commentList.append(p)
  commentForm.reset()
}

// Event Listeners ///////////////////////////////////////////////////////////

plusButton.addEventListener('click', usePlus)
minusButton.addEventListener('click', useMinus)
pauseButton.addEventListener('click', usePause)
heartButton.addEventListener('click', getLikes)
submitButton.addEventListener('click', addComment)


///////////////////////////////////////////////////////////////////////////////