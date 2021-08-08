import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  overflow: hidden;

  padding: 1.7rem 0 1.7rem 2.1rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.3rem;
  letter-spacing: 0em;
  text-align: left;

  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

export const Content = styled(Swiper)`
  .swiper-wrapper{
    display: flex;
  }

  .swiper-slide{
    width: 28.0rem !important;
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
