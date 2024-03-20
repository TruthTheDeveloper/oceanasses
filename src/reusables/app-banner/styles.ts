import { StyleSheet } from "react-native";

export const bannerPills = StyleSheet.create({
   bannerContainer: {
        height: 150,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
      },
      bannerContent:{
        padding: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
      }
})