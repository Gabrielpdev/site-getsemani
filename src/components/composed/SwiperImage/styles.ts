import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const Content = styled(Swiper)`
  .swiper-wrapper{
    display: flex;
  }

  .swiper-slide{
    width: 100vw !important;
    /* max-width: 60rem; */
  }

  img {
    cursor: pointer;
    margin-bottom: 2.4rem;
    min-width: 100% !important;
    max-width: 100% !important;
    
    width: 100vw;

    text-decoration: none;

    &:not(:last-child) {
      margin-right: 25px;
    }

    &:nth-last-child(2) {
      margin-right: 0;
    }

    @media (min-width: 480px) {
      min-width: 320px;
      max-width: 320px;
    }
  }
`;
