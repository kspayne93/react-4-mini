import React from 'react';

export default function Route3(props) {
   const words = props.match.params.words;


   return (
      <div>
         Route 3 here ----- {words}!
      </div>
   )
}