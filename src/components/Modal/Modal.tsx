import css from './Modal.module.css';

export default function Modal() {
    return (
        <div className={css.backdrop} role='dialog' aria-modal='true'>
            <div className={css.modal}>
                <button className={css.closeButton} aria-label='Close modal'>
                    &times;
                </button>
                {}
            </div>
        </div>
    )
}