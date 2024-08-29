import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AllRecipesHomeCook.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const AllRecipesCookHome=({recipes})=> {
  const [records, setRecords] = useState([]);
  const [editingId, setEditingId]= useState(null);
  
  const fetchRecipes = async()=>{
    try{
      const response = await fetch('http://localhost:4000/recipe');
      const data = await response.json();
      console.log("Fetched recipe data:", data);

      if (Array.isArray(data)){
        setRecords(data);

      }else{
        console.log("Expected an array but got:", data);
        setRecords([]);
      }
    }catch(error){
      console.log("Failed to fetch data", error);
    }
  };

  useEffect(()=>{
    fetchRecipes();
  }, []);

  const onSubmit = async (data) => {
    try {
      const url = editingId ? `http://localhost:3001/submissions/${editingId}` :
        "http://localhost:3001/submit-form"
      const method = editingId ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        alert("Data submitted successfully")

        reset();
        setEditingId(null);
        fetchSubmissions();
      } else {
        alert("Error in submitting data")
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    reset(record);
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/submissions/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        console.log("Record Deleted successfully.")
        fetchSubmissions()  //calling the fetchsubmission function so that the deleted data will be removed from the display as well without having to refresh
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <h3>All Recipes</h3>
      <div className="trending-recipes">
        <div className="recipe-card">
          <img src={require('../images/salmon.webp')} alt="Delicious Recipe 1" className="recipe-image" />
          <h3>Easy Baked Salmon</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-1')}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
        <div className="recipe-card">
          <img src={require('../images/gingerbread-cupcakes.jpg')} alt="Gingerbread Cupcake" className="recipe-image" />
          <h3>Gingerbread Cupcake</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => handleEdit(record)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe(record.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
        <div className="recipe-card">
          <img src={require('../images/hash-brown-omelet.webp')} alt="Hash Brown and Bacon Omelet" className="recipe-image" />
          <h3>Hash Brown and Bacon Omelet</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-3')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-3')}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
        <div className="recipe-card">
          <img src={require('../images/salmon.webp')} alt="Delicious Recipe 1" className="recipe-image" />
          <h3>Easy Baked Salmon</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-4')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-4')}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
        <div className="recipe-card">
          <img src={require('../images/salmon.webp')} alt="Delicious Recipe 1" className="recipe-image" />
          <h3>Easy Baked Salmon</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-5')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-5')}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
        <div className="recipe-card">
          <img src={require('../images/salmon.webp')} alt="Delicious Recipe 1" className="recipe-image" />
          <h3>Easy Baked Salmon</h3>
          <div className='info'>
            <p>102 ordered</p>
            <p>102 reviews</p>
            <p>4.5 ★</p>
          </div>
          <div className="recipe-actions">
            <button onClick={() => editRecipe('recipe-id-6')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => deleteRecipe('recipe-id-6')}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllRecipesCookHome;
