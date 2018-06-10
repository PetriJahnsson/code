import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Values } from 'redux-form-website-template';

let AddForm = props => {
    const {
        handleSubmit,
        pristine,
        submitting,
    } = props;
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Artikel Namn</label>
                <div>
                    <Field name="namn" component="input" type="text" placeholder="Artikel Namn" />
                </div>
            </div>
            <div>
                <label>Pris</label>
                <div>
                    <Field name="pris" component="input" type="number" placeholder="Pris" />
                </div>
            </div>
            <div>
                <label>Bild Url</label>
                <div>
                    <Field name="bild" component="input" type="text" placeholder="Bild Url" />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Lägg Till</button>
            </div>
        </form>
            <Values form="selectingFormValues" />
        </div>
    );
};

AddForm = reduxForm({
  form: 'selectingFormValues', 
})(AddForm);

const selector = formValueSelector('selectingFormValues');
AddForm = connect(state => {
  const namnValue = selector(state, 'namn');
  const prisValue = selector(state, 'pris');
  const bildValue = selector(state, 'bild');
  return {
    namnValue,
    prisValue,
    bildValue,
  };
})(AddForm);

export default AddForm;

/*function AddForm(props) {
    return (
        <form >
        <Field model="props.namn">
          <label>Artikel Namn</label>
          <input type="text" />
        </Field>

        <Field model="props.pris">
          <label>Pris</label>
          <input type="number" />
        </Field>
            
        <Field model="props.bild">
          <label>Bild Url</label>
          <input type="text" />
        </Field>

        <button type="submit">
          Lägg Till
        </button>
      </form>
    )  
}
const selector = (state)=>({namn: state.namn, pris: state.pris, bild: state.bild});
export default connect(selector)(AddForm);*/