async function getSong(){

    let a = await fetch("http://127.0.0.1:5500/Project/Spotify%20Clone/song/");
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let song[]
    for(let index=0; index < as.length; length++){
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            song.push(element.href)
        }
    }
    return song
}
async function main(){
    let song = await getSong()
    console.log(song)
    // for play audio
    var audio = new Audio(song[0]);
    audio.play();

    audio addEventListener("loadeddata",() => {
        let duration = audio.duration;
        console.log(duration)
    });
}
main()