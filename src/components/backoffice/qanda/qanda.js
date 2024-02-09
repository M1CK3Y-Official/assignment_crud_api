'use client'
import styles from './qanda.module.css';
import { useEffect, useState } from 'react';
import QandaCreateForm from './qandaCreateForm/qandaCreateForm';
import QandaList from './qandaList/qandaList';

const Qanda = () => {

    const [list , setList] = useState([]);

    const getQandas = async () => {
            
        const response = await fetch('http://localhost:3000/api/qandas');
        const data = await response.json();
        setList(data);
    }

    useEffect(() => {

        getQandas();

    }, [])

    const handleSubmit = (e) => {

        e.preventDefault();

        let newQandA = {
            "question" : e.target.elements.question.value,
            "answer": e.target.elements.answer.value
        }

        fetch('/api/qandas', {
            method: 'POST',
            body: JSON.stringify(newQandA)
        }).then(res => res.json()).then( (result) => {

            // console.log('Vores ny oprettet Q and A', result)
            getQandas();

        });

    }

    const handleUpdate = (e) => {

        e.preventDefault();

        let updateQandA = {
            "id" : e.target.elements.id.value,
            "question" : e.target.elements.question.value,
            "answer": e.target.elements.answer.value
        }

        console.log('updateQandA', updateQandA)

        fetch('/api/qandas', {
            method: 'PUT',
            body: JSON.stringify(updateQandA)
        }).then(res => res.json()).then( (result) => {

            getQandas();
            
        });
    } 

    const handleDelete = (e, id) => {
        e.preventDefault();

        fetch('/api/qandas', {
            method: 'DELETE',
            body: JSON.stringify(id)
        }).then(res => res.json()).then( (result) => {

            getQandas();

        });
    } 
    
    return (
    
        <div className={styles.container}>
            
            <QandaCreateForm handleSubmit={handleSubmit}></QandaCreateForm>
            <QandaList list={list} handleUpdate={handleUpdate} handleDelete={handleDelete}></QandaList>
        
        </div>
    )
};
export default Qanda