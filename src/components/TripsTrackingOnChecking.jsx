import styles from '/src/components/TripsTrackingOnChecking.module.css'
import calendarIcon from '../assets/calendar-icon.png'
import pickupIcon from '../assets/pickup-icon.png'
import dropoffIcon from '../assets/dropoff-icon.png'

function TripsTrackingOnChecking () {
    return (
        <main>
            <div className={styles.container}>
                <header className={styles.header}>
                    <p>TRACKING NUMBER: </p>
                    <p className={styles.trackingReference}>TF0123456789</p>
                </header>
                <div className={styles.trackingInfo}>
                    <div className={styles.trackingLeft}>
                        <div className={styles.status}>
                            <p>STATUS: </p>
                            <span>On Checking</span>
                        </div>
                        <div className={styles.client}>
                            <p>CLIENT: </p>
                            <span>Juan Dela Cruz</span>
                        </div>
                        <div className={styles.manufacturer}>
                            <p>MANUFACTURER: </p>
                            <span>Honda</span>
                        </div>
                        <div className={styles.plateNumber}>
                            <p>PLATENUMBER: </p>
                            <span>ABC 123</span>
                        </div>
                    </div>
                    <div className={styles.trackingRight}>
                        <div className={styles.date}>
                            <img src={calendarIcon}></img>
                            <div className={styles.dateContainer}>
                                <p>Date Placed: March 15, 2023</p>
                                <span>Date Scheduled: March 20, 2023</span>
                            </div>
                            
                        </div>
                        <div className={styles.pickUp}>
                            <img src={pickupIcon}></img>
                            <p>839 unit-N S. H. Loyola, Sampaloc, Manila, 1008 Metro Manila</p>
                        </div>
                        <div className={styles.dropOff}>
                            <img src={dropoffIcon}></img>
                            <p>Espana, Manila City, Metro Manila, Philippines</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TripsTrackingOnChecking