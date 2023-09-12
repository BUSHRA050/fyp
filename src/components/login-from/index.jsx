import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <Fragment>
            <form id="contactForm" className="row" action="#" method="POST">
                <div className="col-12 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        ref={register({
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="col-12 mb-7">
                    <input
                        type="password"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Password"
                        ref={register({ required: "Password is required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="col-12">
                    <button
                        id="contactSubmit"
                        type="submit"
                        className="btn btn-lg btn-login"
                        data-complete-text="Well Done!"
                    >
                        Login
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default ContactForm;
