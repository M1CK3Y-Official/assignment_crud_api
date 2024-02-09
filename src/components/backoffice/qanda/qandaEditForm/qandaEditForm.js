'use client'
import styles from './qandaEditForm.module.css';
import { useEffect, useState } from 'react';

const QandaEditForm = ({qanda, onSubmit, handleDelete}) => {

    return (
    
        <div className={styles.container} >
        
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>Edit form</legend>
                    <label> Id
                        <input type="text" name="id" defaultValue={qanda._id} disabled />
                    </label>

                    <label> Question
                        <input type="text" name="question" defaultValue={qanda.question} />
                    </label>

                    <label> Answer
                        <input type="text" name="answer" defaultValue={qanda.answer} />
                    </label>
                    
                    <button>Redigér Q & A</button> <button onClick={(e) => handleDelete(e, qanda._id)}>Slet Q & A</button>
                </fieldset>
            </form>
            
        </div>
    )
};
export default QandaEditForm