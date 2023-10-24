import { Route, Switch } from "wouter"
import Login from "@pages/login"
import Register from "@pages/register"
import Succesfully from "@pages/register/succesfully"

const App = () => {
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/register/succesfully" component={Succesfully}/>
        </Switch>
    )
}

export default App