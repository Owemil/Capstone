import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle, Form, FormGroup, Input, Label } from "reactstrap";

/**Login component
 * takes in the function login which contains the api call to log a user in and set their token
 * 
 * it renders a form for logging a user in
 */

function Login({ login }) {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })
    const handleChange = evt => {
        const { name, value } = evt.target

        setLoginForm(oldForm => ({ ...oldForm, [name]: value }))

    }
    const handleClick = async evt => {
        await login(evt, 'auth/token', loginForm)
        setLoginForm({
            username: "",
            password: ""
        })
    }
    return (
        <div class="login-div">
            <Card className="login-card">
                <CardBody>
                    <CardTitle>
                        Petly Login
                    </CardTitle>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="login-username">
                                Username
                            </Label>
                            <Input id="login-username" name="username" value={loginForm.username} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="login-password">
                                Password
                            </Label>
                            <Input id="login-password" name="password" value={loginForm.password} onChange={handleChange} type="password" />
                        </FormGroup>
                        <Button onClick={handleClick} color="primary">
                            Login
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default Login

