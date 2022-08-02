import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Container from '../components/Container';
import OrderCardSelectable from '../components/OrderCardSelectable';
import ImageInput from '../components/ImageInput';
import Dropdown from '../components/Dropdown';

export default function () {
  const [items, setItems] = useState([]);
  const [video, setVideo] = useState();
  const [invoiceImage, setInvoiceImage] = useState();
  const [packageImage, setPackageImage] = useState();

  const labels = [
    'Review Order Items',
    'Print the invoice and take photo',
    'Take photo of package',
    'Final Step',
  ];

  const isButtonEnabled = !!(invoiceImage && packageImage);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>
            Follow the steps for submitting the order to BVC Logistics
          </Text>
          <View style={styles.detailContainer}>
            <View style={styles.progressBar}>
              <View
                style={{
                  position: 'absolute',
                  borderColor: '#8B5704',
                  borderStyle: 'dashed',
                  borderWidth: 1,
                  height: '100%',
                  top: 50,
                  left: 25,
                }}
              />
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>1</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.stepHeader}>Review Order Items</Text>
                  <OrderCardSelectable
                    id="1"
                    items={items}
                    setItems={setItems}
                  />
                  <OrderCardSelectable
                    id="2"
                    items={items}
                    setItems={setItems}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.circle, { marginTop: 15 }]}>
                  <Text style={styles.circleText}>2</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.stepHeader}>
                    Upload the video of removal of package
                  </Text>
                  <ImageInput
                    style={{ marginTop: 20 }}
                    image={invoiceImage}
                    setImage={setInvoiceImage}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={[styles.circle, { marginTop: 5 }]}>
                  <Text style={styles.circleText}>3</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.stepHeader}>
                    Select the refund status
                  </Text>
                  <Dropdown
                    style={{ marginTop: 20 }}
                    placeholder="Select The refund Status"
                    items={[
                      'Can Be Refunded',
                      "Can't Be Refunded Send Back The Items",
                    ]}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={[styles.circle, { marginTop: 5 }]}>
                  <Text style={styles.circleText}>4</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.stepHeader}>
                    Select the non-refund reason
                  </Text>
                  <Dropdown
                    style={{ marginTop: 20 }}
                    placeholder="Select The Reason Of Non-Refund"
                    items={[
                      'Item Is Broken',
                      'Item Seal Is Broken For PAMP COIN',
                    ]}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>5</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.stepHeader}>
                    Items your are returning back
                  </Text>
                  <OrderCardSelectable
                    id="1"
                    items={items}
                    setItems={setItems}
                  />
                  <OrderCardSelectable
                    id="2"
                    items={items}
                    setItems={setItems}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.circle, { marginTop: 15 }]}>
                  <Text style={styles.circleText}>6</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.stepHeader}>
                    Print the invoice and keep in the package and take photo
                  </Text>
                  <ImageInput
                    style={{ marginTop: 20 }}
                    image={invoiceImage}
                    setImage={setInvoiceImage}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.circle, { marginTop: 5 }]}>
                  <Text style={styles.circleText}>7</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.stepHeader}>
                    Take the photo of package
                  </Text>
                  <ImageInput
                    style={{ marginTop: 20 }}
                    image={packageImage}
                    setImage={setPackageImage}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  zIndex: 105,
                  backgroundColor: '#FFFDFA',
                }}
              >
                <View style={[styles.circle, { marginTop: 0 }]}>
                  <Text style={styles.circleText}>8</Text>
                </View>
                <View style={{ flexDirection: 'column', marginTop: -5 }}>
                  <Text style={styles.stepHeader}>Return to customer !!</Text>
                  <TouchableOpacity
                    title="Place Order"
                    style={[
                      styles.button,
                      isButtonEnabled && { backgroundColor: '#8B5704' },
                    ]}
                  >
                    <Text style={{ color: 'white', fontSize: 20 }}>
                      Place Order
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: '#8B5704',
    fontSize: 20,
    marginTop: 10,
  },
  detailContainer: {
    marginTop: 25,
  },
  progressBar: {},
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#8B5704',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    zIndex: 100,
    backgroundColor: '#FFFDFA',
  },
  circleText: {
    color: '#8B5704',
    fontWeight: 'bold',
    color: '#8B5704',
    fontSize: 30,
  },
  stepHeader: {
    color: '#8B5704',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15,
  },
  button: {
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    backgroundColor: '#DDB070',
    paddingHorizontal: 90,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
