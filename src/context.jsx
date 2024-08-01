import React, { createContext, useState, useContext } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [infor, setInfor] = useState([]);

  const addFavorito = (ani) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, ani].sort((a, b) => b.avaliacao - a.avaliacao));
  };

  const addInf = (ani) => {
    setInfor((prevInf) => {
      const exists = prevInf.some(item => item.id === ani.id);
      if (exists) return prevInf;
      return [...prevInf, ani];
    });
  };

  const removeFavorito = (id) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter(ani => ani.id !== id));
  };

  return (
    <Context.Provider value={{ favoritos, infor, addFavorito, removeFavorito, addInf }}>
      {children}
    </Context.Provider>
  );
};

export const user = () => useContext(Context);
