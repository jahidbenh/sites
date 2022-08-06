import React from 'react';
import {useState} from 'react';
import ReactCardFlip from 'react-card-flip';

function Skilltemplate(props) {
  const [isFlipped, flip] = useState(false);

  return(
  <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
  <div class="card w-80 bg-base-100 justify-end">
  <div class="card-body">
    <h2 class="card-title justify-center font-lobster text-2xl">{props.title}</h2>
    <ul role="list" class="mt-5 mb-2 space-y-4 ">
      <li class="flex space-x-3 ml-10">
        <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{props.elements[0]}</span>
      </li>
      <li class="flex space-x-3 ml-10">
        <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{props.elements[1]}</span>
      </li>
      <li class="flex space-x-3 ml-10">
        <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{props.elements[2]}</span>
      </li>
    </ul>
    <div class="card-actions justify-center">
      <button class="btn btn-outline btn-secondary" onClick={() => flip(true)}>Details</button>
    </div>
  </div>
</div>

<div class="card w-80 bg-base-100">
  <div class="card-body">
    <h2 class="card-title justify-center font-lobster text-2xl">{props.title}</h2>
    <p class="mt-5 flex flex-row justify-center text-center overflow-hidden font-normal text-gray-500 dark:text-gray-400">
    {props.description}
    </p>
    <div class="card-actions justify-center">
      <button class="btn btn-outline btn-secondary" onClick={() => flip(false)}>List</button>
    </div>
  </div>
</div>
</ReactCardFlip>
)
  }

export default Skilltemplate