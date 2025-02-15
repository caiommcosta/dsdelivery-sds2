import { useIsFocused, useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused(); //false para true e vice-versa

  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
    .then(response => setOrders(response.data))
    .catch(() => Alert.alert('Houve um erro ao buscar os pedidos'))
    .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', {
      order
    });
  }
  
  return (
    <>
    <Header />
    <ScrollView style={styles.container}>
        {isLoading ? (
          <Text style={styles.text}>Buscando Pedidos...</Text>
        ) : (
          orders.map(order => (
            <TouchableWithoutFeedback
            key={order.id}
            onPress={() => handleOnPress(order)}
            >
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          ))
        )}
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  text: {
    marginTop: '10%',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.24,
    color: '#9E9E9E',
    fontFamily: 'OpenSans_400Regular',
    textAlign: 'center'
  }
});

export default Orders;