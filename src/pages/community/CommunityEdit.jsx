import styled from 'styled-components';
import CommunityForm from '../../components/communities/CommunityForm';
import Button from '../../components/Button';
import Header from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';

const CommunityEdit = () => {
  const navigate = useNavigate();

  return (
    <EditWrapper>
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
        <CommunityForm />
        <ButtonWrapper>
          <Button text={'수정'} color={Palette.Primary} />
          <Button text={'삭제'} color={Palette.Error} />
        </ButtonWrapper>
      </Main>
    </EditWrapper>
  );
};

const EditWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const Main = styled.div`
  margin: 4rem 0;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export default CommunityEdit;
