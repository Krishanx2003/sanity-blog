import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface Props {
  title: string;
  tags?: boolean;
}

const Header = ({ title = "", tags = false }: Props) => {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-center mb-12">
        {title}
      </h2>
      <Link href="/">

      <Button className="bg-[#bd1e59] text-white">Return</Button>
      </Link>
      {tags && (
        <div className="text-xs mt-2 hover:text-purple-500">
          <Link href="/tag">#tags</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
