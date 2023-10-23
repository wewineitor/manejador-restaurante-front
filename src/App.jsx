import { Route, Switch } from "wouter"
import Login from "@pages/login"

const App = () => {
    return (
        <Switch>
            <Route path="/login" component={Login}/>
        </Switch>
    )
}

export default App