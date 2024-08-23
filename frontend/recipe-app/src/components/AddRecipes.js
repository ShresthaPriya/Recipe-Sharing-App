import React from 'react'
import CookNavbar from './CookNavbar';
import '../styles/AddRecipes.css';



const AddRecipes =()=>{
    return(
        <><div>
         
        
      <CookNavbar/>
      
      
    </div>
        <div className='container'>
            <h2>Add Recipe</h2>
            <br></br>
        <div className='add-recipe-form'>
            <form>
                <label> Recipe Name   </label>
                    <input
                    type = "text"
                    required/>
                    <div className='dropdown'>
                   <label>Category</label>
  <button onclick="myFunction()" class="dropbtn">Select Category</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Breakfast</a>
    <a href="#">Lunch</a>
    <a href="#">Dinner</a>
  
</div>
                    </div>
                    <label> Cooking Time  </label>
                    <input
                    type = "text"
                    required/>
                    <label> No.of Serving   </label>
                    <input
                    type = "text"
                    required/>
                    <label> Ingredients  </label>
                    <input
                    type = "textarea"
                    required/>
                    <label> Direction  </label>
                    <input
                    type = "text"
                    required/>
                    <label> Image   </label>
                    <input
                    type = "text"
                    required/>
                    <div className='action-button'>
                        <button>Cancel</button>
                        <button>Upload</button>
                    </div>
            
            </form>
        </div>
        </div>
        </>
    )

}

export default AddRecipes;