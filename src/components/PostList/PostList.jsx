import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ post }) => (
  <div className="PostList">
   {post.map(postItem => (
      <PostInfo post={postItem} key={postItem.id} />
    ))}
  </div>
);
