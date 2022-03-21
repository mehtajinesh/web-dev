import PostListItem from "./PostListItem";
import posts from "./posts.json";
const PostList = () => {
    return (
        <ul className="list-group">
            {
                posts.map((post) => {
                    return (
                        <PostListItem post={post}/>
                    );
                })
            }
        </ul>
    );
};

export default PostList;
