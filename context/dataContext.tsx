import { dataList } from "@/data/data";
import { dataType } from "@/type/data";
import React, { createContext, useContext, useState } from "react";

// Étape 1 : Créer le Context
const AllDataContext = createContext<{
  allData: dataType[];
  setAllData: React.Dispatch<React.SetStateAction<dataType[]>>;
}>({
  allData: dataList,
  setAllData: () => {},
});
// Étape 2 : Créer le Provider
export const AllDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allData, setAllData] = useState<dataType[]>(dataList);
  return (
    <AllDataContext.Provider value={{ allData, setAllData }}>
      {children}
    </AllDataContext.Provider>
  );
};

export const useAllData = () => {
  const { allData, setAllData } = useContext(AllDataContext);
  return { allData, setAllData };
};
