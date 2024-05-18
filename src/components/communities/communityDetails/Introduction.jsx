import React from 'react';
import styled from 'styled-components';
import HashTag from '../../HashTag';
import Palette from '../../../styles/Palette';
import { PropTypes } from 'prop-types';

const Introduction = (props) => {
  const hashTag = props.communityHashTag.map((tag, index) => {
    return <HashTag text={tag} key={index} />;
  });

  return (
    <IntroductionWrapper>
      <CommunityImg
        style={{
          backgroundImage: 'url(' + `${props.communityImage}` + ')',
        }}
      />
      <ContentsWrapper>
        <DescriptionHashTagWrapper>
          <Description>{props.communityDescription}</Description>
          <HashTagWrapper>{hashTag}</HashTagWrapper>
        </DescriptionHashTagWrapper>
        <DateCountMemberWrapper>
          <DateWrapper>
            <Date>{props.communityDate}</Date>
          </DateWrapper>
          <MemberInfoWrapper>
            <PersonIconWrapper>
              <PersonIcon className="bi bi-person-fill" />
            </PersonIconWrapper>
            <CountMemberWrapper>
              <CountMember>{props.countMember}</CountMember>
            </CountMemberWrapper>
          </MemberInfoWrapper>
        </DateCountMemberWrapper>
      </ContentsWrapper>
    </IntroductionWrapper>
  );
};

Introduction.propTypes = {
  communityDescription: PropTypes.string,
  communityHashTag: PropTypes.array,
  communityDate: PropTypes.string,
  countMember: PropTypes.number,
  communityImage: PropTypes.string,
};

const IntroductionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CommunityImg = styled.img`
  width: 6.5rem;
  height: 6.5rem;
  background-image: center;
  border-radius: 100%;
  background-size: cover;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 6.5rem;
  justify-content: center;
  gap: 0.7rem;
`;

const Description = styled.div`
  padding-right: 1.3rem;
`;

const DescriptionHashTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const HashTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
`;

const DateCountMemberWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.8rem;
`;

const DateWrapper = styled.div`
  min-width: 1rem;
`;

const Date = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  color: ${Palette.TextSecondary};
`;

const MemberInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
  gap: 0.2rem;
`;

const CountMemberWrapper = styled.div`
  padding-top: 0.2rem;
`;

const CountMember = styled.p`
  color: ${Palette.TextSecondary};
  text-align: center;
`;

const PersonIconWrapper = styled.div`
  font-size: 1.3rem;
`;

const PersonIcon = styled.i`
  color: ${Palette.TextSecondary};
`;

export default Introduction;
