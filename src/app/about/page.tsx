import React from 'react'

export default function About() {
  return (
    <div className='max-w-6xl mx-auto space-y-4'>
      <h1 className='text-2xl font-medium text-amber-600'>About</h1>
      <p>Welcome to IMDb's most powerful title search. Using the options below you can combine a variety of the types of information we catalog to create extremely specific searches. Want Canadian horror movies of the 1970s that at least 100 IMDb users have given an average rating above a 6? You can find them here.</p>
      <p> Remember, all the fields below are optional (though you should fill out at least one so there's something to search for). Please note that when you're given the option of a range (two date boxes for release date, or two boxes for min/max number of votes), you do not need to fill out both boxes. Filling out the 'min' box will give you results of things larger/after; filling out the 'max' box will give you results of things smaller/before.</p>
      <p>Note: An alternate way to submit your search is to press your keyboard "Enter" key either after clicking on a check box (while there's a dotted border around it), or after setting focus on a text field (such as "Number of Votes")</p>



    </div>
  )
}
