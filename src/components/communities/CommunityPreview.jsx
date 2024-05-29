import styled from 'styled-components';
import Palette from '../../styles/Palette';
import { PropTypes } from 'prop-types';
import HashTag from '../HashTag';

const CommunityPreview = (props) => {
  const hashTagList = (props.communityHashtag || '').split('#').slice(1);
  const hashtagList = hashTagList.map((tag, index) => {
    return <HashTag text={'#' + tag.trim()} key={index} />;
  });

  return (
    <ComponentsArticle onClick={props.onClick}>
      <Img
        style={{
          backgroundImage:
            'url(' +
            'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' +
            ')',
        }}
      />
      <Content>
        <DataWrapper>
          <TitleWrapper>
            <Title>{props.communityTitle}</Title>
          </TitleWrapper>
          <DescriptionWrapper>
            <Description>{props.communityDescription}</Description>
          </DescriptionWrapper>
          <HashTagDateWrapper>
            <HashTagWrapper>{hashtagList}</HashTagWrapper>
          </HashTagDateWrapper>
        </DataWrapper>
        <InfoWrapper>
          <PersonIconWrapper>
            <PersonIcon className="bi bi-person-fill" />
          </PersonIconWrapper>
          <CountPerson>{props.countMember}</CountPerson>
        </InfoWrapper>
      </Content>
    </ComponentsArticle>
  );
};

CommunityPreview.propTypes = {
  communityId: PropTypes.number,
  communityTitle: PropTypes.string,
  communityDescription: PropTypes.string,
  countMember: PropTypes.number,
  communityDate: PropTypes.string,
  communityHashtag: PropTypes.string,
  communityImage: PropTypes.string,
  onClick: PropTypes.func,
};

const DataWrapper = styled.div`
  padding: 0.1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.3rem;
`;

const HashTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
`;

const ComponentsArticle = styled.article`
  padding: 0 1.4rem 0 1rem;
  width: 100%;
  min-height: 7rem;
  background: ${Palette.BodyPrimary};
  box-shadow: 0px 2px 10px rgba(231, 233, 242, 0.7);
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const Img = styled.img`
  width: 30%;
  height: 5.5rem;
  background-size: cover;
`;

const Content = styled.article`
  padding: 0.8rem 0;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HashTagDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 3rem; */
  justify-content: center;
  gap: 0.4rem;
`;

const TitleWrapper = styled.div`
  width: 10rem;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  width: 60%;
  white-space: nowrap;
  overflow: clip;
  text-overflow: ellipsis;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 2.5rem;

  height: 1rem;
`;

const PersonIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100%; */

  justify-content: end;
  gap: 0.2rem;
  font-size: 1.2rem;
`;

const PersonIcon = styled.i`
  color: ${Palette.TextSecondary};
`;

const CountPerson = styled.p`
  color: ${Palette.TextSecondary};
  text-align: center;
`;

const DescriptionWrapper = styled.div`
  font-size: 15px;
  padding-top: 0.3rem;
  /* text-overflow: ellipsis; */
  width: 10rem;
  height: 2.5rem;
  background: white;

  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  text-overflow: ellipsis;
`;

const Description = styled.p``;

export default CommunityPreview;
