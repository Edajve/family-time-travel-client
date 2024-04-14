import { Text, useTheme } from '@chakra-ui/react';
import DeskPrivacyAndSecStyles from '../../../styles/DeskPrivacyAndSecStyles';
import { useState } from 'react';
import PrivacyAuthenticationPage from './privacySecurityViews/PrivacyAuthenticationPage';
import AuthorizedPrivacyPage from './AuthorizedPrivacyPage';

const DeskPrivacyAndSec = () => {
  const [authorizedStatus, setAuthorizedStatus] = useState(false);
  const theme = useTheme();
  const styles = DeskPrivacyAndSecStyles(theme);

  const handleAuthorization = (status) => {
    setAuthorizedStatus(status === 'AUTHORIZED');
  };

  return (
    <>
      {authorizedStatus ? <AuthorizedPrivacyPage /> : <PrivacyAuthenticationPage onAuthorize={handleAuthorization} />}
    </>
  );
}

export default DeskPrivacyAndSec;
