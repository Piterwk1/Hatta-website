/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import slugify from 'slugify';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PageInfo from '../components/PageInfo/PageInfo';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const pageData = {
  title: 'articles',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

const ArticlesPage = ({ data }) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data;
  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
        {nodes.map(({ title, featuredImage }) => (
          <ArticlePreview
            key={title}
            title={title}
            // image={featuredImage.fluid.src}
            background={featuredImage.fluid.src}
            slug={slugify(title, { lower: true })}
          />
          // <GatsbyImage
          //   image={featuredImage.gatsbyImageData}
          //   alt="error loading picture"
          // />
        ))}
      </ArticlesWrapper>
    </>
  );
};

// {
/* <GatsbyImage
              image={featuredImage.gatsbyImageData}
              alt="error loading picture"
            />
          </ArticlePreview> */
// }

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        featuredImage {
          fluid {
            src
          }
        }
      }
    }
  }
`;

// const ArticlesPage = ({ data }) => {
//   const {
//     allDatoCmsArticle: { nodes },
//   } = data;
//   return (
//     <>
//       <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
//       <ArticlesWrapper>
//         {nodes.map(({ title, featuredImage }) => (
//           <ArticlePreview
//             key={title}
//             title={title}
//             image={featuredImage.fluid}
//             slug={slugify(title, { lower: true })}
//           />
//         ))}
//       </ArticlesWrapper>
//     </>
//   );
// };

// //   <GatsbyImage
// //     image={featuredImage.gatsbyImageData}
// //     alt="error loading picture"
// //   />
// // </ArticlePreview>

// export const query = graphql`
//   {
//     allDatoCmsArticle {
//       nodes {
//         title
//         featuredImage {
//           # gatsbyImageData(
//           #   width: 500
//           #   placeholder: TRACED_SVG
//           #   layout: CONSTRAINED
//           # )
//           fluid(maxWidth: 500) {
//             ...GatsbyDatoCmsFluid_tracedSVG
//           }
//         }
//       }
//     }
//   }
// `;

// using local data
// const ArticlesPage = ({ data }) => {
//   const {
//     allMdx: { nodes },
//   } = data;
//   return (
//     <>
//       <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
//       <ArticlesWrapper>
//         {nodes.map(
//           ({ excerpt, frontmatter: { title, slug, featuredImage } }) => (
//             <ArticlePreview
//               title={title}
//               excerpt={excerpt}
//               background={featuredImage.childImageSharp.fluid.src}
//               key={slug}
//               // image={featuredImage.childImageSharp.fluid}
//               slug={slug}
//             />
//           )
//         )}
//       </ArticlesWrapper>
//     </>
//   );
// };

// export const query = graphql`
//   {
//     allMdx {
//       nodes {
//         frontmatter {
//           author
//           slug
//           title
//           featuredImage {
//             childImageSharp {
//               #   gatsbyImageData(
//               #   width: 500
//               #   placeholder: TRACED_SVG
//               #   layout: CONSTRAINED
//               # )
//               fluid(maxWidth: 700, maxHeight: 500) {
//                 #   # ...GatsbyImageSharpFluid_tracedSVG
//                 src
//                 #   src
//                 #   tracedSVG
//               }
//             }
//           }
//         }
//         excerpt(pruneLength: 50)
//       }
//     }
//   }
// `;
export default ArticlesPage;
