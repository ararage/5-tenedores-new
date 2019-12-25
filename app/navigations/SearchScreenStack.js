import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/SearchScreen";

const SearchScreenStack = createStackNavigator({
  Restaurants: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "Busca tu restaurante"
    })
  }
});

export default SearchScreenStack;
