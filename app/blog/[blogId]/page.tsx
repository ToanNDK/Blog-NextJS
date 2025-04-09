import { getAllBlogs, getDetailBlog } from '@/services/BlogService';
import { blogType } from '@/types';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import CommentSection from '@/components/CommentSection';
import SimpleChatBot from '@/components/SimpleChatBot';

interface Props {
    params: {
        blogId?: string;
    };
}

export async function generateMetadata({ params }: { params: Promise<Props["params"]> }): Promise<Metadata> {
    const resolvedParams = await params;

    if (!resolvedParams?.blogId) {
        return { title: 'Blog Not Found', description: 'The requested blog post could not be found.' };
    }

    try {
        const blog: blogType | null = await getDetailBlog(resolvedParams.blogId);
        return blog ? { title: blog.title, description: blog.summary }
                    : { title: 'Blog Not Found', description: 'This blog post does not exist or has been removed.' };
    } catch (error) {
        console.error("Failed to fetch blog details:", error);
        return { title: 'Error', description: 'An error occurred while fetching blog details.' };
    }
}

const BlogDetail = async ({ params }: { params: Promise<Props["params"]> }) => {
    const resolvedParams = await params;

    if (!resolvedParams?.blogId) return <p>Blog ID is missing</p>;

    let blog: blogType | null = null;
    let latestBlogs: blogType[] = [];

    try {
        blog = await getDetailBlog(resolvedParams.blogId);
    } catch (error) {
        console.error("Failed to fetch blog details:", error);
    }

    if (!blog) return <p>Blog not found.</p>;

    try {
        latestBlogs = await getAllBlogs({ items_per_page: '6' });
    } catch (error) {
        console.error("Failed to fetch latest blogs:", error);
    }

    // ✅ Sửa lỗi đường dẫn ảnh CKEditor
    const fixedDescription = blog.description.replace(/(src=")\/ckeditor\//g, '$1/uploads/ckeditor/');

    return (
        <>
            <section className="blog-wrapper sect-pt4" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="post-box">
                                <div className="post-meta">
                                    <h1 className="article-title">{blog.title}</h1>
                                    <ul>
                                        <li>
                                            <i className="fa fa-tags" aria-hidden="true"></i>{' '}
                                            <label>{blog.category?.name || 'Uncategorized'}</label>
                                        </li>
                                    </ul>
                                    <p className="mt-3">
                                        <strong><i>{blog.summary}</i></strong>
                                    </p>
                                </div>
                                {blog.description ? (
                                    <div
                                        className="article-content"
                                        dangerouslySetInnerHTML={{ __html: fixedDescription }}
                                    ></div>
                                ) : (
                                    <p>No content available.</p>
                                )}

                                {/* ✅ Bình luận */}
                                <CommentSection blogId={resolvedParams.blogId} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="widget-sidebar">
                                <h5 className="sidebar-title">Latest Post</h5>
                                <div className="sidebar-content">
                                    <ul className="list-sidebar">
                                        {latestBlogs.map(item => (
                                            <li key={item.id}>
                                               <Link href={`/blog/${item.id}`}>{item.title}</Link> 

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ Chatbot được đặt ngoài section để luôn hiển thị nổi */}
            <SimpleChatBot />
        </>
    );
};

export default BlogDetail;