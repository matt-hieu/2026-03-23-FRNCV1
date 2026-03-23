import { View, Text } from "react-native";
import styles from "./Button.styles";
const Button = (props) => {
  console.log(props)
  return (
    <View style={[styles.Button, {backgroundColor:props.bgColor}]}>
      <Text style={[styles.text,{color:props.color}]}>{props.children}</Text>
    </View>
  );
};
export default Button;
