import type Author from '../interfaces/author';
import Avatar from './avatar';
import Container from './container';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import PostTitle from './post-title';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className='bg-stone-50 border-b border-stone-200 pt-20 pb-12'>
      <Container>
        <PostTitle>{title}</PostTitle>

        <div className='text-center sm:text-left'>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
          <div className='text-stone-500 text-base italic'>
            Published on <DateFormatter dateString={date} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PostHeader;
