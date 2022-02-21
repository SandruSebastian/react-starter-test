import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { getUA } from 'react-device-detect';
import Paper from '@mui/material/Paper';

import i18n from '../../i18n';
import { Icon } from '../icons/Icon';
import './HomeScreen.css';
import HOMESCREEN_ICON from '../../resources/svgs/homescreen_icon.svg';
import ipadgrafik from '../../resources/svgs/ipadgrafik.svg';
import threephones from '../../resources/svgs/3phones.svg';

/**
 * @returns {React.ReactElement}
 */
export default function HomeScreen(): React.ReactElement {
  const history = useHistory();

  useEffect(() => {
    // Detect the location/url change
    const unregisterHistoryListener = history.listen(() => {
      window.location.reload();
    });

    return () => {
      unregisterHistoryListener();
    };
  }, [history]);

  const regex = /iPad/i;
  const isiPad: boolean = regex.exec(getUA) !== null;

  return (
    <div className="add-to-home-screen-container">
      <Paper square elevation={3} className="page-container">
        <div className="add-to-home-screen-header">
          <Icon name="Info" />
          <h2 className="headline margin-top">{i18n.t('addToHomeScreen:title')}</h2>
        </div>
        <div>
          {i18n.t('addToHomeScreen:paragraph1')}
          <span className="bold-text">{i18n.t('addToHomeScreen:paragraph1Bold')}</span>
        </div>
        <div className="italic-text">{i18n.t('addToHomeScreen:paragraph2')}</div>
        <div className="sth-steps-container">
          <div className="left-step-wrapper">
            <div className="bold-text">{i18n.t('addToHomeScreen:step1')}</div>
            <div className="step1-description">
              {i18n.t('addToHomeScreen:step1DescriptionPart1')}
              <img src={HOMESCREEN_ICON} alt="logo" className="homescreen-icon" />
              <span>
                {isiPad
                  ? i18n.t('addToHomeScreen:step1DescriptionPart2-iPad')
                  : i18n.t('addToHomeScreen:step1DescriptionPart2-iPhone')}
              </span>
            </div>
          </div>
          <div className="step-wrapper">
            <div className="bold-text">{i18n.t('addToHomeScreen:step2')}</div>
            <div>
              {i18n.t('addToHomeScreen:step2DescriptionPart1')}
              <span className="bold-text">
                {i18n.t('addToHomeScreen:addToHomeScreen')}
              </span>
              <span>{i18n.t('addToHomeScreen:step2DescriptionPart2')}</span>
              <span className="bold-text">{i18n.t('addToHomeScreen:add')}</span>
              <span>{i18n.t('addToHomeScreen:step2DescriptionPart3')}</span>
            </div>
          </div>
        </div>
        <div className="step3-title bold-text">{i18n.t('addToHomeScreen:step3')}</div>
        <div>{i18n.t('addToHomeScreen:step3Description')}</div>
        <img
          alt="logo"
          className={`${isiPad ? 'sth-image-ipad' : ''}`}
          src={isiPad ? ipadgrafik : threephones}
        />
        <div className="cnt-buttons-container">
          <Button
            color="primary"
            variant="contained"
            disabled={false}
            className="ad2hs-continue"
            aria-label={i18n.t('addToHomeScreen:continued')}
            onClick={() => {
              localStorage.setItem('skipAddToHomeScreen', 'true');
              window.location.reload();
            }}
          >
            {i18n.t('addToHomeScreen:continue')}
          </Button>
        </div>
      </Paper>
    </div>
  );
}
