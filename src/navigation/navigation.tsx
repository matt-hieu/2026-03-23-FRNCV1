import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Imports de tes écrans
import Home from '../screens/Home';
import Store from '../screens/Store';
import Cart from '../screens/cart'; // Convention : Majuscule pour les composants
import ProductEditor from '../components/ui/ProductEditor/ProductEditor';

// Interfaces
import { IProduct } from '../interfaces/IProducts';

// 1. Définition des types de navigation
// Note : Évite de passer des fonctions complexes (comme dans IProductEditorProps) 
// dans les params de route car ils ne sont pas "sérialisables".
export type RootStackParams = {
    home: undefined;
    store: undefined;
    productDetail: { product: IProduct }; 
    newProduct: undefined;
    cart: undefined;
};

// 2. Composant "Wrapper" pour la création d'un nouveau produit
// On le définit en dehors pour éviter qu'il soit re-créé à chaque render de Navigation
const NewProductScreen = () => {
    const defaultProduct: IProduct = {
        description: '',
        imageUrl: '',
        prix: 2,
        thumbnailUrl: '',
        titre: '',
        stock: 0
    };

    return (
        <ProductEditor 
            product={defaultProduct} 
            onProductSaved={() => {
                // Logique de retour ou de succès ici si nécessaire
            }} 
        />
    );
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen 
                name="home" 
                component={Home} 
                options={{ headerShown: false }} 
            />
            
            <Stack.Screen 
                name="store" 
                component={Store} 
                options={{ title: 'Boutique' }}
            />
            
            <Stack.Screen 
                name="productDetail" 
                component={ProductEditor} 
                options={{ title: 'Modifier le produit' }}
            />
            
            <Stack.Screen 
                name="cart" 
                component={Cart} 
                options={{ title: 'Mon Panier' }}
            />
            
            <Stack.Screen 
                name="newProduct" 
                component={NewProductScreen} 
                options={{ title: 'Nouveau Produit' }}
            />
        </Stack.Navigator>
    );
};

export default Navigation;