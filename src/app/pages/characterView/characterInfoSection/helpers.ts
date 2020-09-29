export const calculateAttributeBonus = (value: number) => {
    return Math.round((value - 0.5) / 2 - 5)
}