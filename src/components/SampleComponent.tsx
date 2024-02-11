import { Component } from "solid-js";
import { useSampleContext } from "src/context/SampleContext";
import { SampleView } from "src/view/SampleView";

interface SampleComponentProps {
	plugin: SampleView;
}

export const SampleComponent: Component<SampleComponentProps> = (props) => {
	// Initialize the context state and actions for this component
	const [state, actions] = useSampleContext()!;
	// In this top-level component example, we set the plugin in the context state
	// to have access to it in the entire context scope
	actions.setPlugin(props.plugin);

	// Return the component content written in JSX
	return (
		<>
			<div>Sample component content</div>
		</>
	);
};
