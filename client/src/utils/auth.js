import decode from 'jwt-decode';

class Auth {

    getToken() {
        return localStorage.getItem('id_token');
    }

    getDecodedToken() {
        return decode(this.getToken());
    }

    getID() {
        const auth = this.getDecodedToken();
        return auth.data._id;
    }

    getEmail() {
        const auth = this.getDecodedToken();
        return auth.data.email;
    }

    getDisplayName() {
        const auth = this.getDecodedToken();
        return `${auth.data.firstName} ${auth.data.lastName}`;
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
          const decoded = decode(token);
          if (decoded.exp < Date.now() / 1000) {
            return true;
          } else return false;
        } catch (err) {
          return false;
        }
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/admin');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new Auth();