const search = (strings, searchTerm) =>
  strings.filter((string) =>
    string.toLowerCase().includes(searchTerm.toLowerCase()),
  );

// testing
const strings = ['joao', 'maria', 'leandro', 'kazumi', 'bêbe'];

let searchTerm;

searchTerm = 'a';
search(strings, searchTerm);

searchTerm = 'oa';
search(strings, searchTerm);

searchTerm = 'zumi';
search(strings, searchTerm);
