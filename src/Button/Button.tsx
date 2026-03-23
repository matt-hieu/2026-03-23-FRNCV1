import { View, Text } from "react-native";
import styles from "./Button.styles";
const Button = (props) => {
  console.log(props)
  return (
    <View style={styles.Button}>
      <Text>{props.children}</Text>
    </View>
  );
};
export default Button;
