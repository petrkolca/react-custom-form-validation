import { Fragment } from "react";
import GlobalStyles from "./components/styles/GlobalStyles";

import { Container } from "./components/styles/Container.styled";

import Form from "./components/Form";

const App = () => {

  return (
    <Fragment>
      <GlobalStyles />
      <Container className="app">
        <Form />
      </Container>
    </Fragment>
  );
};

export default App;
