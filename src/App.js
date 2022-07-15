import React, { Component } from 'react';
import MaterialEditorForm from './components/MaterialEditorForm/MaterialEditorForm';
import MaterialsList from './components/MaterialsList/MaterialsList';
import * as API from "./services/api";

class App extends Component {

  state = {
    materials: [],
    isLoading: false,
    error: null
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true })
        const materials = await API.getMaterials();
          this.setState({ materials, isLoading: false })
    } catch (error) {
      this.setState({ error: true, isLoading: false })
      console.log(error);
    }
  }

  addMaterial = async ( values ) => {
    try {
        const material = await API.addMaterial(values);
          this.setState(state => (
            { 
              materials: [...state.materials, material],
            }))
    } catch (error) {
      this.setState({ error: true})
      console.log(error);
    }
  }

  deleteMaterial = async(id) => {
    try {
      await API.deleteMaterials(id);
      this.setState(state => ({ materials: state.materials.filter(item => item.id !== id) }));
    } catch (error) {
      this.setState({ error: true })
      console.log(error);
    }
  }

  updateMaterials = async ( fields ) => {
    try {
      const materialUpdated = await API.updateMaterials(fields);
      this.setState(state => ({ 
        materials: state.materials.map(material => material.id === fields.id ?
          materialUpdated : material
        )
      }))
    } catch (error) {
      this.setState({ error: true })
      console.log(error);
    }
  }

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <div>
        <MaterialEditorForm   
          onSubmit={this.addMaterial}
        />
        {error && <p>Ooops, something gone wrong...</p>}
        {isLoading ? 
          <div>LOADING...</div> 
          : <MaterialsList 
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterials}
            items={materials}
          />
        }
      </div>
    );
  }
}

export default App;