import React from "react";

export const Button = ({ handleClick, funcionality, styleProp }) => {
  return (
    <>
      <button className={`button ${styleProp}`} onClick={handleClick}>
        {funcionality}
      </button>
    </>
  );
};
{
  /* <Button handleClick={handleSuscribe} funcionality='SUSCRIBE' /> */
}

{
  /* <Button styleProp={'like'} funcionality='LIKE' /> */
}
