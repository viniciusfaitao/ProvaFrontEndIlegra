import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ScrollArrow } from "./components/backToTop/Index";
import { Header } from "./components/header/Index";
import { Footer } from "./components/footer/Index";

import { Home } from "./pages/home/Index";
import { People } from "./pages/people/Index";
import { Films } from "./pages/films/Index";
import { Planets } from "./pages/planets/Index";
import { Starships } from "./pages/starships/Index";
import { Vehicles } from "./pages/vehicles/Index";
import { Species } from "./pages/species/Index";

import { FilmDescription } from "./pages/films/filmDescription/Index";
import { PeopleDescription } from "./pages/people/peopleDescription/Index";
import { PlanetDescription } from "./pages/planets/planetDescription/Index";
import { SpecieDescription } from "./pages/species/specieDescription/Index";
import { StarshipDescription } from "./pages/starships/starshipDescription/Index";
import { VehicleDescription } from "./pages/vehicles/vehicleDescription/Index";

import { FilmContextProvider } from "./contexts/filmContext/Index";
import { PeopleContextProvider } from "./contexts/peopleContext/Index";
import { PlanetContextProvider } from "./contexts/planetContext/Index";
import { SpecieContextProvider } from "./contexts/specieContext/Index";
import { StarshipContextProvider } from "./contexts/starshipContext/Index";
import { VehicleContextProvider } from "./contexts/vehicleContext/Index";

const App = () => {
  return (
    <Router>
      <FilmContextProvider>
        <PeopleContextProvider>
          <PlanetContextProvider>
            <SpecieContextProvider>
              <StarshipContextProvider>
                <VehicleContextProvider>
                  <motion.div
                    initial={{ opacity: 0, x: -2000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5 }}
                  >
                    <Header />
                  </motion.div>
                  <Switch>
                    <Route path="/home" children={<Home />} />
                    <Route path="/films" children={<Films />} />
                    <Route path="/film/:title" children={<FilmDescription />} />
                    <Route path="/peoples" children={<People />} />
                    <Route
                      path="/people/:name"
                      children={<PeopleDescription />}
                    />
                    <Route path="/planets" children={<Planets />} />
                    <Route
                      path="/planet/:name"
                      children={<PlanetDescription />}
                    />
                    <Route path="/species" children={<Species />} />
                    <Route
                      path="/specie/:name"
                      children={<SpecieDescription />}
                    />
                    <Route path="/starships" children={<Starships />} />
                    <Route
                      path="/starship/:name"
                      children={<StarshipDescription />}
                    />
                    <Route path="/vehicles" children={<Vehicles />} />
                    <Route
                      path="/vehicle/:name"
                      children={<VehicleDescription />}
                    />
                    <Route path="/" children={<Redirect to="/home" />} />
                  </Switch>
                  <ScrollArrow />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4 }}
                  >
                    <Footer />
                  </motion.div>
                </VehicleContextProvider>
              </StarshipContextProvider>
            </SpecieContextProvider>
          </PlanetContextProvider>
        </PeopleContextProvider>
      </FilmContextProvider>
    </Router>
  );
};

export default App;
