import { View, Text, Pressable,ToastAndroid } from "react-native";
import styles from "./Button.styles";
interface IButtonProps{
  children:string
  color?:"white"|"grey"
  bgColor:"blue"|"red"
  onButtonPressed:()=>void
}
const Button = ({children, color, bgColor, onButtonPressed=()=>{}}:IButtonProps) => {
  //console.log(props)
  return (
    <Pressable onPress={(evt)=>{
        //console.log(evt);
        ToastAndroid.show("pressed", ToastAndroid.LONG);
        onButtonPressed()
    }} style={[styles.Button, {backgroundColor:bgColor}]}>
      <Text style={[styles.text,{color:color}]}>{children}</Text>
    </Pressable>
  );
};
export default Button;
