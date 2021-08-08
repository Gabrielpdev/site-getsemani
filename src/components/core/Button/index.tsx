import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container, Trace, Text } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: 'blue' | 'yellow';
}

export function Button({ children, color, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Text>{children}</Text>
      <Trace color={color} />
    </Container>
  );
}
