import React, { useState } from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import DeliveryData from './DeliveryData';
import { Typography } from '@material-ui/core';

function FormRegister({onSubmit, validateCPF}) {
	const [currentStep, setCurrentStep] = useState(0);

	function currentRegister(currentStep) {
		switch(currentStep) {
				case 0: 
					return <UserData/>
				case 1:
					return <PersonalData onSubmit={onSubmit} validateCPF={validateCPF} />
				case 2:
					return <DeliveryData/>
					default:
						return <Typography>Erro ao selecionar formulário</Typography>
		}
	}

  return(
		<>
		{currentRegister(currentStep)}
		</>
	);
}

export default FormRegister;