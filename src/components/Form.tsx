import React from "react";

interface formProps {
  titulo: String;
  cor: String;
}

function Form(props: formProps) {
  return (
    <div
      style={{
        color: props.cor,
      }}
    >
      <form action="">
        <h1>{props.titulo}</h1>
        <input type="text" />
      </form>
    </div>
  );
}

export default Form;
