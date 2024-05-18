import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Palette from '../../styles/Palette';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Header from '../../components/headerComponents/Header';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const EnrollWrapper = styled.div``;

const Main = styled.div``;

const CommunityWrite = () => {
  const navigate = useNavigate();

  return (
    <EnrollWrapper>
      <Header
        left={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-chevron-left"></i>}
            action={() => navigate(-1)}
          />
        }
      />
      <Main>{<Button text={'등록'} color={Palette.Primary} />}</Main>
      <Footer />
    </EnrollWrapper>
  );
};

export default CommunityWrite;
