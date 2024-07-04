import { FlashList } from '@shopify/flash-list';
import { Stack, useRouter, Link } from 'expo-router';
import * as React from 'react';
import { Alert, ScrollView, View, useWindowDimensions, Image, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '~/components/ui/table';
import { Text } from '~/components/ui/text';
import { ChevronDown } from '~/lib/icons/ChevronDown';
import { cn } from '~/lib/utils';
import { Input } from '~/components/ui/input';
import { useScrollToTop } from '@react-navigation/native';
import { COMPONENTS } from '~/lib/constants';

const INVOICES = [
    {
        invoice: 'INV001',
        paymentStatus: 'Paid',
        totalAmount: '$250.00',
        paymentMethod: 'Credit Card',
    },
];

const MIN_COLUMN_WIDTHS = [120, 120, 100, 120];

export default function Example() {
    // page TODO
    // const router = useRouter();
    // router.push("/path");

    const { width } = useWindowDimensions();
    const insets = useSafeAreaInsets();

    const columnWidths = React.useMemo(() => {
        return MIN_COLUMN_WIDTHS.map((minWidth) => {
            const evenWidth = width / MIN_COLUMN_WIDTHS.length;
            return evenWidth > minWidth ? evenWidth : minWidth;
        });
    }, [width]);

    //
    const [search, setSearch] = React.useState('');
    const ref = React.useRef(null);
    useScrollToTop(ref);

    const data = !search
        ? COMPONENTS
        : COMPONENTS.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

    return (
        <View className='flex-1 px-4'>
            <View className='py-4'>
                <Input
                    placeholder='Search...'
                    clearButtonMode='always'
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            <ScrollView
                role='list'
                className='web:grid gap-3 p-6 md:w-[400px] lg:w-[500px] web:lg:grid-cols-[.75fr_1fr]'
            >
                <View role='listitem' className='web:row-span-3 gap-4'>

                    <Link href='/category' asChild>
                        <Pressable>
                            <View className='flex web:select-none place-items-center items-center flex-col justify-end rounded-md web:bg-gradient-to-b web:from-muted/50 web:to-muted native:border native:border-border p-6 web:no-underline web:outline-none web:focus:shadow-md web:focus:shadow-foreground/5'>

                                <Text className='pb-2 text-lg native:text-2xl font-medium text-center'>
                                    카테고리1
                                </Text>
                                <Image className='w-[180px] h-[180px] pb-2 rounded-lg' source={require('./../../assets/images/cat-food.png')} />
                                {/* <Text className='text-sm native:text-base leading-tight text-muted-foreground text-center'>
                            아이템1
                        </Text> */}
                            </View>
                        </Pressable>
                    </Link>

                    <Link href='/category' asChild>
                        <Pressable>
                            <View className='flex web:select-none place-items-center items-center flex-col justify-end rounded-md web:bg-gradient-to-b web:from-muted/50 web:to-muted native:border native:border-border p-6 web:no-underline web:outline-none web:focus:shadow-md web:focus:shadow-foreground/5'>

                                <Text className='pb-2 text-lg native:text-2xl font-medium text-center'>
                                    카테고리2
                                </Text>
                                <Image className='w-[180px] h-[180px] pb-2 rounded-lg' source={require('./../../assets/images/cat-health.png')} />
                                {/* <Text className='text-sm native:text-base leading-tight text-muted-foreground text-center'>
                            아이템1
                        </Text> */}
                            </View>
                        </Pressable>
                    </Link>

                </View>


            </ScrollView>

        </View>
    );
}