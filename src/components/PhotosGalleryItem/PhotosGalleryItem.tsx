import GridItem from "../GridItem/GridItem";
import css from './PhotosGalleryItem.module.css'
import { type Photo } from "../../types/photo";

interface PhotosGalleryItemProps{
    photo: Photo;
}

export default function PhotosGalleryItem({
    photo: {src, alt, avg_color}
}: PhotosGalleryItemProps) {
    return (
        <GridItem>
            <div className={css.thumb} style={{
                backgroundColor: avg_color,
                borderColor: avg_color,
            }}>
                <img src={src.original} alt={alt} />
            </div>
        </GridItem>
    )
}