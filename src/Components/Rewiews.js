import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const reviews = [
  {
    name: 'Никита Ершов',
    date: '19 марта 2024',
    rating: 5,
    text: 'Очень хорошая школа программирование, быстро понял основу. Отдельное спасибо преподавателю Карим',
    image: './Assets/user.png',
    likeIcon: './Assets/like.png'
  },
  {
    name: 'Максим Белый',
    date: '19 марта 2024',
    rating: 5,
    text: 'Очень хорошая школа программирование, быстро понял основу. Отдельное спасибо преподавателю Карим',
    image: './Assets/user.png',
    likeIcon: './Assets/like.png'
  },
  {
    name: 'Адиль Токен',
    date: '19 марта 2024',
    rating: 5,
    text: 'Очень хорошая школа программирование, быстро понял основу. Отдельное спасибо преподавателю Карим',
    image: './Assets/user.png',
    likeIcon: './Assets/like.png'
  },
  // Add more reviews as needed
];

const Review = ({ name, date, rating, text, image, likeIcon }) => (
  <div className="student-review">
    <div className="review-one">
      <div className="review-one-left">
        <div className="review-one-left-1">
          <img src={image} alt="User" />
        </div>
        <div className="review-one-left-2">
          <h2>{name}</h2>
          <p>{date}</p>
        </div>
      </div>
      <div className="review-one-right">
        {[...Array(rating)].map((_, i) => (
          <i key={i} className="fa-solid fa-star"></i>
        ))}
      </div>
    </div>
    <div className="review-two">
      <p>{text}</p>
    </div>
   
  </div>
);

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Auto-scroll every second
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <section>
      <div className="section-title">
        <h2>Отзывы наших клиентов</h2>
      </div>
      <div className="section-reviews" id="testimonial_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testmonial_slider_area text-center">
                <Slider {...settings}>
                  {reviews.map((review, index) => (
                    <Review key={index} {...review} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
    
    
    
    

