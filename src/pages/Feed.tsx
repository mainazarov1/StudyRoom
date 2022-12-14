import FeedContent from '../components/FeedContent/FeedContent';
import Wrapper from '../components/Wrapper/Wrapper';
import s from '../styles/Feed.module.scss';

const Feed = () => {
  return (
    <div className={s.feed_block}>
      <Wrapper />
      <FeedContent />
    </div>
  );
};

export default Feed;