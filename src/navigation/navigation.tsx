import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Store from '../screens/Store'
import ProductEditor, { IProductEditorProps } from '../components/ui/ProductEditor/ProductEditor'
import { IProduct } from '../interfaces/IProducts'
import cart from '../screens/cart'
import CartIcon from '../components/ui/CartIcon/CartIcon.connected'
import Banner from '../components/ui/Banner/Banner'

export type RootStackParams = {
    home:undefined
    store:undefined
    pr:IProductEditorProps
    "new product":undefined
    cart:undefined

}
const Stack=createNativeStackNavigator<RootStackParams>()
const Navigation = () => {
  return (
   <Stack.Navigator initialRouteName='home' >
        <Stack.Screen name='home' component={Home} options={{
            headerShown:false,
        }}/>
        <Stack.Screen name='store' component={Store} options={{
            headerRight:()=><CartIcon/>,
            headerStyle:{
                backgroundColor:'skyblue',
            },
            title:'Les produits',
            headerTitleStyle:{fontSize:32},
            headerTitleAlign:'center'
            // headerTitle:()=><Banner/>
        }}/>
         <Stack.Screen name='pr' component={ProductEditor}/>
        <Stack.Screen name='cart' component={cart}/>
        <Stack.Screen name='new product' component={()=>{
            const pr:IProduct={description:'',imageUrl:'',prix:2,thumbnailUrl:'',titre:'', stock:0}
            return <ProductEditor product={pr} onProductSaved={()=>{}}/>
        }}/>
   </Stack.Navigator>
  )
}

export default Navigation