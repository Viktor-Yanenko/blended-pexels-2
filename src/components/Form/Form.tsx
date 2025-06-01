import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import css from './Form.module.css';

interface FormProps {
    onSubmit: (query: string) => void;
}

export default function Form({ onSubmit }: FormProps) {
    const handleSubmit = (formData: FormData) => {
        const query = (formData.get('search') as string).trim();
        if (query === '') {
            toast.error('Please enter your search query.');
            return;
        }
        onSubmit(query);
    }

    return (
        <form className={css.form} action={handleSubmit}>
            <input
                className={css.input}
                placeholder="What do you want to write?"
                name="search"
                autoFocus
            />
            <button className={css.button} type="submit">
                <FiSearch size='16px'/>
            </button>
        </form>
    )
}