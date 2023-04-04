let keys  = document.querySelectorAll(".keys li");
let volume  = document.querySelector("#volume");
let audio = new Audio("tunes/a.wav");//by default a wav is the source
keys.forEach(key=>{
    // console.log(key.dataset.key);
    key.addEventListener('click',()=>{
        // console.log(key.dataset.key);
        audio.src = `tunes/${key.dataset.key}.wav`;
        audio.play();

    })

})
volume.addEventListener("input",(e)=>{
    audio.volume = e.target.value;
})
