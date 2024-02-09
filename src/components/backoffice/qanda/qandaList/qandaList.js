'use client'
import styles from './qandaList.module.css';
import QandaEditForm from '../qandaEditForm/qandaEditForm';

const QandaList = ({list = [], handleUpdate, handleDelete}) => {

    return (
        <div className={styles.container}>
            {list.map((qanda) => {
                return (
                    <QandaEditForm key={qanda._id} qanda={qanda} onSubmit={handleUpdate} handleDelete={handleDelete}/>
                )
            })}
        </div>
    )
};
export default QandaList
