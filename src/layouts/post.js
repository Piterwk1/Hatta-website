/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { graphql } from 'gatsby';
// import Image from 'gatsby-image';

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 500) {
              src
            }
            # fixed(width: 500) {

            #   ...GatsbyImageSharpFixed_tracedSVG
            # }
          }
        }
      }
      body
    }
  }
`;

const PostLayout = ({ data }) => (
  <div>
    <h1>{data.mdx.frontmatter.title}</h1>
    <p>{data.mdx.frontmatter.author}</p>
    <img src={data.mdx.frontmatter.featuredImage.childImageSharp.fluid.src} />
    {/* <Image fixed={data.mdx.frontmatter.featuredImage.childImageSharp.fixed} /> */}
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </div>
);

// const postLayout = ({ pageContext: { post } }) => (
//   <div>
//     console.log(props);
//     <h1>{post.frontmatter.title}</h1>
//     <p>{post.frontmatter.author}</p>
//     <img src={post.frontmatter.featuredImage.childImageSharp.fluid.src} />
//     <MDXRenderer>{post.body}</MDXRenderer>
//   </div>
// );

export default PostLayout;
