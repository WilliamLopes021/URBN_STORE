import { useParams } from "react-router";

export const Category = () => {
  const id = useParams();

  return <p>{id}</p>;
};