import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  tags?: boolean;
}

const Header = ({ title = "", tags = false }: Props) => {
  return (
    <header className="container mx-auto px-4">
      <h1 className="text-6xl font-bold my-12">
        {title}
      </h1>
      <div className="flex">
        
      {tags && (
        <div className="text-xs mt-2 hover:text-purple-500">
          <Link href="/tag">#tags</Link>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
