import styled from 'styled-components';
import Link from 'next/link';

interface TraceProps {
  color: 'blue' | 'yellow';
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.back_100};
  color: ${({ theme }) => theme.colors.white};

  padding: 1.7rem;
  border-radius: 10px;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.0rem;
  letter-spacing: 0em;
  text-align: center;

  margin-bottom: 1.4rem;
`;

export const Date = styled.div`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0em;
  text-align: left;

  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;
`;

export const Button = styled(Link)`
  width: 4.2rem;
  height: 4.2rem;

  background-color: rgba(0, 0, 0, 0.3);
  border-radius : 1rem;
  border: 1px solid ${({ theme }) => theme.colors.back};

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const Address = styled.div`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.9rem;
  letter-spacing: 0em;
  text-align: left;
`;

export const Street = styled.div``;

export const District = styled.div``;

export const Line = styled.hr<TraceProps>`
  width: 100%;
  border: 0;

  height: .4rem;
  border-radius: 999px;

  background-color: ${({ theme, color }) => (color === 'yellow' ? theme.colors.yellow : theme.colors.blue)}
`;
