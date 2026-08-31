import React from 'react';
import { View, ViewProps, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const TAB_BAR_HEIGHT = 58;

interface SafeScreenProps extends ViewProps {
  children: React.ReactNode;
  withBottomTabs?: boolean;
  edgeToEdgeTop?: boolean;
  edgeToEdgeBottom?: boolean;
}

export const SafeScreen = ({
  children,
  withBottomTabs = false,
  edgeToEdgeTop = false,
  edgeToEdgeBottom = false,
  style,
  className,
  ...rest
}: SafeScreenProps) => {
  const insets = useSafeAreaInsets();

  const paddingTop = edgeToEdgeTop ? 0 : Math.max(insets.top, 16);

  let paddingBottom = edgeToEdgeBottom ? 0 : Math.max(insets.bottom, 16);

  if (withBottomTabs) {
    paddingBottom += TAB_BAR_HEIGHT;
  }

  return (
    <View
      className={`flex-1 ${className || ''}`}
      style={[
        { paddingTop, paddingBottom },
        style
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};
