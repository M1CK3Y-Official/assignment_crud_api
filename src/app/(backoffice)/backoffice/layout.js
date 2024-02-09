import Link from 'next/link';
import styles from './layout.module.css';

import NavWrapper from '@/components/common/navWrapper/navWrapper';
const backofficeNav = [
    {
        title: 'Create & Edit Q and A',
        url: '/backoffice/qanda',
    },
    {
        title: 'Create & Edit Subscribers',
        url: '/backoffice/subscribers',
    }
  ]


export default async function backofficeLayout({ children }) {

    return <div className={styles.layout}>
        {/* BACKOFFICE NAVIGATION */}
        <NavWrapper theme={'backoffice'} title={'BACKOFFICE NAVIGATION'} navData={backofficeNav}></NavWrapper>
        { children }
    </div>
}