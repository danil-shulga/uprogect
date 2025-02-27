import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={cls.mainLinks}
        >
          {t('navbar_home')}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/about"
        >
          {t('navbar_about')}
        </AppLink>
      </div>
    </div>
  );
}
