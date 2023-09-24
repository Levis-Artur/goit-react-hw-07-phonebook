import css from "./App.module.css"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList"
import { Filter } from './Filter/Filter'
import { Loader } from "./Loader/Loader";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ErrorMessage/>
      <Loader />
      <ContactList />
      </div>
    )

}

export default App