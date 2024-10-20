const addIcon= document.querySelector('.add-icon')
const removeIcon= document.querySelector('.remove-icon')
const crossIcon= document.querySelector('.cross-icon')

const textArea= document.querySelector('textarea')
const addNotesBtn= document.querySelector('.add-notes')
const noteAppcontainer=document.querySelector('.note-app-container')

// addNotesBtn.addEventListener('click', ()=>{

//     textArea.style.display='block'
//     crossIcon.style.display='block'


// })

textArea.style.display = 'none';
crossIcon.style.display = 'none';
  addIcon.style.display='none'
      removeIcon.style.display='none'


noteAppcontainer.addEventListener('click',(event)=>{

   if(event.target.classList.contains('add-notes')){

    
      const newTextAreaContainer=document.querySelector('.textarea-container').cloneNode(true)

      console.log(newTextAreaContainer);
      
      newTextAreaContainer.querySelector('.note-box').style.display='block'
      newTextAreaContainer.querySelector('.add-icon').style.display='block'

      newTextAreaContainer.querySelector('.remove-icon').style.display='block'

      newTextAreaContainer.querySelector('.cross-icon').style.display='block'

      newTextAreaContainer.querySelector('.cross-icon').style.marginTop='0.5rem'
         newTextAreaContainer.querySelector('.cross-icon').style.padding='10pxrem'
            newTextAreaContainer.querySelector('.cross-icon').style.display='flex'
               newTextAreaContainer.querySelector('.cross-icon').style.justifyContent='center'
                  newTextAreaContainer.querySelector('.cross-icon').style.alignItems='center'



      noteAppcontainer.appendChild(newTextAreaContainer)




      


   } 


   else if (event.target.classList.contains('cross-icon')) {
      // Remove the specific container that was clicked
      const containerToRemove = event.target.closest('.textarea-container');
      containerToRemove.remove();
  }

})