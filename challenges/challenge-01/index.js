function createMagicPotion(potions, target) {
  const seen = {}

  for (let i = 0; i < potions.length; i++) {
    const complement = target - potions[i]

    if (complement in seen) {
      return [seen[complement], i]
    }

    seen[potions[i]] = i
  }

  return undefined
}

const potions = [4, 5, 6, 2]
const goal = 8

const result = createMagicPotion(potions, goal) // [2, 3]
console.log({ result })
