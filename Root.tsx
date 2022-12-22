// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import App from './src/app/App';
import {
  RenderPassReport,
  PerformanceProfiler,
  LogLevel,
} from '@shopify/react-native-performance';

function Root() {
  const onReportPrepared = React.useCallback((report: RenderPassReport) => {
    console.log('report', report);
    return report;
  }, []);
  return (
    <PerformanceProfiler
      onReportPrepared={onReportPrepared}
      logLevel={LogLevel.Debug}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PerformanceProfiler>
  );
}

export default Root;
