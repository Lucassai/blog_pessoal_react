import React from "react";

function NavBar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-indigo-800 text-white">
        <div className="container flex justify-between text-lg">
          Blog Pessoal
          <div className="flex gap-4">
            Postagens Temas Cadastrar tema Perfil Sair
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
