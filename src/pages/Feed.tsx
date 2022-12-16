// import { useEffect } from 'react';
import FeedContent from '../components/FeedContent/FeedContent';
import Wrapper from '../components/Wrapper/Wrapper';
import s from '../styles/Feed.module.scss';

const Feed = () => {
  // useEffect(() => {
  //   fetch('http://localhost:3001/api/users')
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  // }, []);
  return (
    <div className={s.feed_block}>
      <Wrapper />
      <FeedContent />
    </div>
  );
};

export default Feed;
