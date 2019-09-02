import * as moment from 'moment';
import { DAYS } from '../shared/models/datepicker.model';
import {IRider} from '../shared/models/rider.model';

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

export const formatCurrentDate = () => {
  const today = new Date();
  const  dd = String(today.getDate()).padStart(2, '0');
  const  mm = String(today.getMonth() + 1).padStart(2, '0');
  const  yyyy = today.getFullYear();
  const formattedDate = yyyy + '-' + mm + '-' + dd;
  return  formattedDate ;
};

export const getRiderList = (data: IRider[]) => {
  return data.map(rider => {
    const {
      picture,
      user: { name },
      batchRecord: {
        batch: { route }
      }
    } = rider;
    return { picture, name, routeName: route.name };
  });
};
