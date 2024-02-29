'use client'
import styles from './subscriberEditForm.module.css';
import { useEffect, useState } from 'react';

const SubscriberEditForm = ({subscriber, onSubmit, handleDelete}) => {

    return (
    
        <div className={styles.container} >
        
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>Edit form</legend>
                    <label> Id
                        <input type="text" name="id" defaultValue={subscriber._id} disabled />
                    </label>

                    <label> Name
                        <input type="text" name="name" defaultValue={subscriber.name} />
                    </label>

                    <label> Email
                        <input type="text" name="email" defaultValue={subscriber.email} />
                    </label>
                    
                    <button>Redigér Subscriber</button> <button onClick={(e) => handleDelete(e, subscriber._id)}>Slet Subscriber</button>
                </fieldset>
            </form>
            
        </div>
    )
};
export default SubscriberEditForm;