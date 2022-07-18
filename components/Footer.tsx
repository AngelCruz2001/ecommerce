import styles from '../styles/Footer.module.scss'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p>
                MTG Page with&nbsp;<a href="https://magic.wizards.com/es">Magic Wizards</a>&nbsp;- powered store
            </p>
            <div className={styles.footer__left}>
                <a href="https://magic.wizards.com/es/mtgarena">MTG Arena</a>
            </div>
        </footer>
    )
}