'use client'
import styles from './subscriberCreateForm.module.css';

const SubscriberCreateForm = ({handleSubmit}) => {

    return (
    
        <div className={styles.container}>

            <form onSubmit={handleSubmit}>
    
                <fieldset>

                    <legend>Create form</legend>
                
                    <label> Name
                        <input type="text" name="name" placeholder={'Indtast Navn'}></input>
                    </label>

                    <label> Email
                        <input type="text" name="email" placeholder={'Indtast Email'}></input>
                    </label>
                
                    <button>Opret Subscriber</button>

                </fieldset>
                
            </form>

        </div>
    )
};
export default SubscriberCreateForm