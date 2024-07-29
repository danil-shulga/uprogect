import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();
  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={changeLanguageHandler}
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LangSwitcher, [className])}>
      {t('language')}
    </Button>
  );
};
