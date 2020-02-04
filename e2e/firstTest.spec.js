describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('Adding Todo Item should work!', async () => {
    const text = 'a new Todo Item';
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();
    await expect(element(by.text(text).withAncestor(by.id('todoList')))).toBeVisible();
  });

  it('Completing Todo Item should work!', async () => {
    const text = 'a new Todo Item';
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();

    await element(by.id('completeButton')).multiTap(2);
    await expect(element(by.id('completed').and(by.text(text)).withAncestor(by.id('todoList')))).toBeVisible();
  });

  it('Deleting Todo Item should work!', async () => {
    const text = 'a new Todo Item';
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();

    await element(by.id('deleteButton')).multiTap(2);
    await expect(element(by.text(text).withAncestor(by.id('todoList')))).toBeNotVisible();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });
  //
  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
