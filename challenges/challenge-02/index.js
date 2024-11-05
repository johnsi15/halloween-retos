function battleHorde(zombies, humans) {
  const acc = { z: 0, h: 0 }

  for (let i = 0; i < zombies.length; i++) {
    const powerZ = +zombies[i] + acc.z
    const powerH = +humans[i] + acc.h

    acc.z = 0
    acc.h = 0

    if (powerZ >= powerH) {
      const dif = powerZ - powerH
      acc.z = dif
    } else if (powerH >= powerZ) {
      const dif = powerH - powerZ
      acc.h = dif
    }
  }

  if (acc.z === acc.h) return 'x'

  return acc.z > acc.h ? `${acc.z}z` : `${acc.h}h`
}

const result = battleHorde('242', '334')
console.log({ result }) // 2h
