function convertArrayToObject(data: string[][]): any[] {
  const header = data.shift();

  const resultado = data.map((row, indx) => {
    const reduced = header?.reduce(
      (
        accumulator: { [x: string]: any },
        currentValue: string,
        currentIndex: number
      ) => {
        accumulator[currentValue] = row[currentIndex];
        return accumulator;
      },
      {}
    );

    reduced && (reduced['row'] = indx + 2);
    return reduced;
  });

  return resultado;
}
