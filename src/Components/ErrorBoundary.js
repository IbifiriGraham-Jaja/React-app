import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {

    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
    this.setState({ errorInfo });
  }

  handleRetry = () => {

    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops! Something went wrong.</h1>
          <p>We apologize for the inconvenience. Please try again later.</p>
          <button onClick={this.handleRetry}>Retry</button>
          {this.state.error && <p>Error: {this.state.error.toString()}</p>}
          {this.state.errorInfo && (
            <details style={{ whiteSpace: 'pre-wrap' }}>
              <summary>Stack trace</summary>
              <p>{this.state.errorInfo.componentStack}</p>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

function logErrorToService(error, errorInfo) {
  console.error('Error caught by ErrorBoundary:', error, errorInfo);
}
