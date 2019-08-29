import * as moment from 'moment';
import { DAYS } from '../shared/models/datepicker.model';

export const createDialogOptions = (data, width = '512px', _class = 'small-modal-panel-class') => {
  return {
    width, panelClass: _class,
    data
  };
};

export const filterDateParameters = (dateFilter) => {
  const startDate = dateFilter.startDate.from ? dateFilter.startDate.from : null;
  const endDate = dateFilter.endDate.to ? dateFilter.endDate.to : null;
  return { startDate, endDate };
};

export const formatDate = (day: number, dateFormat = 'DD MMMM, YYYY'): string => moment().day(day).format(dateFormat);

export const getStartAndEndDate = (day = moment().day()): string[] => {
  let startDate: string;
  let endDate: string;
  const { FRIDAY, MONDAY, LAST_FRIDAY, LAST_MONDAY } = DAYS;
  if (day > FRIDAY) {
    startDate = formatDate(MONDAY);
    endDate = formatDate(FRIDAY);
  } else {
    startDate = formatDate(LAST_MONDAY);
    endDate = formatDate(LAST_FRIDAY);
  }
  return [startDate, endDate];
};


