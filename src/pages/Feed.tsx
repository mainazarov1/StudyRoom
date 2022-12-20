// import { useEffect } from 'react';
import FeedContent from '../components/FeedContent/FeedContent';
import Wrapper from '../components/Wrapper/Wrapper';
import s from '../styles/Feed.module.scss';
import $api from '../utils/axios';

const Feed = () => {
  $api('/card');
  return (
    <div className={s.feed_block}>
      <Wrapper />
      <FeedContent />
    </div>
  );
};

export default Feed;
