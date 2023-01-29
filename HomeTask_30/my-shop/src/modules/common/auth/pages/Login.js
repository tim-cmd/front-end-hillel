import { Field, Form, Formik } from 'formik';

import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useIsAuthorized from '../hooks/useIsAuthorized';

const initialValues = { username: '', password: '', role: 'admin' };

function Login() {
    const { login } = useAuth();
    const isAuthorized = useIsAuthorized();

    function onSubmit({ username, password, role }) {
        login(username, password, role);
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                {isAuthorized && <Navigate replace={true} to="/" />}
                <Field name="username" placeholder="Username" />
                <br />
                <Field name="password" type="password" placeholder="Password" />
                <br />
                <Field name="role" placeholder="Role" />
                <br />
                <button type="submit">Login</button>
            </Form>
        </Formik>
    );
}

export default Login;
