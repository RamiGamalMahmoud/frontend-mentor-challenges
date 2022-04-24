import { activities } from "./data.js";
import {durations} from './data.js';

const durationsElement = document.querySelectorAll(".durations .duration");
const timeframes = document.querySelectorAll(".tiemframes .timeframe");

function loadData(duration = 'daily') {
  for (const timeframe of timeframes) {
    let frameName = timeframe.querySelector('.title').textContent;
    
    
    let activity = getActivity(frameName);

    let current = timeframe.querySelector('.current');
    let previous = timeframe.querySelector('.previous');

    
    if (activity){
      previous.textContent = `Last ${durations[duration]} - ${activity.timeframes[duration].previous}hrs`;
      current.textContent = `${activity.timeframes[duration].current}hrs`;
    }
  }
};

function getActivity(frameName) {
  let result = null;

  activities.forEach((activity) => {
    if (frameName == activity.title) {
      result = activity;
    }
  });

  return result;
}

for (const duration of durationsElement) {
  let durationName = duration.textContent;
  duration.addEventListener("click", () => {

    selectedDurationChanged();
    duration.classList.toggle('selected-duration');
    loadData(durationName.toLowerCase());
    
    console.log(durationName.toLowerCase());
  });
}

function selectedDurationChanged(){
  for (const duration of durationsElement) {
    duration.classList.remove('selected-duration');
  }
}

loadData();