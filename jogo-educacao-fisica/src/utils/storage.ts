import AsyncStorage from "@react-native-async-storage/async-storage";

function print(txt: string): void {
    let d = new Date();
    console.log(`[Storage ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}] ${txt}`);
}

export function setItem(key: string, value: object): Promise<void> {
    print(`Definindo dados em ${key}`);
    console.log(value);
    return AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function getItem(key: string) {
    print(`Pegando dados em ${key}`);
    let response = await AsyncStorage.getItem(key);
    return JSON.parse(response ?? "{}");
}
