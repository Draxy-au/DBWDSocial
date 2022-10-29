import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    // TO DO
    setCurrentUser({
      id: 1,
      name: "John Barry",
      profilePic:
        "https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
