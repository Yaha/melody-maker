import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();

import "./assets/scss/styles.scss";
import { h, app } from "hyperapp";
import { TrackList } from "./components/TrackList";
import { Settings } from "./components/Settings";

const state = {};

const actions = {};

const view = (state, actions) => (
	<div class="paper container">
		<h1>Melody Maker</h1>
		<div class="row">
			<div class="col-4 col">
				<button>Add</button>
				<button>Save</button>
				<button>Download</button>
			</div>
			<div class="col-8 col">
				<input
					id="projectName"
					class="input-block"
					type="text"
					placeholder="Name of your project"
				/>
			</div>
		</div>
		<Settings />
		<TrackList />
	</div>
);

app(state, actions, view, document.body);
