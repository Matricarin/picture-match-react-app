import { type Card } from "../models/Card";

const images = [
    "😺", "🐶", "🐸", "🐻", "🦊",
    "🐼", "🐨", "🐯", "🦁", "🐮",
    "🐷", "🐵", "🐔", "🐧", "🐦",
    "🦄", "🐝", "🦋", "🐌", "🐞",
    "🐙", "🦀", "🐠", "🐬", "🐳",
    "🌸", "🌻", "🌹", "🌵", "🍀",
    "🍎", "🍊", "🍋", "🍉", "🍓",
    "🍒", "🥝", "🍍", "🥕", "🌽",
    "⚽", "🏀", "🎸", "🚗", "🚀",
    "⭐", "🌙", "☀️", "🔥", "❄️",
];

export function createDeck() : Card[] {
    const cards: Card[] = [];

    images.forEach((image, index) => {
        cards.push({
            id:index * 2,
            image,
            isOpen:false,
            isMatched:false
        });

        cards.push({
            id:index * 2 + 1,
            image,
            isOpen: false,
            isMatched:false
        })
    })

    return shuffle(cards);
}

function shuffle<T>(array: T[]) : T[]{
    const result = [...array];

    for(let i = result.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}