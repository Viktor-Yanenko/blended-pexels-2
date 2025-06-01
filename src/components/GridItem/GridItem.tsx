import css from './GridItem.module.css';
import { type Photo } from '../../types/photo';

interface GridItemProps{
    onSelect: (photo: Photo) => void;
    photos: Photo[];
    children: React.ReactNode;
}

export default function GridItem({ onSelect, photos, children }: GridItemProps) {
    return (
        <>
        {
            photos.map(photo => {
                return(
                    <li
                        key={photo.id}
                        className={css.item}
                        onClick={() => onSelect(photo)}>
                        
                        {children}
                    </li>
                )
            })
        }
        </>
    )
}