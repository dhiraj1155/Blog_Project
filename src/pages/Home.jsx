import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center bg-gradient-to-r from-gray-100 to-gray-200">
        <Container>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="p-4">
              <h1 className="text-3xl font-extrabold text-gray-700 hover:text-gray-600 transition-colors duration-200">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white">
      <Container>
        <div className="flex flex-wrap -m-4">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-4 md:w-1/2 lg:w-1/4 flex justify-center"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
