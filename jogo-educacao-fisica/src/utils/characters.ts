import normalize from "./normalize";

interface Props {
    text: string;
    chars?: string;
}

export const valid = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function carve({ text, chars = valid }: Props) {
    let res = "";

    for (let c of text.split("")) {
        if (chars.toLowerCase().includes(normalize(c).toLowerCase()) && normalize(c)) {
            res += c;
        }
    }

    return res;
}
