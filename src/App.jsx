import { Route, Switch } from "wouter"
import Login from "@pages/login"
import Register from "@pages/register"
import Succesfully from "@pages/register/succesfully"
import Dashboard from "@pages/dashboard"

const App = () => {
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/register/succesfully" component={Succesfully}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}

export default App