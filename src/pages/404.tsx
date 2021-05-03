import React from 'react';
import { PageProps } from 'gatsby';

import Page from '@/components/Library/Page';

const NotFound: React.FC<PageProps> = ({ data }) => <Page data={data} />;

export default NotFound;
