import { CONSTANTS } from './constants';
import  moment  from 'moment';
export const ACTIONS = {
 fetchTodayTasks:()=>{
  let merged=[...CONSTANTS.social, ...CONSTANTS.work];
  const todayTasks =merged.filter(x=>{
   const diff= moment().diff(x.started_at,'days');
   return diff===0;
  });

  let new_list = todayTasks.sort((a,b)=>moment(a.started_at).diff(b.started_at,'hours')).reduce(function (acc, obj) {
    let key = moment(obj['started_at']).format('HH');
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, []);
  const result = Object.keys(new_list).map((key) => ({ [key]: new_list[key] }));
  // console.log('RESULT :',result);
  return result;
 },
 fetchCurrentMonthTasks:()=>{
  let merged=[...CONSTANTS.social, ...CONSTANTS.work];
  const monthTasks =merged.filter(x=>{
   return moment(x.started_at).format('YYYY-MM')===moment().format('YYYY-MM');
  });

  let new_list = monthTasks.sort((a,b)=>moment(a.started_at).diff(b.started_at,'days')).reduce(function (acc, obj) {
    let key = moment(obj['started_at']).format('DD');
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, []);
  const result = Object.keys(new_list).map((key) => ({ [key]: new_list[key] }));
  return result;
 },
 
 fetchCurrentYearTasks:()=>{
  let merged=[...CONSTANTS.social, ...CONSTANTS.work];
  const monthTasks =merged.filter(x=>{
   return moment(x.started_at).format('YYYY')===moment().format('YYYY');
  });

  let new_list = monthTasks.sort((a,b)=>moment(a.started_at).diff(b.started_at,'months')).reduce(function (acc, obj) {
    let key = moment(obj['started_at']).format('MMM');
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, []);
  const result = Object.keys(new_list).map((key) => ({ [key]: new_list[key] }));
  return result;
 },
};
