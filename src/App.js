import React, { Component, Fragment } from 'react';
import { once } from 'ramda';
import FirebaseAuthObserver from './components/FirebaseAuthObserver';
import AppRouter from './routes/AppRouter';

class App extends Component {
  state = {
    appReady: false,
  };

  onAppReady = once(() =>
    this.setState({
      appReady: true,
    })
  );

  render() {
    return (
      <Fragment>
        <FirebaseAuthObserver onAppReady={this.onAppReady} />
        {this.state.appReady && <AppRouter />}
      </Fragment>
    );
  }
}

export default App;
