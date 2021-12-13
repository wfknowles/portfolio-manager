import decode from 'jwt-decode';
import LocalStorage from './LocalStorage';

class Auth {

    getToken() {
        return localStorage.getItem('id_token');
    }

    getDecodedToken() {
        return decode(this.getToken());
    }

    getUser() {
      return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
          const decoded = decode(token);
          if (decoded.exp < Date.now() / 1000) {

            LocalStorage.setState({
              loggedIn: false,
              currentPrivate: undefined,
              viewPrivateMenu: false,
              viewPrivateContent: false,
              viewPublicContent: true
            });

            return true;
          } else return false;
        } catch (err) {
          return false;
        }
    }

    login(idToken) {

      localStorage.setItem('id_token', idToken);

      LocalStorage.setState({
          loggedIn: true
      });

    }

    logout() {

      localStorage.removeItem('id_token');

      LocalStorage.setState({
        loggedIn: false,
        currentPrivate: undefined,
        viewPrivateMenu: false,
        viewPrivateContent: false,
        viewPublicContent: true
      });

      window.location.assign('/');

    }
}

export default new Auth();