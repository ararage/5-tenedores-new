import { createStackNavigator } from "react-navigation-stack";
import TopRestaurantsScreen from "../screens/TopRestaurantsScreen";

const TopListScreenStack = createStackNavigator({
  TopRestaurants: {
    screen: TopRestaurantsScreen,
    navigationOptions: "Los mejores restaurantes"
  }
});

export default TopListScreenStack;
