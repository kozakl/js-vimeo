export function isVimeoVideo(url:string) {
    return /vimeo.*\/(\d+)/i.test(url);
}
