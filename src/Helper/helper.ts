export const binaryJosepus = (numberOfPerson: number) => {
  const numberOfPersonBinary = numberOfPerson.toString(2);
  const firstChar = numberOfPersonBinary.slice(0, 1);
  const remainingChar = numberOfPersonBinary.substring(1);
  return parseInt(remainingChar + firstChar, 2);
};

export function josephus(
  setPersonDead: React.Dispatch<React.SetStateAction<number[]>>,
  k: number,
  index: number
): any {
  const deadPool: number[] = [];
  const history: string[] = [];
  const recursion = (persons: number[], k: number, index: number): number => {
    if (persons.length === 1) {
      return persons[0];
    }
    //if person after that is not dead then kill him
    const temp = persons[index] || 1;
    index = (index + k) % persons.length;

    if (index > -1) {
      const d = persons.splice(index, 1);
      history.push(`${temp} kills ${d[0]}`);
      deadPool.push(d[0]);
    }

    return recursion(persons, k, index);
  };

  const getPersons = (index: number): number[] => {
    let temp = [];
    for (let i = 1; i <= index; i++) temp.push(i);
    return temp;
  };
  const persons = getPersons(index);

  const survivor = recursion(persons, k, index);
  setPersonDead(deadPool);
  console.log(history);
  return survivor;
}
