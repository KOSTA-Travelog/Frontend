import styled from 'styled-components';

const ProfileImg = (props) => {
  return (
    <ProfileImageWrapper>
      <Img
        style={{
          backgroundImage:
            'url(' +
            'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' +
            ')',
        }}
      />
    </ProfileImageWrapper>
  );
};

const ProfileImageWrapper = styled.div`
  width: 6.5rem;
  height: 1rem;
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 1;
  background-size: cover;
  border-radius: 100px;
`;

export default ProfileImg;
