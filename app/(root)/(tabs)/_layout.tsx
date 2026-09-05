import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from 'expo-router/unstable-native-tabs';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <NativeTabs>

      <NativeTabs.Trigger name="index">
        <Icon
          src={
            <VectorIcon
              family={MaterialCommunityIcons}
              name="view-dashboard"
            />
          }
        />

        <Label>Dashboard</Label>
      </NativeTabs.Trigger>

    <NativeTabs.Trigger name="analytic">
    <Icon
    src={
        <VectorIcon
        family={MaterialCommunityIcons}
        name="chart-line"
        />
        }
    />
    <Label>Analytics</Label>
    </NativeTabs.Trigger>

    <NativeTabs.Trigger name="insights">
      <Icon
        src={
          <VectorIcon
            family={MaterialCommunityIcons}
            name="brain"
          />
        }
      />

      <Label>AI Insights</Label>
    </NativeTabs.Trigger>

    <NativeTabs.Trigger name="history">
    <Icon
    src={
        <VectorIcon
        family={MaterialCommunityIcons}
        name="history"
        />
        }
    />
    <Label>History</Label>
    </NativeTabs.Trigger>

    <NativeTabs.Trigger name="profile">
     <Icon
        src={
            <VectorIcon
            family={MaterialCommunityIcons}
            name="cog"
            />
            }
        />
        <Label>History</Label>
    </NativeTabs.Trigger>

    </NativeTabs>
  );
}