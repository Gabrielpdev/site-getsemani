import Image from 'next/image';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { SwiperSlide } from 'swiper/react';
import { v4 } from 'uuid';

import { Container, Content } from './styles';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination, Autoplay]);

interface ImageProps {
  image1: {
    alt: string;
    url: string;
  }
}

interface SwiperImageProps {
  images: ImageProps[];
}

export function SwiperImage({ images }: SwiperImageProps): JSX.Element {
  return (
    <Container>
      <Content
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={v4()}>
            <Image
              src={image.image1.url}
              alt={image.image1.alt}
              width={500}
              height={500}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Content>
    </Container>
  );
}
