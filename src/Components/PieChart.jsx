import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { PieChart } from 'react-native-svg-charts'

class PieChartExample extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedSlice: {
        label: 'Onion',
        value: 15,
      },
      labelWidth: 0,
    }
  }
  render() {
    const { labelWidth, selectedSlice } = this.state
    const { label, value } = selectedSlice
    const keys = ['Onion', 'Tomato', 'Strawberry', 'Celery']
    const values = [15, 25, 35, 45, 55]
    const colors = [
      'rgba(77, 180, 116, 1)',
      'rgba(68, 160, 103, 1)',
      'rgba(97, 188, 132, 1)',
      'rgba(123, 199, 152, 1)',
    ]
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: { fill: colors[index] },
        arc: {
          outerRadius: 180 + values[index] + '%',
          padAngle: label === key ? 0.05 : 0,
        },
        onPress: () =>
          this.setState({
            selectedSlice: { label: key, value: values[index] },
          }),
      }
    })
    const deviceWidth = Dimensions.get('window').width

    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <PieChart
          style={{ height: 200 }}
          outerRadius={'40%'}
          innerRadius={'45%'}
          data={data}
        />
        <Text
          onLayout={({
            nativeEvent: {
              layout: { width },
            },
          }) => {
            this.setState({ labelWidth: width })
          }}
          style={{
            position: 'absolute',
            top: 82,
            left: deviceWidth / 2 - labelWidth / 2 - 18,
            textAlign: 'center',
          }}
        >
          {`${label} \n ${value}`}
        </Text>
      </View>
    )
  }
}

export default PieChartExample
