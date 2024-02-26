import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <p className="mb-0">
              © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;