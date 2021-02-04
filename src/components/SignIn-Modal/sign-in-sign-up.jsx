import React, { Component } from 'react'
import { connect } from 'react-redux';
// Utils
import { googleSignInStart, emailSignInStart } from '../../Redux/User/user.actions'
//components
import FormInput from '../FormInputs/form-input';




class SignInModal extends Component {

    constructor(props) {

        super(props);

        this.state = {
            password: '',
            email: '',
            show: false
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }


    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props;

        return (

            <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="icon-close"></i></span>
                            </button>

                            <div className="form-box">
                                <div className="form-tab">
                                    <ul className="nav nav-pills nav-fill" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="tab-content-5">
                                        <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                            <form onSubmit={this.handleSubmit} >
                                                <FormInput
                                                    id="singin-email"
                                                    name='email'
                                                    type='email'
                                                    handleChange={this.handleChange}
                                                    value={this.state.email}
                                                    label='email'
                                                    required
                                                />
                                                <FormInput
                                                    id="singin-password"
                                                    name='password'
                                                    type='password'
                                                    value={this.state.password}
                                                    handleChange={this.handleChange}
                                                    label='password'
                                                    required
                                                />


                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>LOG IN</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="signin-remember" />
                                                        <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                                                    </div>

                                                    <a href="/" className="forgot-link">Forgot Your Password?</a>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6" onClick={googleSignInStart}>
                                                        <span className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                Login With Google
                                            </span>
                                                    </div>
                                                    <div className="col-sm-6"  >
                                                        <span className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                Login With Facebook
                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label for="register-email">Your email address *</label>
                                                    <input type="email" className="form-control" id="register-email" name="register-email" required />
                                                </div>

                                                <div className="form-group">
                                                    <label for="register-password">Password *</label>
                                                    <input type="password" className="form-control" id="register-password" name="register-password" required />
                                                </div>
                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SIGN UP</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="register-policy" required />
                                                        <label className="custom-control-label" for="register-policy">I agree to the <a href="/">privacy policy</a> *</label>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="/" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                Login With Google
                                            </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <a href="/" className="btn btn-login  btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                Login With Facebook
                                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => ({

    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))

})

export default connect(null, mapDispatchToProps)(SignInModal)
