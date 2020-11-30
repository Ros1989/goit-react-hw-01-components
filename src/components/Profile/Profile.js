import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import avatarIMG from '../../img/no-photo.jpg';
import {
  Section,
  Container,
  Description,
  ImageWrapper,
  ProfileImage,
  NameTitle,
  TagText,
  LocationText,
} from './Profile-styled.js';

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
