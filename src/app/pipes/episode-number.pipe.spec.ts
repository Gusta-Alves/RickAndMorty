import { EpisodeNumberPipe } from './episode-number.pipe';

describe('EpisodeNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new EpisodeNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
