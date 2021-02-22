import GetPosition from '.';

describe('GetPosition', () => {
  it('Should return right positions', () => {
    expect(GetPosition()).toEqual(['right', 'top']);
    expect(GetPosition('top-start')).toEqual(['left', 'bottom']);
    expect(GetPosition('top-end')).toEqual(['right', 'bottom']);
    expect(GetPosition('bottom-start')).toEqual(['left', 'top']);
    expect(GetPosition('bottom-end')).toEqual(['right', 'top']);
  });
});
