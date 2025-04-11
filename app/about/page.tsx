import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description: 'Trang giới thiệu về COMPABLOG',
};

const About = () => {
  return (
    <>
      <style>{`
        .card-vertical {
          border-radius: 15px;
          background-color: #f8f9fa;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }
        .card-vertical:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
        }
        .skill-item:hover .progress-bar {
          filter: brightness(1.2);
          transform: scaleX(1.02);
          transition: all 0.3s ease;
        }
      `}</style>

      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full p-4 rounded bg-white">
                <div className="row">
                  {/* Bên trái */}
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img text-center">
                          <img
                            src="../images/user.png"
                            className="img-fluid rounded-circle b-shadow-a"
                            alt="Logo"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info mt-5">
                          <p><span className="title-s">Tên: </span> <span>COMPABLOG</span></p>
                          <p><span className="title-s">Chuyên ngành: </span> <span>Lập trình Fullstack JavaScript</span></p>
                          <p><span className="title-s">Email: </span> <span>contact@example.com</span></p>
                          <p><span className="title-s">SĐT: </span> <span>(012) 345-6789</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="skill-mf mt-4">
                      <p className="title-s">Kỹ năng</p>

                      {[
                        { name: 'HTML', percent: 85, color: 'bg-success' },
                        { name: 'CSS3', percent: 75, color: 'bg-info' },
                        { name: 'NodeJS', percent: 85, color: 'bg-warning' },
                        { name: 'JavaScript', percent: 90, color: 'bg-danger' },
                      ].map(skill => (
                        <div key={skill.name} className="skill-item mb-2">
                          <span>{skill.name}</span>
                          <span className="pull-right">{skill.percent}%</span>
                          <div className="progress">
                            <div
                              className={`progress-bar ${skill.color}`}
                              role="progressbar"
                              style={{ width: `${skill.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* Bên phải - Các thẻ dọc */}
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2 mb-4">
                        <h5 className="title-left">Về tôi</h5>
                      </div>
                      <div className="row g-3">
                        {[
                          'Xin chào! Tôi là một lập trình viên đam mê sáng tạo và công nghệ.',
                          'Tôi tin rằng mỗi dòng code là một nét nghệ thuật và mỗi dự án là một câu chuyện.',
                          'Tôi có kinh nghiệm với React, NodeJS, và MySQL, xây dựng ứng dụng hiện đại.',
                          'COMPABLOG là nơi tôi ghi lại hành trình phát triển bản thân – nơi công nghệ và cảm hứng gặp nhau.',
                          'Xin chào! Tôi là một lập trình viên đam mê sáng tạo và công nghệ.',

                          'Xin chào! Tôi là một lập trình viên đam mê sáng tạo và công nghệ.',


                        ].map((text, index) => (
                          <div key={index} className="col-12 col-sm-6 mb-3">
                            <div className="card-vertical p-3 h-100">
                              <p className="lead m-0">{text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
