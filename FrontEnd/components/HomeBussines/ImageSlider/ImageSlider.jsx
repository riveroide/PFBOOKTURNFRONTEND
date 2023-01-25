import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  useEffect(() => {
    AOS.init();
  });
  const sliderImg = useSelector((state) => state.business);
  console.log(sliderImg);

  return (
    <>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        cssMode={true}
        loop={true}
        // navigation={true}
        grabCursor={true}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide data-aos="fade-up" className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up" className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up" className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up" className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up" className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up" className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up" className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up" className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide data-aos="fade-up" className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;
