import { EpisodeNumberPipe } from './episode-number.pipe';

describe(EpisodeNumberPipe.name, () => {
  it('create an instance', () => {
    const pipe = new EpisodeNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it(`#${EpisodeNumberPipe.prototype.transform.name} should get number at the final string when called with pipe text`, () => {
    const episodeNumberPipe = new EpisodeNumberPipe();
    const result = episodeNumberPipe.transform('https://rickandmortyapi.com/api/episode/27');
    expect(result).toEqual('27');
  })
});
