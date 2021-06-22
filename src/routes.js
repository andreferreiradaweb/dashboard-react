import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Pedidos } from './pages/pedidos'
import { Produtos } from './pages/produtos'
import { Configuracoes } from './pages/configuracoes'
import { Relatorios } from './pages/relatorios'
import { Usuarios } from './pages/usuarios'
import { GlobalStyles } from './globalstyles'
import { AppContexts } from './contexts'

export default function Routes() {
  return (
    <BrowserRouter>
      <AppContexts>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pedidos" component={Pedidos} />
          <Route exact path="/produtos" component={Produtos} />
          <Route exact path="/configuracoes" component={Configuracoes} />
          <Route exact path="/relatorios" component={Relatorios} />
          <Route exact path="/usuarios" component={Usuarios} />
          <Route path="/" component={() => <>Page not found!</>} />
        </Switch>
      </AppContexts>
    </BrowserRouter>
  );
}

