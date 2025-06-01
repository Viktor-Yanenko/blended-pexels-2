import Grid from "../Grid/Grid";
import { type Photo } from "../../types/photo";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
    photos: Photo[],
    onSelect: (photo: Photo) => void;
}

export default function PhotosGallery({photos, onSelect}: PhotosGalleryProps) {
    return (
        <Grid>
            {photos.map(photo => {
                return (
                    <PhotosGalleryItem
                    key={photo.id}
                    photo={photo}
                    onSelect={onSelect}
                />
                )
            })
        }
        </Grid>
    )
}