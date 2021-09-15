import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import LuksoLogoPng from '../static/LUKSO-logo.png';
import { useLocation } from 'react-router-dom';
import { Heading } from './Heading';
import { routesEnum } from '../Routes';
import { Link } from './Link';

import { Button } from './Button';

const LUKSOMiniLogo = styled.img`
  height: 20px;
  width: 20px;
  margin-bottom: -3px;
`;

const RainbowBackground = styled.div`
  min-width: 100%;
  overflow: hidden;
  background-image: ${p =>
    `radial-gradient(circle at 100% -80%, ${p.theme.rainbowLight})`};
`;

const FooterStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    .cta-button {
      display: none;
    }
  }

  @media screen and (max-width: 518px) {
    .extra-links {
      margin-top: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonLink = styled(Link)`
  width: fit-content;
  padding: 0;
`;

export const Footer = () => {
  const { pathname } = useLocation();
  const despotWorkflowRoutes = [
    routesEnum.acknowledgementPage,
    routesEnum.selectClient,
    routesEnum.generateKeysPage,
    routesEnum.uploadValidatorPage,
    routesEnum.connectWalletPage,
    routesEnum.summaryPage,
    routesEnum.transactionsPage,
    routesEnum.congratulationsPage,
    routesEnum.topUpPage,
  ];

  return (
    <RainbowBackground>
      <FooterStyles>
        <div className="col">
          <Heading level={4}>
            <FormattedMessage defaultMessage="LUKSO L15 Testnet Launchpad" />
          </Heading>
          <Link to={routesEnum.acknowledgementPage}>
            <FormattedMessage defaultMessage="Deposit" />
          </Link>
          <Link to={routesEnum.checklistPage}>
            <FormattedMessage defaultMessage="Checklist" />
          </Link>
          <Link to={routesEnum.FaqPage}>
            <FormattedMessage defaultMessage="FAQ" />
          </Link>
          <Link to={routesEnum.termsOfServicePage}>
            <FormattedMessage defaultMessage="Terms of Service" />
          </Link>
        </div>

        {!despotWorkflowRoutes.includes(pathname as routesEnum) && (
          <ButtonContainer className="m-auto">
            <ButtonLink
              to={routesEnum.acknowledgementPage}
              className="cta-button"
            >
              <Button
                rainbow
                fullWidth
                width={400}
                label={
                  <FormattedMessage
                    defaultMessage="Become a validator {emoji}" //change to LUKSO logo
                    values={{
                      emoji: (
                        <LUKSOMiniLogo src={LuksoLogoPng} alt="LUKSO-logo" />
                      ),
                    }}
                  />
                }
              />
            </ButtonLink>
          </ButtonContainer>
        )}
        <div className="col extra-links">
          <Heading level={4}>
            <FormattedMessage defaultMessage="More on LYXt" />
          </Heading>
          <Link to="https://ethereum.org/en/eth2/">
            <FormattedMessage defaultMessage="The LYXt upgrades" />
          </Link>
          <Link to={routesEnum.phishingPage}>
            <FormattedMessage defaultMessage="Avoid LYXt phishing" />
          </Link>
          <Link to="https://docs.google.com/spreadsheets/d/15tmPOvOgi3wKxJw7KQJKoUe-uonbYR6HF7u83LR5Mj4/edit#gid=842896204">
            <FormattedMessage defaultMessage="LYXt economics" />
          </Link>
          {/* TODO: add this link when page goes live */}
          {/* <Link to="http://activate.codefi.network/eth2"> */}
          {/*  Calculator */}
          {/* </Link> */}
          <Link to="https://github.com/runtimeverification/deposit-contract-verification/blob/96434de/deposit-contract-verification.pdf">
            <FormattedMessage defaultMessage="Formal verification report" />
          </Link>
        </div>
      </FooterStyles>
    </RainbowBackground>
  );
};
