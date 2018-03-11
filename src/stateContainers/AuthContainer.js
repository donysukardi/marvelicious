import { Container } from 'unstated';

class AuthContainer extends Container {
  state = {
    user: null,
    isAuthenticated: false,
  };

  updateUser(user) {
    this.setState({
      user,
      isAuthenticated: !!user,
    });
  }
}

export default AuthContainer;
