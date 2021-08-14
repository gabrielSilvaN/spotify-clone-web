import styles from './styles.module.scss';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import Player from '../../components/Player';


export default function Channel() {
    return (
        <div className={styles.container}>
            <Main/>
            <Sidebar/>
            <Player />
        </div>
    )
}
