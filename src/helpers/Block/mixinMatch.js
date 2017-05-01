const COMMA_REGEX = /,/;

export function mixinMatch(mixins, attr) {
  let match;

  /* eslint-disable guard-for-in */
  for (const name in mixins) {
    const Mixin = mixins[name];
    const localMatch = attr.match(Mixin._match);

    if (localMatch) {
      const argsMatch = localMatch[1];
      let args;

      if (argsMatch === '') {
        args = [];
      } else if (argsMatch) {
        args = argsMatch.split(COMMA_REGEX);
      }

      match = {
        args,
        comment: localMatch[2],
        Mixin,
        name
      };

      break;
    }
  }
  /* eslint-enable guard-for-in */

  return match;
}
