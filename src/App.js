import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  // Creating the bubble Sort function
function bubbleSort(array){

  for(let i = 0; i < array.length; i++){

      // Last i elements are already in place
      for (let j = 0; j < ( array.length - i -1 ); j++) {

        // Checking if the item at present iteration
        // is greater than the next iteration
        if (array[j] > array[j+1]) {

        // If the condition is true then swap them
        let temp = array[j]
        array[j] = array[j + 1]
        array[j+1] = temp
        }
      }
    }

  }


  // This is our unsorted array
  let array = [234, 43, 55, 63, 5, 6, 235, 547,100,98,70,900,80,1];
  const unSortedArray = array.map((number,i) =>
      <li key={i}>{number}</li>
    );

  //function calling
  bubbleSort(array)

  //this is our sorted array
  const sortedArray = array.map((number,i) =>
      <li key={i}>{number}</li>
    );

  return (
    <div className='main-div'>
      <div className='bg-dark text-light text-center'>
        <h1 className='display-3 text-light my-3'>Unsorted Array</h1>
        <ul>
          {unSortedArray}
        </ul>
      </div>
      <div className='bg-info text-dark text-center'>
        <h1 className='display-3 text-dark my-3'>Bubble Sorted Array</h1>
        <ul>
          {sortedArray}
        </ul>
      </div>
    </div>
  );
}

export default App;
