import Container from 'components/container';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

export type BlogListMenuProps = {
  // No Props
};

const BlogListMenu: FunctionComponent<BlogListMenuProps> = (props) => {
  return (
    <Stack className='bg-red-100 h-full flex-1 max-w-md'>
      <Container>
        <Stack className='flex-1'>
          <h3 className="text-red-500 font-semibold tracking-wide text-2xl">
          Blogs
          </h3>
          </Stack>
      </Container>
    </Stack>
  );
};

export default BlogListMenu;
