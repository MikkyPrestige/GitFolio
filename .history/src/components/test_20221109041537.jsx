// ERRORBOUNDARY TEST COMPONENT - This is a page to test errorboundary.

import React from "react";
import ErrorBoundary from "./fallbackError";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div style={{ margin: "5rem" }}>
          <h2>Something is wrong!!!</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return (
      <div>
        <ErrorBoundary>
          <Test />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Test;
