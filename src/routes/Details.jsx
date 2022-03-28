import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

const Details = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, { variables: { id } });
  console.log(loading, data);
  if (loading) return "Загрузка...";
  if (data?.movie) return <h1>{data.movie.title}</h1>;
  return "О фильме";
};

export default Details;
