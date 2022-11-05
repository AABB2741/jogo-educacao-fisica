import AsyncStorage from "@react-native-async-storage/async-storage";

function print(txt: string): void {
    let d = new Date();
    console.log(`[Storage] ${txt} às ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
}

export function setItem(key: string, value: any): Promise<void> {
    print(`Definindo dados em ${key}`);
    return AsyncStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string) {
    print(`Pegando dados em ${key}`);
    return AsyncStorage.getItem(key);
}
