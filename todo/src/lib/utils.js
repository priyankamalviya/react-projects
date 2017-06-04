export const partial = (fn, ...args) =>fn.bind(null, ...args)
  /*null because you do not want to change its context*/

const _pipe = (f, g) => (...args) => g(f(...args))

export const pipe = (...fns) => fns.reduce(_pipe)
