import { createStackNavigator } from "react-navigation-stack";
import RestaurantsScreen from "../screens/RestaurantsScreen";

const RestaurantsScreenStack = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: () => ({
      title: "Restaurantes"
    })
  }
});

export default RestaurantsScreenStack;
