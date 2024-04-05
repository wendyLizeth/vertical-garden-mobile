import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Constants from 'expo-constants'

// Chart components
import StackedAreaExample from '../Components/StackedAreaChart'
import ProgressCircleExample from '../Components/ProgressCircle'
import PieChartExample from '../Components/PieChart'

class Historical extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          month: new Date(2015, 0, 1),
          apples: 3840,
          bananas: 1920,
          cherries: 960,
          dates: 400,
        },
        {
          month: new Date(2015, 1, 1),
          apples: 1600,
          bananas: 1440,
          cherries: 960,
          dates: 400,
        },
        {
          month: new Date(2015, 2, 1),
          apples: 640,
          bananas: 960,
          cherries: 3640,
          dates: 400,
        },
        {
          month: new Date(2015, 3, 1),
          apples: 3320,
          bananas: 480,
          cherries: 640,
          dates: 400,
        },
      ],
      keys: ['apples', 'bananas', 'cherries', 'dates'],
    }
  }

  render() {
    return (
      <ScrollView
        style={{
          paddingTop: Constants.statusBarHeight + 62,
          marginHorizontal: 16,
        }}
      >
        <View style={{ marginTop: 22 }}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>
            StackedAreaChart
          </Text>
          <StackedAreaExample data={this.state.data} keys={this.state.keys} />
        </View>
        <View style={{ marginTop: 22 }}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>
            Progress Circle
          </Text>
          <ProgressCircleExample />
        </View>
        <View style={{ marginTop: 22 }}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Pie Chart</Text>
          <PieChartExample />
        </View>
      </ScrollView>
    )
  }
}

export default Historical
