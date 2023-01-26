import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { IEpisodePage } from 'src/app/store/episodes/episodePage.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService extends BaseService {

  getEpisodes(url: string){
    // this.store.dispatch(setStateEpisodesLoading({isLoading: true}));
    return this.onGet<IEpisodePage>(url)
        .pipe(
            // finalize(() => {
                // this.store.dispatch(setStateCharactersLoading({isLoading: false}));
            // })
        );
  }

}
