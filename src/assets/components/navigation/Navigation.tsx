import { Link } from "@chakra-ui/next-js";
import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/monday/div1">Monday Div 1</Link>
        </li>
        <li>Wednesday</li>
      </ul>
    </nav>
  );
};

export default Navigation;
