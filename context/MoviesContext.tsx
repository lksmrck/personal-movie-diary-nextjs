// import {
//   createContext,
//   ReactNode,
//   useState,
//   useEffect,
//   FC,
//   useContext,
//   Dispatch,
//   SetStateAction,
// } from "react";

// interface MoviesContextInterface {
//   testValue: /* User | null; */ any;
//   setTestValue: /* Dispatch<SetStateAction<User | null>>; */ any;
// }

// export const MoviesContext = createContext({} as MoviesContextInterface);

// export const MoviesContextProvider: FC<{
//   children: ReactNode;
// }> = ({ children }) => {
//   const [testValue, setTestValue] = useState(true);

//   return (
//     <MoviesContext.Provider
//       value={{
//         testValue,
//         setTestValue,
//       }}
//     >
//       {children}
//     </MoviesContext.Provider>
//   );
// };
// /* const useMovies = () => {
//   return useContext(MoviesContext);
// };

// export default useMovies; */
import React from "react";

const MoviesContext = () => {
  return <div>MoviesContext</div>;
};

export default MoviesContext;
