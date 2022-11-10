import { useState } from "react";
import {
    View,
    ScrollView,
    TouchableOpacity,
    Modal,
    Text,
    TextInput,
    FlatList
} from "react-native";
import Header from "../../components/Header";
import { CaretLeft, X, Check } from "phosphor-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PlayParamList } from "../../@types/navigation";
import { RouteProp } from "@react-navigation/native";

import Font from "../../components/Font";
import Category from "./Category";

import styles from "./styles";
import levels from "../../utils/levels";
import theme from "../../utils/theme";
import Word from "./Word";

interface GameProps {
    navigation: NativeStackNavigationProp<PlayParamList, "Game">;
    route: RouteProp<{ params: {id: number, season: "summer" | "falls" | "winter" | "spring"} }>;
}

export default function Game({ navigation, route }: GameProps) {
    const level = levels.find(l => l.id == route.params.id);

    if (!level) {
        navigation.goBack();
        return null;
    }

    return (
        <View style={styles.container}>
            <Header
                title={`${level.id + 1}. ${level.question}`}
                leftOptions={[{
                    icon: <CaretLeft/>,
                    onPress: navigation.goBack
                }]}
                hideFloat
            />
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <Font name="seasons" style={styles.question}>{level.question}</Font>
                <FlatList
                    horizontal
                    data={level.words.sort((a, b) => a.length > b.length ? -1 : 1)}
                    style={{ marginVertical: 20 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <Word
                            index={index}
                            word={item}
                            totalPercent={level.words.reduce((ac, v) => ac + v.length, 0)}
                        />
                    )}
                />
                <Category
                    subtitle="Palavras já encontradas"
                >

                </Category>
            </ScrollView>
        </View>
    );
}
