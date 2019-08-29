import * as moment from 'moment';
import { getStartAndEndDate } from '../helpers';

describe('Helpers', () => {
  describe('getStartAndEndDate', () => {
    it('should return start and end dates based on the day (Weekend)', () => {
      const today = moment('09/07/2019').day();
      const [startDate, endDate] = getStartAndEndDate(today);
      expect(startDate).toEqual('02 September, 2019');
      expect(endDate).toEqual('06 September, 2019');
    });

    it('should return start and end dates based on the day (Weekday)', () => {
      const today = moment('09/05/2019').day();
      const [startDate, endDate] = getStartAndEndDate(today);
      expect(startDate).toEqual('26 August, 2019');
      expect(endDate).toEqual('30 August, 2019');
    });
  });
});
