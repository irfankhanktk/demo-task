import { CONSTANTS } from './constants';
import moment from 'moment';
import SERVICES from './../services/common-services';
import { mvs } from '../services/metrices';
export const ACTIONS = {
  fetchTodayTasks: () => {
    let merged = [...CONSTANTS.social, ...CONSTANTS.work];
    const todayTasks = merged.filter(x => {
      const diff = moment().diff(x.started_at, 'days');
      return diff === 0;
    });

    // todayTasks.sort((a, b) => {;
    //  let d= moment(a.started_at).diff(b.started_at, 'hours')
    //   console.log('a',a);
    //   console.log('b',b);
    //   console.log('d',d);
    //   return d;
    // }
    // );
    console.log('todayTasks:', todayTasks);
    let new_list = todayTasks.reduce(function (acc, obj) {
      let key = moment(obj['started_at']).format('HH');
      console.log('key::', key);
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, []);
    console.log('new_list::', new_list);

    // let result = Object.keys(new_list).map((key) => ({key_id:key*1, [key]: {social :new_list[key]?.filter(x=>x?.type==='work'),work :new_list[key]?.filter(x=>x?.type==='work')}}));
    // result.sort((a, b) =>a.key_id-b.key_id);
    // result = SERVICES.bblSort(result);
    // console.log('after result:',result);
    // return result;
    return [
      {
        '01:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:100,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:100,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 20 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:100,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '02:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '03:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '04:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '05:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:100,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:100,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '06:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '07:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '08:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '09:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:100,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:100,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '10:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '11:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '12:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '13:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:100,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:100,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '14:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '15:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '16:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '17:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:100,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:100,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '18:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '19:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '20:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '21:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:100,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:100,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '22:00': {
          h:114,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            // { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '23:00': {
          h:114,
          social: [
            // { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            // { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '24:00': {
          h:114,
          social: [
            // { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            // { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
    ]
  },
  fetchCurrentMonthTasks: () => {
    let merged = [...CONSTANTS.social, ...CONSTANTS.work];
    const monthTasks = merged.filter(x => {
      return moment(x.started_at).format('YYYY-MM') === moment().format('YYYY-MM');
    });

    let new_list = monthTasks.sort((a, b) => moment(a.started_at).diff(b.started_at, 'days')).reduce(function (acc, obj) {
      let key = moment(obj['started_at']).format('DD');
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, []);
    const result = Object.keys(new_list).map((key) => ({ [key]: new_list[key] }));
    return [
      {
        '01:00': {
          h:70,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:60,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:60,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 20 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:60,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '02:00': {
          h:70,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:60,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:60,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '03:00': {
          h:70,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:60,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:60,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '04:00': {
          h:70,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:60,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:60,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '05:00': {
          h:70,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:60,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:60,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '06:00': {
          h:70,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:60,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:60,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '07:00': {
          h:70,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:60,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:60,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '08:00': {
          h:70,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:60,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:60,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      }, 
    ]
  },

  fetchCurrentYearTasks: () => {
    // let merged = [...CONSTANTS.social, ...CONSTANTS.work];
    // const monthTasks = merged.filter(x => {
    //   return moment(x.started_at).format('YYYY') === moment().format('YYYY');
    // });

    // let new_list = monthTasks.sort((a, b) => moment(a.started_at).diff(b.started_at, 'months')).reduce(function (acc, obj) {
    //   let key = moment(obj['started_at']).format('MMM');
    //   if (!acc[key]) {
    //     acc[key] = []
    //   }
    //   acc[key].push(obj)
    //   return acc
    // }, []);
    // const result = Object.keys(new_list).map((key) => ({ [key]: new_list[key] }));
    return [
      {
        '01:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:45,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:45,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 20 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:45,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '02:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '03:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '04:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '05:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:45,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:45,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '06:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '07:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '08:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '09:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:45,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:45,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '10:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '11:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '12:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '13:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:45,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:45,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '14:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '15:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '16:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '17:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:45,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:45,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '18:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '19:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '20:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:45,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '21:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 08:30:00', height:45,ended_at: '2022-05-31 09:10:00', title: 'Work A with investor', top: 75 },
          ],
          work: [
            { id: 2, type: 'work', started_at: '2022-05-31 08:40:00', height:45,ended_at: '2022-05-31 09:20:00', title: 'Work A with investor', top: 100 },
          ],
        },
        key_id: '08:00'
      },
      {
        '22:00': {
          h:100,
          social: [
            { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:45,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            // { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '09:00'
      },
      {
        '23:00': {
          h:100,
          social: [
            // { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            // { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
      {
        '24:00': {
          h:100,
          social: [
            // { id: 1, type: 'social', started_at: '2022-05-31 09:00:00', height:100,ended_at: '2022-05-31 09:40:00', title: 'Work 9 with investor', top: 0 },
          ],
          work: [
            // { id: 2, type: 'work', started_at: '2022-05-31 09:40:00', height:100,ended_at: '2022-05-31 10:20:00', title: 'Work 9 with investor', top: 80 },
          ],
        },
        key_id: '10:00'
      },
    ]
  },
};
