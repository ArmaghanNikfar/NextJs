import { getAllPosts, wait } from "../../lib/posts";
import Link from "next/link";
import PageViews from "../components/ui/Pageview";
import { Suspense } from "react";

const Page = async() =>{
    await wait(2000)
    const Posts = await getAllPosts()
    return  ( 
    <section className='py-24'>
            <div className='container'>
            <h1 className='text-3xl font-bold'>All Posts</h1>
            <ul className='mt-12'>
                {Posts.map(post =>(
                    <li key={post.slug}>
                        <Link href={`/posts/${post.slug}`}>
                          <h4 className='text-lg font-medium'>{post.frontmatter?.title}</h4>
                          <p className='text-sm text-gray-500'>
                            {post.frontmatter?.author}
                          </p>
                            </Link>
                    </li>
                ))}
                {/* we use Suspense for showing loading for this component */}
                <Suspense fallback={<div>Loading page views ... </div>}>
                 <PageViews/>
                </Suspense>
            </ul>
            </div>
        </section>
    )
}
export default Page;