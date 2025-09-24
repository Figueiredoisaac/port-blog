import BlogHeader from "./BlogHeader";
import BlogList from "./BlogList";

function BlogWrapper() {
  return (
    <div className="flex flex-col container px-3 mx-auto space-y-8">
      <BlogHeader />
      <BlogList />
    </div>
  );
}

export default BlogWrapper;
