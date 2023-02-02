import { useDispatch } from 'react-redux';
import { logOut } from '../../Redax/Auth/operations';
import { useAuth } from '../../hooks/hooks';
import {LogOutBtn, UserBox } from './UserMenu.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserBox >
      <p >Welcome, {user.name}</p>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </LogOutBtn>
    </UserBox >
  );
};
