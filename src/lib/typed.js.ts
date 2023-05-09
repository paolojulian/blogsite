import Typed, { TypedOptions } from 'typed.js'

const TypedInstance = (elementId: any, options: TypedOptions) => {
  return new Typed(elementId, {
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    ...options,
  })
}

export default TypedInstance