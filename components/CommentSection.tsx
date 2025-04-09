'use client';

import { useEffect, useState } from 'react';

interface Comment {
  name: string;
  content: string;
  timestamp: number;
}

const CommentSection = ({ blogId }: { blogId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  // Load comments từ localStorage khi component được mount
  useEffect(() => {
    const saved = localStorage.getItem(`comments_${blogId}`);
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, [blogId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !content.trim()) {
      alert('Vui lòng nhập đầy đủ tên và nội dung!');
      return;
    }

    const newComment: Comment = {
      name,
      content,
      timestamp: Date.now(),
    };

    const updated = [...comments, newComment];
    setComments(updated);
    localStorage.setItem(`comments_${blogId}`, JSON.stringify(updated));

    setName('');
    setContent('');
  };

  return (
    <div className="mt-5">
      <h4 className="mb-3">Bình luận</h4>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          placeholder="Tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Nội dung bình luận..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={3}
        />
        <button className="btn btn-primary" type="submit">Gửi</button>
      </form>

      {comments.length > 0 ? (
        <ul className="list-group">
          {comments.map((c, idx) => (
            <li key={idx} className="list-group-item">
              <strong>{c.name}</strong>{' '}
              <small className="text-muted">
                ({new Date(c.timestamp).toLocaleString()})
              </small>
              <p className="mb-0">{c.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Chưa có bình luận nào.</p>
      )}
    </div>
  );
};

export default CommentSection;
