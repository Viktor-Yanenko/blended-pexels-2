import css from './GridItem.module.css';
import { type Photo } from '../../types/photo';

interface GridItemProps{
    photo: Photo;
    onSelect: (photo: Photo) => void;
    children: React.ReactNode;
}

export default function GridItem({ photo, onSelect, children }: GridItemProps) {
    
    return (
        <li
            className={css.item}
            onClick={() => onSelect(photo)}
        >
            {children}
        </li>
    )
}
