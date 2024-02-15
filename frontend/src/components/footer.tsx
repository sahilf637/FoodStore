import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
            FoodStore.com
        </span>
        <span className="text-whit font-bold tracking-tight flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Services</span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
