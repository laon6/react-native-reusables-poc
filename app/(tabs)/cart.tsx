import { View, Text, Button } from 'react-native'

export default function CartScreen() {
    return (
        <View className='flex-1 px-4'>
            <View className='py-4'>
                <Text className='text-center'>장바구니</Text>
                {/* TODO */}
                <Button title='ButtonTest' />
            </View>
        </View>
    );
}