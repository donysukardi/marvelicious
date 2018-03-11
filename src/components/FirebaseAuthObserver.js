import { Component } from 'react';
import PropTypes from 'prop-types';
import withAuth from '../stateContainers/withAuth';
import firebase from '../libs/firebase';

class FirebaseAuthObserver extends Component {
  componentDidMount() {
    const { auth, onAppReady } = this.props;
    this.unsubstribe = firebase.auth().onAuthStateChanged(user => {
      auth.updateUser(user);
      onAppReady();
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    return null;
  }
}

FirebaseAuthObserver.propTypes = {
  auth: PropTypes.object.isRequired,
  onAppReady: PropTypes.func.isRequired,
};

export default withAuth(FirebaseAuthObserver);
