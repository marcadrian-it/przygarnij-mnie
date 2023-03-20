import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary component caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Wystąpił błąd w tym elemencie.{" "}
          <Link to="/"> Kliknij by wrócić na stronę główną. </Link>
        </h2>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
