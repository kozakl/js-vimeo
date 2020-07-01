import {removeLastFrom} from '@kozakl/utils/string';

export default async function vimeoPosterURL(videoId:string)
{
    return await fetch(`http://vimeo.com/api/v2/video/${videoId}.json`)
        .then((response)=> response.json())
        .then((result)=>
            removeLastFrom(result[0].thumbnail_large, '_'));
}
