import {useState} from 'react';
import PrivacyAuthenticationPage from './privacySecurityViews/PrivacyAuthenticationPage';
import AuthorizedPrivacyPage from './AuthorizedPrivacyPage';

const DeskPrivacyAndSec = () => {
  const [authorizedStatus, setAuthorizedStatus] = useState(false);

  const handleAuthorization = (status) => setAuthorizedStatus(status === 'AUTHORIZED');

  return (
    <>
      {authorizedStatus ? <AuthorizedPrivacyPage /> : <PrivacyAuthenticationPage onAuthorize={handleAuthorization} />}
    </>
  );
}

export default DeskPrivacyAndSec;
