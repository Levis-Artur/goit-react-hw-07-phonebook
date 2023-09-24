import css from './ContactItem.module.css'
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const onDel = () => dispatch(deleteContact(id))
    return (
        <li className={css["list-item"]}>
            <div className={css["contact-item"]}>
                <p>{name}: {number}</p>
                <button type='button' className={css["del-btn"]} onClick={onDel}>Delete</button>    
            </div>    
        </li>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}