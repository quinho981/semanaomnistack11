import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                {/* pagina de login */}
                <Route path="/" exact component={Logon} />

                {/* pagina de cadastro */}
                <Route path="/register" component={Register} />
                
                {/* lista de casos */}
                <Route path="/profile" component={Profile} />
                
                {/* cadastrar novos casos */}
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}