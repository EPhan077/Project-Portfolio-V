const endpoint = `https://www.boredapi.com/api/activity`;
const button = document.querySelector('.button');
const form = document.querySelector('#form');
const activityWrapper = document.querySelector('.activity');
const typeWrapper = document.querySelector('.type');



const getActivity = async (event) => {
  event.preventDefault();
  const isFree = event.target.children.namedItem('free').checked;
  console.log(isFree);
  let Api = isFree ? `${endpoint}?price=0` : endpoint;

  const response = await fetch(Api);
  const json = await response.json();
  const {activity, type} = json;

  activityWrapper.innerHTML= activity;

}

form.addEventListener("submit", getActivity);
