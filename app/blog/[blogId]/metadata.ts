// app/blog/[blogId]/metadata.ts
import { getDetailBlog } from '@/services/BlogService';
import { Metadata } from 'next';
import { blogType } from '@/types';

export async function generateMetadata(blogId?: string): Promise<Metadata> {
    if (!blogId) {
        return { title: 'Blog Not Found', description: 'The requested blog post could not be found.' };
    }

    try {
        const blog: blogType | null = await getDetailBlog(blogId);
        return blog
            ? { title: blog.title, description: blog.summary }
            : { title: 'Blog Not Found', description: 'This blog post does not exist or has been removed.' };
    } catch (error) {
        console.error("Failed to fetch blog details:", error);
        return { title: 'Error', description: 'An error occurred while fetching blog details.' };
    }
}
