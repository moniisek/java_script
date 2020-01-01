import React from 'react'
import SaveBar from './SaveBar'
import TextInput from './TextInput'

const FormPage = (props) => {
  const {
      addChange,
      discardChanges,
      formView,
      formEdit,
      hasChanged,
      saveChanges,
    } = props;


  if (!formEdit || !formView) {
    return <span>LOADING</span>
  }

  return (
    <div>
        <h1>{formView.title}</h1>
        {/* Title */}
        <TextInput
          handleChange={(newValue) => addChange('title', newValue)}
          title="Title"
          value={formEdit.title}
        />
        {/* Field */}
        <TextInput
          handleChange={(newValue) => addChange('field', newValue)}
          title="Random Field"
          value={formEdit.field}
        />
        <SaveBar
          onDiscardAction={discardChanges}
          open={hasChanged}
          onSaveAction={saveChanges}
        />
      </div>
  )
}

export default FormPage;
