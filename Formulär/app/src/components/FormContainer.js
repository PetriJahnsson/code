import React, {Component} from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import SingleInput from '../components/SingleInput';
import Select from '../components/Select';
import ValidatedInput from '../components/ValidatedInput';
import DateInput from '../components/DateInput';

const patientList = [];

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patientlist: patientList,
			firstName: '',
      lastName: '',
			personNumber: 0,
      diagnosDate: '',
      treatmentDate: '',
      generalConditionDate: '',
      generalConditionOptions: [],
			generalConditionSelection: '',
			treatmentOptions: [],
			treatmentSelection: '',
			treatmentCode: '',
			diagnosOptions: [],
			diagnosSelection: [],
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handlePersonNumberChange = this.handlePersonNumberChange.bind(this);
    this.handleDiagnosDateChange = this.handleDiagnosDateChange.bind(this);
    this.handleTreatmentDateChange = this.handleTreatmentDateChange.bind(this);
    this.handleGeneralConditionDateChange = this.handleGeneralConditionDateChange.bind(this);
		this.handleTreatmentCodeChange = this.handleTreatmentCodeChange.bind(this);
		this.handleTreatmentSelect = this.handleTreatmentSelect.bind(this);
    this.handleGeneralConditionSelect = this.handleGeneralConditionSelect.bind(this);
		this.handleDiagnosSelection = this.handleDiagnosSelection.bind(this);
	}
	componentDidMount() {
		fetch('./fakeDB.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					firstName: data.firstName,
          lastName: data.lastName,
					personNumber: data.personNumber,
          diagnosDate: data.diagnosDate,
          treatmentDate: data.treatmentDate,
          generalConditionDate: data.generalConditionDate,
          generalConditionOptions: data.generalConditionOptions,
					generalConditionSelection: data.generalConditionSelection,
					treatmentOptions: data.treatmentOptions,
					treatmentSelection: data.treatmentSelection,
					treatmentCode: data.treatmentCode,
					diagnosOptions: data.diagnosOptions,
					diagnosSelection: data.diagnosSelection,
				});
			});
	}
	handleFirstNameChange(e) {
		this.setState({ firstName: e.target.value }, () => console.log('förname:', this.state.firstName));
	}
  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value }, () => console.log('eftername:', this.state.lastName));
	}
	handlePersonNumberChange(e) {
		this.setState({ personNumber: e.target.value }, () => console.log('personnummer', this.state.personNumber));
	}
  handleDiagnosDateChange(e) {
		this.setState({ diagnosDate: e.target.value }, () => console.log('Diagnosdatum', this.state.diagnosDate));
	}
  handleTreatmentDateChange(e) {
		this.setState({ treatmentDate: e.target.value }, () => console.log('Behandlings datum', this.state.treatmentDate));
	}
  handleGeneralConditionDateChange(e) {
		this.setState({ generalConditionDate: e.target.value }, () => console.log('Allmäntillstånds datum', this.state.generalConditionDate));
	}
  handleGeneralConditionSelect(e) {
		this.setState({ generalConditionSelection: e.target.value }, () => console.log('Alläntillstånd', this.state.generalConditionSelection));
	}
	handleTreatmentSelect(e) {
		this.setState({ treatmentSelection: e.target.value }, () => console.log('Behandling', this.state.treatmentSelection));
	}
	handleTreatmentCodeChange(e) {
		this.setState({ treatmentCode: e.target.value }, () => console.log('Operationskod', this.state.treatmentCode));
	}
	handleDiagnosSelection(e) {
		this.setState({ diagnosSelection: [e.target.value] }, () => console.log('diagnosgrund', this.state.diagnosSelection));
	}

	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			firstName: '',
      lastName: '',
      personNumber: '',
			diagnosSelection: [],
			diagnosDate: '',
			treatmentSelection: '',
			treatmentDate: '',
			treatmentCode: '',
			generalConditionSelection: '',
			generalConditionDate: '',
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
			firstName: this.state.firstName,
      lastName: this.state.lastName,
      personNumber: this.state.personNumber,
			diagnosSelection: this.state.diagnosSelection,
			diagnosDate: this.state.diagnosDate,
			treatmentSelection: this.state.treatmentSelection,
			treatmentDate: this.state.treatmentDate,
			treatmentCode: this.state.treatmentCode,
			generalConditionSelection: this.state.generalConditionSelection,
			generalConditionDate: this.state.generalConditionDate,
		};
		let newPatienttList = this.state.patientlist;
		this.setState({patientlist: newPatienttList.concat(formPayload)});
		console.log(this.state.patientlist);
		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
	}
	render() {
		return (
			<div>
			<form className="container form-horizontal" onSubmit={this.handleFormSubmit}>
				<h3>Patient Formulär</h3>
				<SingleInput
					inputType={'text'}
					title={'Förnamn'}
					name={'fornamn'}
					controlFunc={this.handleFirstNameChange}
					content={this.state.firstName}
					placeholder={'Skriv förnamn här'} />
        <SingleInput
  				inputType={'text'}
  				title={'Efternamn'}
  				name={'efternamn'}
  				controlFunc={this.handleLastNameChange}
  				content={this.state.lastName}
  				placeholder={'Skriv efternamn här'} />
        <SingleInput
          inputType={'number'}
          title={'Personnummer'}
          name={'personnummer'}
          controlFunc={this.handlePersonNumberChange}
          content={this.state.personNumber}
          placeholder={'Skriv personnummer med 10 siffror'} />
        <CheckboxOrRadioGroup
    			title={'Grund för Diagnos'}
    			setName={'diagnos'}
    			controlFunc={this.handleDiagnosSelection}
    			type={'radio'}
    			options={this.state.diagnosOptions}
    			selectedOptions={this.state.diagnosSelection} />
        <DateInput
          inputType={'date'}
          title={'Datum för diagnos'}
          name={'diagnosDatum'}
          controlFunc={this.handleDiagnosDateChange}
          content={this.state.diagnosDate}
          placeholder={'Skriv diagnosdatum här. ex. 2018-01-01'} />
				<Select
          title={'Behandling'}
					name={'behandling'}
					placeholder={'Välj behandlingsmetod'}
					controlFunc={this.handleTreatmentSelect}
					options={this.state.treatmentOptions}
					selectedOption={this.state.treatmentSelection} />
        <ValidatedInput
    			inputType={'text'}
    			title={'Operationskod'}
    			name={'operationskod'}
    			controlFunc={this.handleTreatmentCodeChange}
    			content={this.state.treatmentCode}
    			placeholder={'Skriv operationskod här'} />
        <DateInput
          inputType={'date'}
          title={'Datum för behandling'}
          name={'behandlingsDatum'}
          controlFunc={this.handleTreatmentDateChange}
          content={this.state.treatmentDate}
          placeholder={'Skriv behandlingsdatum här. ex. 2018-01-01'} />
        <Select
          title={'Allmäntillstånd'}
  				name={'allmantillstand'}
  				placeholder={'Välj allmäntillstånd/ECOG'}
  				controlFunc={this.handleGeneralConditionSelect}
  				options={this.state.generalConditionOptions}
  				selectedOption={this.state.generalConditionSelection} />
        <DateInput
          inputType={'date'}
          title={'Datum för allmäntillstånd'}
          name={'allmantillstandDatum'}
          controlFunc={this.handleGeneralConditionDateChange}
          content={this.state.generalConditionDate}
          placeholder={'ex. 2018-01-01'} />
				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
			</form>
			<Canmalan patientlista={this.state.patientlist}/>
		</div>
		);
	}
}
class Canmalan extends Component {
	render() {
		let dDate;
		let ecog;
		let max;
		if (this.props.patientlista.length) {
				dDate= this.props.patientlista.map(
					(obj, index) => (<h2 key={index}>{obj.diagnosDate}</h2>)
				);
				ecog = this.props.patientlista.map(
					(obj) => obj.generalConditionSelection
				);
				max = Math.max(...ecog);
		} else {
			dDate = <h1>datum</h1>
		}
		return (
			<div>
				<div>
					Diagnosdatum:	{dDate}
				</div>
				<div>
					Högsta ECOG: {max}
				</div>
			</div>
		);
	}
}

export default FormContainer;
