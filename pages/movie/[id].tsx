import { Movie, TvShow } from "../../data/index";

interface Props {
  movie: Movie | TvShow;
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/marvel");
  const data = await res.json();
  
  const paths = data.map((movie: Movie | TvShow) => {
    return {
      params: {id: movie.id.toString()}
    }
  })

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:3000/api/marvel/movie/" + id);
  const data = await res.json();
  
  return {
    props: {movie: data}
  }
}



function Movie({movie}: Props) {
  return (
    <div>{movie.title}</div>
  )
}

export default Movie