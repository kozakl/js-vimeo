export default function vimeoVideoId(url:string)
{
    const match = /vimeo.*\/(\d+)/i.exec(url);
    if (match) {
        return match[1];
    }
    return null;
}
