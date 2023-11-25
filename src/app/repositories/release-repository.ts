/* eslint-disable semi */
import Release from 'app/entities/release';

export default interface ReleaseRepository {
   showAll(): Promise<Release[] | null>
}