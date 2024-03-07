import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  slug: string[];
  isPreview?: boolean;
}

const DynamicPage: React.FC<Props> = ({ slug, isPreview }) => {
    console.log('isPreview', isPreview);
  return (
    <div>
      <h1>This is a dynamic page</h1>
      <h2>Slug: {slug.join('/')}</h2>
      {isPreview && <p>This is a preview</p>}
    </div>
  );
};

export const getServerSideProps= async (context) => {
    const { slug } = context.params || {};
    const isPreview = context.preview || false;
    console.log('isPreview', isPreview);
    return {
        props: {
          slug: slug || [], // Ensure slug is always an array
          isPreview: isPreview,
        },
      };
};

export default DynamicPage;
