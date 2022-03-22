const $video = document.querySelector("#video")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $backward = document.querySelector("#backward")
const $forward = document.querySelector("#forward")


$play.addEventListener("click",handlePlay)
$pause.addEventListener("click",handlePause)

function handlePlay(){
$video.play()
$play.hidden = true
$pause.hidden = false

console.log("you've clicked play")
}


function handlePause(){
$video.pause()
$pause.hidden = true
$play.hidden = false 
console.log("you've clicked pause")
}

$backward.addEventListener("click", handleBackward)


function handleBackward(){
console.log("back 10 seconds")
$video.currentTime = $video.currentTime - 10 
}


$forward.addEventListener("click",handleForward)


function handleForward(){
    $video.currentTime = $video.currentTime + 10 
console.log('forward 10 seconds',$video.currentTime)
}