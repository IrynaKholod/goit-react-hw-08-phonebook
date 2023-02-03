import { useDispatch } from 'react-redux';
import { logIn } from '../../Redax/Auth/operations';
import {LogForm,  LogLabel, LogBtn} from './LoginForm.styled';
import {Container} from '../../Pages/Pages.styled'

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <Container>
    <LogForm onSubmit={handleSubmit} autoComplete="off">
      <LogLabel>
        Email
        <input type="email" name="email" />
      </LogLabel>
      <LogLabel>
        Password
        <input type="password" name="password" />
      </LogLabel>
      <LogBtn type="submit">Log In</LogBtn>
    </LogForm>
    </Container>
  );
};

    