import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.div`
  margin: 3rem 2rem 0;
  color: ${({ theme }) => theme.colors.white};

  > span {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.3rem;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const Description = styled.div`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: medium;
  line-height: 1.6rem;
  letter-spacing: 0em;
  text-align: left;

  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
  
  a, a:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Acount = styled.div`
  width: 100%;

  padding: 1.5rem;
  margin: .5rem 0 1rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: rgba(255,255,255, 0.1);
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
  letter-spacing: 0em;
  text-align: left;

`;

export const Pix = styled.div`
  width: 100%;

  padding: 1rem;
  margin: .5rem 0 1rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: rgba(255,255,255, 0.1);
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
  letter-spacing: 0em;
  text-align: left;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CopyTextButton = styled.button`

  > span {
    background-color: rgba(255, 255, 255, 0.1);
    padding: .5rem;
    border-radius: 1rem;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
