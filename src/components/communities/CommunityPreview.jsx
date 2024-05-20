import React from 'react';
import styled from 'styled-components';
import Palette from '../../styles/Palette';
import { PropTypes } from 'prop-types';
import HashTag from '../HashTag';

const CommunityPreview = (props) => {
  const hashtagList = props.hashTag.map((tag, index) => {
    return <HashTag text={tag} key={index} />;
  });

  return (
    <CommunityComponentsArticle>
      <CommunityImg
        style={{
          backgroundImage:
            'url(' +
            'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' +
            ')',
        }}
      />
      <CommunityContent>
        <CommunityTitleAreaWrapper>
          <CommunityTitleWrapper>
            <CommunityTitle>{props.title}</CommunityTitle>
          </CommunityTitleWrapper>
          <CommunityInfoWrapper>
            <PersonIconWrapper>
              <PersonIcon className="bi bi-person-fill" />
            </PersonIconWrapper>
            <CountPerson>{props.countMember}</CountPerson>
          </CommunityInfoWrapper>
        </CommunityTitleAreaWrapper>
        <CommunityDescriptionWrapper>
          <CommunityDescription>{props.description}</CommunityDescription>
        </CommunityDescriptionWrapper>
        <CommunityHashTagDateWrapper>
          <HashTagWrapper>{hashtagList}</HashTagWrapper>
          <CommunityDateWrapper>
            <CommunityEnrollDate>{props.date}</CommunityEnrollDate>
          </CommunityDateWrapper>
        </CommunityHashTagDateWrapper>
      </CommunityContent>
    </CommunityComponentsArticle>
  );
};

CommunityPreview.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  countMember: PropTypes.number,
  date: PropTypes.string,
  hashTag: PropTypes.array,
  image: PropTypes.image,
};

const CommunityComponentsArticle = styled.article`
  /* width: 22rem; */
  width: 100%;
  height: 6.7rem;
  background: ${Palette.BodyPrimary};
  box-shadow: 0px 2px 10px rgba(231, 233, 242, 0.7);
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.55rem 0.7rem 0.5rem 0.5rem;
`;

const CommunityImg = styled.img`
  /* width: 5.5rem; */
  width: 30%;
  height: 5.5rem;
  background-size: cover;
`;

const CommunityContent = styled.article`
  /* min-width: 15rem; */
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.5rem;
  justify-content: space-between;
`;

const CommunityHashTagDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 0.2rem;
  justify-content: space-between;
  align-items: center;
`;

const CommunityTitleAreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const CommunityTitleWrapper = styled.div`
  width: 10rem;
`;

const CommunityTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  width: auto;
`;

const CommunityInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 2rem;
  align-items: center;
`;

const PersonIconWrapper = styled.div`
  font-size: 1.3rem;
`;

const PersonIcon = styled.i`
  color: ${Palette.TextSecondary};
`;

const CountPerson = styled.p``;

const CommunityDescriptionWrapper = styled.div`
  padding-top: 0.3rem;
`;

const CommunityDescription = styled.p``;

const HashTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
`;

const CommunityDateWrapper = styled.div``;

const CommunityEnrollDate = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 100%;
`;

export default CommunityPreview;
