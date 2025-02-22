global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, question: "What is React?", correctIndex: 0 },
      { id: 2, question: "What is JSX?", correctIndex: 1 }
    ]),
  })
);



test("Test passing", () => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
});
