import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item_list from './ItemList';


const List_His = ({ itemlist }) => (
   
        <View style={styles.container}>
            <FlatList
                data={itemlist}
                renderItem={({ item }) =>
                    <Item_list
                        date={item.ngaygiaodich}
                        code={item.magiaodich}
                        mony={item.sotien}
                        dis={item.ghichu}
                    >
                    </Item_list>}
                keyExtractor={(item, index) => index}
            >
            </FlatList>
        </View>
    
    )

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default List_His;