import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';
import styles from './authenticator.module.scss';
import Button from './components/button';

const Authenticator: React.FC = async () => {
  const session = await getServerSession(options);

  if (session) {
    return (
      <div className={styles.content}>
        <h1>Depart the Realm</h1>

        <Button session={session} />
      </div>
    );
  } else {
    return (
      <div className={styles.content}>
        <h1>Enter the Realm</h1>

        <Button session={session} provider={'Github'} />
        <Button session={session} provider={'Google'} />
      </div>
    );
  }
};

export default Authenticator;
