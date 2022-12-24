import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
//

  return (
    <>
      <Swiper
        

        slidesPerView={2}
        centeredSlides={true}
        cssMode={true}
        loop={true}
        // navigation={true}
        grabCursor={true}
        pagination={{ dynamicBullets: true, clickable: true}}
        modules={[Navigation, Pagination, Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;
