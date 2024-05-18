import React from 'react';
import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';

const MyProfile = (props) => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <Header
        left={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-chevron-left"></i>}
            action={() => navigate(-1)}
          />
        }
        title={
          <HeaderTitle
            align={'center'}
            title={
              <h2 style={{ color: Palette.TextPrimary }}>
                <b>My Page</b>
              </h2>
            }
          />
        }
        right={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-pencil-square"></i>}
            action={() => {}}
          />
        }
      />
    </PageWrapper>
  );
};

export default MyProfile;
