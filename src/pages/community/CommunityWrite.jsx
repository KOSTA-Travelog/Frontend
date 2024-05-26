import styled from 'styled-components';
import Footer from '../../components/Footer';
import Palette from '../../styles/Palette';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Header from '../../components/headerComponents/Header';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import CommunityForm from '../../components/communities/CommunityForm';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

const CommunityWrite = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

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
      <Main>
        <CommunityForm data={data} setData={setData} />
        <Button text={'등록'} color={Palette.Primary} />
      </Main>
      <Footer />
    </EnrollWrapper>
  );
};

CommunityWrite.prototype = {
  data: PropTypes.object,
  setData: PropTypes.object,
};

const EnrollWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  height: 110vh;
`;

const Main = styled.div`
  height: 70vh;
  margin: 4rem 0;
`;

export default CommunityWrite;
