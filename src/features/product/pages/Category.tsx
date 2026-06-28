import { useParams } from "react-router";
import { PresetDisplay } from "../components/templates/PresetDisplay";

export const Category = () => {
  const id = useParams<string>();

  return (
   <PresetDisplay image="">

   </PresetDisplay> 
  )
};