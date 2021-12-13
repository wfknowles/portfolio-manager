class LocalStorage {
  get(key) {
    return localStorage.getItem(key);
  }

  set(key, value) {
    localStorage.setItem(key, value);
  }

  setState(incomingState) {
    
    const state = localStorage.getItem('state');
    const parsedState = JSON.parse(state);
    let reducedState = {};

    if (typeof incomingState === 'object') {
      reducedState = { ...parsedState, ...incomingState }
    } else {
      reducedState = { ...parsedState, incomingState }
    }

    localStorage.setItem('state', JSON.stringify(reducedState));
  }

  getState(prop) {

    // get state from localStorage
    const state = localStorage.getItem('state');
    // convert state into JSON
    const parsedState = JSON.parse(state);
    const isString = typeof prop === 'string';
    const isArray = Array.isArray(prop);

    if (isString) {
      // if the input value is a string, get the single property
      return parsedState[prop];

    } else if (isArray) {

      // if the input value is an array, get multiple properties
      let Arr = [];

      prop.forEach((p) => {

        if (parsedState) {
          Arr.push(parsedState[p]);
        } else {
          Arr.push( undefined );
        }
        
      });

      return Arr;

    } else {

      throw new SyntaxError(`LocalStorageError: getState expects a value of type string or array.`);

    }
    
  }

}

export default new LocalStorage();