import { getAllBlogs } from "@/services/BlogService";
import { blogType } from "@/types";
import moment from "moment";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blog list page",
  description: "Blog list page description",
};

const Blog = async () => {
  let blogs: blogType[] = [];

  try {
    blogs = (await getAllBlogs({ items_per_page: "9" })) ?? [];
    const response = await getAllBlogs({ items_per_page: "9" });

    console.log("Fetched blogs response:", response); //
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }

  if (!blogs.length) {
    return <p className="text-center">No blogs available.</p>;
  }

  return (
    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a mt-3">Blog</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card card-blog">
                <div className="card-img">
                  <Link href={`/blog/${item.id}`}>
                    <img
                      src={`http://localhost:5000/${item.thumbnail}`}
                      alt={item.title}
                      className="img-fluid"
                    />{" "}
                  </Link>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">{item.category.name}</h6>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <Link href={`/blog/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p className="card-description">
                    {item.summary.length > 120
                      ? `${item.summary.slice(0, 120)}...`
                      : item.summary}
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <img
                     src={
                      item.user.avatar
                        ? `${process.env.API_URL}/${item.user.avatar.startsWith("uploads/") ? item.user.avatar : `uploads/${item.user.avatar}`}`
                        : "/default-avatar.png"
                    }
                      alt=""
                      className="avatar rounded-circle"
                    />
                    <span className="author">{item.user.first_name}</span>
                  </div>
                  <div className="post-date">
                    <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                    {moment(item.created_at).format("DD/MM/YYYY")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
