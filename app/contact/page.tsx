import React from 'react' 
import { Metadata } from 'next'
import '../globals.css'
export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Trang liên hệ của chúng tôi',
}

const exploreCards = [
  {
    title: '🎯 Tùy chỉnh giao diện',
    content: 'Tạo website với phong cách riêng của bạn chỉ trong vài cú nhấp chuột.',
    borderColor: 'purple',
  },
  {
    title: '📈 Tối ưu SEO',
    content: 'Đưa bài viết của bạn lên top Google với những công cụ mạnh mẽ.',
    borderColor: 'green',
  },
  {
    title: '💬 Chatbot AI',
    content: 'Tích hợp chatbot AI thông minh hỗ trợ khách hàng 24/7.',
    borderColor: 'orange',
  },
  {
    title: '📦 Dịch vụ hosting',
    content: 'Hosting nhanh, bảo mật và tối ưu cho blog và trang cá nhân.',
  },
]

export default function Contact() {
  return (
<section className="py-5 bg-light" style={{ scrollMarginTop: '100px' }}>
<div className="container">
        {/* Tiêu đề */}
        <div className="row mb-5 text-center">
          <div className="col">
            <h2 className="fw-bold">Liên hệ với chúng tôi</h2>
            <p className="text-muted">Chúng tôi rất mong được nghe phản hồi từ bạn!</p>
          </div>
        </div>

        <div className="row g-4">
          {/* Form */}
          <div className="col-md-6">
            <form className="bg-white p-4 shadow rounded">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Họ và tên</label>
                <input type="text" className="form-control" id="name" placeholder="Nhập tên của bạn" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="user@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Tiêu đề</label>
                <input type="text" className="form-control" id="subject" placeholder="Về vấn đề..." />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Nội dung</label>
                <textarea className="form-control" id="message" rows={5} placeholder="Viết nội dung liên hệ..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                <i className="fa fa-paper-plane me-2"></i>Gửi tin nhắn
              </button>
            </form>
          </div>

          {/* Card Khám phá thêm */}
          <div className="col-md-6">
            <div className="d-flex flex-column gap-4">
            {exploreCards.map((card, index) => (
  <div
    key={index}
    className={`custom-card ${index % 2 === 0 ? 'align-self-start' : 'align-self-end'}`}
    style={{ borderColor: card.borderColor }}
  >
    <h5 className="fw-bold">{card.title}</h5>
    <p className="text-muted mb-0">{card.content}</p>
  </div>
))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
