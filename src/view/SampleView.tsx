import { ItemView, WorkspaceLeaf } from "obsidian";
import { render } from "solid-js/web";
import { SampleComponent } from "src/components/SampleComponent";
import { SampleProvider } from "src/context/SampleContext";
import MyPlugin from "src/main";

export const SAMPLE_VIEW_TYPE = "sample-view";

export class SampleView extends ItemView {
	plugin: MyPlugin;

	constructor(leaf: WorkspaceLeaf, plugin: MyPlugin) {
		super(leaf);
		this.plugin = plugin;
	}
	getViewType() {
		return "sample-view";
	}
	getDisplayText() {
		return "Sample View";
	}
	getIcon() {
		return "dice";
	}
	async onOpen() {
		console.log("View opened", this.contentEl);
		const { contentEl } = this;
		render(
			() => (
				<SampleProvider>
					<SampleComponent plugin={this.plugin} />
				</SampleProvider>
			),
			contentEl
		);
	}
	async onClose() {
		console.log("View closed", this.contentEl);
	}
}
