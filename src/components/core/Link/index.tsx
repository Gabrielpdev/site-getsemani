import { LinkHTMLAttributes, ReactNode } from 'react';
import NextLink from 'next/link';

import { Container, Trace, Text } from './styles';

interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children: ReactNode;
  href: string;
  color: 'blue' | 'yellow';
}

export function Link({
  children, href, color, ...rest
}: LinkProps): JSX.Element {
  return (
    <NextLink href={href}>
      <Container {...rest}>
        <Text>{children}</Text>
        <Trace color={color} />
      </Container>
    </NextLink>
  );
}
