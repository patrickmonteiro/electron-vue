const incrementa = ({ commit }) => {
  // do something async
  commit('INCREMENT_MAIN_COUNTER')
}

const decrementa = ({ commit }) => {
  commit('DECREMENT_MAIN_COUNTER')
}

export {
  incrementa,
  decrementa
}
