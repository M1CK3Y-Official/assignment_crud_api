'use client'
import styles from './qandaCreateForm.module.css';

const QandaCreateForm = ({handleSubmit}) => {

    return (
    
        <div className={styles.container}>

            <form onSubmit={handleSubmit}>
    
                <fieldset>

                    <legend>Create form</legend>
                
                    <label> Question
                        <input type="text" name="question" placeholder={'Indtast Spørgsmål'}></input>
                    </label>

                    <label> Answer
                        <input type="text" name="answer" placeholder={'Indtast Svar'}></input>
                    </label>
                
                    <button>Opret Q & A</button>

                </fieldset>
                
            </form>

        </div>
    )
};
export default QandaCreateForm