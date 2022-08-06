
import React, { useState } from 'react'

function Hobbies() {
  const [hobbies, setHobbies] = useState(['hobby1','hobby2','hobby3']);

  const updateHobbies = (p) => {
    setHobbies(p)
  };

  switch (hobbies) {
    case (['hobby1','hobby2','hobby3']):
      return (
        <div>
      <div class="flex w-screen h-screen">
	      <button class="relative flex w-1/3 items-center justify-center transition duration-500 bg-primary" onClick={updateHobbies(['hobby1'])} >
          <span class=" opacity-0 transition duration-300">A</span>
        </button>
	      <button class="relative flex w-1/3 items-center justify-center transition duration-500 bg-secondary" onClick={updateHobbies(['hobby2'])}>
          <span class=" opacity-0 transition duration-300">B</span>
        </button>
	      <button class="relative flex w-1/3 items-center justify-center transition duration-500 bg-accent" onClick={updateHobbies(['hobby3'])}>
          <span class=" opacity-0 transition duration-300">C</span>
        </button>
      </div>
    </div>
      );
      case (['hobby1']):
        return(
          <div>
      <div class="flex w-screen h-screen">
	      <button class="relative flex w-8/12 items-center justify-center transition duration-500 bg-primary" onClick={updateHobbies(['hobby1','hobby2','hobby3'])}>
          <span class=" opacity-100 transition duration-300 delay-300">A</span>
        </button>
	      <button class="relative flex w-2/12 items-center justify-center transition duration-500 bg-secondary" onClick={updateHobbies(['hobby2'])}>
          <span class=" opacity-0 transition duration-300">B</span>
        </button>
	      <button class="relative flex w-2/12 items-center justify-center transition duration-500 bg-accent" onClick={updateHobbies(['hobby3'])}>
          <span class=" opacity-0 transition duration-300">C</span>
        </button>
      </div>
    </div>
        );
      case (['hobby2']):
        return(
          <div>
      <div class="flex w-screen h-screen">
	      <button class="relative flex w-2/12 items-center justify-center transition duration-500 bg-primary" onClick={updateHobbies(['hobby1'])}>
          <span class=" opacity-0 transition duration-300">A</span>
        </button>
	      <button class="relative flex w-8/12 items-center justify-center transition duration-500 bg-secondary" onClick={updateHobbies(['hobby1','hobby2','hobby3'])}>
          <span class=" opacity-100 transition duration-300 delay-300">B</span>
        </button>
	      <button class="relative flex w-2/12 items-center justify-center transition duration-500 bg-accent" onClick={updateHobbies(['hobby3'])}>
          <span class=" opacity-0 transition duration-300">C</span>
        </button>
      </div>
    </div>
        );
      case (['hobby3']):
        return(
          <div>
      <div class="flex w-screen h-screen">
	      <button class="relative flex w-2/12 items-center justify-center transition duration-500 bg-primary" onClick={updateHobbies(['hobby1'])}>
          <span class=" opacity-0 transition duration-300">A</span>
        </button>
	      <button class="relative flex w-2/12 items-center justify-center transition duration-500 bg-secondary" onClick={updateHobbies(['hobby2'])}>
          <span class=" opacity-0 transition duration-300">B</span>
        </button>
	      <button class="relative flex w-8/12 items-center justify-center transition duration-500 bg-accent" onClick={updateHobbies(['hobby1','hobby2','hobby3'])}>
          <span class=" opacity-100 transition duration-300 delay-300">C</span>
        </button>
      </div>
    </div>
        )
    default:
        return(
          <div>
      <div class="flex w-screen h-screen">
	      <button class="relative flex w-1/3 items-center justify-center transition duration-500 bg-primary" onClick={updateHobbies(['hobby1'])}>
          <span class=" opacity-100 transition duration-300">{hobbies}</span>
        </button>
	      <button class="relative flex w-1/3 items-center justify-center transition duration-500 bg-secondary" onClick={updateHobbies(['hobby2'])}>
          <span class=" opacity-0 transition duration-300">B</span>
        </button>
	      <button class="relative flex w-1/3 items-center justify-center transition duration-500 bg-accent" onClick={updateHobbies(['hobby3'])}>
          <span class=" opacity-0 transition duration-300">C</span>
        </button>
      </div>
    </div>
        )
  }
}

export default Hobbies