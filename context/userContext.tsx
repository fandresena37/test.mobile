import { userList } from "@/data/data";
import { userType } from "@/type/data";
import React, { createContext, useContext, useState } from "react";

// Étape 1 : Créer le Context
const AllUserContext = createContext<{
  allUser: userType[];
  setAllUser: React.Dispatch<React.SetStateAction<userType[]>>;
}>({
  allUser: userList,
  setAllUser: () => {},
});
// Étape 2 : Créer le Provider
export const AllUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allUser, setAllUser] = useState<userType[]>(userList);
  return (
    <AllUserContext.Provider value={{ allUser, setAllUser }}>
      {children}
    </AllUserContext.Provider>
  );
};

export const useAllUser = () => {
  const { allUser, setAllUser } = useContext(AllUserContext);
  return { allUser, setAllUser };
};
