/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { graphql } from 'gatsby';
// import Image from 'gatsby-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// takeing data from DOTA CMS
export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      featuredImage {
        gatsbyImageData(
          width: 500
          placeholder: TRACED_SVG
          layout: CONSTRAINED
        )
      }
      author
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            gatsbyImageData(
              width: 500
              placeholder: TRACED_SVG
              layout: CONSTRAINED
            )
          }
          id
        }
      }
    }
  }
`;

const PostLayout = ({ data }) => (
  <div>
    <h1>{data.datoCmsArticle.title}</h1>
    <p>{data.datoCmsArticle.author}</p>
    {/* <Image fixed={data.datoCmsArticle.featuredImage.fixed} /> */}
    <GatsbyImage
      image={data.datoCmsArticle.featuredImage.gatsbyImageData}
      alt={data.datoCmsArticle.title}
    />
    <div>
      {data.datoCmsArticle.articleContent.map((item) => {
        const [itemKey] = Object.keys(item);
        console.log(itemKey);

        switch (itemKey) {
          case 'paragraphContent':
            return <p key={item.id}>{item[itemKey]}</p>;
          case 'headingContent':
            return <h2 key={item.id}>{item[itemKey]}</h2>;
          case 'imageData':
            return (
              <GatsbyImage
                key={item.id}
                image={item[itemKey].gatsbyImageData}
                alt={data.datoCmsArticle.title}
              />
            );
          // case 'imageData':
          //   return <Image key={item.id} fixed={item[itemKey].fixed} />;
          default:
            return null;
        }
      })}
    </div>
  </div>
);

// using local data
// export const query = graphql`
//   query querySingleArticle($slug: String!) {
//     mdx(frontmatter: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         slug
//         author
//         featuredImage {
//           childImageSharp {
//             gatsbyImageData(
//               width: 500
//               placeholder: TRACED_SVG
//               layout: CONSTRAINED
//             )
//           }
//         }
//       }
//       body
//     }
//   }
// `;

// using local data
// const PostLayout = ({ data }) => (
// const image = getImage(data.mdx.frontmatter.featuredImage);
// <div>
// {
/* <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.author}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer> */
// }
// {
/* </div>
); */
// }
export default PostLayout;
