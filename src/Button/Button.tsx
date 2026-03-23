import { View, Text, Pressable,ToastAndroid } from "react-native";
import styles from "./Button.styles";
const Button = (props) => {
  console.log(props)
  return (
    <Pressable onPress={(evt)=>{
        //console.log(evt);
        ToastAndroid.show("pressed", ToastAndroid.LONG);
        props.onButtonPressed()
    }} style={[styles.Button, {backgroundColor:props.bgColor}]}>
      <Text style={[styles.text,{color:props.color}]}>{props.children}</Text>
    </Pressable>
  );
};
export default Button;
