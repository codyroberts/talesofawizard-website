import Authenticator from '../components/authentication/authenticator';
import styles from './login.module.scss';

const loginPage = async () => {
  return (
    <div className={styles.content}>
      <Authenticator />
    </div>
  );
};

export default loginPage;
