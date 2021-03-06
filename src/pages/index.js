import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Button from '../components/Navigation/Button/Button';

const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h1 {
    font-size: 105px;
    margin: 0;
    width: 60%;
    line-height: 0.9;
  }
  p {
    margin: 60px 0 40px;
    width: 40%;
  }
`;

// const ImageWrapper = styled(GatsbyImage)`
//   position: absolute !important;
//   top: 0;
//   right: 0;
//   width: 40%;
//   height: 100vh;
//   object-fit: cover;
// `;
const ImageWrapper = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      {/* {console.log(data)} */}
      <h1>Your new space</h1>
      <p>
        While artists work from real to the abstract, architects must work from
        the abstract to the real.
      </p>
      <Button>estimate project</Button>
    </ContentWrapper>
    <ImageWrapper
      src={data.file.childImageSharp.fluid.src}
      srcSet={data.file.childImageSharp.fluid.srcSet}
      sizes={data.file.childImageSharp.fluid.sizes}
    />
  </>
);

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1800, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

// export const query = graphql`
//   {
//     file(name: { eq: "hero" }) {
//       childImageSharp {
//         fluid(maxWidth: 800, maxHeight: 1200, quality: 90, grayscale: true) {
//           src
//           srcSet
//           sizes
//         }
//       }
//     }
//   }
// `;

// const IndexPage = ({ data }) => (
//   <>
//     <ContentWrapper>
//       {console.log(data)}
//       <h1>Your new space</h1>
//       <p>
//         While artists work from real to the abstract, architects must work from
//         the abstract to the real.
//       </p>
//       <Button>estimate project</Button>
//     </ContentWrapper>
//     <ImageWrapper image={data.file.childImageSharp.gatsbyImageData} />
//   </>
// );

// export const query = graphql`
//   {
//     file(name: { eq: "hero" }) {
//       childImageSharp {
//         gatsbyImageData(layout: FULL_WIDTH)
//       }
//     }
//   }
// `;

export default IndexPage;
