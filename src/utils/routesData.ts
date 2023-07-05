import RouteProps from "models/RouteModel";
import Home from "Pages/Home";
import GuessAnimeBySpec from "Pages/GuessAnimeBySpec";
import Error from "Pages/Error";

const routesData: RouteProps[] = [
  { path: "/", Component: Home, key: 1 },
  { path: "/guessanimebyspec", Component: GuessAnimeBySpec, key: 2 },
  { path: "*", Component: Error, key: 3 },
];

export default routesData;
