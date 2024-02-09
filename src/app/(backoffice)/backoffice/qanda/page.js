import styles from './page.module.css'
import Qanda from '@/components/backoffice/qanda/qanda'

const Page = () => {
    
  return (

    <main className={styles.page}>
      
      <h1>Backoffice Question and Answers</h1>
      <Qanda></Qanda>

    </main>

  )

}

export default Page