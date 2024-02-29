'use client'
import styles from './subscriber.module.css';
import { useEffect, useState } from 'react';
import SubscriberCreateForm from './subscriberCreateForm/subscriberCreateForm';
import SubscriberList from './subscriberList/subscriberList';

const Subscriber = () => {

    const [list , setList] = useState([]);

    const getSubscribers = async () => {
            
        const response = await fetch('http://localhost:3000/api/subscribers');
        const data = await response.json();
        setList(data);
    }

    useEffect(() => {

        getSubscribers();

    }, [])

    const handleSubmit = (e) => {

        e.preventDefault();

        let newSubscriber = {
            "name" : e.target.elements.name.value,
            "email": e.target.elements.email.value
        }

        fetch('/api/subscribers', {
            method: 'POST',
            body: JSON.stringify(newSubscriber)
        }).then(res => res.json()).then( (result) => {

            // console.log('Vores ny oprettet Q and A', result)
            getSubscribers();

        });

    }

    const handleUpdate = (e) => {

        e.preventDefault();

        let updateSubscriber = {
            "id" : e.target.elements.id.value,
            "name" : e.target.elements.name.value,
            "email": e.target.elements.email.value
        }

        console.log('updateSubscriber', updateSubscriber)

        fetch('/api/subscribers', {
            method: 'PUT',
            body: JSON.stringify(updateSubscriber)
        }).then(res => res.json()).then( (result) => {

            getSubscribers();
            
        });
    } 

    const handleDelete = (e, id) => {
        e.preventDefault();

        fetch('/api/subscribers', {
            method: 'DELETE',
            body: JSON.stringify(id)
        }).then(res => res.json()).then( (result) => {

            getSubscribers();

        });
    } 
    
    return (
    
        <div className={styles.container}>
            
            <SubscriberCreateForm handleSubmit={handleSubmit}></SubscriberCreateForm>
            <SubscriberList list={list} handleUpdate={handleUpdate} handleDelete={handleDelete}></SubscriberList>
        
        </div>
    )
};
export default Subscriber