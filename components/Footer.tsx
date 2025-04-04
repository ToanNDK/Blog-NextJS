import React from 'react'
import Head from 'next/head'
const Footer = () => {
  return (
    <>
     <Head>
        <link rel="stylesheet" href="/css/Footer.css" />
      </Head>
    <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
      <footer>
        <div className="container py-5">
          <div className="row">
            {/* Cột: Liên hệ */}
            <div className="col-md-4">
              <h5 className="text-white mb-3">Liên hệ</h5>
              <ul className="list-unstyled">
                <li className="footer-item">Địa chỉ: 123 Đường ABC, Hà Nội</li>
                <li className="footer-item">Email: example@email.com</li>
                <li className="footer-item">Điện thoại: 0123 456 789</li>
              </ul>
            </div>

            {/* Cột: Mạng xã hội */}
            <div className="col-md-4">
              <h5 className="text-white mb-3">Mạng xã hội</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">Facebook</a></li>
                <li><a href="#" className="footer-link">Instagram</a></li>
                <li><a href="#" className="footer-link">Twitter</a></li>
                <li><a href="#" className="footer-link">LinkedIn</a></li>
              </ul>
            </div>

            {/* Cột: Thông tin */}
            <div className="col-md-4">
              <h5 className="text-white mb-3">Thông tin</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">Giới thiệu</a></li>
                <li><a href="#" className="footer-link">Dịch vụ</a></li>
                <li><a href="#" className="footer-link">Liên hệ</a></li>
                <li><a href="#" className="footer-link">Hỏi đáp</a></li>
              </ul>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 text-center">
              <div className="copyright-box">
                <p className="text-white mb-0">
                  &copy; Copyright <strong>BLOG</strong>. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
    </>
  )
}

export default Footer
