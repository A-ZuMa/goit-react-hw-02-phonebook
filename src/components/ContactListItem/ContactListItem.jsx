import styles from './ContactListItem.css'

export const ContactListItem = ({ contactName, contactNumber }) => {
    return (
      <p>
        <span className={styles.itemName}>{contactName}: </span>
        <span className={styles.itemNumber}>{contactNumber}</span>
      </p>
    );
  };