import GameSavingLoader from '../GameSavingLoader';

test('Проверка чтения файла сохранения', async () => {
  const trueResult = {
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
  }
  const result = await GameSavingLoader.load();
  expect(result).toStrictEqual(trueResult);
});
