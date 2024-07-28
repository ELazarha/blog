import prisma from "@/prisma/client";
import Link from "next/link";
import Form from "./Form";


const PostsPage = async () => {
  const user = await prisma.user.findUnique({
    where: {
      email: "sony@gmail",
    },
    include : {
      posts : true
    }

    
  });

  return (
    
      <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
        <h1 className="text-3xl font-semibold">All Post ({user?.posts.length})</h1>
        <ul className="border-t border-b border-black/10 py-5 leading-8">
          {user?.posts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between px-5"
            >
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <Form />
      </main>
    
  );
};

export default PostsPage;
