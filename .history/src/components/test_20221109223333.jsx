// ERRORBOUNDARY TEST COMPONENT - This is a page to test errorboundary.

import React from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const ErrorBoundaryTest = () => {
  const handleError = useErrorHandler();

  const handleClick = () => {
    handleError(new Error('Something went wrong'));
  };

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <button onClick={handleClick}>Throw an error</button>
      </ErrorBoundary>
    </div>
  );
};

export default ErrorBoundaryTest;