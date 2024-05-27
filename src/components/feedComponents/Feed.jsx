import PropTypes from 'prop-types';
import styled from 'styled-components';
import Palette from '../../styles/Palette.jsx';
import '../carousel.css';

import ReplyComponent from '../../pages/ReplyComponent.jsx';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postImageList } from '../../apis/Feed.jsx';

const GenerateOpenStatus = ({ openStatus }) => {
  if (openStatus === 'public') {
    return (
      <>
        <i className="bi bi-globe"></i>
        전체 공개
      </>
    );
  } else if (openStatus === 'group') {
    return (
      <>
        <i className="bi bi-people-fill"></i>
        커뮤니티 공개
      </>
    );
  } else if (openStatus === 'private') {
    return (
      <>
        <i className="bi bi-lock"></i>
        비공개
      </>
    );
  } else {
    return (
      <>
        <i className="bi bi-question"></i>
      </>
    );
  }
};

GenerateOpenStatus.propTypes = {
  openStatus: PropTypes.string,
};

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const params = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    postImageList(params).then((res) => {
      setImages(JSON.parse(res.data.data.data));
    });
    if (emblaApi) {
      // console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const imageList = images.map((data) => {
    return (
      <div className={'embla__slide'} key={data['imageId']}>
        <ImageWrapper>
          <Image style={{ width: '100%' }} src={data['images']} alt="" />
        </ImageWrapper>
      </div>
    );
  });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">{imageList}</div>
    </div>
  );
}

function Feed(props) {
  return (
    <FeedWrapper>
      <Carousel>
        <EmblaCarousel />
      </Carousel>
      <Article>
        <FeedInfo>
          <FeedDate>{props.date}</FeedDate>
          <FeedIconGroup>
            <i className="bi bi-share"></i>
            <i className="bi bi-chat"></i>
            <i className="bi bi-heart"></i>
          </FeedIconGroup>
        </FeedInfo>
        <FeedContentWrapper>
          <FeedContent>{props.content}</FeedContent>
        </FeedContentWrapper>
        <FeedOpenStatus>
          <GenerateOpenStatus openStatus={props.openStatus} />
        </FeedOpenStatus>
      </Article>
      <Article>
        <FeedComment>
          <CommentExpander onClick={() => {}}>
            <Divider></Divider>
            <ExpanderText>댓글 8개 더보기</ExpanderText>
          </CommentExpander>
          <ReplyComponent
            image={
              'https://plus.unsplash.com/premium_photo-1706727288970-b3378fe22298?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            primary={'username'}
            secondary={'2024.05.02'}
          />
        </FeedComment>
      </Article>
    </FeedWrapper>
  );
}

Feed.propTypes = {
  content: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  openStatus: PropTypes.string,
};

const FeedWrapper = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Article = styled.article`
  padding: 0.5rem 1rem;
  background-color: ${Palette.BodyPrimary};
`;

const FeedInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`;

const FeedDate = styled.p`
  color: ${Palette.TextSecondary};
`;

const FeedIconGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  height: 1rem;
  font-size: 1rem;
`;

const Divider = styled.hr`
  width: 100%;
  margin: auto;
`;

const FeedContentWrapper = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  padding-top: 0.7rem;
`;

const FeedContent = styled.pre`
  width: 100%;
  white-space: break-spaces;
`;

const FeedOpenStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.25rem;
`;

const FeedComment = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0.5rem; */
  /* margin: 1rem 0; */
  gap: 1rem;
`;

const CommentExpander = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ExpanderText = styled.p`
  height: 1rem;
  white-space: nowrap;
  padding-left: 1rem;
`;

const Carousel = styled.div``;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
`;

const CarouselDotWrapper = styled.div`
  position: relative;
  height: 1rem;
  display: flex;
`;

const CarouselDots = styled.ul`
  margin: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;

export default Feed;
