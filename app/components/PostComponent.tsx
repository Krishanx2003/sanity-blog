import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { Lilita_One, VT323 } from 'next/font/google';
import { Post } from '../utils/interface';
import { Card, CardContent } from '@/components/ui/card';
import { urlForImage } from '@/sanity/lib/image';
import { Button } from './ui/button';

interface Props {
  post: Post;
}

const font = Lilita_One({ weight: '400', subsets: ['latin'] });
const dateFont = VT323({ weight: '400', subsets: ['latin'] });

const PostComponent = ({ post }: Props) => {
  const imageUrl = post.titleImage ? urlForImage(post.titleImage) : null;

  return (
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     
        <Card className="bg-black shadow-lg rounded-lg overflow-hidden">
          
          {/* Content */}
          <CardContent>
            <Link href={`/posts/${post?.slug?.current}`}>
              <h2 className={`${font.className} text-lg font-semibold mb-2`}>{post?.title}</h2>
              <p className={`${dateFont.className} text-sm text-gray-600 mb-4`}>{new Date(post?.publishedAt).toDateString()}</p>
              <p className="text-gray-600">{post?.excerpt}</p>
            </Link>
          </CardContent>
        </Card>
      </div>
      
     
    
  );
};

export default PostComponent;
