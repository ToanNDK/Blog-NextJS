'use client';
import React, { useEffect, useState } from 'react';

interface Comment {
  name: string;
  message: string;
  time: string;
}

const CommentBox = ({ blogId }: { blogId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(`comments-${blogId}`);
    if (saved) setComments(JSON.parse(saved));
  }, [blogId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const newComment = {
      name,
      message,
      time: new Date().toLocaleString(),
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`comments-${blogId}`, JSON.stringify(updatedComments));

    // Reset form
    setName('');
    setMessage('');
  };

  return (
    <div className="mt-5">
      <h5 className="mb-3">💬 Bình luận</h5>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Tên của bạn"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <textarea
            placeholder="Nội dung bình luận..."
            className="form-control"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">Gửi bình luận</button>
      </form>

      {comments.length > 0 ? (
        <ul className="list-unstyled">
          {comments.map((comment, idx) => (
            <li key={idx} className="mb-3 border-bottom pb-2">
              <strong>{comment.name}</strong> <small className="text-muted">({comment.time})</small>
              <p className="mb-0">{comment.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Chưa có bình luận nào.</p>
      )}
    </div>
  );
};

export default CommentBox;
