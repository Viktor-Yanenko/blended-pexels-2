import GridItem from "../GridItem/GridItem";
import css from './PhotosGalleryItem.module.css'
import { type Photo } from "../../types/photo";

interface PhotosGalleryItemProps{
    photo: Photo;
    onSelect: (photo: Photo) => void;
}

export default function PhotosGalleryItem({ photo, onSelect }: PhotosGalleryItemProps) {
    const { src, alt, avg_color } = photo;
    return (
        <GridItem photo={photo} onSelect={onSelect}>
            <div className={css.thumb} style={{
                backgroundColor: avg_color,
                borderColor: avg_color,
            }}>
                <img src={src.original} alt={alt} />
            </div>
        </GridItem>
    )
}