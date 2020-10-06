import {removeLastFrom} from '@kozakl/utils/string';
import {vimeoVideoId} from './index';

export default async function vimeoVideo(url:string)
{
    const id = vimeoVideoId(url);
    return await fetch(`https://vimeo.com/api/v2/video/${id}.json`)
        .then((response)=> response.json())
        .then((result:Result[])=> ({
            title: result[0].title,
            description: result[0].description,
            thumbnail: removeLastFrom(result[0].thumbnail_large, '_'),
            width: result[0].width,
            height: result[0].height
        }));
}

interface Result {
    title:string;
    description:string;
    thumbnail_large:string;
    width:number;
    height:number;
}
