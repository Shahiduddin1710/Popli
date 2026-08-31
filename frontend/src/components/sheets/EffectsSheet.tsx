import React from 'react';
import { View, Text, Pressable, ScrollView, Dimensions } from 'react-native';
import { X, Ban, Sparkles, Film, Circle, CloudFog, Gamepad2 } from 'lucide-react-native';

interface EffectsSheetProps {
  onClose: () => void;
  onSelect: (effect: any) => void;
}

const EFFECTS = [
  { id: '1', name: 'None', icon: Ban, bg: '#374151' },
  { id: '2', name: 'Paris', icon: Sparkles, bg: '#FCA5A5' },
  { id: '3', name: 'Vintage', icon: Film, bg: '#FCD34D' },
  { id: '4', name: 'Neon', icon: Circle, bg: '#A855F7' },
  { id: '5', name: 'B&W', icon: Circle, bg: '#9CA3AF' },
  { id: '6', name: 'Blur', icon: CloudFog, bg: '#60A5FA' },
  { id: '7', name: 'Glitch', icon: Gamepad2, bg: '#34D399' },
];

export default function EffectsSheet({ onClose, onSelect }: EffectsSheetProps) {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-[#1A0E2C]/90 backdrop-blur-xl rounded-t-3xl border-t border-white/10 z-50 h-[30%]">
      <View className="flex-row items-center justify-between p-4 border-b border-white/5">
        <View className="w-8" />
        <Text className="text-white text-lg font-bold">Effects</Text>
        <Pressable onPress={onClose} className="w-8 h-8 items-center justify-center bg-white/10 rounded-full">
          <X size={14} color="#FFFFFF" strokeWidth={3} />
        </Pressable>
      </View>

      <View className="flex-1 justify-center">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, gap: 16, alignItems: 'center' }}
        >
          {EFFECTS.map((effect) => (
            <Pressable
              key={effect.id}
              onPress={() => onSelect(effect)}
              className="items-center"
            >
                 <View
                style={{ backgroundColor: effect.bg }}
                className="w-16 h-16 rounded-full items-center justify-center border-2 border-white/20 mb-2"
              >
                <effect.icon size={24} color="#FFFFFF" />
              </View>
              <Text className="text-white text-xs font-medium">{effect.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
