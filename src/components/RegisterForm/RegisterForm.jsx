import { useDispatch } from 'react-redux';
import {RegForm, RegLabel, RegBtn} from './RegisterForm.styled'
import {Container} from '../../Pages/Pages.styled'
import { register } from '../../Redax/Auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <Container>
    <RegForm onSubmit={handleSubmit} autoComplete="off">
      <RegLabel>
        Username
        <input type="text" name="name" />
      </RegLabel>
      <RegLabel>
        Email
        <input type="email" name="email" />
      </RegLabel>
      <RegLabel>
        Password
        <input type="password" name="password" />
      </RegLabel>
      <RegBtn type="submit">Register</RegBtn>
    </RegForm>
    </Container>
  );
};
