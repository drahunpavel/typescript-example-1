// Встроенные джинерики

const abig: Array<number> = [1, 2, 3];

async function test() {
  // с помощью джинерика <number> управляем типом, который используем внутри
  // по умолчанию тип prbig - unknown
  const prbig = await new Promise<number>((resolve, reject) => {
    resolve(1);
  });
}

const check: Record<string, boolean> = {
  drive: true,
  app: false,
};


