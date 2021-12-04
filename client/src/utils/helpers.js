export function titleize(string) {

  let str;
  let titleizedString = "";

  
  if (string.includes('~')) {

    // if string contains '.', remove '.' and capitalize sub strings
    str = string.split('~');

    console.log(str)

    str.forEach((s) => {

      titleizedString += titleCase(s);

    }) 

  }

  if (string.includes('-')) {
    
    // if string contains '.', remove '.' and capitalize sub strings
    titleizedString = [];

    str = string.split('-');

    str.forEach(str => {
      titleizedString.push(titleCase(str));
    }) 

    titleizedString = titleizedString.join(' ');

  }


  if (string.includes('-')) {

    // if string contains '^', capitalize the following letter
    str = string.split('^');
    titleizedString = str[0] + titleCase(str[1]);

  }

  
  if (string.includes('_')) {

    // if string contains '_', skip titleCase...
    titleizedString = string.replace('_', '');

  } else {

    // capitalize string
    titleizedString = titleCase(string);

  }

  return titleizedString;

}

export function titleCase(string){
  try {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  } catch (e) {
    return string;
  }
}

export function addClass(string, className) {
  if (className) {
    return `${string} ${className}`;
  } else {
    return string;
  }
}

export function addInputName(name, string) {
  if (name && string) {
    return `${name}.${string}`;
  } else if (name) {
    return name;
  } else {
    return string;
  }
}



