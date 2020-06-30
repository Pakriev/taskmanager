const TASK_COUNT = 3;

import {createSiteMenuTemplate} from "./components/site-menu";
import {createFilterTemplate} from "./components/filter";
import {createBoardTemplate} from "./components/board";
import {createTaskTemplate} from "./components/task";
import {createTaskEditTemplate} from "./components/task-edit";
import {createLoadMoreButtonTemplate} from "./components/load-more-button";

const render = (container, template, place = `beforeend`) => {
    container.insertAdjacentHTML(place, template);
};

const siteMainEl = document.querySelector('.main');
const siteHeaderMainEl = siteMainEl.querySelector('.main__control');

render(siteHeaderMainEl, createSiteMenuTemplate());
render(siteMainEl, createFilterTemplate());
render(siteMainEl, createBoardTemplate())

const taskListEl = document.querySelector('.board__tasks');
const boardEl = document.querySelector('.board')

render(taskListEl, createTaskEditTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
    render(taskListEl, createTaskTemplate());
}

render(boardEl, createLoadMoreButtonTemplate());



