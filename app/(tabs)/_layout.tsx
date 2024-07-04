import { Tabs } from 'expo-router';
import { ModalToggle } from '~/components/ModalToggle';
import { ThemeToggle } from '~/components/ThemeToggle';
import { LayoutPanelLeft } from '~/lib/icons/LayoutPanelLeft';
import { MenuSquare } from '~/lib/icons/MenuSquare';
import { ShoppingCart } from '~/lib/icons/ShoppingCart';
import { Home } from '~/lib/icons/Home';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Cat Shop',
                    tabBarIcon({ color, size }) {
                        return <Home color={color} size={size} />;
                    },
                    headerLeft: () => <ModalToggle />,
                    headerRight: () => <ThemeToggle />,
                }}
            />
            <Tabs.Screen
                name='cart'
                options={{
                    title: 'Cart',
                    tabBarIcon({ color, size }) {
                        return <ShoppingCart color={color} size={size} />;
                    },
                    headerRight: () => <ThemeToggle />,
                }}
            />
            <Tabs.Screen
                name='components'
                options={{
                    title: 'Components',
                    tabBarIcon({ color, size }) {
                        return <MenuSquare color={color} size={size} />;
                    },
                    headerRight: () => <ThemeToggle />,
                }}
            />
        </Tabs>
    );
}