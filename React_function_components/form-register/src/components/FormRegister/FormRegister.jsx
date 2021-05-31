import React, { useState } from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import DeliveryData from './DeliveryData';

function FormRegister({onSubmit, validateCPF}) {
	const [currentStep, setCurrentStep] = useState(0);

	const form = [
		<UserData onSubmit={nextStep}/>, 
		<PersonalData onSubmit={nextStep} validateCPF={validateCPF} />, 
		<DeliveryData onSubmit={onSubmit} />, 
	];

	function nextStep() {
		setCurrentStep(currentStep + 1);
	}

  return(
		<>
		{form[currentStep]}
		</>
	);
}

export default FormRegister;