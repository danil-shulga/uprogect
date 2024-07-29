import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <h1>
      {t('page_about')}
    </h1>);
}

export default AboutPage;
