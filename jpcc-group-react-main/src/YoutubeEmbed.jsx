import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  max-width: 400px;
  height: 225px; /* Adjusted for a 16:9 ratio */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 600px) {
    height: 180px; /* Adjust for smaller screens */
  }
`;

const YoutubeEmbed = ({ embedIds }) => (
  <VideoWrapper>
    {embedIds.map((embedId) => (
      <StyledIframe
        key={embedId}
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`Embedded youtube video ${embedId}`}
      />
    ))}
  </VideoWrapper>
);

YoutubeEmbed.propTypes = {
  embedIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default YoutubeEmbed;
