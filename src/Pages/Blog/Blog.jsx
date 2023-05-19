import useTitle from "../../hooks/useTitle";

const Blog = () => {
     //adding dynamic title
  useTitle("Blog")
    return (
        <div>
           <h1>Blog page</h1>
        </div>
    );
};

export default Blog;