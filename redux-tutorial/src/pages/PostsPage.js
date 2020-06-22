import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelector } from "../actions/postsActions";
import Post from "../components/Post";

const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts, loading, hasError } = useSelector(postsSelector);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const renderPosts = () => {
    if (loading) return <p>loading posts...</p>;
    if (hasError) return <p>Unable posts...</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };
  return (
    <section>
      <h2>Posts</h2>
      {renderPosts()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasError: state.posts.hasError,
});

export default connect(mapStateToProps)(PostsPage);
