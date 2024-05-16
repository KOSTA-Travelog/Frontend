import React from 'react';
import styled from 'styled-components';
import Palette from '../../styles/Palette';
import HashTag from '../HashTag';
import { PropTypes } from 'prop-types';

const CommunityPreview = (props) => {
  return (
    <CommunityComponentsArticle>
      <CommunityImg />
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
          <HashTag text={'#여수'} />
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
};

const CommunityComponentsArticle = styled.article`
  width: 22rem;
  height: 6.7rem;
  background: ${Palette.BodyPrimary};
  box-shadow: 0px 2px 10px rgba(231, 233, 242, 0.7);
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.55rem 0.7rem 0.5rem 0.5rem;
`;

const CommunityImg = styled.img`
  background-image: url('https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww')
    center;
  width: 5.5rem;
  height: 5.5rem;
`;

const CommunityContent = styled.article`
  width: 15rem;
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

const CommunityDateWrapper = styled.div``;

const CommunityEnrollDate = styled.p``;

export default CommunityPreview;
