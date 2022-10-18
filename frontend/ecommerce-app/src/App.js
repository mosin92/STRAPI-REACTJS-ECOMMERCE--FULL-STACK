import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Home } from './pages';
import routes from './routes';
import { Header } from './components';

const client = new ApolloClient({
  uri: `http://localhost:1337/graphql`,
  cache: new InMemoryCache()
});

const Routes = () => {
  const element = useRoutes(routes)
  return (
    <>
      <Header />
      {element}
    </>
  )
}
function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
