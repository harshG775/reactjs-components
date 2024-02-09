"use client"
import { useState } from "react";


const stepsData = [
    { id: "Step 1", step:1, name: "Personal Details",},
    { id: "Step 2", step:2, name: "Who would you like to insure?", },
    { id: "Step 3", step:3, name: "Tell us where you live",},
    { id: "Step 4", step:4, name: "Any of the insured member have a medical history?",},
];
function StepsComponent({stepsData,currentStep,handleStep}) {
	return (
		<nav aria-label="Progress">
			<ol className="space-y-4 md:flex md:space-y-0 md:space-x-8">
            {stepsData.map((step) => (
                <li key={step.name} className="md:flex-1">
                    {step.step <= currentStep ? (
                        <div onClick={()=>handleStep(step.step)} className=" cursor-pointer group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" >
                            <span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">
                                {step.id}
                            </span>
                            <span className="text-sm font-medium">
                                {step.name}
                            </span>
                        </div>
                    ) : (
                        <div onClick={()=>handleStep(step.step)} className=" cursor-pointer group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" >
                            <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">
                                {step.id}
                            </span>
                            <span className="text-sm font-medium">
                                {step.name}
                            </span>
                        </div>
                    )}
                </li>
            ))}
			</ol>
		</nav>
	);
}

function HealthStep_1() {
    return (
        <h1>step 1</h1>
    )
}
function HealthStep_2() {
    return (
        <h1>step 2</h1>
    )
}
function HealthStep_3() {
    return (
        <h1>step 3</h1>
    )
}
function HealthStep_4() {
    return (
        <h1>step 4</h1>
    )
}

export default function Steps() {
	const [currentStep, setCurrentStep] = useState(1);
	const totalSteps = 4;
	const handlePreviousStep = () => {
		if (currentStep <= 1) {
			return;
		}
		setCurrentStep((prev) => prev - 1);
	};
	const handleNextStep = () => {
		if (currentStep >= totalSteps) {
			return;
		}
		setCurrentStep((prev) => prev + 1);
	};
    const handleStep = (step) => {
        setCurrentStep(step);
    }
	return (
		<div>
			<h1>HealthSteps</h1>
			<StepsComponent
				stepsData={stepsData}
				currentStep={currentStep}
				handleStep={handleStep}
			/>
			{currentStep === 1 ? (
				<HealthStep_1 />
			) : currentStep === 2 ? (
				<HealthStep_2 />
			) : currentStep === 3 ? (
				<HealthStep_3 />
			) : (
				<HealthStep_4 />
			)}
			<div className="flex gap-2 p-2">
				<button
					onClick={handlePreviousStep}
					className="capitalize rounded-lg px-8 py-2 bg-primary text-white"
				>
					back
				</button>
				<button
					onClick={handleNextStep}
					className="capitalize rounded-lg px-8 py-2 bg-primary text-white"
				>
					next
				</button>
			</div>
		</div>
	);
}
