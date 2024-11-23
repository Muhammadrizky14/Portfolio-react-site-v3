import React from 'react';
import { Star } from 'react-feather';
import ScrollAnimation from './ScrollAnimation';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    name: 'Farhonn ea',
    company: 'Tech Solutions Inc.',
    review: 'Rizky membuat situs web yang luar biasa untuk perusahaan kami. Perhatiannya terhadap detail dan kemampuannya menerjemahkan visi kami menjadi kenyataan sangat mengesankan.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Simic kuler',
    company: 'Creative Designs Co.',
    review: "Bekerja dengan Rizky adalah pengalaman yang menyenangkan. Ia sangat mahir dalam pengembangan dan desain. Projek kami selesai tepat waktu dan melampaui harapan.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Ahgee jon',
    company: 'E-commerce Experts',
    review: "Keahlian Rizky dalam pengembangan full-stack benar-benar luar biasa. Ia membangun platform e-commerce yang tangguh bagi kami, yang mudah digunakan dan dapat diskalakan.",
    rating: 4,
  },
];

function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <ScrollAnimation>
          <h2>Ulasan Clien</h2>
          <p className="subtitle">Apa yang orang katakan tentang pekerjaanku</p>
        </ScrollAnimation>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <ScrollAnimation key={review.id}>
              <div className="review-card">
                <div className="review-header">
                  <h3>{review.name}</h3>
                  <p className="company">{review.company}</p>
                </div>
                <p className="review-text">{review.review}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < review.rating ? '#FFC107' : 'none'}
                      stroke={i < review.rating ? '#FFC107' : '#CBD5E0'}
                    />
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;

