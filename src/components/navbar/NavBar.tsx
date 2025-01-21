import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-indigo-800 text-white">
        <div className="container flex justify-between text-lg">
          <Link to="/" className="text-2xl font-bold">
            Blog Pessoal
          </Link>{" "}
          <div className="flex gap-4">
            <div className="hover:underline">
              <Link to="/">Postagens</Link>
            </div>

            <div className="hover:underline">
              <Link to="/">Temas</Link>
            </div>
            <div className="hover:underline">
              <Link to="/cadastro"> Cadastro</Link>
            </div>
            <div className="hover:underline">
              <Link to="/home">Perfil</Link>
            </div>
            <div className="hover:underline">
              <Link to="/">Sair</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
