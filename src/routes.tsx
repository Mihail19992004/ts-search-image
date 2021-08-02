import React, {FC} from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import {Main} from "./components/Main/Main";
import {Auth} from "./components/Auth-Register/Auth";
import {Register} from "./components/Auth-Register/Register";
interface Iroutes {
    isAuth: boolean
}

// @ts-ignore
export const routes:FC<Iroutes> = (isAuth)=> {
    if (isAuth) {

        return (
            <Switch>
                <Route path='/main'>
                    <Main />
                </Route>
            <Redirect to='/main' />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/auth'>
            <Auth />
            </Route>
            <Route path='/register'>
                <Register />
            </Route>
            <Redirect to='/auth' />
        </Switch>
    )

}