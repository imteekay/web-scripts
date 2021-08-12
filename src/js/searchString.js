const NOT_FOUND = -1;

const search = (strings, needle) =>
  strings.filter((string) => string.search(needle) !== NOT_FOUND);

// testing
const strings = ['joao', 'maria', 'leandro', 'kazumi', 'bêbe'];

let needle;

needle = 'a';
search(strings, needle);

needle = 'oa';
search(strings, needle);

needle = 'zumi';
search(strings, needle);
