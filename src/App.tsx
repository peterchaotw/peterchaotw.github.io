import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import React, { Suspense } from 'react';
import GitProfile from './components/GitProfile';
import ErrorBoundary from './components/error-boundary';
import store from './store';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Provider store={store}>
        <HelmetProvider>
          <ErrorBoundary>
            <Suspense
              fallback={<span className="loading loading-spinner loading-lg" />}
            >
              <GitProfile />
            </Suspense>
          </ErrorBoundary>
        </HelmetProvider>
      </Provider>
    );
  }
}

export default App;
