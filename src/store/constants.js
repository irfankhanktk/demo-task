import moment from "moment";
export const CONSTANTS = {
  social : [
    { id: 1, type: 'social', started_at: moment().format('YYYY-MM-DD hh:mm:ss'),ended_at:moment().add('minutes',10).format('YYYY-MM-DD hh:mm:ss') },
    { id: 2, type: 'social', started_at: moment().format('YYYY-MM-DD hh:mm:ss'),ended_at:moment().add('minutes',10).format('YYYY-MM-DD hh:mm:ss')  },
    { id: 2, type: 'social', started_at: moment().format('YYYY-MM-DD hh:mm:ss'),ended_at:moment().add('minutes',10).format('YYYY-MM-DD hh:mm:ss')  },
    { id: 2, type: 'social', started_at: moment().format('YYYY-MM-DD hh:mm:ss'),ended_at:moment().add('minutes',10).format('YYYY-MM-DD hh:mm:ss')  },
    { id: 3, type: 'social', started_at: '2010-04-17 03:12:15',ended_at:'2010-04-17 03:20:15' },
    { id: 4, type: 'social', started_at: '2022-04-17 04:08:15',ended_at:'2022-04-17 04:20:15' },
    { id: 5, type: 'social', started_at: '2022-04-18 04:07:15',ended_at:'2022-04-18 04:20:15' },
    { id: 6, type: 'social', started_at: '2022-04-17 06:07:20',ended_at:'2022-04-17 06:20:20' },
    { id: 3, type: 'social', started_at: '2022-04-18 03:12:15',ended_at:'2022-04-18 03:20:15' },
    { id: 4, type: 'social', started_at: '2022-04-18 04:08:15',ended_at:'2022-04-18 04:20:15' },
    { id: 5, type: 'social', started_at: '2022-05-17 20:07:15',ended_at:'2022-05-17 20:20:15' },
  ],
  work : [
    { id: 1, type: 'work', started_at: moment().format('YYYY-MM-DD hh:mm:ss'),ended_at:moment().add('minutes',10).format('YYYY-MM-DD hh:mm:ss')  },
    { id: 2, type: 'work', started_at: moment().format('YYYY-MM-DD hh:mm:ss'),ended_at:moment().add('minutes',10).format('YYYY-MM-DD hh:mm:ss')  },
    { id: 3, type: 'work', started_at: '2010-04-17 21:12:15',ended_at:'2010-04-17 21:20:15' },
    { id: 4, type: 'work', started_at: '2022-04-17 21:08:15',ended_at:'2022-04-17 21:20:15' },
    { id: 5, type: 'work', started_at: '2022-05-17 20:07:15',ended_at:'2022-05-17 20:20:15' },
    { id: 6, type: 'work', started_at: '2022-06-17 11:07:20',ended_at:'2022-06-17 11:20:20' },
    { id: 2, type: 'work', started_at: '2022-04-17 02:00:00',ended_at:'2022-04-17 02:20:00' },
    { id: 3, type: 'work', started_at: '2022-04-18 03:12:15',ended_at:'2022-04-18 03:20:15' },
    { id: 4, type: 'work', started_at: '2022-04-18 04:08:15',ended_at:'2022-04-18 04:20:15' },
    { id: 6, type: 'work', started_at: '2022-04-17 11:07:20',ended_at:'2022-04-17 11:20:20' },
    { id: 2, type: 'work', started_at: '2022-04-17 02:00:00',ended_at:'2022-04-17 02:20:00' },
    { id: 6, type: 'work', started_at: '2022-04-18 11:07:20',ended_at:'2022-04-18 11:20:20' },
    { id: 2, type: 'work', started_at: '2022-04-18 02:00:00',ended_at:'2022-04-18 02:20:00' },
    { id: 6, type: 'work', started_at: '2022-04-17 11:07:20',ended_at:'2022-04-17 11:20:20' },
    { id: 2, type: 'work', started_at: '2022-04-17 02:00:00',ended_at:'2022-04-17 02:20:00' },
    { id: 3, type: 'work', started_at: '2010-04-10 03:12:15',ended_at:'2010-04-10 03:20:15' },
    { id: 4, type: 'work', started_at: '2022-04-17 04:08:15',ended_at:'2022-04-17 04:20:15' },
  ],
  

};
