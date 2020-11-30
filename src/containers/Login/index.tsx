import React, {ChangeEvent, FC, FormEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button} from '../../components';
import {RootState} from '../../config/store';
import {authorize} from '../../modules/auth';
import {ILoginInput} from '../../modules/auth/types';
import {
  FormFooter,
  Root,
  StyledArrowIcon,
  StyledError,
  StyledField,
  StyledForm,
  Title,
} from './styled.index';
import {ILoginProps} from './types';

const Login: FC<ILoginProps> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {userToken, errors} = useSelector((state: RootState) => state.auth);
  const {isLoading} = useSelector((state: RootState) => state.loading);
  const [formValues, setFormValues] = useState<Partial<ILoginInput>>();
  const [hasErrors, setHasErrors] = useState<boolean>(false);

  useEffect(() => {
    if (!errors) return;

    setHasErrors(true);
  }, [errors, setHasErrors]);

  useEffect(() => {
    if (userToken !== 'ok') return;

    history.replace('/');
  }, [history, userToken]);

  const validateValues = useCallback(() => {
    const currentPassword = formValues?.password ?? '';

    const isValidForm = currentPassword &&
      currentPassword.length >= 7 &&
      currentPassword.match(/\d+/) &&
      currentPassword.match(/[A-Z]+/) &&
      currentPassword.match(/[a-z]+/) &&
      currentPassword.match(/_*/);

    setHasErrors(!isValidForm);

    return isValidForm;
  }, [formValues?.password]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setHasErrors(false);
    const { target: {name, value} } = event;

    setFormValues({...formValues, [name]: value});
  }, [formValues]);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidForm = validateValues();
    if (!isValidForm) return;

    console.log(formValues);
    dispatch(authorize(formValues as ILoginInput));
  }, [dispatch, formValues, validateValues]);

  return (
    <Root>
      <Title>Вход в личный кабинет</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledField
          name="login"
          type="email"
          label="Логин"
          placeholder="user@mail.ru"
          required
          autoComplete="off"
          error={hasErrors}
          disabled={isLoading}
          onChange={handleChange}
        />
        <StyledField
          name="password"
          type="password"
          label="Пароль"
          placeholder="*********"
          required
          autoComplete="off"
          error={hasErrors}
          disabled={isLoading}
          onChange={handleChange}
        />
        <FormFooter>
          <Button disabled={isLoading}>Вход<StyledArrowIcon /></Button>
          {hasErrors && <StyledError>Неверный логин или пароль</StyledError>}
        </FormFooter>
      </StyledForm>
    </Root>
  );
};

export default Login;
