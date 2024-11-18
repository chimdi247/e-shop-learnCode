import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//setup store
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

// store to persit
const persistedStore = persistStore(store);

createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <PersistGate loading={<div>Loading...</div>} persistor={persistedStore}>
      <App />
  </PersistGate>
</Provider>,
)
