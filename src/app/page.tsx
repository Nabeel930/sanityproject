import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
const getPost = async () => {
  const result = await client.fetch(`*[_type == 'blog'][0...10]`);
  console.log(result)
  return result;
};
export default async function Home() {
  const post = await getPost();
  return (
    <div className="p-4">
      <div className="flex justify-center items-center font-bold text-2xl">
        sanity Project
      </div>
      <div>
        {post.map((blog)=>{
          return <div key={blog._id} className="border border-blue-600 p-4 m-4 shadow-red-700 shadow-lg">
            <h1 className="font-bold text-2xl text-center text-blue-700">{blog.Title}</h1>
            <p>{blog.name}:</p>
            <p>{blog.description}</p>
            <Image src={urlFor(blog.image).url()} alt="An-image" width={400} height={400}></Image>
          </div>
        })}
      </div>
    </div>
  );
}
