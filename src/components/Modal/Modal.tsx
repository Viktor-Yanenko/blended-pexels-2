import { useEffect } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import type { Photo } from '../../types/photo';

interface ModalProps {
    onClose: () => void;
    photo: Photo;
}

export default function Modal({ onClose, photo }: ModalProps) {
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        }
    }, [onClose])

    return createPortal(
        <div className={css.backdrop} role='dialog' aria-modal='true' onClick={handleBackdropClick}>
            <div className={css.modal}>
                <button className={css.closeButton} onClick={onClose} aria-label='Close modal'>
                    &times;
                </button>
                <img src={photo.src.large} alt={photo.alt} />
                <p>{photo.alt}</p>
            </div>
        </div>,
        document.body
    )
}