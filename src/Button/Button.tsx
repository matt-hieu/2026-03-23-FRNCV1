import { View, Text } from "react-native";
const Button = (props) => {
  console.log(props)
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};
export default Button;
