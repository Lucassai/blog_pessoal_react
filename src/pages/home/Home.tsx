import React from "react";

function Home() {
  return (
    <div className="bg-indigo-900 flex justify-center">
      <div className="container grid grid-cols-2 text-white">
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
          <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>

          <div className="flex justify-around gap-4">
            <div className="rounded text-white border-white border-solid border-2 py-2 px-4">
              Nova Postagem
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDdyajc5NXdtMHlrdXh5cm93ZXJ0dW92aDliaHo3OGRlcDZjbnE5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbnUQpnihPSIgIXuZv/giphy.gif"
            alt="Imagem Página Home"
            className="w-2/3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
