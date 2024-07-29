import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t, i18n } = useTranslation();
  return (
    <h1>
      {t('page_main')}
    </h1>
  );
}

export default MainPage;