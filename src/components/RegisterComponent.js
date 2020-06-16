import React from "react";
class RegisterComponent extends React.Component {
    render() {
        return <div class="container">
        <form>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">
                    <a href="/" class="float-left">Cancel</a>
                </label>
            </div>
            <div class="form-group row">
                <label for="username" class="col-sm-2 col-form-label">
                    Username </label>
                <div class="col-sm-10">
                    <input class="form-control" id="username" />
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-2 col-form-label">
                    Password </label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="password" />
                </div>
            </div>
            <div class="form-group row">
                <label for="confirm_password" class="col-sm-2 col-form-label">
                    Confirm Password </label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="confirm_password" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label"></label>
                <div class="col-sm-10">
                    <button class="btn btn-primary btn-block"
                        formaction="/">Sign Up</button>
                    <div class="row">
                        <div class="col-6">
                            <a href="/" class="float-left">Sign
                                In</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    }
}

export default RegisterComponent