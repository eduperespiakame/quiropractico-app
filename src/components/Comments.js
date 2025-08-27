import React, { useState, useEffect } from 'react';
import './style_components/Comments.css';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';

const Comments = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      await addDoc(collection(db, 'comments'), {
        name,
        comment,
        timestamp: new Date()
      });
      setName('');
      setComment('');
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      setCommentsList(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section id="comments" className="comments-section">
      <h2>Comentarios</h2>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Escribe tu comentario..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Enviar comentario</button>
      </form>

      <div className="comments-list">
        {commentsList.length === 0 ? (
          <p>No hay comentarios todavía.</p>
        ) : (
          commentsList.map((c, index) => (
            <div key={index} className="comment">
              <h4>{c.name}</h4>
              <p>{c.comment}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Comments;
