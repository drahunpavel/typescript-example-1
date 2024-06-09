interface ILogLine<T> {
  timeStamp: Date;
  data: T;
}

type LogLineType<T> = {
  timeStamp: Date;
  data: T;
};

const logLine: ILogLine<{ a: number; b: string }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
    b: "str",
  },
};

const logLine2: LogLineType<{ a: number; b: string }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
    b: "str",
  },
};
