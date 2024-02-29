'use client'
import styles from './subscriberList.module.css';
import SubscriberEditForm from '../subscriberEditForm/subscriberEditForm';

const SubscriberList = ({list = [], handleUpdate, handleDelete}) => {

    return (
        <div className={styles.container}>
            {list.map((subscriber) => {
                return (
                    <SubscriberEditForm key={subscriber._id} subscriber={subscriber} onSubmit={handleUpdate} handleDelete={handleDelete}/>
                )
            })}
        </div>
    )
};
export default SubscriberList
