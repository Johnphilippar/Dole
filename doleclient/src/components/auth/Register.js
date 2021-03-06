import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { setAlert } from '../../components/actions/alert';
import { register } from '../../components/actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Register = ({ setAlert , register}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { firstName, middleName , lastName ,email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Password do not match', 'danger');
        } else {
            register({firstName, middleName , lastName ,email, password})
        }

    }

    return (
        <Fragment>

            <section className="container">

                <h1 className="large text-primary">Sign Up</h1>

                <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>

                <form className="form" onSubmit={e => onSubmit(e)}>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={e => onChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Middle Name"
                            name="middleName"
                            value={middleName}
                            onChange={e => onChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={e => onChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            minLength="6"
                            value={password}
                            onChange={e => onChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            minLength="6"
                            value={password2}
                            onChange={e => onChange(e)}
                        />
                    </div>

                    <input type="submit" className="btn btn-primary" value="Register" />

                </form>

                <p className="my-1">
                    Already have an account? <Link to="/Login">Sign In</Link>
                </p>

            </section>

        </Fragment>
    )
}

Register.propTypes = {
    setAlert:PropTypes.func.isRequired,
    register:PropTypes.func.isRequired,
};

export default connect( null ,{ setAlert , register} )(Register);
