import { useState, useEffect } from "react";
import { get } from "./utils/http";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import dataFetchingImage from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

type RawBlogPost = {
  id: number;
  userId: number;
  body: string;
  title: string;
};
function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);

      try {
        const data = (await get(
          "https://jsonplaceholder.typicode.com/posts",
        )) as RawBlogPost[];

        // convert the data to expected FE format
        const blogPosts: BlogPost[] = data.map((post) => {
          return {
            id: post.id,
            title: post.title,
            text: post.body,
          };
        });

        setFetchedPosts(blogPosts);
      } catch (error) {
        setError((error as Error).message);
        // or
        // if(error instanceof Error) ...

        // setError("Failed to fetch data.") //hardcoded by us
      }

      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  let content;
  // there is a moment where fetchedPosts is undefined, this is the way for Typescript not to throw an error
  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>;
  }

  if(error) {
    content = <ErrorMessage text={error}/>
  }

  return (
    <main>
      <img src={dataFetchingImage} alt="Data fetching" />

      {content}
    </main>
  );
}

export default App;
