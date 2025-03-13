import { HelmetProvider, Helmet } from "react-helmet-async";
import "./PageMeta.css"; // Import CSS riêng

const PageMeta = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export const AppWrapper = ({ children }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

export default PageMeta;
