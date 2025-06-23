import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function NotFoundPage() {
  const navigate = useNavigate();
  const [t] = useTranslation();
  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <div className="notFoundPage">
      <div className="containerNotFound">
        <p>404 | {t('This_page_could_not_be_found')}</p>
        <div>
          <button onClick={handleNavigate}>{t('home')}</button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
