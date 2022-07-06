import React, { useState } from 'react';
import { getDinosaurs, postDinosaur } from '../services/services';



const EditForm = ({ updateDinosaur, setEditFormPopup, setDinosaurs, selectedDino }) => {

    const [formData, setFormData] = useState({
        _id: selectedDino._id,
        name: selectedDino.name,
        description: selectedDino.description,
        diet: selectedDino.diet,
        weight: selectedDino.weight,
        length: selectedDino.length,
        found_in: selectedDino.found_in,
        image: selectedDino.image
    })

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // postDinosaur(formData).then((data) => {
        //     addDinosaur(data);
        // }).then(getDinosaurs().then((allDinosaurs) => {
        //     setDinosaurs(allDinosaurs);
        // }))
        const name = formData.name;
        const description = formData.description;
        const diet = formData.diet;
        const weight = parseFloat(formData.weight);
        const length = parseFloat(formData.length);
        const found_in = formData.found_in;

        // const editedVersion = { ...selectedDino, name, description, diet, weight, length, found_in }

        const editedVersion = {
            _id: selectedDino._id,
            name: name,
            description: description,
            diet: diet,
            weight: weight,
            length: length,
            found_in: found_in,
            image: selectedDino.image
        }

        console.log(editedVersion);

        updateDinosaur(editedVersion);
        // Reset the form input values   
        setFormData({
            name: "",
            description: "",
            diet: "",
            weight: "",
            length: "",
            found_in: "",
            image: "An Image"
        });
        setEditFormPopup(false);
    }


    return (
        <form onSubmit={onSubmit} id="flashcard-form" >
            <h2 className="formheader">Edit Dinosaur</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name} />
            </div>
            <div className="formWrap">
                <label htmlFor="description">Description:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description} />
            </div>
            <div className="formWrap">
                <label htmlFor="diet">Diet:</label>
                <input
                    onChange={onChange}
                    type="diet"
                    id="diet"
                    name="diet"
                    value={formData.diet} />
            </div>
            <div className="formWrap">
                <label htmlFor="weight">Weight:</label>
                <input
                    onChange={onChange}
                    type="weight"
                    id="weight"
                    name="weight"
                    value={formData.weight} />
            </div>
            <div className="formWrap">
                <label htmlFor="length">Length:</label>
                <input
                    onChange={onChange}
                    type="length"
                    id="length"
                    name="length"
                    value={formData.length} />
            </div>
            <div className="formWrap">
                <label htmlFor="found_in">Found In:</label>
                <input
                    onChange={onChange}
                    type="found_in"
                    id="found_in"
                    name="found_in"
                    value={formData.found_in} />
            </div>
            {/* <div className="formWrap">
        <label htmlFor="image">Image:</label>
        <input
          onChange={onChange}
          type="image"
          id="image"
          name="image"
          value={formData.image} />
      </div> */}

            <input type="submit" value="Save" id="save" className="formheader" />
        </form>
    )
}

export default EditForm;