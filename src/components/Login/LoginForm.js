import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TextField } from 'final-form-material-ui';
import Container from '@material-ui/core/Container';
import { Form, Field } from 'react-final-form';

const validate = (values) => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

export const LoginForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Container component='main' maxWidth='xs'>
            <Grid  container spacing={2}>
              <Grid item xs={12}>
                <Field
                  required
                  fullWidth
                  name='login'
                  component={TextField}
                  type='text'
                  label='Login'
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  required
                  fullWidth
                  name='password'
                  component={TextField}
                  type='password'
                  label='Password'
                />   
              </Grid>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                >
                  Sign In
                </Button>
              </Grid>
          </Grid>
          </Container>
        </form>
      )}
    />
  );
}

export default LoginForm