import React from 'react';
import FeedContent from '../components/FeedContent/FeedContent';
import Wrapper from '../components/Wrapper/Wrapper';
import s from '../styles/Feed.module.scss'

const Feed = () => {
  return (
    <section className={s.feed_block}>
      <Wrapper />
      <FeedContent />
    </section>
  );
};

export default Feed;