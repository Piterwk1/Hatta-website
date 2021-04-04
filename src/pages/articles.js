import { Link, graphql } from 'gatsby';
import * as React from 'react';

const ArticlesPage = ({ data }) => (
  <>
    <h1>Articles</h1>
    {data.allMdx.nodes.map((item) => (
      <>
        <h2>{item.frontmatter.title}</h2>
        <p>{item.frontmatter.author}</p>
        <p>{item.excpert}</p>
      </>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </>
);

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          author
          slug
          title
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export default ArticlesPage;
