import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon
          sf="square.grid.2x2"
          drawable="ic_dashboard"
        />
        <Label>Dashboard</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="analytic">
        <Icon
          sf="chart.line.uptrend.xyaxis"
          drawable="ic_analytics"
        />
        <Label>Analytics</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="insights">
        <Icon
          sf="brain"
          drawable="ic_insights"
        />
        <Label>AI Insights</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="history">
        <Icon
          sf="clock"
          drawable="ic_history"
        />
        <Label>History</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon
          sf="person"
          drawable="ic_profile"
        />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}