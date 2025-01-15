import React from "react";
import { FacebookLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-800 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog Pessoal Generation | Copyright : {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <LinkedinLogo size={48} weight="bold" />
            <GithubLogo size={48} weight="bold" />
            <FacebookLogo size={48} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;