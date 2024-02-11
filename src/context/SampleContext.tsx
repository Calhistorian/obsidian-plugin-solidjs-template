import { createContext, useContext, type ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";
import { SampleView } from "src/view/SampleView";

// Set up the context type
interface ISampleState {
	plugin: SampleView | null;
}

// Set up the actions type
interface ISampleActions {
	setPlugin: (plugin: SampleView) => void;
}

// Initialize the default state and actions
const defaultState: ISampleState = {
	plugin: null,
};
const defaultActions: ISampleActions = {
	setPlugin: (plugin) => {
		defaultState.plugin = plugin;
	},
};

// Set up the context value type
type SampleContextValue = [ISampleState, ISampleActions] | undefined;

// Initialize the default context value
const defaultContextValue: SampleContextValue = [defaultState, defaultActions];

// Create the context
const SampleContext = createContext<SampleContextValue>(defaultContextValue);

// Set up the provider
export const SampleProvider: ParentComponent = (props) => {
	// Initialize the store for state management
	const [state, setState] = createStore<ISampleState>(defaultState);

	// Initialize the actions
	const actions = {
		// Add actions to work with state here
		setPlugin: (plugin: SampleView) => {
			setState("plugin", plugin);
		},
	};

	// Set up the context value
	const contextValue: SampleContextValue = [state, actions];

	// Return the provider with the context value
	return (
		<SampleContext.Provider value={contextValue}>
			{props.children}
		</SampleContext.Provider>
	);
};

// Set up the hook to use the context as a singleton through your plugin
export const useSampleContext = () =>
	useContext(SampleContext) as SampleContextValue;
