import {useEffect,useState} from "react";
import {Data} from "../context/index";

const DataProvider = (props) => {
    const [coustemr, setCoustemr] = useState();
   
  
    useEffect(() => {
      const coustemr = async () => {
        try {
          const response = await fetch("APİ ADRESİ");
          const Data = await response.json();
          setCoustemr(Data);
        } catch (error) {
          console.log(error);
        }
      };
      coustemr();
    }, []);

    return (
        <Data.Provider value={{coustemr :coustemr}}>
            {props.children}
        </Data.Provider>
    )
}

export default DataProvider;