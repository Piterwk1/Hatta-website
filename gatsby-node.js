const path = require(`path`);
const slugify = require('slugify');

// taking date from dato CMS
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(`
    query queryCMSPage {
      allDatoCmsArticle {
        nodes {
          id
          title
        }
      }
    }
  `);

  result.data.allDatoCmsArticle.nodes.forEach((post) => {
    const slugifiedTitle = slugify(post.title, {
      lower: true,
    });
    // console.log(post.id);

    createPage({
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    });
  });
};

// artycles from local data
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const blogPostTemplate = path.resolve(`src/layouts/post.js`);
//   const result = await graphql(`
//     query queryArticles {
//       allMdx {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   `);

//   result.data.allMdx.nodes.forEach((post) => {
//     createPage({
//       path: `articles/${post.frontmatter.slug}`,
//       component: blogPostTemplate,
//       context: {
//         slug: post.frontmatter.slug,
//       },
//     });
//   });
// };
