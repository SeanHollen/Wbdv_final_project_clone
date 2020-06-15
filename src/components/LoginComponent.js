import React from "react";

class LoginComponent extends React.Component {
    render() { return <div class="container">
            <form>
                <div class="col-6 form-group row">
                    <a href="/" class="float-left">Cancel</a>
                </div>
                <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label">
                        Username </label>
                    <div class="col-sm-10">
                        <input class="form-control"
                            id="username" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-sm-2 col-form-label">
                        Password </label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control"
                            id="password" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                        <button class="btn btn-primary btn-block" formaction="#">Sign Up</button>
                        <div class="row">
                            <div class="col-6">
                                <a href="#">Sign In</a>
                            </div>
                            <div class="col-6">
                                <a href="#" class="float-right">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    }
}

export default LoginComponent