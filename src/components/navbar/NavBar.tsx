import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-indigo-800 text-white">
        <div className="container flex justify-between text-lg">
          Blog Pessoal
          <div className="flex gap-4">
            <div className="hover:underline">Postagens</div>
            <div className="hover:underline">Temas</div>
            <div className="hover:underline">Cadastrar</div>
            <div className="hover:underline">Perfil</div>
            <div className="hover:underline">Sair</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
