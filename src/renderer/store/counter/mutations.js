const DECREMENT_MAIN_COUNTER = (state) => {
  state.main--
}

const INCREMENT_MAIN_COUNTER = (state) => {
  state.main++
}

export {
  INCREMENT_MAIN_COUNTER,
  DECREMENT_MAIN_COUNTER
}
