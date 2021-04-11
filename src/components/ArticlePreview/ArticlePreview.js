import React from 'react';
import styled from 'styled-components';
import * as Image from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const PreviewWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
  background-image: url(${({ background }) => background});
  background-size: cover;
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;
  h2,
  p {
    margin: 5px;
  }
`;

// const StyledImage = styled(Image)`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const Preview = ({ title, excerpt, Image }) => (
//   <PreviewWrapper>
//     <StyledImage fluid={Image} />
//     <PreviewInfoLabel>
//       <h2>{title}</h2>
//       <p>{excerpt}</p>
//     </PreviewInfoLabel>
//   </PreviewWrapper>
// );

const Preview = ({ title, excerpt, background, slug }) => (
  <PreviewWrapper background={background} to={`/articles/${slug}`}>
    <PreviewInfoLabel>
      <h2>{title}</h2>
      {/* only with local data */}
      {/* <p>{excerpt}</p> */}
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default Preview;
