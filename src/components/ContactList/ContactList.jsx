import { ContactListItem } from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css'

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contListBox}>
      {contacts.map(contact => (
        <li className={styles.contListItem} key={contact.id}>
          <ContactListItem
            contactName={contact.name}
            contactNumber={contact.number}
          ></ContactListItem>
          <button
            type="button"
            id={contact.name}
            className="btn btn-outline"
            onClick={onDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};