import { Link } from 'gatsby';
import React from 'react';

import { Wrapper, NextTitle, NextLink } from './styles';

type Props = {
  slug: string;
  seo: any;
};

const Next: React.FC<Props> = (next) => {
  const { slug, seo } = next;
  const { pageTitle } = seo;
  return (
    <Wrapper data-background="dark">
      <NextTitle>Keep reading</NextTitle>
      <NextLink>
        <Link to={slug} data-fill={pageTitle} data-section=">">
          {pageTitle}
        </Link>
      </NextLink>
    </Wrapper>
  );
};
export default Next;
