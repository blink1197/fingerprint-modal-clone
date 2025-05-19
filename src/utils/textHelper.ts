export const getOrdinalWord = (n: number): string => {
    const ordinals: { [key: number]: string } = {
        1: "first",
        2: "second",
        3: "third",
        4: "fourth",
        5: "fifth",
        6: "sixth",
        7: "seventh",
        8: "eighth",
        9: "ninth",
        10: "tenth",
        11: "eleventh",
        12: "twelfth",
        13: "thirteenth",
        14: "fourteenth",
        15: "fifteenth",
        16: "sixteenth",
        17: "seventeenth",
        18: "eighteenth",
        19: "nineteenth",
        20: "twentieth",
    };

    if (ordinals[n]) return ordinals[n];

    const tens = Math.floor(n / 10);
    const ones = n % 10;

    const tensWord = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    }[tens];

    const onesWord = ordinals[ones];

    if (tensWord && onesWord) {
        return `${tensWord}-${onesWord}`;
    } else if (tensWord) {
        return `${tensWord}th`;
    }

    return `${n}th`; // fallback
}