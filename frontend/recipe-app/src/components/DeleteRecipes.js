import React from "react";
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel} from '@fortawesome/free-solid-svg-icons';
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
   
  
    
  


const DeleteRecipes=()=>{
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/recipe/${id}`)
          .then(() => {
            alert('Recipe deleted successfully');
            navigate('/');
          })
          .catch(error => {
            console.error('Error deleting recipe:', error);
          });
      };
    return(
        <div className="Container">
            <div className="Delete-overlay">
                <h2>Delete Recipe</h2>
                <FontAwesomeIcon icon={faCancel}/>
              
                <img src={require('../images/deleted.svg')} alt="Delete Image" className="delete-image" />
                <p>Are you sure to delete this recipe?</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
export default DeleteRecipes;