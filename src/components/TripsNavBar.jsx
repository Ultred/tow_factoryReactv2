import styles from '../components/TripsNavBar.module.css'

function TripsNavBar(){
    return(
        <nav className={styles.tripsNavBar}>
            <ul className={styles.LinkFlex}>
                <li>ALL</li>
                <li>ON CHECKING</li>
                <li>CONFIRMATION</li>
                <li>FOR PICK-UP</li>
                <li>IN TRANSIT</li>
                <li>DROP-OFF</li>
                <li>RECEIVED</li>
                <li>CANCELLED</li>
            </ul>
        </nav>
    )
}

export default TripsNavBar