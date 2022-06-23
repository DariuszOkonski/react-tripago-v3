import "./ErrorPage.css";

interface ErrorPageProps {
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ message }) => {
  return (
    <div className="error-page">
      <h2 className="error-page-title">Error</h2>
      <p className="error-page-message">{message}</p>
    </div>
  );
};

export default ErrorPage;
