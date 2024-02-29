import Subscriber from '@/components/backoffice/subscriber/subscriber'
import styles from './page.module.css'

const Page = () => {
    
  return (

    <main className={styles.page}>
      
      <h1>Backoffice Subscribers</h1>
      <Subscriber></Subscriber>
    </main>

  )

}

export default Page