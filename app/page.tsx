import { getAllBlogs } from '@/services/BlogService'
import { blogType } from '@/types'
import moment from 'moment'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Homepage blog',
  description: 'Homepage blog',
}

export default async function Home() {

  const latestBlogs: blogType[] = await getAllBlogs({ items_per_page: '3' })

  return (
    <>
      <div id="home" className="intro route bg-image">
        <div className="overlay-itro"></div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">I am a coder</h1>
              <p className="intro-subtitle"><span className="text-slider-items">I don't always code in JavaScript, but when I do, it's fullstack.</span><strong className="text-slider"></strong></p>
            </div>
          </div>
        </div>
      </div>
      <section id="blog" className="blog-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Latest Blog
                </h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {latestBlogs.map(item => {
              return (
                <div className="col-md-4">
                  <div className="card card-blog">
                    <div className="card-img">
                      <Link href={`/blog/${item.id}`}>
                        <img src={`${process.env.API_URL}/${item.thumbnail}`} alt={item.title} className="img-fluid" />
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
                        {item.summary.length > 120 ? `${item.summary.slice(0, 120)}...` : item.summary}
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="post-author">
                        <img src={`${process.env.API_URL}/${item.user.avatar}`} alt="" className="avatar rounded-circle" />
                        <span className="author">{item.user.first_name}</span>
                      </div>
                      <div className="post-date">
                        <span className="ion-ios-clock-outline"></span> <i className="fa fa-calendar" aria-hidden="true"></i> {moment(item.created_at).format("DD/MM/YYY")}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
