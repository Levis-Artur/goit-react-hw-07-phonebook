import css from './ContactList.module.css'
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from "react-redux";
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts)
    return (
    <>
        {visibleContacts && 
        <ul className={css.list}>
            {visibleContacts.map(({id, name, phone }) => {
                return <ContactItem key={id} id={id} name={name} number={phone} />
            })}
        </ul >
            }
    </>
    )
    
}


