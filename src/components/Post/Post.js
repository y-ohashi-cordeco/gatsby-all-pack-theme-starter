import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import { ShareSns } from "../ShareSns/ShareSns";
import Disqus from 'gatsby-plugin-disqus';

const Post = ({ post }) => {
  const { id, html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div>
      {/*<Link className={styles['post__home-button']} to="/">Back</Link>*/}

      <div>
        <Content body={html} title={title} />
      </div>

      <div>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        {typeof window !== 'undefined' && window.location.href &&
          <ShareSns articleUrl={window.location.href} articleTitle={title} />
        }
        {typeof window !== 'undefined' && window.location.href &&
          <Disqus
              identifier={id}
              title={title}
              url={window.location.href}
          />
        }
        <Author />
      </div>

      <div>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
