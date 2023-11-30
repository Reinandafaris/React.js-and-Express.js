import { useSelector } from 'react-redux';
import Center from './Center';

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>
        Welcome Back <strong>{user && user.name}</strong>
      </h2>
      <Center />
    </div>
  );
};

export default Welcome;
