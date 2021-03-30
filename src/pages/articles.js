import { Link } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';

const ArticlesPage = () => (
  <Layout>
    <h1>Hi from the blog page</h1>
    <p>Welcome to blog</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ArticlesPage;
