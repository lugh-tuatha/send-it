export function preLoadAudio(src: string) { 
    const audio = new Audio(src);
    audio.load();
    return audio;
}

export function playAudio(src: string) {
    const audio = new Audio(src);
    audio.play();
}