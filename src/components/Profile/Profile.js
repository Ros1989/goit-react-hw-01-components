import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stats from './Stats';
import avatarIMG from '../../img/no-photo.jpg';

// Styles
const Section = styled.section`
  padding: 20px;
`;

const Container = styled.div`
  padding-top: 15px;
  margin: 0 auto;
  width: 300px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Description = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const ProfileImage = styled.img`
  margin: 0 auto;
  border-style: none;
  display: block;
  max-width: 100%;
`;

const NameTitle = styled.p`
  margin: 0 0 15px 0;
  font-size: 35px;
`;

const LocationText = styled.p`
  font-style: oblique;
`;
const TagText = styled.p`
  font-size: 25px;
  margin-bottom: 15px;
`;

//Component

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <>
      <Section>
        <Container>
          <Description>
            <ImageWrapper>
              <ProfileImage src={avatar} alt={name} className="avatar" />
            </ImageWrapper>
            <NameTitle>{name}</NameTitle>
            <TagText>@{tag}</TagText>
            <LocationText>{location}</LocationText>
          </Description>

          <Stats {...stats} />
        </Container>
      </Section>
    </>
  );
};

Profile.defaultProps = {
  avatar: avatarIMG,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;
