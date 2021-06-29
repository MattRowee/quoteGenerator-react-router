import { Redirect, Route, Switch } from "react-router-dom";
import AddQuote from "./pages/AddQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect path='quotes'/>
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/addquote">
          <AddQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
