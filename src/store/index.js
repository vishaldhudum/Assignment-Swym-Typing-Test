import { createStore } from 'redux'
import rootReducer from './Reducer'

export default function configureStore() {

  const store = createStore(rootReducer);

  return store
}