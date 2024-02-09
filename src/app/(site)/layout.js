import Link from 'next/link';
import styles from './layout.module.css';
import NavWrapper from '@/components/common/navWrapper/navWrapper';

const siteNav = [
    {
      title: 'Qanda´s',
      url: '/qanda',
    }
]

export default async function siteLayout({ children }) {

    return <div className={styles.layout}>
        {/* SITE NAVIGATION */}
        <NavWrapper theme={'site'} title={'SITE NAVIGATION'} navData={siteNav}></NavWrapper>
        {children}
    </div>
}