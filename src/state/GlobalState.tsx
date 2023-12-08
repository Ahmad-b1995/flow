import React, {useState, createContext, useContext} from "react";

interface Props {
  children: React.ReactNode;
}

interface globalType {
  [key: string]: any;
  isDark: boolean;
}

// The initial state, you can setup any properties initilal values here.
const initialState: globalType = {
  isDark: true,
};

// create the context object for delivering your state across your app.
const GlobalContext = createContext<
  [initialState: globalType, updateGlobalState: any]
>([initialState, null]);


// custom component to provide the state to your app
export const GlobalState = ({children}: Props) => {
  // declare the GlobalState
  const [globalState, setGlobalState] = useState<globalType>(initialState);

  // create a function that'll make it easy to update one state property at a time
  const updateGlobalState = (key: string, newValue: any) => {
    setGlobalState((oldState: any) => {
      if (oldState[key] !== newValue) {
        const newState = {...oldState};
        newState[key] = newValue;
        return newState;
      } else {
        return oldState;
      }
    });
  };

  return (
    <GlobalContext.Provider value={[globalState, updateGlobalState]}>
      {children}
    </GlobalContext.Provider>
  );
};

// custom hook for retrieving the provided state
export const useGlobalState = () => useContext(GlobalContext);
